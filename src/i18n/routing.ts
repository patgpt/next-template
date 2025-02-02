// i18n/routing.tsx

import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    defaultLocale: 'en-US',
    locales: ['en-US', 'fr-CA'],
    localeDetection:true,

  localeCookie: {
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365
  }
});

