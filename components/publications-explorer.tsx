"use client";

import { useMemo, useState } from "react";
import { PublicationAuthors, PublicationCitation, PublicationLinks } from "@/components/publication-details";
import type { Publication } from "@/data/publications";
import { cn } from "@/lib/utils";

export function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [yearFilter, setYearFilter] = useState<number | "all">("all");
  const years = useMemo(
    () => [...new Set(publications.map((publication) => publication.year))].sort((a, b) => b - a),
    [publications],
  );
  const visiblePublications = yearFilter === "all"
    ? publications
    : publications.filter((publication) => publication.year === yearFilter);
  const groupedPublications = visiblePublications.reduce<Map<number, Publication[]>>((groups, publication) => {
    groups.set(publication.year, [...(groups.get(publication.year) ?? []), publication]);
    return groups;
  }, new Map());

  return (
    <div>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3 sm:flex-wrap sm:overflow-visible" role="group" aria-label="Filter publications by year">
        <button
          type="button"
          aria-pressed={yearFilter === "all"}
          onClick={() => setYearFilter("all")}
          className={cn(
            "min-h-11 shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]",
            yearFilter === "all" ? "border-[#1E40AF] bg-[#1E40AF] text-white" : "border-[#D8E5FF] bg-white text-[#34435E] hover:border-[#1E40AF] hover:text-[#1E40AF]",
          )}
        >
          All Years
        </button>
        {years.map((year) => (
          <button
            key={year}
            type="button"
            aria-pressed={yearFilter === year}
            onClick={() => setYearFilter(year)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]",
              yearFilter === year ? "border-[#1E40AF] bg-[#1E40AF] text-white" : "border-[#D8E5FF] bg-white text-[#34435E] hover:border-[#1E40AF] hover:text-[#1E40AF]",
            )}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-20">
        {[...groupedPublications.entries()].map(([year, yearPublications]) => (
          <section key={year} aria-labelledby={`publication-year-${year}`} className="grid gap-7 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-12">
            <h3 id={`publication-year-${year}`} className="text-4xl font-semibold tracking-[-0.045em] text-[#1E40AF] sm:text-5xl">
              {year}
            </h3>
            <ol className="min-w-0 border-t border-[#BFD2FA]">
              {yearPublications.map((publication) => (
                <li key={publication.id} className="min-w-0 border-b border-[#D8E5FF] py-8 sm:py-10">
                  <article className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end xl:gap-10">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E40AF]">
                        {year} <span aria-hidden="true" className="mx-2 text-[#9DB8ED]">/</span> {publication.journal}
                      </p>
                      <h4 className="mt-4 break-words text-xl font-semibold leading-8 tracking-[-0.02em] text-[#0B1739] sm:text-2xl sm:leading-9">
                        {publication.title}
                      </h4>
                      <p className="mt-4 break-words text-sm leading-6 text-[#34435E]">
                        <PublicationAuthors authors={publication.authors} />
                      </p>
                      <div className="mt-2"><PublicationCitation publication={publication} /></div>
                    </div>
                    <div className="xl:pb-0.5"><PublicationLinks publication={publication} /></div>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
