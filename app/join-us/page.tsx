import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MessageSquareText,
  Search,
  Send,
  Users,
} from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";

const reasons = [
  { icon: Lightbulb, title: "Question-driven science", description: "Explore fundamental questions in bile acid biology, metabolism, appetite regulation, and metabolic disease." },
  { icon: Users, title: "Collaborative environment", description: "Learn through open discussion, shared expertise, and thoughtful scientific exchange." },
  { icon: GraduationCap, title: "Meaningful mentorship", description: "Develop research skills through guidance, feedback, responsibility, and reflection." },
  { icon: FlaskConical, title: "Rigorous research", description: "Build careful experimental habits and approach every result with integrity and curiosity." },
];

const opportunities = [
  {
    id: "graduate-opportunities",
    icon: GraduationCap,
    eyebrow: "Graduate Opportunities",
    title: "Grow as an independent scientist.",
    description: "Graduate research may offer opportunities to engage deeply with questions in metabolism and bile acid biology while developing experimental, analytical, and communication skills.",
    availability: "Current graduate openings, funding, and program-specific requirements are not yet listed. Please contact the lab for verified information.",
  },
  {
    id: "undergraduate-research",
    icon: BookOpenCheck,
    eyebrow: "Undergraduate Research",
    title: "Begin building research experience.",
    description: "Undergraduate research can provide an introduction to laboratory practice, scientific reasoning, teamwork, and the process of asking testable questions.",
    availability: "Current undergraduate research availability and eligibility requirements have not been published.",
  },
  {
    id: "visiting-researchers",
    icon: Search,
    eyebrow: "Visiting Researchers",
    title: "Exchange knowledge and perspectives.",
    description: "The lab values opportunities for scientific exchange when interests, timing, institutional requirements, and available capacity align.",
    availability: "No visiting researcher positions or support arrangements are currently listed. Inquiries will be considered individually.",
  },
  {
    id: "collaborations",
    icon: Handshake,
    eyebrow: "Collaborations",
    title: "Advance discovery together.",
    description: "We welcome thoughtful conversations with academic, clinical, and industry researchers whose expertise complements work in metabolism and bile acid biology.",
    availability: "Collaboration scope, responsibilities, resources, and timelines are determined through direct discussion; no specific opportunities are implied.",
  },
];

const applicationSteps = [
  { icon: Search, title: "Explore the Lab", description: "Review the Research, People, and Publications pages to understand the lab's scientific focus." },
  { icon: ClipboardList, title: "Prepare Your Introduction", description: "Summarize your background, research interests, goals, and the type of opportunity you are seeking." },
  { icon: Send, title: "Contact the Lab", description: "Send a concise inquiry through the Contact page. Do not include sensitive personal information." },
  { icon: MessageSquareText, title: "Discuss Next Steps", description: "If there is a potential fit and availability, the lab can provide verified requirements and next steps." },
];

export const metadata: Metadata = {
  title: { absolute: "Join Us | Sei Higuchi Lab" },
  description: "Learn about graduate, undergraduate, visiting researcher, and collaboration pathways with the Sei Higuchi Lab.",
  alternates: { canonical: "/join-us" },
  robots: { index: false, follow: false, nocache: true },
};

export default function JoinUsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D8E5FF]/70" />
        <div aria-hidden="true" className="absolute -right-8 top-28 h-44 w-44 rounded-full border border-[#D8E5FF]/70" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">Join Us</h1>
            <p className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-[#1E40AF] sm:text-3xl">
              Bring your curiosity to questions that matter in metabolism and human health.
            </p>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-[#34435E] sm:text-lg">
              The Sei Higuchi Lab values thoughtful inquiry, careful experimentation, collaboration, and mentorship. This page outlines pathways for prospective researchers while clearly distinguishing general interest from confirmed availability.
            </p>
            <Link href="#opportunities" className="group mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#17358F] px-6 py-3 text-sm font-semibold text-white shadow-[0_9px_26px_rgba(30,64,175,0.2)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_13px_32px_rgba(30,64,175,0.27)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none">
              Explore Opportunities
              <ArrowRight size={17} className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
            </Link>
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Why Join the Sei Higuchi Lab</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">A place to learn through discovery.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">Our research environment is designed around strong questions, responsible science, shared learning, and individual growth.</p>
          </ScrollReveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <ScrollReveal delay={index * 0.06} className="group h-full rounded-[24px] border border-[#D8E5FF] bg-white p-8 shadow-[0_8px_28px_rgba(11,23,57,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E40AF]/35 hover:shadow-[0_20px_48px_rgba(30,64,175,0.09)] motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF] transition-colors duration-300 group-hover:bg-[#1E40AF] group-hover:text-white">
                    <reason.icon size={23} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-[#0B1739]">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#34435E]">{reason.description}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section id="opportunities" className="scroll-mt-24 border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Paths to Connect</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Opportunities for learning and exchange.</h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <ScrollReveal key={opportunity.id} delay={(index % 2) * 0.08} className="h-full">
                <article id={opportunity.id} className="scroll-mt-28 flex h-full flex-col rounded-[28px] border border-[#D8E5FF] bg-white p-8 shadow-[0_12px_38px_rgba(11,23,57,0.05)] sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E40AF] text-white shadow-[0_8px_22px_rgba(30,64,175,0.18)]">
                    <opportunity.icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1E40AF]">{opportunity.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#0B1739]">{opportunity.title}</h3>
                  <p className="mt-5 text-base leading-8 text-[#34435E]">{opportunity.description}</p>
                  <div className="mt-8 rounded-2xl border border-[#D8E5FF] bg-[#F4F8FF] p-5">
                    <p className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#0B1739]"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#1E40AF]" aria-hidden="true" />Availability notice</p>
                    <p className="mt-2 pl-8 text-sm leading-6 text-[#34435E]">{opportunity.availability}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Application Process</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">A thoughtful first step.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">This general inquiry process does not represent a formal application or guarantee an available position.</p>
          </ScrollReveal>
          <ol className="mt-14 grid gap-5 lg:grid-cols-4">
            {applicationSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <ScrollReveal delay={index * 0.06} className="h-full rounded-[24px] border border-[#D8E5FF] bg-white p-7 shadow-[0_8px_28px_rgba(11,23,57,0.045)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF]"><step.icon size={23} strokeWidth={1.6} aria-hidden="true" /></div>
                    <span className="text-sm font-bold text-[#1E40AF]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-[#0B1739]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#34435E]">{step.description}</p>
                </ScrollReveal>
                {index < applicationSteps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-[#7A9BDD] lg:block" size={24} />}
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section className="bg-[#1E40AF] py-20 text-white sm:py-24 lg:py-28">
        <PageContainer>
          <ScrollReveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Next Steps</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Start Your Journey</h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">Introduce your interests and ask for the latest verified information about availability and requirements.</p>
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
