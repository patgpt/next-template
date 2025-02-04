/**
 * Contentful API configuration
 */
import dotenv from 'dotenv'
dotenv.config()
export const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  graphqlEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID || 'master'}`
}
