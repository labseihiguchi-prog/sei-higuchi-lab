import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { LabEventsExplorer } from "@/components/lab-events-explorer";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { featuredLabEvent, labEvents } from "@/data/lab-events";

export const metadata: Metadata = {
  title: "Life in the Lab",
  description: "Conferences, achievements, celebrations, and everyday moments from the Sei Higuchi Lab at St. John’s University.",
};

export default function LifeInTheLabPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-white py-20 sm:py-28 lg:py-32">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#F4F8FF] to-transparent" />
        <PageContainer className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
            <MotionReveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40AF]">Life in the Lab</p>
              <h1 className="mt-6 max-w-3xl text-balance text-[clamp(3.25rem,6vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.055em] text-[#0B1739]">
                Science happens at the bench.
                <span className="mt-2 block text-[#1E40AF]">Some of our best memories happen beyond it.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#34435E] sm:text-xl sm:leading-9">
                A look at the conferences, collaborations, achievements, celebrations, and everyday moments that shape life in the Sei Higuchi Lab.
              </p>
            </MotionReveal>

            <MotionReveal className="relative">
              <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[36px] bg-[#F4F8FF]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_30px_80px_rgba(11,23,57,0.14)]">
                <Image
                  src={featuredLabEvent.heroImage.src}
                  alt={featuredLabEvent.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1739]/85 via-[#0B1739]/30 to-transparent px-6 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Featured Story</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{featuredLabEvent.title}</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="featured-event-heading">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Featured Event</p>
            <h2 id="featured-event-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">
              Research shared. Milestones celebrated.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-14 overflow-hidden rounded-[30px] border border-[#D8E5FF] bg-white shadow-[0_22px_64px_rgba(11,23,57,0.09)]">
            <article className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[380px] overflow-hidden bg-[#EAF1FF] sm:min-h-[480px] lg:min-h-[620px]">
                <Image
                  src={featuredLabEvent.heroImage.src}
                  alt={featuredLabEvent.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.01] motion-reduce:transition-none"
                />
              </div>
              <div className="flex items-center p-7 sm:p-10 lg:p-12 xl:p-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40AF]">{featuredLabEvent.displayDate}</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#0B1739] sm:text-4xl">{featuredLabEvent.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#34435E]">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={17} className="text-[#1E40AF]" aria-hidden="true" />{featuredLabEvent.displayDate}</span>
                    <span className="inline-flex items-center gap-2"><MapPin size={17} className="text-[#1E40AF]" aria-hidden="true" />{featuredLabEvent.location}</span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {featuredLabEvent.categories.map((category) => (
                      <span key={category} className="rounded-full border border-[#D8E5FF] bg-[#F4F8FF] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#1E40AF]">{category}</span>
                    ))}
                  </div>
                  <p className="mt-7 text-base leading-8 text-[#34435E]">{featuredLabEvent.shortDescription}</p>
                  <Link
                    href={`/life-in-the-lab/${featuredLabEvent.slug}`}
                    className="group mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#315CC4] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(30,64,175,0.24)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(30,64,175,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    View Event
                    <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </PageContainer>
      </section>

      <section className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40" aria-labelledby="event-archive-heading">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Event Archive</p>
            <h2 id="event-archive-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Explore life in the lab.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">Browse events by category and year. More stories will be added as the archive grows.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-12">
            <LabEventsExplorer events={labEvents} />
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
