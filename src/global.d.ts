import en from '../messages/en.json';

// Type every t('...') key against en.json, so a typo fails `tsc` instead of rendering a raw key.
declare module 'next-intl' {
  interface AppConfig {
    Locale: 'en' | 'ja';
    Messages: typeof en;
  }
}
