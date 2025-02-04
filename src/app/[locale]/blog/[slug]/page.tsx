import type { PageParams } from '@/@types/types'
import { routing } from '@/i18n/routing'

import { getBlogPostCollection } from '@/queries'
import { console } from 'inspector'
import { notFound } from 'next/navigation'

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
