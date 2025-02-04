// global.d.ts

import {routing} from '@/i18n/routing';

declare module 'next-intl' {
  interface AppConfig {
    routing: typeof routing;

    Locale: (typeof routing.locales)[number];
  }
}