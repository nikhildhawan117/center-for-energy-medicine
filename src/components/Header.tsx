"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-soft bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="The Center for Energy Medicine"
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-teal text-cream"
                  : "text-ink-soft hover:bg-teal-soft hover:text-teal-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            {SITE.phone}
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-teal-soft bg-cream px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                pathname === item.href ? "bg-teal text-cream" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 block rounded-lg bg-gold px-3 py-2.5 text-center text-sm font-semibold text-ink"
          >
            Call {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
