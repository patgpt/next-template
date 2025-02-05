// app/api/graphql/route.ts
import { createContentfulClient } from '@/lib/contentful-client'
import { createYoga } from 'graphql-yoga'
// import { schema } from '@/graphql/schema'

// Create Yoga instance
const yoga = createYoga({
  // schema,
  context: () => ({
    contentful: createContentfulClient()
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
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
