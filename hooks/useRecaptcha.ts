import { useCallback } from "react";
import { useConsent } from "@/lib/consent/ConsentProvider";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: VoidFunction) => void;
      execute: (siteKey: string, options?: {action: string}) => Promise<string>;
    }
  }
}

export const useRecaptcha = () => {
  const { consentStatus } = useConsent();
  
  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (consentStatus === 'rejected') {
        console.log('reCAPTCHA skipped: cookies rejected');
        return null;
      }
      
      if (consentStatus === null) {
        console.log('reCAPTCHA skipped: no consent decision');
        return null;
      }
      
      const siteKey: string | null = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || null;
      
      if (!siteKey) {
        console.error('reCAPTCHA site key is not configured');
        return null;
      }
      
      if (typeof window === 'undefined' || !window.grecaptcha) {
        console.error('reCAPTCHA script is not loaded');
        return null;
      }
      
      try {
        return await new Promise<string>((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(siteKey, { action });
              resolve(token);
            }
            catch ( error ) {
              reject(error);
            }
          })
        })
      } catch ( error ) {
        console.error('reCAPTCHA execution error:', error);
        return null;
      }
    },
    [consentStatus]
  )
  
  return { executeRecaptcha, consentStatus };
};
