import type { L10n } from '@/types/i18n.types';

export interface IServiceItem {
  num: string;
  title: L10n;
  description: L10n;
  href: string;
}

export interface IServicesData {
  items: IServiceItem[];
}

export const SERVICES: IServicesData = {
  items: [
    {
      num: '01',
      title: {
        en: 'Frontend Development',
        ru: 'Frontend-разработка',
      },
      description: {
        en: 'Building scalable, high-performance web applications with React, Next.js (SSR/SSG), and TypeScript. Focus on reusable component architecture, state management, and pixel-perfect UI implementation from Figma designs.',
        ru: 'Создание масштабируемых высокопроизводительных веб-приложений на React, Next.js (SSR/SSG) и TypeScript. Акцент на переиспользуемой компонентной архитектуре, управлении состоянием и точной реализации UI из Figma-макетов.',
      },
      href: '',
    },
    {
      num: '02',
      title: {
        en: 'Full-Stack Development',
        ru: 'Full-stack разработка',
      },
      description: {
        en: 'End-to-end application development with Node.js, NestJS, and Fastify on the backend. REST API design, JWT authentication, PostgreSQL and MongoDB with Prisma ORM, cloud storage (AWS S3 / Hetzner R2).',
        ru: 'Разработка приложений от и до: Node.js, NestJS и Fastify на бэкенде. Проектирование REST API, JWT-аутентификация, PostgreSQL и MongoDB с Prisma ORM, облачное хранилище (AWS S3 / Hetzner R2).',
      },
      href: '',
    },
    {
      num: '03',
      title: {
        en: 'Performance & Arch',
        ru: 'Производительность и архитектура',
      },
      description: {
        en: 'Code audits, rendering optimization (re-renders, memoization, lazy loading), SSR/CSR trade-off analysis, and scalable architecture design using Feature-Sliced Design or Atomic Design patterns.',
        ru: 'Аудит кода, оптимизация рендеринга (ре-рендеры, мемоизация, lazy loading), анализ SSR/CSR trade-offs и проектирование масштабируемой архитектуры по паттернам Feature-Sliced Design или Atomic Design.',
      },
      href: '',
    },
    {
      num: '04',
      title: {
        en: 'Interactive UI Systems',
        ru: 'Интерактивные UI-системы',
      },
      description: {
        en: 'Development of complex UI systems: rich-text editors (CKEditor 5 with collaborative features), custom onboarding flows (Driver.js extensions), real-time collaboration interfaces, and canvas-based tools.',
        ru: 'Разработка сложных UI-систем: текстовые редакторы (CKEditor 5 с collaborative-функциями), кастомные onboarding-флоу (расширения Driver.js), интерфейсы для real-time collaboration и canvas-инструменты.',
      },
      href: '',
    },
  ],
};
