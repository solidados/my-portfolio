export type Locale = 'en' | 'ru';

/**
 * Localized string — holds translations for all supported locales.
 * Usage: field: L10n → { en: 'Hello', ru: 'Привет' }
 *
 * Designed to be easily migrated to next-intl:
 *   replace `data.field[locale]` with `t('field')`
 */
export type L10n = Record<Locale, string>;
