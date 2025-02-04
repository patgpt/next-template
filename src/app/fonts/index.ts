import { Geist, Geist_Mono } from 'next/font/google'

/**
 * Configuration for the Geist Sans font.
 * This is the main sans-serif font used throughout the application.
 * @see {@link https://vercel.com/font/sans} for font details
 */
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

/**
 * Configuration for the Geist Mono font.
 * This is the monospace font used for code blocks and technical content.
 * @see {@link https://vercel.com/font/mono} for font details
 */
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
