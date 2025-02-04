import { getSdk, type PageBlogPost } from '@/graphql/_generated_/sdk'
import { contentfulConfig } from '@/lib/contentful-config'
import { GraphQLClient } from 'graphql-request'
import type { Locale } from 'next-intl'
import { notFound } from 'next/navigation'

const client = new GraphQLClient(contentfulConfig.graphqlEndpoint, {
  headers: {
    Authorization: `Bearer ${contentfulConfig.accessToken}`
  },
  cache: 'no-cache', // 'default', 'no-cache', 'reload', 'force-cache', or 'only-if-cached',
  mode: 'cors', // 'cors', 'no-cors', 'same-origin', 'navigate',
  next: {
    revalidate: 60
  }
})

const sdk = getSdk(client)

export default sdk

/**
 * Fetches a blog post by its slug
 * @param slug - The unique identifier for the blog post
 * @param preview - Whether to fetch preview content
 * @param locale - The locale to fetch content in
 * @throws {Error} If the blog post cannot be fetched
 */
const fetchBlogPostBySlug = async (
  slug: string,
  preview: boolean,
  locale: Locale
): Promise<PageBlogPost> => {
  try {
    const { data } = await sdk.getPageBlotPost({ slug, preview, locale })
    const post = data?.pageBlogPostCollection?.items?.[0]

    if (!post) {
      return notFound()
    }

    // Explicit type assertion since we know the structure matches PageBlogPost
    return post as unknown as PageBlogPost
  } catch (error) {
    console.error('Failed to fetch blog post:', { slug, error })
    throw error instanceof Error
      ? error
      : new Error('Failed to fetch blog post')
  }
}

export { fetchBlogPostBySlug }
