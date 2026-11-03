"use client";

import Link from "next/link";
import { NAV, OPPORTUNITIES, SITE, SOCIALS } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{SITE.name}</p>
          <p className="mt-1 text-sm text-cream/70">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-cream/80">{SITE.doctor}</p>
          <p className="text-sm text-cream/80">{SITE.city}</p>
          <a
            href={SITE.phoneHref}
            className="mt-3 inline-block rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink"
          >
            {SITE.phone}
          </a>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 underline-offset-4 hover:text-gold hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-cream/70">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/85 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold tracking-wide uppercase text-cream/70">
            Opportunities
          </p>
          <ul className="mt-3 space-y-2">
            {OPPORTUNITIES.map((o) => (
              <li key={o.href}>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/85 hover:text-gold"
                >
                  {o.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-cream/70">
            Stay Connected
          </p>
          <p className="mt-3 text-sm text-cream/80">
            Join the mailing list for news, updates, and exclusive discounts.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const email = data.get("email");
              window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
                "Mailing list signup"
              )}&body=${encodeURIComponent(`Please add ${email} to the mailing list.`)}`;
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-full border border-cream/30 bg-cream/10 px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:px-6">
          <p>Copyright © {SITE.doctor}. All Rights Reserved.</p>
          <p>Rebuilt with care from the original site archive.</p>
        </div>
      </div>
    </footer>
  );
}
