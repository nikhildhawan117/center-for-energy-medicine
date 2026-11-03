import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interesting Books",
  description: "Books recommended by Dr. Aruna Bakhru on energy medicine, nutrition, and healing.",
};

const BOOKS = [
  {
    asin: "1879181584",
    title: "Vibrational Medicine",
    cover: "https://covers.openlibrary.org/b/isbn/1879181584-L.jpg",
  },
  {
    asin: "0393709949",
    title: "Nutrition Essentials for Mental Health",
    cover: "https://covers.openlibrary.org/b/isbn/0393709949-L.jpg",
  },
  {
    asin: "0977952029",
    title: "Curing the Incurable",
    cover: "https://covers.openlibrary.org/b/isbn/0977952029-L.jpg",
  },
  {
    asin: "1880509083",
    title: "Our Toxic World: A Wake Up Call",
    cover: "https://covers.openlibrary.org/b/isbn/1880509083-L.jpg",
  },
  {
    asin: "0615358853",
    title: "Recommended Reading",
    cover: "https://covers.openlibrary.org/b/isbn/0615358853-L.jpg",
  },
  {
    asin: "1498759483",
    title: "Nutrition and Integrative Medicine: A Primer for Clinicians",
    cover: null,
  },
];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        Reading List
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        Interesting Books
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Books Dr. Bakhru recommends on energy medicine, nutrition, toxicity, and healing.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {BOOKS.map((b) => (
          <a
            key={b.asin}
            href={`https://www.amazon.com/dp/${b.asin}?tag=httpwwwthecen-20`}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-teal-soft bg-cream transition-shadow hover:shadow-lg"
          >
            <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-parchment">
              {b.cover ? (
                <img
                  src={b.cover}
                  alt={b.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-teal-deep p-6 text-center">
                  <p className="font-display text-lg font-semibold text-cream">{b.title}</p>
                  <p className="mt-2 text-xs text-cream/70">Edited by Aruna Bakhru, MD, FACP</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="font-display text-[15px] font-semibold text-ink group-hover:text-teal">
                {b.title}
              </p>
              <p className="mt-1 text-xs font-semibold text-teal">View on Amazon →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
