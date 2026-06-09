import type { L10n } from '@/types/i18n.types';

export interface IAboutField {
  fieldName: L10n;
  fieldValue: string;
  link?: string;
}

export interface IAboutData {
  icon: string;
  title: L10n;
  description: L10n;
  info: IAboutField[];
}

export const ABOUT: IAboutData = {
  icon: '/assets/resume/about.svg',
  title: {
    en: 'About me',
    ru: 'Обо мне',
  },
  description: {
    en: 'Frontend Software Engineer with 5+ years of experience, specializing in building scalable, high-performance web applications with React and TypeScript. Experienced in developing complex interactive UI systems, including rich-text editors (CKEditor) and collaborative features, with a strong focus on user experience, performance, and maintainable architecture. Skilled in Next.js (SSR/SSG), modern state management, and designing reusable component systems.',
    ru: 'Frontend-разработчик с 5+ годами опыта, специализируюсь на создании масштабируемых высокопроизводительных веб-приложений на React и TypeScript. Имею опыт разработки сложных интерактивных UI-систем, включая текстовые редакторы (CKEditor) и collaborative-функциональность, с акцентом на пользовательский опыт, производительность и поддерживаемую архитектуру. Владею Next.js (SSR/SSG), современным управлением состоянием и проектированием переиспользуемых компонентных систем.',
  },
  info: [
    {
      fieldName: { en: 'Name', ru: 'Имя' },
      fieldValue: 'Pavel Konyakhin',
      link: 'https://linkedin.com/in/solidados',
    },
    {
      fieldName: { en: 'GitHub', ru: 'GitHub' },
      fieldValue: '@solidados',
      link: 'https://github.com/solidados',
    },
    {
      fieldName: { en: 'Experience', ru: 'Опыт' },
      fieldValue: '5+ Years',
    },
    {
      fieldName: { en: 'Phone', ru: 'Телефон' },
      fieldValue: '+374 55 434741',
      link: 'tel:+37455434741',
    },
    {
      fieldName: { en: 'Email', ru: 'Email' },
      fieldValue: 'pavel.konyakhin@gmail.com',
      link: 'mailto:pavel.konyakhin@gmail.com',
    },
    {
      fieldName: { en: 'Location', ru: 'Местоположение' },
      fieldValue: 'Yerevan, Armenia',
    },
    {
      fieldName: { en: 'Telegram', ru: 'Telegram' },
      fieldValue: '@solidados',
      link: 'https://t.me/solidados',
    },
    {
      fieldName: { en: 'Languages', ru: 'Языки' },
      fieldValue: 'English (B2/C1), Russian (native), Spanish (beginner)',
    },
  ],
};
