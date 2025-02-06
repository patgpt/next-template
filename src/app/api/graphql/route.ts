// app/api/graphql/route.ts
import createContext from '@/graphql/contentful-context/contentful-context'
import { createContentfulClient } from '@/lib/contentful-client'
import { createSchema, createYoga } from 'graphql-yoga'
// import { schema } from '@/graphql/schema'
const client = createContentfulClient()

/**
 * Create Yoga instance configured for Contentful
 * @description Sets up a GraphQL Yoga server that proxies requests to Contentful's GraphQL API
 */
const yoga = createYoga({
  // schema,
  graphqlEndpoint: '/api/graphql',
  context: createContext,
  graphiql: true,
  schema: createSchema({
    typeDefs: [...typeDefs, ...contentfulTypeDefs],
    resolvers: [...resolvers, ...contentfulResolvers]
  })
})

// Export handlers for Next.js App Router
export { yoga as GET, yoga as POST }

// Required for proper body parsing
export const dynamic = 'force-dynamic'
export const config = {
  api: {
    bodyParser: false
  }
}
