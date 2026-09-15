import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Coffee, FlaskConical, Mail } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getProfileMemberBySlug, profileMembers } from "@/data/people";
import { createPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

type ProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return profileMembers.map((person) => ({ slug: person.slug }));
}

function summarizeProfile(text: string, maxLength = 160) {
  if (text.length <= maxLength) return text;
  const shortened = text.slice(0, maxLength - 1);
  return `${shortened.slice(0, shortened.lastIndexOf(" "))}…`;
}

function getProfileSeo(person: (typeof profileMembers)[number]) {
  if (person.slug === "sei-higuchi") {
    return {
      title: "Sei Higuchi, PhD | Principal Investigator | Sei Higuchi Lab",
      description: "Sei Higuchi, PhD, is an Assistant Professor at St. John’s University and Principal Investigator of the Sei Higuchi Lab, studying bile acids, metabolism, appetite, obesity, and metabolic disease.",
    };
  }

  if (person.slug === "mais-alkyam") {
    return {
      title: "Mais Alkyam | Toxicology PhD Student | Sei Higuchi Lab",
      description: "Mais Alkyam is a Toxicology PhD student at St. John’s University whose research combines toxicology, metabolism, and molecular biology to study metabolic disease.",
    };
  }

  return {
    title: `${person.name} | ${person.role} | Sei Higuchi Lab`,
    description: summarizeProfile(person.biography),
  };
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getProfileMemberBySlug(slug);

  if (!person) {
    return { title: "Profile Not Found" };
  }

  const seo = getProfileSeo(person);
  return createPageMetadata({
    ...seo,
    path: `/people/${person.slug}`,
    image: person.image,
  });
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const person = getProfileMemberBySlug(slug);

  if (!person) {
    notFound();
  }

  const seo = getProfileSeo(person);
  const profileUrl = new URL(`/people/${person.slug}`, siteUrl).toString();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: profileUrl,
    name: seo.title,
    description: seo.description,
    mainEntity: {
      "@type": "Person",
      name: person.slug === "sei-higuchi" ? "Sei Higuchi" : person.name,
      ...(person.slug === "sei-higuchi" ? { honorificSuffix: "PhD" } : {}),
      jobTitle: person.role,
      description: seo.description,
      url: profileUrl,
      image: new URL(person.image, siteUrl).toString(),
      ...(person.email ? { email: `mailto:${person.email}` } : {}),
      memberOf: {
        "@type": "ResearchOrganization",
        name: "Sei Higuchi Lab",
        url: siteUrl.toString(),
      },
      ...(person.slug === "sei-higuchi"
        ? {
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "St. John’s University",
              url: "https://www.stjohns.edu/",
            },
          }
        : {}),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-16 sm:py-20 lg:py-24">
        <PageContainer>
          <Link
            href="/people"
            className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-[#1E40AF] transition-colors duration-200 hover:text-[#0B1739] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]"
          >
            <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
            Back to People
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
            <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_24px_64px_rgba(11,23,57,0.14)]">
              <Image
                src={person.image}
                alt={`Portrait of ${person.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: person.imagePosition }}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{person.category}</p>
              <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">{person.name}</h1>
              <p className="mt-6 text-xl font-semibold leading-8 text-[#1E40AF] sm:text-2xl">{person.role}</p>
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-8 inline-flex min-h-11 max-w-full items-center gap-3 rounded-xl border border-[#D8E5FF] bg-white px-5 py-3 text-sm font-semibold text-[#0B1739] shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#1E40AF]/45 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <Mail size={18} strokeWidth={1.7} className="shrink-0 text-[#1E40AF]" aria-hidden="true" />
                  <span className="break-all">{person.email}</span>
                </a>
              )}
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40" aria-label={`${person.name} profile details`}>
        <PageContainer>
          <div className="mx-auto grid max-w-5xl gap-7">
            {person.researchInterests && (
              <ScrollReveal className="rounded-[26px] border border-[#D8E5FF] bg-[#F4F8FF] p-7 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1E40AF] shadow-sm">
                  <FlaskConical size={23} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-[#0B1739]">Research Interests</h2>
                <p className="mt-5 text-base leading-8 text-[#34435E] sm:text-lg">{person.researchInterests}</p>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.06} className="rounded-[26px] border border-[#D8E5FF] bg-white p-7 shadow-[0_10px_36px_rgba(11,23,57,0.045)] sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF]">
                <BookOpen size={23} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h2 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-[#0B1739]">Biography</h2>
              <p className="mt-5 text-base leading-8 text-[#34435E] sm:text-lg">{person.biography}</p>
            </ScrollReveal>

            {person.outsideLab && (
              <ScrollReveal delay={0.1} className="rounded-[26px] border border-[#D8E5FF] bg-white p-7 shadow-[0_10px_36px_rgba(11,23,57,0.045)] sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF]">
                  <Coffee size={23} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-[#0B1739]">Outside the Lab</h2>
                <p className="mt-5 text-base leading-8 text-[#34435E] sm:text-lg">{person.outsideLab}</p>
              </ScrollReveal>
            )}

            <ScrollReveal className="pt-5 text-center">
              <Link
                href="/people"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1E40AF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,64,175,0.22)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(30,64,175,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
                Back to People
              </Link>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
