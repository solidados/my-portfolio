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

export const WORK: IWorkData = {
  items: [
    {
      num: '01',
      category: { en: 'fullstack', ru: 'fullstack' },
      title: 'GP Solutions – Corporate Website',
      description: {
        en: 'Built from scratch for a Dubai-based mobility tech company. Next.js frontend, Strapi CMS for content management, and an AI Assistant powered by a custom RAG pipeline with vector embeddings integrated with Grok and OpenAI.',
        ru: 'Создал с нуля корпоративный сайт дубайской MaaS-компании. Frontend на Next.js, управление контентом через Strapi CMS и AI-ассистент на базе RAG-пайплайна с векторными эмбеддингами, Grok и OpenAI.',
      },
      stack: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Strapi' },
        { name: 'OpenAI' },
      ],
      image: '/assets/work/gpsolutions.png',
      live: 'https://gpsolutions.tech',
      github: '',
    },
    {
      num: '02',
      category: { en: 'backend', ru: 'backend' },
      title: 'Movnex – Transit Maps Tbilisi',
      description: {
        en: 'Backend data infrastructure for a MaaS transit app serving Tbilisi. Built Node.js parsers for collecting and validating city POI data, scraping public event sources, and aggregating geographic elevation data.',
        ru: 'Бэкенд-инфраструктура для MaaS-приложения транспорта Тбилиси. Разработал Node.js-парсеры для сбора и валидации городских POI, скрапинга публичных событий и агрегации данных географических высот.',
      },
      stack: [
        { name: 'Node.js' },
        { name: 'TypeScript' },
      ],
      image: '/assets/work/movnex.png',
      live: 'https://apps.apple.com/us/app/movnex-transit-maps-tbilisi/id6760010439',
      github: '',
    },
    {
      num: '03',
      category: { en: 'frontend', ru: 'frontend' },
      title: 'Darb – Riyadh Public Transport',
      description: {
        en: 'MaaS web platform for Riyadh\'s public transport – multimodal journey planning, real-time route data, and transit maps. SSR/SSG with Next.js, REST API via RTK Query, responsive Tailwind UI.',
        ru: 'MaaS-платформа для общественного транспорта Эр-Рияда – мультимодальное планирование маршрутов, данные в реальном времени и карты транспорта. SSR/SSG на Next.js, REST API через RTK Query, Tailwind UI.',
      },
      stack: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind' },
        { name: 'RTK Query' },
      ],
      image: '/assets/work/darb.png',
      live: 'https://www.rpt.sa',
      github: '',
    },
    {
      num: '04',
      category: { en: 'frontend', ru: 'frontend' },
      title: 'Wingform – Aircraft Deal Platform',
      description: {
        en: 'Private aircraft transaction platform for brokers, buyers, and sellers. Collaborative document editing with CKEditor 5 (Track Changes, comments, role-based access) and a custom guided tour system on Driver.js.',
        ru: 'Платформа для сделок по купле-продаже частных самолётов. Совместное редактирование документов через CKEditor 5 (Track Changes, комментарии, ролевой доступ) и кастомный guided tour на Driver.js.',
      },
      stack: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'RTK Query' },
        { name: 'CKEditor 5' },
      ],
      image: '/assets/work/wingform.png',
      live: 'https://wingform.com',
      github: '',
    },
    {
      num: '05',
      category: { en: 'fullstack', ru: 'fullstack' },
      title: 'MusicFlow – Music Streaming Service',
      description: {
        en: 'Full-stack Spotify-like streaming platform. Angular 21 frontend with PrimeNG, global audio player, playlists, and file uploads. NestJS backend with Supabase, JWT auth, and Jamendo API integration (500k+ licensed tracks).',
        ru: 'Full-stack платформа для стриминга музыки (аналог Spotify). Angular 21 + PrimeNG, глобальный аудиоплеер, плейлисты и загрузка файлов. NestJS + Supabase, JWT-авторизация и Jamendo API (500k+ лицензированных треков).',
      },
      stack: [
        { name: 'Angular' },
        { name: 'NestJS' },
        { name: 'TypeScript' },
        { name: 'Supabase' },
        { name: 'CI/CD' },
      ],
      image: '/assets/work/musicflow.png',
      live: 'https://angular2026q2.github.io/musicflow/',
      github: '',
    },
  ],
};
