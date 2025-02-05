// i18n/routing.tsx

import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

/**
 * Define the routing configuration
 *
 * @description Defines the routing configuration for the application
 * @returns Routing configuration
 */
export const routing = defineRouting({
  defaultLocale: 'en-US',
  locales: ['en-US', 'fr-CA'],
  localeDetection: true,
  localeCookie: {
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365
  }
})

/**
 * Lightweight wrappers around Next.js' navigation APIs
 * that will consider the routing configuration use these in place of the exports from 'next/router's
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
