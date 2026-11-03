import Link from "next/link";
import Hero from "@/components/Hero";
import { BOOK, QA, WELCOME, PRODUCTS, SERVICES, BRAND_BANNERS } from "@/content/site";
import { getLatestPosts } from "@/content/posts";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">{kicker}</p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const latest = getLatestPosts(3);

  return (
    <>
      <Hero />

      {/* Brand banners */}
      <section className="border-b border-teal-soft bg-cream">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {BRAND_BANNERS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-2xl border border-teal-soft transition-shadow hover:shadow-lg"
            >
              <img src={b.img} alt={b.name} className="h-28 w-full object-cover" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading kicker="Welcome" title={WELCOME.title} />
        <p className="mt-4 text-center text-lg font-medium text-teal-deep">
          Integrative and Functional Medicine in Poughkeepsie, NY, specializing in the
          mind-body connection.
        </p>
        <div className="mt-6 space-y-4 text-center text-lg leading-relaxed text-ink-soft">
          {WELCOME.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {[SERVICES.energy, SERVICES.wellbeing].map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-teal-soft bg-parchment p-7"
            >
              <h3 className="font-display text-xl font-semibold text-teal-deep">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-teal text-cream">
            <span className="font-display text-3xl font-bold">24</span>
            <span className="px-3 text-center text-[10px] leading-tight tracking-wide uppercase">
              Years of healing in Poughkeepsie NY
            </span>
          </div>
          <Link
            href="/about"
            className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream hover:bg-teal-deep"
          >
            Learn About the Practice
          </Link>
        </div>
      </section>

      {/* Shop products */}
      <section className="bg-parchment py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="Shop Products" title="Wellness, Delivered" />
          <p className="mx-auto mt-4 max-w-3xl text-center text-ink-soft">
            From vitamin and mineral supplements, cognitive, joint and heart health, and
            weight-loss products, to skin care, healthy hair, and green and non-toxic
            household products.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-teal-soft bg-cream transition-shadow hover:shadow-lg"
              >
                {p.img ? (
                  <div className="flex h-36 items-center justify-center overflow-hidden bg-white p-2">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-36 items-center justify-center bg-teal-soft">
                    <span className="font-display text-3xl font-semibold text-teal-deep">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-4 text-center">
                  <p className="font-display text-lg font-semibold text-ink">{p.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="bg-teal-deep py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="flex justify-center gap-4 md:col-span-1">
              <img
                src="/images/291bb9816f.jpg"
                alt="Nutrition and Integrative Medicine for Clinicians"
                loading="lazy"
                className="w-32 rounded-lg shadow-xl"
              />
              <img
                src="/images/c04acf7477.jpg"
                alt="Nutrition and Integrative Medicine book"
                loading="lazy"
                className="w-32 rounded-lg shadow-xl"
              />
            </div>
            <div className="text-center md:col-span-2 md:text-left">
              <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                {BOOK.kicker}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{BOOK.title}</h2>
              <p className="mt-5 max-w-2xl text-cream/85">{BOOK.text}</p>
              <a
                href={BOOK.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                {BOOK.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-gold/40 bg-gold-soft p-8 text-center sm:p-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
            {QA.kicker}
          </p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            {QA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">{QA.text}</p>
          <Link
            href="/articles/an-interview-with-dr-aruna-bakhru"
            className="mt-6 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-cream hover:bg-teal-deep"
          >
            Read the Interview
          </Link>
        </div>
      </section>

      {/* Latest articles */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading kicker="From the Blog" title="Latest Articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-teal-soft bg-cream p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-semibold tracking-wide text-teal uppercase">
                {post.date}
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold text-ink group-hover:text-teal">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-teal">Read more →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="inline-block rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal hover:bg-teal hover:text-cream"
          >
            Browse All Articles
          </Link>
        </div>
      </section>
    </>
  );
}
