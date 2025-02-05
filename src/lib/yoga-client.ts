// src/lib/yoga-client.ts

import { createYoga } from 'graphql-yoga'

/**
 * Creates and returns a Yoga client configured with a custom fetch API.
 * @returns {ReturnType<typeof createYoga>} The configured Yoga client.
 */
export const getYogaClient = () => {
  return createYoga({
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {
      fetch: (input: RequestInfo | URL, init?: RequestInit) => {
        return fetch(input, {
          ...init,
          next: { revalidate: 60 }
        })
      }
    }
  })
}
