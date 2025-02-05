import type { PageParams } from '@/@types/types'
import { routing } from '@/i18n/routing'

import { getBlogPostCollection } from '@/lib/client'
import { console } from 'inspector'
import { notFound } from 'next/navigation'

/**
 * Generate static parameters for the blog page
 *
 * @description Generates static parameters for the blog page
 * @returns Static parameters for the blog page
 */
export async function generateStaticParams() {
  const getPosts = async () => await getBlogPostCollection()
  const posts = await getPosts()
  if (!posts) {
    return notFound()
  }
  const result = posts.map((post) => ({
    params: {
      locale: post.sys.locale || routing.defaultLocale,
      slug: post.fields.slug
    }
  }))
  console.log(result, 'params result')
  return result
}

/**
 * Blog page component
 *
 * @description A component that displays a blog page
 * @param params - Component params
 * @returns A blog page
 */
async function Page({ params }: PageParams): Promise<React.ReactElement> {
  const { locale, slug } = await params
  console.log(locale, slug, 'locale, slug')
  const posts = await getBlogPostCollection()
  if (!posts) {
    return notFound()
  }

  return (
    <div>
      <h1>{slug}</h1>
      <div className="container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h2>Hello world</h2>
      </div>
    </div>
  )
}

export default Page
