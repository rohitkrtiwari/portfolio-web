import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { getBlogPosts } from "app/blog/utils";

type WritingSection =
  | "featured-research"
  | "systems-engineering"
  | "reflections";

type WritingPost = {
  slug: string;
  title: string;
  category: string;
  section: WritingSection;
  thesis: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  order: number;
  draft?: boolean;
};

const writingSections: WritingSection[] = [
  "featured-research",
  "systems-engineering",
  "reflections",
];

function isWritingSection(value?: string): value is WritingSection {
  return writingSections.includes(value as WritingSection);
}

const sections: Array<{
  id: WritingSection;
  title: string;
  description: string;
}> = [
  {
    id: "featured-research",
    title: "Featured Research",
    description:
      "Methods, results, limitations, and conclusions from focused research work.",
  },
  {
    id: "systems-engineering",
    title: "Systems and Engineering",
    description:
      "Essays on embedded systems, intelligent tools, and engineering under real constraints.",
  },
  {
    id: "reflections",
    title: "Reflections",
    description:
      "Personal essays about learning, ambition, and developing better ways of working.",
  },
];

function formatDate(value: string) {
  const normalizedValue =
    value.length === 10 ? `${value}T00:00:00Z` : value;
  const date = new Date(normalizedValue);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function WritingCard({
  post,
  featured = false,
}: {
  post: WritingPost;
  featured?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className={[
          "flex h-full flex-col rounded-2xl border border-neutral-200",
          "bg-white transition-colors",
          "hover:border-blue-300 dark:border-neutral-800 dark:bg-neutral-950",
          "dark:hover:border-blue-800",
          featured ? "p-6 md:p-8" : "p-6",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
              {post.category}
            </p>

            <h3
              className={[
                "mt-3 font-semibold tracking-tight text-neutral-950",
                "transition-colors group-hover:text-blue-600",
                "dark:text-white dark:group-hover:text-blue-400",
                featured ? "text-2xl md:text-3xl" : "text-xl",
              ].join(" ")}
            >
              {post.title}
            </h3>
          </div>

          <ArrowUpRightIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
          />
        </div>

        <p
          className={[
            "mt-4 leading-7 text-neutral-600 dark:text-neutral-400",
            featured ? "max-w-3xl text-base md:text-lg" : "text-sm",
          ].join(" ")}
        >
          {post.thesis}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-6 text-xs text-neutral-500">
          <span>{post.readingTime}</span>

          <span aria-hidden="true">·</span>

          <time dateTime={post.publishedAt}>
            Published {formatDate(post.publishedAt)}
          </time>

          {post.updatedAt && (
            <>
              <span aria-hidden="true">·</span>

              <time dateTime={post.updatedAt}>
                Updated {formatDate(post.updatedAt)}
              </time>
            </>
          )}
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const posts: WritingPost[] = getBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    category: post.metadata.category ?? "Essay",
    section: isWritingSection(post.metadata.section)
      ? post.metadata.section
      : "reflections",
    thesis: post.metadata.thesis ?? post.metadata.summary ?? "",
    publishedAt: post.metadata.publishedAt,
    updatedAt: post.metadata.updatedAt,
    readingTime: post.metadata.readingTime,
    order: post.metadata.order ?? 0,
    draft: post.metadata.draft,
  }));

  const publishedPosts = posts.filter((post) => !post.draft);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
          Notes and essays
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
          Writing
        </h1>

        <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Research notes and essays on embedded systems, applied AI, and
          engineering practice.
        </p>
      </header>

      <div className="mt-16 space-y-16">
        {sections.map((section) => {
          const sectionPosts = publishedPosts
            .filter((post) => post.section === section.id)
            .sort((first, second) => first.order - second.order);

          if (sectionPosts.length === 0) {
            return null;
          }

          const isFeatured = section.id === "featured-research";

          return (
            <section key={section.id} aria-labelledby={section.id}>
              <div className="mb-7 max-w-3xl">
                <h2
                  id={section.id}
                  className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white"
                >
                  {section.title}
                </h2>

                <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                  {section.description}
                </p>
              </div>

              <div
                className={
                  isFeatured
                    ? "grid gap-6"
                    : "grid items-stretch gap-6 md:grid-cols-2"
                }
              >
                {sectionPosts.map((post) => (
                  <WritingCard
                    key={post.slug}
                    post={post}
                    featured={isFeatured}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}