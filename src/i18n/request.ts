import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';


// This function is called by the server to determine the locale and messages
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
  // If the requested locale is supported, use it; otherwise, use the default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  // Load and return the messages for the locales
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});