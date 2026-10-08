"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EventPhotoGallery } from "@/components/event-photo-gallery";
import { newsCategories, type NewsItem } from "@/data/news";
import { cn } from "@/lib/utils";

type CategoryFilter = (typeof newsCategories)[number];

export function NewsTimeline({ items }: { items: NewsItem[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredItems = useMemo(
    () => items.filter((item) => activeCategory === "All" || item.category === activeCategory),
    [activeCategory, items],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter news by category">
        {newsCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "min-h-11 rounded-full border px-5 py-2 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none",
              activeCategory === category
                ? "border-[#1E40AF] bg-[#1E40AF] text-white shadow-[0_6px_18px_rgba(30,64,175,0.16)]"
                : "border-[#D8E5FF] bg-white text-[#34435E] hover:border-[#1E40AF] hover:bg-[#F4F8FF] hover:text-[#1E40AF]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12" aria-live="polite">
        {filteredItems.length > 0 ? (
          <ol className="relative ml-3 border-l border-[#BFD3FB] pl-8 sm:ml-5 sm:pl-12">
            {filteredItems.map((item) => (
              <li key={item.id} className="relative pb-12 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[2.6rem] top-2 h-4 w-4 rounded-full bg-[#1E40AF] ring-8 ring-[#E8F0FF] sm:-left-[3.55rem]" />
                <article id={item.id} className="scroll-mt-28 overflow-hidden rounded-[24px] border border-[#D8E5FF] bg-white shadow-[0_8px_28px_rgba(11,23,57,0.045)]">
                  {item.image && (
                    item.image.preserveAspectRatio ? (
                      <div className="border-b border-[#D8E5FF] bg-[#F4F8FF] p-4 sm:p-8">
                        <Link
                          href={item.image.href ?? item.image.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View larger: ${item.image.alt}`}
                          className="mx-auto block max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_14px_40px_rgba(11,23,57,0.12)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
                        >
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            width={item.image.width ?? 1360}
                            height={item.image.height ?? 1760}
                            sizes="(min-width: 1024px) 42rem, 100vw"
                            className="h-auto w-full"
                          />
                        </Link>
                      </div>
                    ) : (
                      <div className="relative aspect-[16/7] overflow-hidden border-b border-[#D8E5FF] bg-[#EAF1FF]">
                        <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover object-center" />
                      </div>
                    )
                  )}
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1E40AF]">
                      <span>{item.category}</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime={item.publishedAt}>{item.displayDate ?? item.publishedAt}</time>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0B1739]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#34435E]">{item.summary}</p>
                    {item.paragraphs?.map((paragraph) => (
                      <p key={"text" in paragraph ? paragraph.text : paragraph.link.href} className="mt-3 text-sm leading-7 text-[#34435E]">
                        {"text" in paragraph ? (
                          paragraph.text
                        ) : (
                          <>
                            {paragraph.before}
                            <a
                              href={paragraph.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#1E40AF] underline decoration-[#9DB9EE] underline-offset-4 transition-colors hover:text-[#17358F] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E40AF]"
                            >
                              {paragraph.link.label}
                            </a>
                            {paragraph.after}
                          </>
                        )}
                      </p>
                    ))}
                    {item.details && (
                      <ul className="mt-5 grid gap-2 border-l-2 border-[#BFD3FB] pl-4 text-sm leading-6 text-[#34435E]">
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                    {item.href && (
                      <Link href={item.href} className="mt-6 inline-flex items-center text-sm font-semibold text-[#1E40AF] transition-colors hover:text-[#17358F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]">
                        {item.linkLabel ?? "Read more"}<ArrowRight size={16} className="ml-2" aria-hidden="true" />
                      </Link>
                    )}
                    {item.gallery && (
                      <section className="mt-10 border-t border-[#D8E5FF] pt-8" aria-labelledby={`${item.id}-gallery-heading`}>
                        <h4 id={`${item.id}-gallery-heading`} className="text-lg font-semibold tracking-tight text-[#0B1739] sm:text-xl">
                          {item.gallery.heading}
                        </h4>
                        <div className="mt-5">
                          <EventPhotoGallery
                            images={item.gallery.images}
                            label={item.gallery.heading}
                            preserveOrientation
                            featureFirst
                          />
                        </div>
                      </section>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="relative rounded-[28px] border border-dashed border-[#BFD3FB] bg-white px-6 py-16 text-center sm:px-10 sm:py-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF]">
              <CalendarDays size={28} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#0B1739]">Announcements coming soon.</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#34435E]">
              {activeCategory === "All"
                ? "Verified news and milestones will be added to this chronological timeline as the lab grows."
                : `${activeCategory} updates will appear here when they are available.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
