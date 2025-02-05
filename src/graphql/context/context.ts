// context.ts

import { NextRequest } from 'next/server'

export type Context = {
  req: NextRequest
  // Add other context properties as needed
  contentfulAccessToken: string
  contentfulSpaceId: string
  contentfulEnvironmentId: string
}
