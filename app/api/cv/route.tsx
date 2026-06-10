import { NextResponse } from "next/server";
import { renderToBuffer } from '@react-pdf/renderer'
import CvDocument from '@/lib/cv/CvDocument'

export async function GET() {
  const buffer = await renderToBuffer(<CvDocument />)
  
  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cv-pavel-konyakhin.pdf"',
    },
  })
}
