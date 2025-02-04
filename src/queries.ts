import type { TypePageBlogPostFields } from '@/@types/contentful-types'
import type { CreateClientParams, EntrySkeletonType } from 'contentful'
import * as contentful from 'contentful'
import dotenv from 'dotenv'
dotenv.config()
type CustomLoggers = {
  level: string
  data: string | Record<string, unknown> | unknown | undefined
}
/**
 * Logger function for handling different log levels
 * @param level - The log level ('error' | 'warning' | 'info' | 'debug')
 * @param data - The data to be logged
 * @returns void
 */
const Logger = ({ level, data }: CustomLoggers) => {
  switch (level) {
    case 'error':
      console.error(data)
      break
    case 'warning':
      console.warn(data)
      break
    case 'info':
      console.info(data)
      break
    case 'debug':
      console.debug(data)
      break
    default:
      console.log(data)
      break
  }
}

const params: CreateClientParams = {
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
  //   logHandler: (level, data) => Logger({ level: level, data: data }),
  //   host:
  //     process.env.NODE_ENV === 'production'
  //       ? 'cdn.contentful.com'
  //       : 'preview.contentful.com'
}

const client = contentful.createClient(params)

export const getBlogPostCollection = () =>
  client
    .getEntries<EntrySkeletonType<TypePageBlogPostFields>>({
      locale: 'en-US',
      select: ['sys', 'fields', 'fields']
    })
    .then((response) => {
      return response.items
    })
    .catch((error) => {
      console.error(error)
    })

export default client
