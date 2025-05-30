import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      {/* Header */}
        <div className="text-center pt-12">
          <h1 className="text-4xl font-bold mb-6"> My Blogs </h1>
        </div>
      <BlogPosts />
    </section>
  )
}
