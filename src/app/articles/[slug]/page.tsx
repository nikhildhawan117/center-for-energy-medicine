import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, getLatestPosts } from "@/content/posts";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getLatestPosts(3).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/articles"
        className="text-sm font-semibold text-teal hover:text-teal-deep"
      >
        ← All articles
      </Link>
      <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        {post.dateLabel || "Article"}
      </p>
      <h1 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-ink-soft">By Dr. Aruna Bakhru</p>

      <div
        className="prose-energy mt-8"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      <div className="mt-12 border-t border-teal-soft pt-8">
        <h2 className="font-display text-xl font-semibold text-ink">Keep reading</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/articles/${r.slug}`}
              className="rounded-2xl border border-teal-soft bg-cream p-4 hover:shadow-md"
            >
              <p className="font-display text-[15px] font-semibold text-ink">{r.title}</p>
              <p className="mt-2 text-xs text-teal">Read →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
