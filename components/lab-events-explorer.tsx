"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import type { LabEvent, LabEventCategory } from "@/data/lab-events";
import { labEventCategories, labEventYears } from "@/data/lab-events";

type CategoryFilter = "All Categories" | LabEventCategory;
type YearFilter = "All Years" | (typeof labEventYears)[number];

export function LabEventsExplorer({ events }: { events: LabEvent[] }) {
  const [category, setCategory] = useState<CategoryFilter>("All Categories");
  const [year, setYear] = useState<YearFilter>("All Years");
  const reduceMotion = useReducedMotion();

  const filteredEvents = useMemo(
    () =>
      events.filter((event) => {
        const categoryMatches = category === "All Categories" || event.categories.includes(category);
        const yearMatches = year === "All Years" || event.year === year;
        return categoryMatches && yearMatches;
      }),
    [category, events, year],
  );

  const categories: CategoryFilter[] = ["All Categories", ...labEventCategories];
  const years: YearFilter[] = ["All Years", ...labEventYears];

  return (
    <div>
      <div className="grid gap-8 rounded-[28px] border border-[#D8E5FF] bg-white p-6 shadow-[0_12px_38px_rgba(11,23,57,0.05)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40AF]">Filter by category</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none ${
                  category === item
                    ? "border-[#1E40AF] bg-[#1E40AF] text-white shadow-sm"
                    : "border-[#D8E5FF] bg-[#F4F8FF] text-[#34435E] hover:-translate-y-0.5 hover:border-[#1E40AF]/50 hover:text-[#1E40AF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40AF]">Filter by year</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {years.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={year === item}
                onClick={() => setYear(item)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none ${
                  year === item
                    ? "border-[#0B1739] bg-[#0B1739] text-white shadow-sm"
                    : "border-[#D8E5FF] bg-white text-[#34435E] hover:-translate-y-0.5 hover:border-[#1E40AF]/50 hover:text-[#1E40AF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <p className="mt-8 text-sm font-medium text-[#34435E]" aria-live="polite">
        {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"}
      </p>

      {filteredEvents.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <motion.article
              key={event.slug}
              layout={!reduceMotion}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="group overflow-hidden rounded-[26px] border border-[#D8E5FF] bg-white shadow-[0_10px_34px_rgba(11,23,57,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/35 hover:shadow-[0_22px_52px_rgba(30,64,175,0.1)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <Link
                href={`/life-in-the-lab/${event.slug}`}
                className="block rounded-[26px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#EAF1FF]">
                  <Image
                    src={event.heroImage.src}
                    alt={event.heroImage.alt}
                    fill
                    sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                    className={event.preserveImageOrientation ? "object-contain" : "object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"}
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((item) => (
                      <span key={item} className="rounded-full border border-[#D8E5FF] bg-[#F4F8FF] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#1E40AF]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#0B1739]">{event.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#34435E]">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{event.displayDate}</span>
                    <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" />{event.location}</span>
                  </div>
                  <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#34435E]">{event.shortDescription}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF]">
                    View Event
                    <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[26px] border border-dashed border-[#B8CDF5] bg-white px-6 py-16 text-center">
          <h3 className="text-xl font-semibold text-[#0B1739]">No events match these filters yet.</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#34435E]">New lab moments will appear here as the event archive grows.</p>
        </div>
      )}
    </div>
  );
}
