'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

/**
 * ErrorProps interface
 *
 * @description Defines the props for the Error component
 */
interface ErrorProps {
  /** The error object that was thrown */
  error: Error & { digest?: string }
  /** Function to reset the error boundary and retry rendering */
  reset: () => void
}

/**
 * Error component
 *
 * @description A component that displays an error page
 * @param props - Component props
 * @returns An error page
 */
export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 aria-label={t('A11y.errorHeading')}>{t('ErrorPage.Message')}</h2>
      <button onClick={() => reset()} aria-label={t('A11y.resetButton')}>
        {t('ErrorPage.TryAgain')}
      </button>
    </div>
  )
}
