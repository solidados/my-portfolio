export type ConsentStatus = 'accepted' | 'rejected' | null;

interface ConsentData {
  status: NonNullable<ConsentStatus>;
  timestamp: number;
}

const CONSENT_KEY = 'portfolio_cookie_consent';
const CONSENT_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    
    const data: ConsentData = JSON.parse(stored);
    
    if (Date.now() - data.timestamp > CONSENT_TTL_MS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return data.status;
  }
  catch {
    return null;
  }
};

export const setConsentStatus = ( status: NonNullable<ConsentStatus> ): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ status, timestamp: Date.now() }));
  }
  catch (error) {
    console.error('Failed to save consent status:', error)
  }
};
export const clearConsent = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CONSENT_KEY);
};

export const hasConsentDecision = (): boolean => getConsentStatus() !== null;
