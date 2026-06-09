import { JSX } from 'react';
import { FaReact, FaNodeJs, FaAws, FaFigma, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiRedux,
} from 'react-icons/si';

import type { L10n } from '@/types/i18n.types';

export interface ISkillItem {
  icon: JSX.Element;
  name: L10n;
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
    en: 'Core technologies I work with daily — spanning frontend, backend, infrastructure, and tooling.',
    ru: 'Основные технологии повседневной работы: frontend, backend, инфраструктура и инструменты разработки.',
  },
  items: [
    { icon: <SiTypescript />, name: { en: 'TypeScript', ru: 'TypeScript' } },
    { icon: <FaReact />, name: { en: 'React', ru: 'React' } },
    { icon: <SiNextdotjs />, name: { en: 'Next.js', ru: 'Next.js' } },
    { icon: <SiRedux />, name: { en: 'Redux Toolkit', ru: 'Redux Toolkit' } },
    { icon: <SiTailwindcss />, name: { en: 'Tailwind CSS', ru: 'Tailwind CSS' } },
    { icon: <FaNodeJs />, name: { en: 'Node.js', ru: 'Node.js' } },
    { icon: <SiNestjs />, name: { en: 'NestJS', ru: 'NestJS' } },
    { icon: <SiPostgresql />, name: { en: 'PostgreSQL', ru: 'PostgreSQL' } },
    { icon: <SiPrisma />, name: { en: 'Prisma', ru: 'Prisma' } },
    { icon: <SiDocker />, name: { en: 'Docker', ru: 'Docker' } },
    { icon: <FaAws />, name: { en: 'AWS', ru: 'AWS' } },
    { icon: <FaFigma />, name: { en: 'Figma', ru: 'Figma' } },
    { icon: <FaGitAlt />, name: { en: 'Git', ru: 'Git' } },
  ],
};
