"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Script from 'next/script';

import { getConsentStatus, setConsentStatus } from './storage';
import type { ConsentStatus } from './storage';

interface ConsentContextType {
  consentStatus: ConsentStatus
  setConsent: (status: NonNullable<ConsentStatus>) => void
}

interface ConsentProviderProps {
  children: React.ReactNode;
  recaptchaSiteKey?: string;
}

const ConsentContext = createContext<ConsentContextType | null>(null);

export const ConsentProvider = ({ children, recaptchaSiteKey }: ConsentProviderProps) => {
  const [consentStatusState, setConsentStatusState] = useState<ConsentStatus>(null);
  
  const setConsent = useCallback((status: NonNullable<ConsentStatus>) => {
    setConsentStatus(status)
    setConsentStatusState(status)
  }, []);
  
  const shouldLoadScripts = consentStatusState === 'accepted';
  
  useEffect(() => {
    setConsentStatusState(getConsentStatus())
  }, [])
  
  return (
    <ConsentContext.Provider value={{ consentStatus: consentStatusState, setConsent }}>
      {shouldLoadScripts && recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useConsent must be used within ConsentProvider');
  return context;
}
