import type { L10n } from '@/types/i18n.types';

export const UI: Record<string, L10n> = {
  // Header / Nav
  hire_me:              { en: 'Hire me',              ru: 'Нанять меня' },
  
  // Home
  role:                 { en: 'Software Developer',   ru: 'Разработчик ПО' },
  greeting:             { en: "Hello, I'm",           ru: 'Привет, я' },
  name:                 { en: 'Pavel Konyakhin',      ru: 'Павел Коняхин' },
  about_short:          { en: 'I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.', ru: 'Создаю элегантные цифровые решения, владею различными языками программирования и технологиями.' },
  download_cv:          { en: 'Download CV',          ru: 'Скачать резюме' },
  
  // Resume Tabs
  tab_experience:       { en: 'Experience',           ru: 'Опыт' },
  tab_education:        { en: 'Education',            ru: 'Образование' },
  tab_skills:           { en: 'Skills',               ru: 'Навыки' },
  tab_about:            { en: 'About me',             ru: 'Обо мне' },
  
  // Work page
  live_project:         { en: 'Live Project',         ru: 'Открыть проект' },
  github_repo:          { en: 'GitHub repository',    ru: 'GitHub репозиторий' },
  project_suffix:       { en: 'project',              ru: 'проект' },
  
  // Contact form
  form_title:           { en: 'Let\'s work together',           ru: 'Давайте работать вместе' },
  form_subtitle:        { en: 'Have a project in mind or interested to hire me? – Fill in the form and I will get back to you ASAP.',         ru: 'У вас есть идея для проекта или хотите нанять меня? Заполните форму, и я свяжусь с вами в ближайшее' +
      ' время.' },
  placeholder_firstname:  { en: 'First name',         ru: 'Имя' },
  placeholder_lastname:   { en: 'Last name',          ru: 'Фамилия' },
  placeholder_email:      { en: 'Email',              ru: 'Email' },
  placeholder_phone:      { en: 'Phone number',       ru: 'Номер телефона' },
  placeholder_service:    { en: 'Select service...',  ru: 'Выберите услугу...' },
  placeholder_message:    { en: 'Your message here...', ru: 'Ваше сообщение...' },
  service_label:          { en: 'Service select',     ru: 'Выбор услуги' },
  service_frontend:       { en: 'Frontend Development',          ru: 'Frontend разработка' },
  service_fullstack:      { en: 'Full-Stack Development',        ru: 'Full-Stack разработка' },
  service_performance:    { en: 'Performance & Architecture',    ru: 'Производительность и архитектура' },
  service_backend:        { en: 'Backend Development',           ru: 'Backend разработка' },
  btn_send:               { en: 'Send message',       ru: 'Отправить' },
  btn_sending:            { en: 'Sending...',         ru: 'Отправляю...' },
  captcha_accepted:            { en: 'This site is protected by reCAPTCHA and the Google',         ru: 'Сайт защищен reCAPTCHA, в соответствии с' },
  captcha_accepted_pp:            { en: 'Privacy Policy',         ru: 'Политикой конфиденциальности' },
  captcha_accepted_suffix:            { en: 'and',         ru: 'и' },
  captcha_accepted_tos:            { en: 'Terms of Service',         ru: 'Условиями использования' },
  captcha_accepted_postfix:            { en: 'apply',         ru: '' },
  captcha_rejected:            { en: 'Spam protection is active with limited tracking due to your cookie preferences.',         ru: 'Защита от спама активна с ограниченным отслеживанием в соответствии с вашими настройками файлов cookie.' },
};
