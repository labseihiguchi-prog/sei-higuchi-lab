import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { PublicationAuthors, PublicationCitation, PublicationLinks } from "@/components/publication-details";
import { PublicationsExplorer } from "@/components/publications-explorer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { publications } from "@/data/publications";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Publications | Sei Higuchi Lab",
  description: "Peer-reviewed publications from the Sei Higuchi Lab and collaborators in bile acid biology, metabolism, obesity, intestinal lipid sensing, inflammation, and neuroscience.",
  path: "/publications",
});

export default function PublicationsPage() {
  const featuredPublication = publications.find((publication) => publication.featured);

  if (!featuredPublication) return null;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#1E40AF]" />
        <div aria-hidden="true" className="absolute -right-32 -top-28 h-96 w-96 rounded-full border border-[#D8E5FF]/80" />
        <div aria-hidden="true" className="absolute -right-14 top-4 h-64 w-64 rounded-full border border-[#D8E5FF]/80" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1E40AF]">Publications</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.055em] text-[#0B1739] sm:text-6xl lg:text-7xl">
              Research &amp; Publications
            </h1>
            <p className="mt-8 max-w-4xl text-pretty text-lg leading-8 text-[#34435E] sm:text-xl sm:leading-9">
              Explore peer-reviewed research from Dr. Sei Higuchi and collaborators spanning bile acid biology, intestinal lipid sensing, metabolism, obesity, inflammation, neuroscience, and related areas of biomedical research.
            </p>
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="bg-[#F4F8FF] py-20 sm:py-28 lg:py-32">
        <PageContainer>
          <ScrollReveal>
            <article className="relative min-w-0 overflow-hidden rounded-[28px] border border-[#BFD2FA] bg-white p-7 shadow-[0_18px_55px_rgba(11,23,57,0.07)] sm:p-10 lg:p-14">
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-[#1E40AF]" />
              <div className="relative min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Featured Publication</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#34435E]">
                  {featuredPublication.year} <span aria-hidden="true" className="mx-2 text-[#9DB8ED]">·</span> {featuredPublication.journal}
                </p>
                <h2 className="mt-6 max-w-5xl break-words text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1739] sm:text-4xl lg:text-5xl">
                  {featuredPublication.title}
                </h2>
                <p className="mt-7 max-w-5xl break-words text-base leading-7 text-[#34435E]">
                  <PublicationAuthors authors={featuredPublication.authors} />
                </p>
                {featuredPublication.correspondingAuthors?.includes("Sei Higuchi") && (
                  <p className="mt-3 text-sm font-semibold text-[#1E40AF]">Sei Higuchi · Corresponding Author</p>
                )}
                <div className="mt-3"><PublicationCitation publication={featuredPublication} /></div>
                {featuredPublication.date && (
                  <p className="mt-2 text-sm text-[#34435E]">
                    Published {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${featuredPublication.date}T00:00:00Z`))}
                  </p>
                )}
                <div className="mt-8"><PublicationLinks publication={featuredPublication} /></div>
              </div>
            </article>
          </ScrollReveal>
        </PageContainer>
      </section>

      <section className="border-t border-[#D8E5FF] bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Publication Archive</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Complete publication record</h2>
            <p className="mt-6 text-base leading-7 text-[#34435E]">Browse peer-reviewed work by year, ordered from newest to oldest.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-12 sm:mt-14">
            <PublicationsExplorer publications={publications} />
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
