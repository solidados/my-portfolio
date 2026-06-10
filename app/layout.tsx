import { ReactNode } from "react";
import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";

import { ConsentProvider } from '@/lib/consent/ConsentProvider'
import { CookieBanner } from '@/components/CookieBanner'
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Curriculum Vitae - Pavel Konyakhin",
  description: "CV for Developer position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
      <ConsentProvider recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <CookieBanner />
      </ConsentProvider>
      </body>
    </html>
  );
}
