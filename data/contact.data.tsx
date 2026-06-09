import { JSX } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

import type { L10n } from '@/types/i18n.types';

export interface IContactInfoItem {
  icon: JSX.Element;
  title: L10n;
  value: string;
  link?: string;
}

export const CONTACT_INFO: IContactInfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: { en: 'Phone', ru: 'Телефон' },
    value: '+374 55 43 47 41',
    link: 'tel:+37455434741',
  },
  {
    icon: <FaEnvelope />,
    title: { en: 'Email', ru: 'Email' },
    value: 'pavel.konyakhin@gmail.com',
    link: 'mailto:pavel.konyakhin@gmail.com',
  },
  {
    icon: <FaTelegram />,
    title: { en: 'Telegram', ru: 'Telegram' },
    value: '@solidados',
    link: 'https://t.me/solidados',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: { en: 'Location', ru: 'Местоположение' },
    value: 'Yerevan, Republic of Armenia',
  },
];
