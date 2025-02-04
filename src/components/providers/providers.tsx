import ErrorBoundary from '@/components/error-boundary'
import NextIntlProvider from '@/components/providers/next-intl-provider'
import React from 'react'

/**
 * Props for the Providers component
 */
interface ProvidersProps {
  children: React.ReactNode
}

/**
 * Global providers wrapper component that provides necessary context to the application
 * Currently includes:
 * - NextIntlProvider for internationalization
 * - ErrorBoundary for graceful error handling
 *
 * @param props - Component properties
 * @returns The wrapped application with all providers
 */
export default function Providers({
  children
}: ProvidersProps): React.ReactElement {
  return (
    <ErrorBoundary>
      <NextIntlProvider>{children}</NextIntlProvider>
    </ErrorBoundary>
  )
}
