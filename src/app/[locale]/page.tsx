import Hero from '@/components/Hero'
import { useTranslations } from 'next-intl'
import type React from 'react'

export default function HomePage(): React.ReactElement {
  const t = useTranslations('HomePage')
  return (
    <div>
      <Hero />
    </div>
  )
}
