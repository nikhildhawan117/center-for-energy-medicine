"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SLIDES, HERO_IMAGES, SITE } from "@/content/site";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-teal-deep text-cream">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === index % HERO_IMAGES.length ? 1 : 0,
          }}
          aria-hidden
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/60 to-teal-deep/20" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
          {slide.eyebrow}
        </p>
        <h1
          key={index}
          className="font-display mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl"
        >
          {slide.title}
        </h1>
        <p key={`t-${index}`} className="mt-5 max-w-2xl text-lg text-cream/85">
          {slide.text}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Meet Dr. Bakhru
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            Contact the Office
          </Link>
        </div>
        <div className="mt-10 flex gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-2 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative border-t border-cream/15 bg-teal-deep/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 text-sm text-cream/80 sm:px-6">
          <span className="font-semibold text-cream">{SITE.doctor}</span>
          <span>{SITE.city}</span>
          <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-cream">
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
