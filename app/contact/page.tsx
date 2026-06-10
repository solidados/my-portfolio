"use client";

import React, { type FC, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useRecaptcha } from '@/hooks/useRecaptcha';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT_INFO, type IContactInfoItem } from '@/data/contact.data';

const Contact: FC = () => {
  const [ form, setForm ] = useState<Record<string, string>>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'ratelimit'>('idle')
  
  const { executeRecaptcha, consentStatus } = useRecaptcha();
  
  const formLoadTimeRef = useRef<number | null>(null)
  
  useEffect(() => {
    formLoadTimeRef.current = Date.now()
  }, []);
  
  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }
  
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    if (honeypot.trim() !== '') {
      setIsSubmitting(false)
      setSubmitStatus('error')
      console.warn('⚠️ Form validation failed: honeypot')
      return
    }
    
    if (formLoadTimeRef.current !== null) {
      const elapsed = Date.now() - formLoadTimeRef.current
      if (elapsed < 2000) {
        setIsSubmitting(false)
        setSubmitStatus('error')
        console.warn('⚠️ Form validation failed: try later')
        return
      }
    }
    
    const captchaToken = await executeRecaptcha('contact_form_submit')
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${form.firstname} ${form.lastname}`.trim(),
        email: form.email,
        message: `Service: ${form.service || '—'}\nPhone: ${form.phone || '—'}\n\n${form.message}`,
        website: honeypot,
        captchaToken: captchaToken ?? '',
      }),
    })
    
    setIsSubmitting(false)
    
    if (res.status === 429) {
      setSubmitStatus('ratelimit')
    } else if (res.ok) {
      setSubmitStatus('success')
      setForm({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' })
      setHoneypot('')
      formLoadTimeRef.current = Date.now()
    } else {
      setSubmitStatus('error')
    }
  }
  
  const getNoticeText = () => {
    if (consentStatus === 'accepted') {
      return (
        <>
          This site is protected by reCAPTCHA and the Google{' '}
          <a
            href="https://policies.google.com/privacy?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/terms?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Terms of Service
          </a>{' '}
          apply.
        </>
      )
    }
    return 'Spam protection is active with limited tracking due to your cookie preferences.'
  }
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[2rem]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent select-none">Let&apos;s work together</h3>
              <p className="text-white/60 select-none">
                Have a project in mind or interested to hire me? – Fill in the form and I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First name"
                  value={form.firstname}
                  onChange={(e) => updateField('firstname', e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={form.lastname}
                  onChange={(e) => updateField('lastname', e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </div>
              
              <Select value={form.service} onValueChange={(v) => updateField('service', v)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Service select</SelectLabel>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="fullstack">Full-Stack Development</SelectItem>
                    <SelectItem value="performance">Performance & Architecture</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Textarea
                className="h-[120px] w-full"
                placeholder="Your message here..."
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                required
              />
              
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                suppressHydrationWarning
              />
              
              <div className="flex flex-col gap-2">
                <Button
                  size="md"
                  className="md:max-w-40"
                  type="submit"
                  disabled={consentStatus !== 'accepted' || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
                <p className="text-xs text-white/40" suppressHydrationWarning>
                  {getNoticeText()}
                </p>
              </div>
              
              {submitStatus === 'success' && (
                <span className="text-accent text-sm">✓ Message sent! I'll get back to you soon.</span>
              )}
              {submitStatus === 'error' && (
                <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
              )}
              {submitStatus === 'ratelimit' && (
                <span className="text-yellow-400 text-sm">Too many requests. Please wait a while and try again.</span>
              )}
            </form>
          </div>
          
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {CONTACT_INFO.map((item: IContactInfoItem) => (
                <li key={item.id} className="flex items-center gap-6">
                  {item.link ? (
                    <a
                      href={item.link}
                      {...(item.link.startsWith('https') && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                      <div className="text-2xl xl:text-3xl">{item.icon}</div>
                    </a>
                  ) : (
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-2xl xl:text-3xl">{item.icon}</div>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-white/60 select-none">{item.title.en}</h3>
                    <p className="text-[1.1rem]">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
