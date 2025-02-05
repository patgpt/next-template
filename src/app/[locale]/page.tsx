import type { PageParams } from '@/@types/types'
import Hero from '@/components/Hero'

import type { Entry } from 'contentful'

import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

export default async function HomePage({ params }: PageParams) {
  const { locale } = await params
  const posts = await contentfulClient.withAllLocales.getEntries<
    Entry<PageBlogPostCollection>
  >({
    content_type: 'pageBlogPostCollesction',
    limit: 10
  })

  if (!posts) {
    return notFound()
  }

  console.log(posts.items)
  const t = await getTranslations('HomePage')
  return (
    <div>
      <Hero />
      <section>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* {items.map((post: PageBlogPost) => (
            <li key={post.sys.id}>
              <Link href={`/blog/${post.slug}`}>{post.postTitle}</Link>
            </li>
          ))} */}
        </ul>
      </section>
      <h2 className="text-center text-5xl tracking-tight">Recent Posts</h2>
    </div>
  )
}
