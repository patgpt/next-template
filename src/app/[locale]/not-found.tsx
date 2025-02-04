import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'

export default async function NotFound(): Promise<ReactNode> {
  const t = await getTranslations()
  return (
    <div>
      <h2>{t('NotFoundPage.title')}</h2>
      <p>{t('NotFoundPage.home')}</p>
      <Link href="/">{t('Menu.home')}</Link>
    </div>
  )
}
