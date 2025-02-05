import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

/**
 * NextIntl plugin
 *
 * @description A plugin for Next.js to support internationalization
 * @returns The NextIntl plugin
 */
const withNextIntl = createNextIntlPlugin()

/**
 * NextConfig
 *
 * @description The configuration for Next.js
 * @returns The NextConfig
 */
const nextConfig: NextConfig = {
  experimental: {
    turbo: {}
  },
  transpilePackages: ['@0no-co/graphqlsp']
}

/**
 * Export the NextConfig
 *
 * @description Exports the NextConfig
 * @returns The NextConfig
 */
export default withNextIntl(nextConfig)
