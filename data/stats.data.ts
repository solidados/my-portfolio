import type { L10n } from '@/types/i18n.types';

export interface IStatItem {
  id: string;
  num: number;
  prefix?: string;
  suffix?: string;
  text: L10n;
}

export const STATS: IStatItem[] = [
  {
    id: 'experience',
    num: 5,
    prefix: '',
    suffix: '+',
    text: { en: 'Years of experience', ru: 'Лет опыта' },
  },
  {
    id: 'projects_completed',
    num: 10,
    prefix: '~',
    suffix: '',
    text: { en: 'Projects completed', ru: 'Завершённых проектов' },
  },
  {
    id: 'technologies_mastered',
    num: 23,
    prefix: '',
    suffix: '+',
    text: { en: 'Technologies mastered', ru: 'Изученных технологий' },
  },
  {
    id: 'code_commits',
    num: 999,
    prefix: '',
    suffix: '+',
    text: { en: 'Code commits', ru: 'Коммитов кода' },
  },
];
