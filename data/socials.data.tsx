import { JSX } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

export interface ISocialItem {
  id: string;
  icon: JSX.Element;
  label: string;
  path: string;
}

export const SOCIALS: ISocialItem[] = [
  {
    id: 'github',
    icon: <FaGithub />,
    label: 'GitHub',
    path: 'https://github.com/solidados',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/solidados/',
  },
  {
    id: 'telegram',
    icon: <FaTelegram />,
    label: 'Telegram',
    path: 'https://t.me/solidados',
  },
];
