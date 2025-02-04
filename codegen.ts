import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
import { contentfulConfig } from './src/lib/contentful-config'

dotenv.config()

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: `${contentfulConfig.graphqlEndpoint}?access_token=${contentfulConfig.accessToken}`,
  documents: 'src/graphql/**/*.(ts|gql|graphql)',
  generates: {
    'src/graphql/_generated_/sdk.ts': {
      // preset: 'client',
      watchPattern: 'src/graphql/**/*.(ts|gql|graphql)',
      plugins: [
        'typescript',
        'typescript-operations',

        'typescript-graphql-request',
        'typescript-resolvers'
      ],
      config: {
        rawRequest: true,
        dedupeFragments: true
      }
    },
    'src/graphql/_generated_/graphql.schema.json': {
      plugins: ['introspection']
    },
    'src/graphql/_generated_/graphql.schema.graphql': {
      plugins: ['schema-ast']
    }
  }
}

export default config
