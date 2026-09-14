import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Lightbulb,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { PersonCard } from "@/components/person-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SimplePersonCard, type SimplePerson } from "@/components/simple-person-card";
import {
  currentUndergraduatesWithoutProfiles,
  getPeopleByCategory,
  mastersAlumniWithoutProfiles,
  principalInvestigator,
  undergraduateAlumniWithoutProfiles,
  undergraduateAlumniWithPortraits,
  type LabMember,
} from "@/data/people";

const timeline = [
  "Fukuoka University",
  "Kyoto University",
  "Columbia University",
  "St. John's University",
];

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Asking thoughtful questions and following evidence with an open mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Sharing ideas, skills, and perspectives to make the science stronger.",
  },
  {
    icon: Handshake,
    title: "Mentorship",
    description: "Supporting growth through guidance, trust, and meaningful opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Scientific Integrity",
    description: "Approaching every experiment with rigor, honesty, and care.",
  },
];

const graduateResearchers = getPeopleByCategory("Graduate Researchers");
const researchStaff = getPeopleByCategory("Research Staff");
const undergraduateResearchers = getPeopleByCategory("Undergraduate Researchers").sort((a, b) => {
  if (a.slug === "kevin-lee") return -1;
  if (b.slug === "kevin-lee") return 1;
  return 0;
});
const currentUndergraduateCards: Array<LabMember | SimplePerson> = [
  ...undergraduateResearchers,
  ...currentUndergraduatesWithoutProfiles,
];
const mastersAlumniProfiles = getPeopleByCategory("Alumni").filter((person) => person.alumniCategory === "Master's Alumni");
const undergraduateAlumniOrder = ["brianna-blanco", "ludovica-zola", "gabriella-colella", "kareena-poonai"];
const undergraduateAlumniProfiles = getPeopleByCategory("Alumni")
  .filter((person) => person.alumniCategory === "Undergraduate Alumni")
  .sort((a, b) => undergraduateAlumniOrder.indexOf(a.slug) - undergraduateAlumniOrder.indexOf(b.slug));
const undergraduateAlumniCards: Array<LabMember | SimplePerson> = [
  undergraduateAlumniProfiles.find((person) => person.slug === "brianna-blanco")!,
  undergraduateAlumniWithPortraits[0],
  undergraduateAlumniProfiles.find((person) => person.slug === "ludovica-zola")!,
  undergraduateAlumniProfiles.find((person) => person.slug === "gabriella-colella")!,
  undergraduateAlumniProfiles.find((person) => person.slug === "kareena-poonai")!,
  undergraduateAlumniWithPortraits[1],
];

export const metadata: Metadata = {
  title: "People",
  description: "Meet the scientists and students behind the Sei Higuchi Lab at St. John's University.",
};

type PeopleGridProps = {
  id: string;
  eyebrow: string;
  title: string;
  people: LabMember[];
  columns: string;
  background?: "white" | "blue";
};

function MixedPeopleGrid({ people }: { people: Array<LabMember | SimplePerson> }) {
  return (
    <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, index) => (
        <li key={"slug" in person ? person.slug : person.name}>
          <ScrollReveal delay={(index % 3) * 0.07} className="h-full">
            {"slug" in person ? <PersonCard person={person} /> : <SimplePersonCard person={person} />}
          </ScrollReveal>
        </li>
      ))}
    </ul>
  );
}

