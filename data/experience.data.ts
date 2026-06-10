import type { L10n } from '@/types/i18n.types';

export interface IJobItem {
  id: string;
  duration: string;
  company: string;
  companyUrl?: string;
  location: string;
  position: L10n;
  description: L10n;
  projects?: string[];
  responsibilities?: string[];
  technologies?: string[];
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
      id: 'gps-solutions_2026',
      duration: '08/2025 – 04/2026',
      company: 'GP Solutions DMCC',
      companyUrl: 'https://gpsolutions.tech',
      location: 'Dubai, UAE',
      position: {
        en: 'Full-stack Software Developer',
        ru: 'Full-stack разработчик',
      },
      description: {
        en: 'Developed scalable frontend applications for a MaaS platform – Darb (Riyadh Public Transport system). Led frontend architecture evolution with React, TypeScript, and Next.js (SSR/SSG). Integrated REST APIs via RTK Query, implemented performance optimizations, and applied XSS/CSRF security practices. Participated in Agile sprints and cross-functional collaboration.',
        ru: 'Разрабатывал масштабируемые frontend-приложения для MaaS-платформы Darb (транспортная система Эр-Рияда). Руководил развитием frontend-архитектуры на React, TypeScript и Next.js (SSR/SSG). Интегрировал REST API через RTK Query, применял оптимизации производительности и практики безопасности (XSS/CSRF). Участвовал в Agile-спринтах и кросс-функциональном взаимодействии.',
      },
      projects: [
        'Darb – MaaS web-platform for Riyadh Public Transport (RPT)',
        'GP Solutions DMCC – Corporate website (built from scratch)',
        'AI Assistant – Custom RAG pipeline with vector embeddings (Grok + OpenAI)',
        'Backend parser – POI collector and validator for city maps',
        'Backend parser – Geographic elevation data (Copernicus DEM GLO-30)',
      ],
      responsibilities: [
        'Developed scalable frontend applications using React, TypeScript, and Next.js (SSR/SSG)',
        'Led frontend architecture evolution: modular, component-driven design',
        'Built complex UI flows for a multimodal transportation (MaaS) platform',
        'Integrated REST APIs using RTK Query with async data caching',
        'Applied performance practices: minimized re-renders, optimized data fetching',
        'Implemented XSS/CSRF-aware security practices and safe token handling',
        'Participated in code reviews, Agile sprints, and cross-functional collaboration',
      ],
    },
    {
      id: 'wingform_2025',
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
      projects: [
        'Wingform – Corporate website (built from scratch)',
        'Wingform platform – integration CKEditor, creation of closed rooms for parties of the deal, implementation of custom guided tour system',
      ],
      responsibilities: [
        'Built reusable React/TypeScript components using Feature-Sliced Design',
        'Integrated and customized CKEditor 5: Track Changes, collaborative comments, role-based access',
        'Refactored editor logic into custom React hooks for better lifecycle management',
        'Built a custom guided tour system (Driver.js extension) with dynamic DOM injection',
        'Designed the tour system as a reusable abstraction for complex onboarding flows',
        'Collaborated with UI/UX designers to deliver user-friendly interfaces',
        'Participated in code reviews and knowledge sharing',
      ],
    },
    {
      id: 'tumo_2022',
      duration: '12/2022 – 07/2024',
      company: 'TumoLabs',
      companyUrl: 'https://tumolabs.am/en/',
      location: 'Yerevan, Armenia',
      position: {
        en: 'Software Developer / Team Lead (R&D)',
        ru: 'Разработчик / Тимлид (R&D)',
      },
      description: {
        en: 'Led cross-functional R&D projects in agritech and legal tech. Built an irrigation monitoring system for the Ministry of Agriculture of Armenia (Next.js + Node.js) and a legal assistance platform RightAid for the Czech Diplomatic Mission. Coordinated team efforts, participated in UX/UI design and architecture decisions.',
        ru: 'Руководил кросс-функциональными R&D-проектами в agritech и legal tech. Разработал систему мониторинга ирригации для Министерства сельского хозяйства Армении (Next.js + Node.js) и платформу юридической помощи RightAid для Чешской дипломатической миссии. Координировал командную работу, участвовал в UX/UI-дизайне и архитектурных решениях.',
      },
      projects: [
        '★ Agritech Platform – Irrigation monitoring system for Ministry of Agriculture of Armenia',
        '★ RightAid – Legal assistance platform for Czech Diplomatic Mission in Armenia',
      ],
      responsibilities: [
        'Led a cross-functional R&D team delivering full-stack apps for external stakeholders',
        'Full-stack development: Next.js + TypeScript (frontend), Node.js + TypeScript (backend)',
        'Participated in product research, market analysis, and domain-specific requirements',
        'Designed and implemented user-facing features and API integrations',
        'Collaborated on UX/UI design and system architecture decisions',
        'Practiced Agile collaboration, team coordination, and code reviews',
      ],
    },
    {
      id: 'verstka_2021',
      duration: '03/2021 – 12/2022',
      company: 'Verstka Agency',
      companyUrl: 'https://verstka.agency',
      location: 'Yerevan, Armenia',
      position: {
        en: 'Frontend Developer',
        ru: 'Frontend-разработчик',
      },
      description: {
        en: 'Developed responsive web interfaces with HTML, CSS, JavaScript, and React. Translated Figma mockups into production-ready code across multiple client projects – landing pages and web applications. Focused on cross-browser compatibility, performance, and code maintainability.',
        ru: 'Разрабатывал адаптивные веб-интерфейсы на HTML, CSS, JavaScript и React. Переводил макеты из Figma в production-ready код для различных клиентских проектов – лендинги и веб-приложения. Фокусировался на кроссбраузерности, производительности и поддерживаемости кода.',
      },
      responsibilities: [
        'Developed responsive web interfaces using HTML, CSS, JavaScript, and React',
        'Translated Figma mockups into production-ready frontend code',
        'Worked on multiple client projects: landing pages and web applications',
        'Ensured cross-browser compatibility, performance, and responsive design',
        'Improved loading times and frontend application performance',
        'Collaborated with designers and backend developers on complete solutions',
        'Maintained and refactored existing codebases for better readability',
      ],
    },
  ],
};
