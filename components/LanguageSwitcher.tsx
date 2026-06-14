"use client";

import { useEffect,  useRef, useState } from 'react';

import { useLocale } from '@/context/LocaleContext';
import type { Locale } from '@/types/i18n.types';

const LOCALES: { value: Locale, label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' }
];

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const [ open, setOpen ] = useState<boolean>(false);
  const localeElemRef = useRef<HTMLDivElement>(null);
  
  useEffect( () => {
    const handler = (e: MouseEvent) => {
      if (localeElemRef.current && !localeElemRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
    }, [] );
  
  const current = LOCALES.find(l => l.value === locale);
  
  return (
    <div ref={localeElemRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors"
      >
        <span className="text-accent font-semibold">{current?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {open && (
        <ul className="absolute top-full mt-2 right-0 bg-[#1c1c22] border border-white/10 rounded-md overflow-hidden z-50 min-w-[60px]">
          {LOCALES.map(({value, label}) => (
            <li key={value}>
              <button
                type="button"
                onClick={() => {
                  setLocale( value );
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5 ${
                  locale === value ? 'text-accent font-semibold' : 'text-white/60'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
