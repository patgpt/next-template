import { routing } from '@/i18n/routing'
import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

/**
 * Middleware for handling internationalization (i18n) routing in Next.js
 *
 * This middleware intercepts requests and handles locale-based routing using next-intl.
 * It ensures that requests are properly directed to the correct localized version of pages.
 *
 * @param request - The incoming Next.js request object
 * @returns A response with the appropriate locale handling
 */
export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale
  })
  const response = handleI18nRouting(request)
  return response
}

/**
 * Configuration for the middleware
 *
 * Defines which routes should be processed by the middleware:
 * - Matches the root path '/'
 * - Matches paths starting with supported locales (fr-CA|en-US)
 * - Matches all paths except those starting with /api, /_next, /_vercel
 *   and those containing file extensions
 */
export const config = {
  // Match only internationalized pathnamess
  matcher: [
    // Match all pathnames the start with a locale
    '/',
    '/(fr-CA|en-US)/:path*',
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
