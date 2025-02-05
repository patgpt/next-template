import { NextIntlClientProvider, type Formats, type IntlError } from 'next-intl'
import { getMessages } from 'next-intl/server'

import type { ReactNode } from 'react'

/**
 * NextIntlProviderProps interface
 *
 * @description Defines the props for the NextIntlProvider component
 */
export interface NextIntlProviderProps {
  children: ReactNode
}

// Default formats for date, time, currency and list formatting
const DEFAULT_FORMATS: Formats = {
  dateTime: {
    short: { day: 'numeric', month: 'short', year: 'numeric' }
  },
  number: {
    currency: { style: 'currency', currency: 'USD' }
  },
  list: {
    long: { style: 'long' }
  }
}

/**
 * Error handler for i18n errors
 *
 * @param error - The error object
 */
const handleError = (error: IntlError): void => {
  console.error('[i18n Error]:', {
    code: error.code,
    cause: error.cause,
    message: error.message
  })
}

/**
 * NextIntlProvider component
 *
 * @description A component that provides internationalization context to the application using next-intl
 * @param props - Component properties
 * @returns Internationalized provider wrapped around children
 */
export default async function NextIntlProvider({
  children
}: NextIntlProviderProps) {
  const messages = await getMessages()

  return (
    <>
      <NextIntlClientProvider
        messages={messages}
        // formats={DEFAULT_FORMATS}
        // onError={handleError}
        // timeZone="America/Toronto"
      >
        {children}
      </NextIntlClientProvider>
    </>
  )
}
