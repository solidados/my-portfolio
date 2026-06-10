import type { L10n } from '@/types/i18n.types';

export interface INavLinkItem {
  name: L10n;
  path: string;
}

export const NAV_LINKS: INavLinkItem[] = [
  { name: { en: 'home', ru: 'главная' }, path: '/' },
  { name: { en: 'services', ru: 'услуги' }, path: '/services' },
  { name: { en: 'resume', ru: 'резюме' }, path: '/resume' },
  { name: { en: 'work', ru: 'проекты' }, path: '/work' },
  { name: { en: 'contact', ru: 'контакты' }, path: '/contact' },
];
