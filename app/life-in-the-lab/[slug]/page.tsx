import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Trophy } from "lucide-react";
import { EventPhotoGallery } from "@/components/event-photo-gallery";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getLabEventBySlug, labEvents } from "@/data/lab-events";
import { createPageMetadata } from "@/lib/seo";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return labEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getLabEventBySlug(slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return createPageMetadata({
    title: `${event.title} | Sei Higuchi Lab`,
    description: event.shortDescription,
    path: `/life-in-the-lab/${event.slug}`,
    image: event.heroImage.src,
  });
}

export default async function LabEventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getLabEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#0B1739] text-white">
        <Image
          src={event.heroImage.src}
          alt={event.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className={event.preserveImageOrientation ? "object-contain object-top" : "object-cover object-center"}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#07112B]/95 via-[#07112B]/72 to-[#07112B]/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07112B]/88 via-transparent to-[#07112B]/25" />

        <PageContainer className="relative flex min-h-[78vh] flex-col justify-between py-10 sm:py-14 lg:py-16">
          <Link
            href="/life-in-the-lab"
            className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Life in the Lab
          </Link>

          <ScrollReveal className="max-w-4xl pb-5 pt-24">
            <div className="flex flex-wrap gap-2">
              {event.categories.map((category) => (
                <span key={category} className="rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue-100 backdrop-blur-sm">{category}</span>
              ))}
            </div>
            <h1
              className={`mt-7 text-balance font-bold leading-[0.95] tracking-[-0.06em] ${
                [
                  "2026-keystone-symposia-gut-brain-axis",
                  "2026-3-minute-thesis-competition",
                  "2026-end-of-semester-party-spring",
                  "2026-rapid-research-celebrating-women-in-science",
                  "2026-dr-sei-nora-birthday-celebration",
                  "2026-celebrating-afsin-new-chapter",
                ].includes(event.slug)
                  ? "text-[2.7rem] sm:text-[clamp(3.4rem,7vw,6.8rem)]"
                  : "text-[clamp(3.4rem,7vw,6.8rem)]"
              }`}
            >
              {event.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-base font-medium text-blue-50 sm:text-lg">
              <span className="inline-flex items-center gap-2.5"><CalendarDays size={19} aria-hidden="true" />{event.displayDate}</span>
              <span className="inline-flex items-center gap-2.5"><MapPin size={19} aria-hidden="true" />{event.location}</span>
            </div>
          </ScrollReveal>
        </PageContainer>
      </section>

      <section className="border-b border-[#D8E5FF] bg-white py-20 sm:py-24 lg:py-28">
        <PageContainer>
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{event.displayDate}</p>
            {event.introduction?.length ? (
              <div className="mt-7 space-y-6 text-left text-lg leading-8 text-[#34435E] sm:text-xl sm:leading-9">
                {event.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="mt-7 text-balance text-xl leading-9 text-[#34435E] sm:text-2xl sm:leading-10">{event.shortDescription}</p>
            )}
          </ScrollReveal>
        </PageContainer>
      </section>

      {event.sections.map((section, sectionIndex) => {
        if (section.kind === "gallery") {
          return (
            <section key={section.title} className="bg-[#F4F8FF] py-16 sm:py-20" aria-labelledby={`section-${sectionIndex}`}>
              <PageContainer>
                <h2 id={`section-${sectionIndex}`} className="text-balance text-3xl font-semibold tracking-tight text-[#0B1739] sm:text-4xl">{section.title}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#34435E]">{section.description}</p>
                <div className="mt-10">
                  <EventPhotoGallery images={section.gallery} label={`${event.title} gallery`} preserveOrientation celebrationBackdrop={event.slug === "2026-celebrating-afsin-new-chapter"} />
                </div>
              </PageContainer>
            </section>
          );
        }
        if (section.kind === "award-portrait") {
          return (
            <section
              key={section.title}
              className="relative overflow-hidden bg-[#0B1739] py-20 text-white sm:py-24 lg:py-28"
              aria-labelledby={`section-${sectionIndex}`}
            >
              <div aria-hidden="true" className="absolute -right-24 top-20 h-96 w-96 rounded-full border border-white/10" />
              <PageContainer className="relative">
                <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <ScrollReveal>
                    <figure className="mx-auto max-w-md overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                      <Image
                        src={section.mainImage.src}
                        alt={section.mainImage.alt}
                        width={section.mainImage.width}
                        height={section.mainImage.height}
                        sizes="(min-width: 1024px) 36vw, 90vw"
                        className="h-auto w-full"
                      />
                    </figure>
                  </ScrollReveal>
                  <ScrollReveal delay={0.08}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/15">
                      <Trophy size={27} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">{section.eyebrow}</p>
                    <h2 id={`section-${sectionIndex}`} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{section.title}</h2>
                    <p className="mt-7 text-lg leading-8 text-blue-50/90">{section.description}</p>
                  </ScrollReveal>
                </div>
              </PageContainer>
            </section>
          );
        }

        if (section.kind === "awards") {
          return (
            <section key={section.title} className="relative overflow-hidden bg-[#0B1739] py-24 text-white sm:py-32 lg:py-40" aria-labelledby={`section-${sectionIndex}`}>
              <div aria-hidden="true" className="absolute -right-24 top-20 h-96 w-96 rounded-full border border-white/10" />
              <PageContainer className="relative">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                  <ScrollReveal>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/15">
                      <Trophy size={27} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">{section.eyebrow}</p>
                    <h2 id={`section-${sectionIndex}`} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{section.title}</h2>
                    <p className="mt-7 text-lg leading-8 text-blue-50/90">{section.description}</p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.08} className="relative aspect-[3/2] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                    <Image src={section.mainImage.src} alt={section.mainImage.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={0.12} className="mt-14">
                  <EventPhotoGallery images={section.gallery} label={`${section.title} gallery`} />
                </ScrollReveal>
              </PageContainer>
            </section>
          );
        }

        if (section.kind === "spotlight") {
          return (
            <section key={section.title} className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40" aria-labelledby={`section-${sectionIndex}`}>
              <PageContainer>
                <div className="overflow-hidden rounded-[30px] border border-[#D8E5FF] bg-white shadow-[0_22px_64px_rgba(11,23,57,0.09)]">
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                    <ScrollReveal className="relative min-h-[420px] overflow-hidden bg-[#EAF1FF] sm:min-h-[540px] lg:min-h-[680px]">
                      <Image src={section.mainImage.src} alt={section.mainImage.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                    </ScrollReveal>
                    <ScrollReveal delay={0.08} className="flex items-center p-8 sm:p-12 lg:p-14">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{section.eyebrow}</p>
                        <h2 id={`section-${sectionIndex}`} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">{section.title}</h2>
                        <p className="mt-7 text-lg leading-8 text-[#34435E]">{section.description}</p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
                <ScrollReveal delay={0.12} className="mt-8">
                  <EventPhotoGallery images={section.gallery} label={`${section.title} gallery`} />
                </ScrollReveal>
              </PageContainer>
            </section>
          );
        }

        if (section.kind === "compact") {
          return (
            <section
              key={section.title}
              className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-16 sm:py-20 lg:py-24"
              aria-labelledby={`section-${sectionIndex}`}
            >
              <PageContainer>
                <div className="mx-auto grid max-w-5xl items-center gap-9 rounded-[28px] border border-[#D8E5FF] bg-white p-6 shadow-[0_18px_48px_rgba(11,23,57,0.07)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10">
                  <ScrollReveal>
                    <figure className="overflow-hidden rounded-[22px] border border-[#D8E5FF] bg-[#EAF1FF]">
                      <Image
                        src={section.mainImage.src}
                        alt={section.mainImage.alt}
                        width={section.mainImage.width}
                        height={section.mainImage.height}
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="h-auto w-full"
                      />
                      {section.mainImage.caption && (
                        <figcaption className="border-t border-[#D8E5FF] px-5 py-4 text-sm leading-6 text-[#34435E]">
                          {section.mainImage.caption}
                        </figcaption>
                      )}
                    </figure>
                  </ScrollReveal>
                  <ScrollReveal delay={0.08}>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{section.eyebrow}</p>
                    <h2 id={`section-${sectionIndex}`} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">
                      {section.title}
                    </h2>
                    <p className="mt-7 text-lg leading-8 text-[#34435E]">{section.description}</p>
                    {section.links?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {section.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center rounded-xl border border-[#D8E5FF] bg-[#F4F8FF] px-5 py-2.5 text-sm font-semibold text-[#1E40AF] transition-colors hover:border-[#1E40AF]/45 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]"
                          >
                            {link.label} <span aria-hidden="true" className="ml-2">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </ScrollReveal>
                </div>
              </PageContainer>
            </section>
          );
        }

        if (section.kind === "photo-pair") {
          const pairedPhotos = [section.mainImage, ...section.gallery].slice(0, 2);

          return (
            <section
              key={section.title}
              className={`${sectionIndex % 2 === 0 ? "bg-white" : "border-y border-[#D8E5FF] bg-[#F4F8FF]"} py-20 sm:py-24 lg:py-28`}
              aria-labelledby={`section-${sectionIndex}`}
            >
              <PageContainer>
                <ScrollReveal className="max-w-4xl">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">
                    {section.eyebrow}
                  </p>
                  <h2
                    id={`section-${sectionIndex}`}
                    className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-7 max-w-3xl text-lg leading-8 text-[#34435E]">
                    {section.description}
                  </p>
                </ScrollReveal>

                <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
                  {pairedPhotos.map((photo, photoIndex) => (
                    <ScrollReveal key={photo.src} delay={0.06 + photoIndex * 0.06}>
                      <figure className="overflow-hidden rounded-[24px] border border-[#D8E5FF] bg-white shadow-[0_16px_44px_rgba(11,23,57,0.08)]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="h-auto w-full"
                        />
                        {photo.caption && (
                          <figcaption className="border-t border-[#D8E5FF] px-5 py-4 text-sm leading-6 text-[#34435E]">
                            {photo.caption}
                          </figcaption>
                        )}
                      </figure>
                    </ScrollReveal>
                  ))}
                </div>
              </PageContainer>
            </section>
          );
        }

        return (
          <section
            key={section.title}
            className={`${sectionIndex % 2 === 0 ? "bg-white" : "border-y border-[#D8E5FF] bg-[#F4F8FF]"} py-24 sm:py-32 lg:py-40`}
            aria-labelledby={`section-${sectionIndex}`}
          >
            <PageContainer>
              <ScrollReveal className="max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{section.eyebrow}</p>
                <h2 id={`section-${sectionIndex}`} className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl">{section.title}</h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[#34435E]">{section.description}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.08} className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_20px_58px_rgba(11,23,57,0.1)]">
                <Image src={section.mainImage.src} alt={section.mainImage.alt} fill sizes="100vw" className="object-cover object-center" />
              </ScrollReveal>

              <ScrollReveal delay={0.12} className="mt-8">
                <EventPhotoGallery images={section.gallery} label={`${section.title} gallery`} />
              </ScrollReveal>
            </PageContainer>
          </section>
        );
      })}

      <section className="bg-white py-16 sm:py-20">
        <PageContainer>
          <Link
            href="/life-in-the-lab"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#D8E5FF] bg-[#F4F8FF] px-6 py-3 text-sm font-semibold text-[#1E40AF] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#1E40AF]/45 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Life in the Lab
          </Link>
        </PageContainer>
      </section>
    </>
  );
}
