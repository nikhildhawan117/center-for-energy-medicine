"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        Get in Touch
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        Contact Dr. Aruna Bakhru
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Please complete the form below and your message will be sent to the office. We
        will return your email as soon as possible. Thank you!
      </p>

      <div className="mt-8 rounded-2xl border border-gold/50 bg-gold-soft p-5 text-sm leading-relaxed text-ink">
        <p className="font-semibold">Important</p>
        <p className="mt-1">
          If this is an emergency, please contact your own doctor or go to the ER.
          Contact Dr. Bakhru at {SITE.phone} in an emergency only if she is your
          established primary.
        </p>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          {sent ? (
            <div className="rounded-3xl border border-teal-soft bg-teal-soft/50 p-10 text-center">
              <p className="font-display text-2xl font-semibold text-teal-deep">
                Thank you!
              </p>
              <p className="mt-3 text-ink-soft">
                Your email app should have opened with your message addressed to the
                office. Just hit send there and we will get back to you soon.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5 rounded-3xl border border-teal-soft bg-cream p-7 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const first = data.get("first");
                const last = data.get("last");
                const email = data.get("email");
                const message = data.get("message");
                const subject = `Website contact from ${first} ${last}`;
                const body = `Name: ${first} ${last}\nEmail: ${email}\n\n${message}`;
                window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-ink">First name *</span>
                  <input
                    name="first"
                    required
                    className="mt-1 w-full rounded-xl border border-teal-soft bg-white px-4 py-2.5 text-ink focus:border-teal focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-ink">Last name *</span>
                  <input
                    name="last"
                    required
                    className="mt-1 w-full rounded-xl border border-teal-soft bg-white px-4 py-2.5 text-ink focus:border-teal focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-ink">Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-teal-soft bg-white px-4 py-2.5 text-ink focus:border-teal focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-teal-soft bg-white px-4 py-2.5 text-ink focus:border-teal focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-teal py-3 text-sm font-semibold text-cream hover:bg-teal-deep sm:w-auto sm:px-10"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="md:col-span-2">
          <div className="rounded-3xl bg-teal-deep p-7 text-cream">
            <p className="text-sm font-semibold tracking-wide uppercase text-cream/70">
              Office
            </p>
            <p className="font-display mt-3 text-xl font-semibold">{SITE.doctor}</p>
            <p className="mt-1 text-cream/80">{SITE.city}</p>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {SITE.phone}
            </a>
            <p className="mt-6 text-sm text-cream/70">
              Prefer email? Write to us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-gold underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
