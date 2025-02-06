// context.ts

import contentfulConfig, { ContentfulConfig } from '@/lib/contentful-config'
import { NextRequest } from 'next/server'

/**
 * Context type for GraphQL resolvers
 * @interface Context
 * @property {NextRequest} req - The Next.js request object
 * @property {string} accessToken - The Contentful access token
 * @property {string} spaceId - The Contentful space ID
 * @property {string} environmentId - The Contentful environment ID
 */
export type ContentfulContext = {
  req: NextRequest
  // Add other context properties as needed
  accessToken: string
  spaceId: string
  environmentId: string
}

/**
 * Create the context for the GraphQL resolvers
 * @param {NextRequest} req - The Next.js request object
 * @returns {ContentfulContext} The context for the GraphQL resolvers
 */
export const createContext: (req: NextRequest) => ContentfulContext = (
  req: NextRequest
): ContentfulContext => {
  const options: ContentfulConfig = contentfulConfig

  const { accessToken, spaceId, environmentId } = options

  return {
    req,
    accessToken,
    spaceId,
    environmentId
  }
}

export default createContext
