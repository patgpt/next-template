import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID || 'master',
  host:
    process.env.NODE_ENV === 'production'
      ? 'cdn.contentful.com'
      : 'preview.contentful.com'
})
