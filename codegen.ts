// codegen.ts

import { contentfulConfig } from '@/lib/contentful-config'
import { CodegenConfig } from '@graphql-codegen/cli'

/**
 * Codegen configuration
 *
 * @description Defines the configuration for the GraphQL code generation
 * @returns The codegen configuration
 */
const config: CodegenConfig = {
  schema: [
    {
      [contentfulConfig.graphqlEndpoint]: {
        headers: {
          Authorization: `Bearer ${contentfulConfig.accessToken}`
        }
      }
    },
    './src/graphql/schema.graphql'
  ],
  documents: './src/graphql/operations/**/*.graphql',
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        enumsAsTypes: true,
        skipTypename: true
      }
    },
    './src/graphql/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '@/lib/contentful-client#ContentfulContext',
        mappers: {
          Post: '@/graphql/generated/types#Post'
        }
      }
    }
  }
}

export default config
