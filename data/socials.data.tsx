import { JSX } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

export interface ISocialItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

// Replaces hooks/useSocLink.ts — static data doesn't need to be a hook
export const SOCIALS: ISocialItem[] = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    path: 'https://github.com/solidados',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/solidados/',
  },
  {
    icon: <FaTelegram />,
    label: 'Telegram',
    path: 'https://t.me/solidados',
  },
];
