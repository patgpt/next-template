import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import type React from 'react'

export default function HomePage(): React.ReactElement {
  const t = useTranslations('HomePage')
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  )
}