function PeopleGrid({
  id,
  eyebrow,
  title,
  people,
  columns,
  background = "white",
}: PeopleGridProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${background === "blue" ? "border-y border-[#D8E5FF] bg-[#F4F8FF]" : "bg-white"} py-24 sm:py-32 lg:py-40`}
    >
      <PageContainer>
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{eyebrow}</p>
          <h2
            id={`${id}-heading`}
            className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl"
          >
            {title}
          </h2>
        </ScrollReveal>
        <ul className={`mt-14 grid gap-6 ${columns}`}>
          {people.map((person, index) => (
            <li key={person.slug}>
              <ScrollReveal delay={(index % 3) * 0.07} className="h-full">
                <PersonCard person={person} />
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}

export default function PeoplePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D8E5FF]/70" />
        <div aria-hidden="true" className="absolute -right-8 top-28 h-44 w-44 rounded-full border border-[#D8E5FF]/70" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">People</h1>
            <p className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-[#1E40AF] sm:text-3xl">
              Meet the scientists and students behind the Sei Higuchi Lab.
            </p>
            <p className="mt-7 max-w-[720px] text-base leading-8 text-[#34435E] sm:text-lg">
              Our lab brings together diverse backgrounds, perspectives, and scientific interests around a shared curiosity about metabolism and human health.
            </p>
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="principal-investigator-heading">
        <PageContainer>
          <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 xl:gap-28">
            <ScrollReveal className="relative min-h-[580px] overflow-hidden rounded-[28px] bg-[#0B1739] shadow-[0_24px_64px_rgba(11,23,57,0.16)] sm:min-h-[700px]">
              <Image
                src={principalInvestigator.image}
                alt="Dr. Sei Higuchi on the St. John's University campus."
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                style={{ objectPosition: principalInvestigator.imagePosition }}
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1739]/90 to-transparent" />
              <p className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:bottom-9 sm:left-9">Principal Investigator</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Principal Investigator</p>
              <h2 id="principal-investigator-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl">
                {principalInvestigator.name}
              </h2>
              <div className="mt-6 border-l-2 border-[#1E40AF] pl-5 text-sm leading-6 text-[#34435E]">
                <p className="font-semibold text-[#0B1739]">Assistant Professor</p>
                <p>Department of Pharmaceutical Sciences</p>
                <p>College of Pharmacy and Health Sciences</p>
                <p>St. John&apos;s University</p>
              </div>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-[#34435E] sm:text-lg sm:leading-8">
                <p>{principalInvestigator.biography}</p>
                {principalInvestigator.researchInterests && <p>{principalInvestigator.researchInterests}</p>}
              </div>

              <div className="mt-10 border-t border-[#D8E5FF] pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#34435E]">Professional Journey</p>
                <ol className="mt-7 grid gap-0 sm:grid-cols-4">
                  {timeline.map((institution, index) => (
                    <li key={institution} className="relative flex min-w-0 gap-4 pb-6 sm:block sm:pb-0 sm:pr-4">
                      <div className="relative flex flex-col items-center sm:block">
                        <span className="relative z-10 block h-3 w-3 shrink-0 rounded-full bg-[#1E40AF] ring-4 ring-[#D8E5FF]" />
                        {index < timeline.length - 1 && (
                          <span aria-hidden="true" className="absolute top-3 h-[calc(100%+1.5rem)] w-px bg-[#D8E5FF] sm:left-3 sm:top-1.5 sm:h-px sm:w-[calc(100%-0.75rem)]" />
                        )}
                      </div>
                      <p className="min-w-0 break-words text-sm font-semibold leading-5 text-[#0B1739] sm:mt-5">{institution}</p>
                      {index < timeline.length - 1 && <span className="sr-only">then</span>}
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/research"
                className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,64,175,0.22)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(30,64,175,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
              >
                Explore Our Research
                <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <PeopleGrid
        id="graduate-researchers"
        eyebrow="Graduate Researchers"
        title="Graduate Researchers"
        people={graduateResearchers}
        columns="md:grid-cols-2"
        background="blue"
      />

      {researchStaff.length > 0 && (
        <PeopleGrid
          id="research-staff"
          eyebrow="Research Staff"
          title="Research Staff"
          people={researchStaff}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
      )}

      <section id="undergraduate-researchers" className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40" aria-labelledby="undergraduate-researchers-heading">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Undergraduate Researchers</p>
            <h2 id="undergraduate-researchers-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Undergraduate Researchers</h2>
          </ScrollReveal>
          <MixedPeopleGrid people={currentUndergraduateCards} />
        </PageContainer>
      </section>

      <section id="alumni" className="scroll-mt-20 bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="alumni-heading">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Alumni</p>
            <h2 id="alumni-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Master&apos;s Alumni</h2>
          </ScrollReveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mastersAlumniProfiles.map((person, index) => (
              <li key={person.slug}>
                <ScrollReveal delay={(index % 3) * 0.07} className="h-full">
                  <PersonCard person={person} />
                </ScrollReveal>
              </li>
            ))}
            {mastersAlumniWithoutProfiles.map((person, index) => (
              <li key={person.name}>
                <ScrollReveal delay={(mastersAlumniProfiles.length + index) * 0.07} className="h-full">
                  <SimplePersonCard person={person} />
                </ScrollReveal>
              </li>
            ))}
          </ul>

          <div className="mt-20 border-t border-[#D8E5FF] pt-14 sm:mt-24 sm:pt-16">
            <ScrollReveal className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Alumni</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#0B1739] sm:text-4xl">Undergraduate Alumni</h3>
            </ScrollReveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {undergraduateAlumniCards.map((person, index) => (
                <li key={"slug" in person ? person.slug : person.name}>
                  <ScrollReveal delay={(index % 3) * 0.07} className="h-full">
                    {"slug" in person ? <PersonCard person={person} /> : <SimplePersonCard person={person} />}
                  </ScrollReveal>
                </li>
              ))}
            </ul>

            <div className="mt-16 border-t border-[#D8E5FF] pt-12">
              <ScrollReveal>
                <h4 className="text-2xl font-semibold tracking-[-0.025em] text-[#0B1739]">Former Undergraduate Lab Members</h4>
              </ScrollReveal>
              <ul className="mt-7 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {undergraduateAlumniWithoutProfiles.map((name, index) => (
                  <li key={name} className="border-b border-[#D8E5FF] py-5">
                    <ScrollReveal delay={(index % 3) * 0.04}>
                      <p className="text-base font-semibold text-[#0B1739]">{name}</p>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40" aria-labelledby="lab-culture-heading">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Lab Culture</p>
            <h2 id="lab-culture-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Great science begins with great people.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">The Sei Higuchi Lab values curiosity, collaboration, mentorship, scientific rigor, and enjoying the process of discovery.</p>
          </ScrollReveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <li key={value.title}>
                <ScrollReveal delay={index * 0.06} className="group h-full rounded-[24px] border border-[#D8E5FF] bg-white p-7 shadow-[0_8px_28px_rgba(11,23,57,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E40AF]/35 hover:shadow-[0_20px_48px_rgba(30,64,175,0.09)] motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF] transition-colors duration-300 group-hover:bg-[#1E40AF] group-hover:text-white">
                    <value.icon size={23} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[#0B1739]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#34435E]">{value.description}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="bg-[#1E40AF] py-20 text-white sm:py-24 lg:py-28" aria-labelledby="join-heading">
        <PageContainer>
          <ScrollReveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Join the Team</p>
              <h2 id="join-heading" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Interested in joining us?</h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">Learn about opportunities to contribute to research in metabolism, bile acid biology, appetite regulation, and obesity.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/45 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"><Mail size={17} strokeWidth={1.8} className="mr-2" aria-hidden="true" />Contact the Lab</Link>
            </div>
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
