import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Navigation,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  { question: "How can I contact the Sei Higuchi Lab?", answer: "Email the lab at labseihiguchi@gmail.com with a concise description of your inquiry." },
  { question: "Where is St. John's University located?", answer: "The University's Queens campus is located at 8000 Utopia Parkway, Queens, NY 11439. A lab-specific building and room number have not yet been listed." },
  { question: "Can prospective students send an inquiry?", answer: "Yes. Prospective students may prepare a concise introduction describing their background and interests, but current openings, eligibility, funding, and placement are not guaranteed." },
  { question: "Can researchers propose a collaboration?", answer: "The lab welcomes thoughtful scientific conversations. Collaboration scope, timing, resources, and feasibility must be discussed directly and are not implied by this contact page." },
];

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Sei Higuchi Lab",
  description: "Contact the Sei Higuchi Lab in the Department of Pharmaceutical Sciences at St. John’s University in Queens, New York.",
  path: "/contact",
  image: "/images/contact/queens-campus.jpg",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D8E5FF]/70" />
        <div aria-hidden="true" className="absolute -right-8 top-28 h-44 w-44 rounded-full border border-[#D8E5FF]/70" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">Contact</h1>
            <p className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-[#1E40AF] sm:text-3xl">
              Connect with the Sei Higuchi Lab at St. John&apos;s University.
            </p>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-[#34435E] sm:text-lg">We welcome thoughtful inquiries about our research, potential collaborations, and future opportunities in metabolism and bile acid biology.</p>
          </MotionReveal>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <ScrollReveal className="rounded-[28px] border border-[#D8E5FF] bg-white p-8 shadow-[0_16px_48px_rgba(11,23,57,0.065)] sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E40AF] text-white"><Building2 size={26} strokeWidth={1.5} aria-hidden="true" /></div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Department Information</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0B1739]">Sei Higuchi Lab</h2>
              <div className="mt-6 space-y-1 text-base leading-7 text-[#34435E]">
                <p className="font-semibold text-[#0B1739]">Department of Pharmaceutical Sciences</p>
                <p>College of Pharmacy and Health Sciences</p>
                <p>St. John&apos;s University</p>
              </div>
              <address className="mt-8 border-t border-[#D8E5FF] pt-7 not-italic">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="mt-1 shrink-0 text-[#1E40AF]" strokeWidth={1.6} aria-hidden="true" />
                  <div className="text-sm leading-7 text-[#34435E]">
                    <p className="font-semibold text-[#0B1739]">Queens Campus</p>
                    <p>8000 Utopia Parkway</p>
                    <p>Queens, NY 11439</p>
                  </div>
                </div>
                <a href="mailto:labseihiguchi@gmail.com" className="mt-6 flex items-center gap-4 text-sm font-semibold text-[#1E40AF] underline decoration-[#BFD3FB] underline-offset-4 transition-colors hover:text-[#17358F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]">
                  <Mail size={22} className="shrink-0" strokeWidth={1.6} aria-hidden="true" />
                  labseihiguchi@gmail.com
                </a>
              </address>
              <p className="mt-6 rounded-xl border border-[#D8E5FF] bg-[#F4F8FF] px-4 py-3 text-xs leading-5 text-[#34435E]">A lab-specific building and room number have not yet been published.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_16px_48px_rgba(11,23,57,0.065)]">
              <Image src="/images/contact/queens-campus.jpg" alt="Aerial view of St. John’s University Queens Campus" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-center" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071126]/55 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 rounded-2xl border border-[#D8E5FF] bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div><p className="text-sm font-semibold text-[#0B1739]">St. John&apos;s University</p><p className="mt-1 text-xs text-[#34435E]">Queens Campus</p></div>
                <Link href="https://www.stjohns.edu/about-old/queens-campus-directions-and-area-hotels" target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-lg border border-[#D8E5FF] px-4 text-xs font-semibold text-[#1E40AF] transition-colors hover:border-[#1E40AF] hover:bg-[#F4F8FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]">
                  <Navigation size={15} className="mr-2" aria-hidden="true" />Campus Directions
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Contact Form</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Prepare your inquiry.</h2>
              <p className="mt-6 text-lg leading-8 text-[#34435E]">Share a concise introduction and the reason for your message. The form will prepare an email to the lab for you to review and send.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}><ContactForm /></ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">FAQ</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Before you get in touch.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mx-auto mt-12 max-w-4xl divide-y divide-[#D8E5FF] overflow-hidden rounded-[26px] border border-[#D8E5FF] bg-white shadow-[0_12px_38px_rgba(11,23,57,0.05)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-1 sm:px-8">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold text-[#0B1739] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F8FF] text-xl font-normal text-[#1E40AF] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="pb-7 pr-10 text-sm leading-7 text-[#34435E]">{faq.answer}</p>
              </details>
            ))}
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
