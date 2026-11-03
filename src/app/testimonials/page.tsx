import type { Metadata } from "next";
import { TESTIMONIALS } from "@/content/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Patient stories from Dr. Aruna Bakhru's energy medicine practice.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        Patient Stories
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        Testimonials
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Real experiences from patients who found answers through energy medicine.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className={`flex flex-col rounded-3xl border p-7 ${
              i % 3 === 0
                ? "border-teal-soft bg-teal-soft/40"
                : i % 3 === 1
                  ? "border-gold/40 bg-gold-soft/50"
                  : "border-teal-soft bg-cream"
            }`}
          >
            <span className="font-display text-4xl text-gold">“</span>
            <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-soft">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-teal-deep">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-soft">
        Individual results vary. These stories reflect personal experiences, not medical
        advice.
      </p>
    </div>
  );
}
