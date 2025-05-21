import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type BlogPostsProps = {
  limit?: number
  showAllLink?: boolean
  className?: string
}

export function BlogPosts({ limit, showAllLink = true, className = '' }: BlogPostsProps) {
  const allBlogs = getBlogPosts()
    .sort((a, b) => 
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, limit)

  return (
    <div className={`space-y-10 ${className}`}>
      {allBlogs.map((post) => (
        <article key={post.slug} className="group">
          <Link
            href={`/blog/${post.slug}`}
            className="block hover:bg-neutral-50 dark:hover:bg-neutral-800/50 p-4 rounded-lg transition"
          >
            <div className="flex gap-4 items-start">
              <time className="text-neutral-500 dark:text-neutral-400 text-sm w-16 flex-shrink-0">
                {formatDate(post.metadata.publishedAt, false)}
              </time>
              <div>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                  {post.metadata.title}
                </h2>
                {post.metadata.summary && (
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                    {post.metadata.summary}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </article>
      ))}

      {showAllLink && limit && allBlogs.length >= limit && (
        <div className="mt-12 text-center2">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all articles
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </div>
  )
}