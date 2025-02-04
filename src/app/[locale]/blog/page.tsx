import { Link } from '@/i18n/routing'
import { getBlogPostCollection } from '@/queries'
import { notFound } from 'next/navigation'

async function Page() {
  const posts = await getBlogPostCollection()
  if (!posts) {
    return notFound()
  }
  return (
    <div className="container grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
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
