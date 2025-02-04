import type { Metadata } from 'next'
import './globals.css'

import Providers from '@/components/providers/providers'
import { cn } from '@/utils/cn'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { geistMono, geistSans } from './fonts'

// Import the routing configuration
import Header from '@/components/layout/Header'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

export function generateStaticParams(): { locale: Locale }[] {
  return routing.locales.map((locale: Locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return {
    title: t('LayoutPage.metaTitle'),
    description: t('LayoutPage.metaDescription')
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function RootLayout({
  params,
  children
}: RootLayoutProps): Promise<React.ReactElement> {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <Providers>
          <Header />
          <main className="container m-auto h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
