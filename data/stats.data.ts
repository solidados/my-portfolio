import type { L10n } from '@/types/i18n.types';

export interface IStatItem {
  num: number;
  suffix: string;
  text: L10n;
}

export const STATS: IStatItem[] = [
  {
    num: 5,
    suffix: '+',
    text: { en: 'Years of experience', ru: 'Лет опыта' },
  },
  {
    num: 10,
    suffix: '+',
    text: { en: 'Projects completed', ru: 'Завершённых проектов' },
  },
  {
    num: 23,
    suffix: '+',
    text: { en: 'Technologies mastered', ru: 'Изученных технологий' },
  },
  {
    num: 999,
    suffix: '+',
    text: { en: 'Code commits', ru: 'Коммитов кода' },
  },
];
