import { contentfulConfig } from '@/lib/contentful-config'
// src/lib/contentful-client.ts
import { GraphQLClient } from 'graphql-request'

/**
 * Create a Contentful GraphQL client
 *
 * @description Initializes a GraphQL client with the Contentful GraphQL endpoint and access token
 * @returns GraphQL client instance
 */
export const createContentfulClient = () => {
  return new GraphQLClient(contentfulConfig.graphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${contentfulConfig.accessToken}`
    }
  })
}
