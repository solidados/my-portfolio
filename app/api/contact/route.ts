import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 1000;

interface ContactBody {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
  captchaToken?: string;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body: ContactBody = await req.json();
  const { name, email, message, website, captchaToken } = body;
  
  if (website && website.trim() !== '') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  const lastRequest = rateLimitMap.get(ip) ?? 0;
  const now = Date.now();
  
  if (lastRequest && now - lastRequest < RATE_LIMIT_MS) {
    const retryAfter = Math.ceil((RATE_LIMIT_MS - (now - lastRequest)) / 1000);
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfter} seconds.`},
      { status: 429 }
    )
  }
  
  if (captchaToken && captchaToken.trim() !== '') {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const threshold = parseFloat( process.env.RECAPTCHA_SCORE_THRESHOLD ?? '0.5' );
    
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method : 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body   : new URLSearchParams( {
          secret  : secretKey ?? '',
          response: captchaToken,
          remoteip: ip,
        }),
      });
    
    const verifyData = await verifyRes.json();
    
    if ( !verifyData.success ) {
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
    }
    
    if ( verifyData.action !== 'contact_form_submit' ) {
      return NextResponse.json({ error: 'Invalid captcha action' }, { status: 400 });
    }
    
    if (verifyData.score < threshold) {
      return NextResponse.json({ error: 'Captcha score too low' }, { status: 400 });
    }
    
    console.info('✅ reCAPTCHA verified', { score: verifyData.score });
  } else {
    console.info('ℹ️ Form submitted without reCAPTCHA (cookies rejected)');
  }
  
  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <hello@solidados.uk>',
    to: 'pavel.konyakhin@gmail.com',
    subject: `Portfolio - New message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });
  
  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
  
  rateLimitMap.set(ip, now);
  
  return NextResponse.json({ success: true, message: 'Message sent successfully' });
}
