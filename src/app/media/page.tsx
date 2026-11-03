import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description: "Videos from Dr. Aruna Bakhru and the Center for Energy Medicine.",
};

const CHANNEL = "https://www.youtube.com/channel/UC9OnQE4hBMLAas76JddbmiA";

const SECTIONS = [
  {
    title: "Dr. Bakhru's Acceptance Speech",
    desc: "Sacred Fire of Liberty Gala acceptance speech.",
  },
  {
    title: "Thorne Product Videos",
    desc: "Learn about professional-grade nutritional supplements.",
  },
  {
    title: "Shaklee Product Videos",
    desc: "Wellness products and the science behind them.",
  },
  {
    title: "Young Living Product Videos",
    desc: "Essential oils and natural wellness.",
  },
  {
    title: "Shaklee Science",
    desc: "Research and clinical studies behind the products.",
  },
  {
    title: "Young Living Essential Edibles",
    desc: "Cooking and nutrition with essential oils.",
  },
];

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">Watch</p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">Media</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Talks and product videos from Dr. Bakhru and the Center for Energy Medicine.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <a
            key={s.title}
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-teal-soft bg-cream p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal-deep transition-colors group-hover:bg-teal group-hover:text-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-display mt-4 text-lg font-semibold text-ink group-hover:text-teal">
              {s.title}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-teal">Watch on YouTube →</p>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-teal-deep p-8 text-center text-cream">
        <p className="font-display text-xl font-semibold">Subscribe for new videos</p>
        <p className="mt-2 text-cream/80">
          Find all of Dr. Bakhru's videos on the Center for Energy Medicine YouTube channel.
        </p>
        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
        >
          Visit YouTube Channel
        </a>
      </div>
    </div>
  );
}
