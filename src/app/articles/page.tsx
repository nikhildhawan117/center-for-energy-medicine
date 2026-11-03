import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles on energy medicine, nutrition, environmental health, and natural healing by Dr. Aruna Bakhru.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        Knowledge Library
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        Articles
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Essays and research notes on energy medicine, nutrition, environmental health,
        and natural healing, written by Dr. Bakhru and curated for patients.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/articles/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-teal-soft bg-cream p-6 transition-shadow hover:shadow-lg"
          >
            {post.dateLabel && (
              <p className="text-xs font-semibold tracking-wide text-teal uppercase">
                {post.dateLabel}
              </p>
            )}
            <h2 className="font-display mt-2 text-xl font-semibold text-ink group-hover:text-teal">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
            <span className="mt-4 text-sm font-semibold text-teal">Read article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
