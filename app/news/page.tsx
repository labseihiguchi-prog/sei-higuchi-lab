import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { NewsTimeline } from "@/components/news-timeline";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { newsItems } from "@/data/news";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "News & Updates | Sei Higuchi Lab",
  description: "News, publications, conferences, awards, student updates, and milestones from the Sei Higuchi Lab.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D8E5FF]/70" />
        <div aria-hidden="true" className="absolute -right-8 top-28 h-44 w-44 rounded-full border border-[#D8E5FF]/70" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">News &amp; Updates</h1>
            <p className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-[#1E40AF] sm:text-3xl">
              Discover the latest publications, conferences, awards, and milestones from the Sei Higuchi Lab.
            </p>
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="border-b border-[#D8E5FF] bg-[#F4F8FF] py-20 sm:py-24 lg:py-28">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">News Archive</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Latest from the lab.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">Browse announcements by category. Entries are presented newest to oldest using the most specific verified date available.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-12">
            <NewsTimeline items={newsItems} />
          </ScrollReveal>
        </PageContainer>
      </section>

      <section className="bg-[#1E40AF] py-20 text-white sm:py-24 lg:py-28">
        <PageContainer>
          <ScrollReveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Newsletter &amp; Updates</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Stay Connected</h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">Contact the lab to learn more about our research and future updates.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1E40AF] shadow-lg transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#F4F8FF] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none">
              <Mail size={17} strokeWidth={1.8} className="mr-2" aria-hidden="true" />
              Contact the Lab
            </Link>
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
