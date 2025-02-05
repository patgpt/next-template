import type { Metadata } from 'next'
import '../styles/index.css'

import { geistMono, geistSans } from '@/app/fonts'
import Providers from '@/components/providers/providers'
import { cn } from '@/utils/cn'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

// Import the routing configuration
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

/**
 * Generate static parameters for the layout
 *
 * @description Generates static parameters for the layout
 * @returns Static parameters for the layout
 */
export function generateStaticParams(): { locale: Locale }[] {
  return routing.locales.map((locale: Locale) => ({ locale }))
}

/**
 * Generate metadata for the layout
 *
 * @description Generates metadata for the layout
 * @returns Metadata for the layout
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return {
    title: t('LayoutPage.metaTitle'),
    description: t('LayoutPage.metaDescription')
  }
}

/**
 * RootLayoutProps interface
 *
 * @description Defines the props for the RootLayout component
 */
interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

/**
 * RootLayout component
 *
 * @description A component that provides a root layout for the application
 * @param props - Component props
 * @returns The root layout for the application
 */
export default async function RootLayout({
  params,
  children
}: RootLayoutProps): Promise<React.ReactElement> {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)
  return (
    <html data-theme="light" lang={locale} suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <Providers>
          <Header />
          <main className="m-auto h-screen w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
