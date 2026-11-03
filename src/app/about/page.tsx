import type { Metadata } from "next";
import { ABOUT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "About Dr. Aruna Bakhru",
  description: `About ${SITE.doctor}: board-certified internal medicine integrated with energy medicine in ${SITE.city}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">About</p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        {ABOUT.title}
      </h1>

      <div className="mt-8 grid gap-8 rounded-3xl border border-teal-soft bg-parchment p-8 sm:p-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src="/images/ff5b7d2a23.jpg"
            alt="Dr. Aruna Bakhru"
            className="mx-auto w-48 rounded-2xl border-4 border-cream shadow-lg"
          />
          <p className="mt-3 text-center text-sm font-semibold text-teal-deep">
            {SITE.doctor}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-ink">{ABOUT.intro}</p>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <h2 className="font-display mt-12 text-2xl font-semibold text-ink sm:text-3xl">
        Credentials & Recognition
      </h2>
      <ul className="mt-6 space-y-3">
        {ABOUT.credentials.map((c) => (
          <li
            key={c}
            className="flex gap-3 rounded-2xl border border-teal-soft bg-cream p-4"
          >
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-cream">
              ✓
            </span>
            <span className="text-ink-soft">{c}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-3xl bg-teal-deep p-8 text-center text-cream sm:p-10">
        <h2 className="font-display text-2xl font-semibold">
          Experience integrative care for yourself
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cream/85">
          Dr. Bakhru sees patients at her private practice in {SITE.city}. Call to learn
          whether energy medicine is right for you.
        </p>
        <a
          href={SITE.phoneHref}
          className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink"
        >
          Call {SITE.phone}
        </a>
      </div>
    </div>
  );
}
