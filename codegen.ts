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
        'schema-ast',
        'typescript-graphql-request',
        'typescript-resolvers'
      ],
      config: {
        rawRequest: true
      }
    },
    'src/_generated_/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
