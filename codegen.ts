// codegen.ts

import { CodegenConfig } from '@graphql-codegen/cli'
import contentfulConfig from './src/lib/contentful-config'

/**
 * GraphQL schema configuration
 *
 * @description Defines the configuration for the GraphQL schema
 * @returns The schema configuration
 */
const schema: CodegenConfig['schema'] = [
  {
    [contentfulConfig.graphqlEndpoint]: {
      headers: {
        Authorization: `Bearer ${contentfulConfig.accessToken}`
      }
    }
  }
]
/**
 * Codegen configuration
 *
 * @description Defines the configuration for the GraphQL code generation
 * @returns The codegen configuration
 */
const config: CodegenConfig = {
  schema,
  documents: './src/graphql/operations/**/*.(graphql|gql)',
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-resolvers'],
      config: {
        enumsAsTypes: true,
        skipTypename: true
      }
    },
    './src/graphql/generated/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '@/graphql/contentful-context#ContentfulContext',
        mappers: {
          PageBlogPost: '@/graphql/generated/graphql#PageBlogPost'
        }
      }
    }
  }
}

export default config
