import type { L10n } from '@/types/i18n.types';

export interface IJobItem {
  duration: string;
  company: string;
  companyUrl?: string;
  location: string;
  position: L10n;
  description: L10n;
}

export interface IExperienceData {
  icon: string;
  title: L10n;
  description: L10n;
  items: IJobItem[];
}

export const EXPERIENCE: IExperienceData = {
  icon: '/assets/resume/experience.svg',
  title: {
    en: 'Experience',
    ru: 'Опыт работы',
  },
  description: {
    en: 'Full-stack developer with 5+ years of experience in frontend and backend roles, focused on high-quality engineering with React, TypeScript, and Next.js.',
    ru: 'Full-stack разработчик с 5+ годами опыта, специализируюсь на высококачественной frontend-разработке с React, TypeScript и Next.js.',
  },
  items: [
    {
      duration: '08/2025 – 04/2026',
      company: 'GP Solutions DMCC',
      companyUrl: 'https://gpsolutions.tech',
      location: 'Dubai, UAE',
      position: {
        en: 'Full-stack Software Developer',
        ru: 'Full-stack разработчик',
      },
      description: {
        en: 'Developed scalable frontend applications for a MaaS platform — Darb (Riyadh Public Transport system). Led frontend architecture evolution with React, TypeScript, and Next.js (SSR/SSG). Integrated REST APIs via RTK Query, implemented performance optimizations, and applied XSS/CSRF security practices. Participated in Agile sprints and cross-functional collaboration.',
        ru: 'Разрабатывал масштабируемые frontend-приложения для MaaS-платформы Darb (транспортная система Эр-Рияда). Руководил развитием frontend-архитектуры на React, TypeScript и Next.js (SSR/SSG). Интегрировал REST API через RTK Query, применял оптимизации производительности и практики безопасности (XSS/CSRF). Участвовал в Agile-спринтах и кросс-функциональном взаимодействии.',
      },
    },
    {
      duration: '07/2024 – 08/2025',
      company: 'Wingform Inc.',
      companyUrl: 'https://wingform.com',
      location: 'Dubai, UAE',
      position: {
        en: 'Software Developer',
        ru: 'Разработчик ПО',
      },
      description: {
        en: 'Built reusable React/TypeScript components using Feature-Sliced Design. Integrated and customized CKEditor 5 (Cloud CDN) with Track Changes and collaborative comments, configured role-based access for editor commands. Developed a custom guided tour system (Driver.js extension) with dynamic DOM injection for complex onboarding flows.',
        ru: 'Создавал переиспользуемые компоненты на React/TypeScript с применением Feature-Sliced Design. Интегрировал и кастомизировал CKEditor 5 с Track Changes и collaborative-комментариями, настраивал ролевой доступ к командам редактора. Разработал систему guided tour на основе Driver.js с динамической инъекцией DOM-элементов для сложных onboarding-сценариев.',
      },
    },
    {
      duration: '12/2022 – 07/2024',
      company: 'TumoLabs',
      location: 'Yerevan, Armenia',
      position: {
        en: 'Software Developer / Team Lead (R&D)',
        ru: 'Разработчик / Тимлид (R&D)',
      },
      description: {
        en: 'Led cross-functional R&D projects in agritech and legal tech. Built an irrigation monitoring system for the Ministry of Agriculture of Armenia (Next.js + Node.js) and a legal assistance platform RightAid for the Czech Diplomatic Mission. Coordinated team efforts, participated in UX/UI design and architecture decisions.',
        ru: 'Руководил кросс-функциональными R&D-проектами в agritech и legal tech. Разработал систему мониторинга ирригации для Министерства сельского хозяйства Армении (Next.js + Node.js) и платформу юридической помощи RightAid для Чешской дипломатической миссии. Координировал командную работу, участвовал в UX/UI-дизайне и архитектурных решениях.',
      },
    },
    {
      duration: '03/2021 – 12/2022',
      company: 'Verstka Agency',
      companyUrl: 'https://verstka.agency',
      location: 'Yerevan, Armenia',
      position: {
        en: 'Frontend Developer',
        ru: 'Frontend-разработчик',
      },
      description: {
        en: 'Developed responsive web interfaces with HTML, CSS, JavaScript, and React. Translated Figma mockups into production-ready code across multiple client projects — landing pages and web applications. Focused on cross-browser compatibility, performance, and code maintainability.',
        ru: 'Разрабатывал адаптивные веб-интерфейсы на HTML, CSS, JavaScript и React. Переводил макеты из Figma в production-ready код для различных клиентских проектов — лендинги и веб-приложения. Фокусировался на кроссбраузерности, производительности и поддерживаемости кода.',
      },
    },
  ],
};
