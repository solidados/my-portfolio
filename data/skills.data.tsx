import { JSX } from 'react';
import { FaReact, FaNodeJs, FaAws, FaFigma, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiAngular,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNestjs,
  SiFastify,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiStrapi,
  SiDocker,
  SiOpenai,
  SiClaude,
} from 'react-icons/si';

import type { L10n } from '@/types/i18n.types';

export interface ISkillItem {
  id: string;
  icon: JSX.Element;
  name: L10n;
  href: string;
}

export interface ISkillsData {
  icon: string;
  title: L10n;
  description: L10n;
  items: ISkillItem[];
}

export const SKILLS: ISkillsData = {
  icon: '/assets/resume/skills.svg',
  title: {
    en: 'Skills',
    ru: 'Навыки',
  },
  description: {
    en: 'Core technologies I work with daily – spanning frontend, backend, infrastructure, and tooling.',
    ru: 'Основные технологии повседневной работы: frontend, backend, инфраструктура и инструменты разработки.',
  },
  items: [
    // Languages
    { id: 'ts', icon: <SiTypescript />, name: { en: 'TypeScript', ru: 'TypeScript' }, href: 'https://www.typescriptlang.org/' },
    // Frontend
    { id: 'react', icon: <FaReact />, name: { en: 'React', ru: 'React' }, href: 'https://react.dev/' },
    { id: 'angular', icon: <SiAngular />, name: { en: 'Angular', ru: 'Angular' }, href: 'https://angular.dev/' },
    { id: 'next', icon: <SiNextdotjs />, name: { en: 'Next.js', ru: 'Next.js' }, href: 'https://nextjs.org/' },
    { id: 'rtk', icon: <SiRedux />, name: { en: 'Redux Toolkit', ru: 'Redux Toolkit' }, href: 'https://redux-toolkit.js.org/' },
    { id: 'twnd', icon: <SiTailwindcss />, name: { en: 'Tailwind CSS', ru: 'Tailwind CSS' }, href: 'https://tailwindcss.com/' },
    // Backend
    { id: 'node', icon: <FaNodeJs />, name: { en: 'Node.js', ru: 'Node.js' }, href: 'https://nodejs.org/' },
    { id: 'nest', icon: <SiNestjs />, name: { en: 'NestJS', ru: 'NestJS' }, href: 'https://nestjs.com/' },
    { id: 'fastify', icon: <SiFastify />, name: { en: 'Fastify', ru: 'Fastify' }, href: 'https://fastify.dev/' },
    { id: 'postgres', icon: <SiPostgresql />, name: { en: 'PostgreSQL', ru: 'PostgreSQL' }, href: 'https://www.postgresql.org/' },
    { id: 'prisma', icon: <SiPrisma />, name: { en: 'Prisma', ru: 'Prisma' }, href: 'https://www.prisma.io/' },
    { id: 'supabase', icon: <SiSupabase />, name: { en: 'Supabase', ru: 'Supabase' }, href: 'https://supabase.com/' },
    { id: 'strapi', icon: <SiStrapi />, name: { en: 'Strapi', ru: 'Strapi' }, href: 'https://strapi.io/' },
    // Infrastructure & Tooling
    { id: 'docker', icon: <SiDocker />, name: { en: 'Docker', ru: 'Docker' }, href: 'https://www.docker.com/' },
    { id: 'aws', icon: <FaAws />, name: { en: 'AWS', ru: 'AWS' }, href: 'https://aws.amazon.com/' },
    { id: 'git', icon: <FaGitAlt />, name: { en: 'Git', ru: 'Git' }, href: 'https://git-scm.com/' },
    { id: 'figma', icon: <FaFigma />, name: { en: 'Figma', ru: 'Figma' }, href: 'https://www.figma.com/' },
    // AI
    { id: 'openai', icon: <SiOpenai />, name: { en: 'OpenAI', ru: 'OpenAI' }, href: 'https://openai.com/' },
    { id: 'claude', icon: <SiClaude />, name: { en: 'Claude', ru: 'Claude' }, href: 'https://docs.anthropic.com/' },
  ],
};
