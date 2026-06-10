"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from '@/lib/consent/ConsentProvider';

export const CookieBanner = () => {
  const { consentStatus, setConsent } = useConsent();
  return (
    <AnimatePresence>
      {consentStatus === null && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 w-[20rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-5 flex flex-col gap-4"
          >
            <p className="text-sm text-white/80 leading-relaxed">
              This site uses cookies for spam protection via{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
              Google reCAPTCHA
            </a>
            . If you reject cookies, the contact form will be unavailable.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setConsent('rejected')}
                className="flex-1 py-2 px-4 rounded-lg border border-white/20 text-sm text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
                aria-label="Reject cookies"
              >
                Reject
              </button>
              
              <button
                onClick={() => setConsent('accepted')}
                className="flex-1 py-2 px-4 rounded-lg bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-all duration-200"
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
