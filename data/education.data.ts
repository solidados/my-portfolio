import type { L10n } from '@/types/i18n.types';

export interface IEducationItem {
  duration: string;
  institution: string;
  institutionUrl?: string;
  degree: L10n;
  specialization?: L10n;
}

export interface IEducationData {
  icon: string;
  title: L10n;
  description: L10n;
  items: IEducationItem[];
}

export const EDUCATION: IEducationData = {
  icon: '/assets/resume/cap.svg',
  title: {
    en: 'Education',
    ru: 'Образование',
  },
  description: {
    en: 'Specialized technical training in full-stack web development, complemented by formal higher education in logistics and management.',
    ru: 'Специализированная техническая подготовка в области full-stack веб-разработки, дополненная высшим образованием в области логистики и управления.',
  },
  items: [
    {
      duration: '2022 – 2024',
      institution: 'Rolling Scopes School',
      institutionUrl: 'https://rs.school',
      degree: {
        en: 'Full-stack Software Developer',
        ru: 'Full-stack разработчик ПО',
      },
      specialization: {
        en: 'JavaScript, TypeScript, React, Next.js, Node.js, NestJS, Prisma, Fastify, PostgreSQL, AWS Cloud, GCP',
        ru: 'JavaScript, TypeScript, React, Next.js, Node.js, NestJS, Prisma, Fastify, PostgreSQL, AWS Cloud, GCP',
      },
    },
    {
      duration: '2005 – 2008',
      institution: 'Moscow State Academy of Water Transport',
      degree: {
        en: "Master's Degree in Logistics",
        ru: 'Магистр по логистике',
      },
      specialization: {
        en: 'Organization of carriages and management on water transport',
        ru: 'Организация перевозок и управление на водном транспорте',
      },
    },
    {
      duration: '2000 – 2003',
      institution: 'Maritime State University named after G.I. Nevelskoi',
      degree: {
        en: 'Bachelor Degree in Logistics',
        ru: 'Бакалавр по логистике',
      },
      specialization: {
        en: 'Organization of carriages and management on water transport',
        ru: 'Организация перевозок и управление на водном транспорте',
      },
    },
  ],
};
