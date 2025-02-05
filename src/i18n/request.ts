import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

/**
 * Get the request configuration
 *
 * @description Get the request configuration for the application
 * @returns Request configuration
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale
  // If the requested locale is supported, use it; otherwise, use the default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  // Load and return the messages for the locales
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
