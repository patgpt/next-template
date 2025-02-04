import dotenv from 'dotenv'
import type { IGraphQLConfig } from 'graphql-config'

dotenv.config()

const config: IGraphQLConfig = {
  schema: [
    {
      [`${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
          }
        }
    },
    '@/src/graphql/_generated_/graphql.schema.graphql'
  ],
  documents: ['@/src/graphql/_generated_/**/*.{graphql,gql}'],
  projects: {
    default: {
      schema: '@/src/graphql/_generated_/graphql.schema.graphql',
      documents: ['@/src/graphql/_generated_/**/*.{graphql,gql}']
    }
  }
}

export default config
