"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import type { Locale } from '@/types/i18n.types';

const STORAGE_KEY = 'portfolio:locale';
const DEFAULT_LOCALE: Locale = 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export const LocaleProvider = ({children}: { children: ReactNode }) => {
  const [ locale, setLocaleState ] = useState<Locale>(DEFAULT_LOCALE);
  
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && (['en', 'ru'] as Locale[]).includes(stored)) {
        setLocaleState(stored);
      }
    } catch { /* localStorage unavailable */ }
    
  }, [])
  
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch { /* localStorage unavailable */ }
  }, [])
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
