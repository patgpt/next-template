import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
import { contentfulConfig } from './src/lib/contentful-config'

dotenv.config()

const config: CodegenConfig = {
  hooks: {
    afterAllFileWrite: ['eslint --fix']
  },

  overwrite: true,
  watch: true,
  schema: `${contentfulConfig.graphqlEndpoint}?access_token=${contentfulConfig.accessToken}`,
  documents: 'src/graphql/**/*.(ts|gql|graphql)',
  generates: {
    'src/graphql/_generated_': {
      // preset: 'client',

      plugins: [
        'typescript',
        'typescript-operations',
        'schema-ast',
        'typescript-graphql-request',
        'typescript-resolvers'
      ]
    },
    'src/_generated_/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
