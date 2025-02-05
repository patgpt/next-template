import { contentfulConfig } from '@/lib/contentful-config'
import { GraphQLClient } from 'graphql-request'

/**
 * GraphQL client for Contentful
 *
 * @description Initializes a GraphQL client with the Contentful GraphQL endpoint and access token
 * @returns GraphQL client instance
 */
const client = new GraphQLClient(contentfulConfig.graphqlEndpoint, {
  headers: {
    Authorization: `Bearer ${contentfulConfig.accessToken}`
  },
  cache: 'no-cache', // 'default', 'no-cache', 'reload', 'force-cache', or 'only-if-cached',
  mode: 'cors', // 'cors', 'no-cors', 'same-origin', 'navigate',
  next: {
    revalidate: 60
  }
})

export default client
