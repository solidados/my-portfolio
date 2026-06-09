import type { L10n } from '@/types/i18n.types';

export interface IStackItem {
  name: string;
}

export interface IProjectItem {
  num: string;
  category: L10n;
  title: string;
  description: L10n;
  stack: IStackItem[];
  image: string;
  live: string;
  github: string;
}

export interface IWorkData {
  items: IProjectItem[];
}

// TODO: Replace placeholder images with real project screenshots in /public/assets/work/
// TODO: Fill in live URLs and GitHub links once available
export const WORK: IWorkData = {
  items: [
    {
      num: '01',
      category: { en: 'fullstack', ru: 'fullstack' },
      title: 'Darb — Riyadh Public Transport',
      description: {
        en: 'MaaS (Mobility as a Service) web platform for the Riyadh Public Transport system. Complex multimodal UI flows, REST API integration with RTK Query, SSR/SSG with Next.js.',
        ru: 'MaaS-платформа (Mobility as a Service) для системы общественного транспорта Эр-Рияда. Сложные мультимодальные UI-флоу, интеграция REST API через RTK Query, SSR/SSG на Next.js.',
      },
      stack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Next.js' },
        { name: 'RTK Query' },
      ],
      image: '/assets/work/thumb1.png',
      live: 'https://riyadhmetrosa.com',
      github: '',
    },
    {
      num: '02',
      category: { en: 'frontend', ru: 'frontend' },
      title: 'Wingform — Document Editor Platform',
      description: {
        en: 'Editor-driven web application with CKEditor 5 (Track Changes, collaborative comments, role-based access). Custom guided tour system built on Driver.js with dynamic DOM injection.',
        ru: 'Веб-приложение на базе редактора с CKEditor 5 (Track Changes, collaborative-комментарии, ролевой доступ). Кастомная система guided tour на Driver.js с динамической инъекцией DOM-элементов.',
      },
      stack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'CKEditor 5' },
        { name: 'Feature-Sliced Design' },
      ],
      image: '/assets/work/thumb2.png',
      live: 'https://wingform.com',
      github: '',
    },
    {
      num: '03',
      category: { en: 'fullstack', ru: 'fullstack' },
      title: 'RightAid — Legal Assistance Platform',
      description: {
        en: 'Legal assistance platform for human rights protection, developed for the Czech Diplomatic Mission in Armenia. User-facing features, API integrations, and UX/UI design collaboration.',
        ru: 'Платформа юридической помощи для защиты прав человека, разработанная для Чешской дипломатической миссии в Армении. Пользовательские функции, API-интеграции и совместная работа над UX/UI.',
      },
      stack: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
      ],
      image: '/assets/work/thumb3.png',
      live: '',
      github: 'https://github.com/solidados',
    },
  ],
};
