import { Link } from '@/i18n/routing'
import { getBlogPostCollection } from '@/lib/client'
import { notFound } from 'next/navigation'

/**
 * Blog page component
 *
 * @description A component that displays a blog page
 * @returns A blog page
 */
async function Page() {
  const posts = await getBlogPostCollection()
  if (!posts) {
    return notFound()
  }
  return (
    <div className="container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link href={`blog/${post.fields.slug}`} key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.slug}</p>
        </Link>
      ))}
    </div>
  )
}

export default Page
