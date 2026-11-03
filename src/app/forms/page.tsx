import type { Metadata } from "next";
import { FORM_DOCS, INFO_SHEETS, POLICIES } from "@/content/site";

export const metadata: Metadata = {
  title: "Office Forms & Policies",
  description:
    "Office policies, registration forms, questionnaires, and patient information sheets.",
};

export default function FormsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-teal uppercase">
        New & Returning Patients
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-ink sm:text-5xl">
        Office Forms & Policies
      </h1>

      <h2 className="font-display mt-12 text-2xl font-semibold text-ink">Office Policies</h2>
      <ul className="mt-6 space-y-4">
        {POLICIES.map((p, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal font-display text-sm font-semibold text-cream">
              {i + 1}
            </span>
            <p className="leading-relaxed text-ink-soft">{p}</p>
          </li>
        ))}
      </ul>

      <h2 className="font-display mt-12 text-2xl font-semibold text-ink">
        Registration Forms & Questionnaires
      </h2>
      <p className="mt-3 text-ink-soft">
        Please download, complete, and bring these forms to your visit.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {FORM_DOCS.map((doc) => (
          <a
            key={doc.file}
            href={`/forms/${doc.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-teal-soft bg-cream p-4 transition-shadow hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal-deep transition-colors group-hover:bg-teal group-hover:text-cream">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <path d="M14 3v6h6" />
              </svg>
            </span>
            <span className="text-sm font-medium text-ink group-hover:text-teal">
              {doc.name}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        Forms open as PDF documents. If a form is missing, please call the office and we
        will provide it.
      </p>

      <h2 className="font-display mt-12 text-2xl font-semibold text-ink">
        Patient Info Sheets
      </h2>
      <p className="mt-3 text-ink-soft">
        Educational handouts on diet, exercise, and everyday wellness.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {INFO_SHEETS.map((doc) => (
          <a
            key={doc.file}
            href={`/forms/${doc.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-teal-soft bg-cream p-4 transition-shadow hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <path d="M14 3v6h6" />
              </svg>
            </span>
            <span className="text-sm font-medium text-ink group-hover:text-teal">
              {doc.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
