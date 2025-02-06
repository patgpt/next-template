/**
 * Contentful API configuration
 */
import dotenv from 'dotenv'
dotenv.config()

/**
 * Interface defining the structure of Contentful configuration
 * @interface ContentfulConfig
 * @property {string} spaceId - The Contentful space ID
 * @property {string} environmentId - The Contentful environment ID (defaults to 'master')
 * @property {string} accessToken - The Contentful delivery API access token
 * @property {string} previewToken - The Contentful preview API access token
 * @property {string} graphqlEndpoint - The GraphQL API endpoint URL
 */
interface ContentfulConfig {
  spaceId: string
  environmentId: string
  accessToken: string
  previewToken: string
  graphqlEndpoint: string
}

/**
 * Contentful API configuration
 *
 * @description Configuration for the Contentful API
 * @returns Contentful API configuration
 */
const contentfulConfig: ContentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  graphqlEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID || 'master'}`
}

export type { ContentfulConfig }
export default contentfulConfig
