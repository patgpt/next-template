'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

/**
 * Interface for Error component props
 */
interface ErrorProps {
  /** The error object that was thrown */
  error: Error & { digest?: string }
  /** Function to reset the error boundary and retry rendering */
  reset: () => void
}

/**
 * Error Page component for handling runtime errors in the application
 *
 * @component
 * @param {ErrorProps} props - Component props
 * @param {Error} props.error - The error object that was thrown
 * @param {Function} props.reset - Function to reset the error boundary
 * @returns A styled error NextPage Component
 *
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
