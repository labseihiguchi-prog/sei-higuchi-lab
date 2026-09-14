import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { HiguchiPortrait } from "@/components/higuchi-portrait";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Activity, FlaskConical, Microscope, Utensils } from "lucide-react";
import { BirthdayCelebration } from "@/components/birthday-celebration";

const focusAreas = ["Bile Acid Biology", "Metabolic Disease", "Appetite Regulation", "Drug Discovery"];

const researchAreas = [
  { icon: FlaskConical, title: "Bile Acid Biology", description: "Examining bile acids as dynamic signaling molecules that coordinate metabolic physiology.", href: "/research" },
  { icon: Utensils, title: "Appetite Regulation", description: "Investigating the molecular signals that shape hunger, satiety, and energy intake.", href: "/research" },
  { icon: Activity, title: "Obesity & Metabolic Disease", description: "Studying metabolic dysfunction to reveal new opportunities for disease intervention.", href: "/research" },
  { icon: Microscope, title: "Drug Discovery", description: "Translating biological insight into promising strategies for future metabolic therapies.", href: "/research" },
];

const careerTimeline = ["Fukuoka University", "Kyoto University", "Columbia University", "St. John's University"];

export const metadata: Metadata = {
  title: { absolute: "Sei Higuchi Lab | St. John's University" },
  description: "The Sei Higuchi Lab investigates how bile acids regulate metabolism, appetite, obesity, and metabolic disease.",
};

export default function HomePage() {
  return (
    <>
      <BirthdayCelebration />
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden bg-white lg:min-h-[calc(100vh-5rem)]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#ffffff_0%,#ffffff_70%,#F4F8FF_100%)]" />
        <PageContainer className="flex py-16 sm:py-20 lg:py-16 xl:py-20">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-20">
            <MotionReveal className="flex flex-col justify-center">
              <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#1E40AF] sm:text-xs">
                <span aria-hidden="true" className="h-px w-7 bg-[#1E40AF]" />
                Sei Higuchi Lab <span aria-hidden="true">&bull;</span> St. John&apos;s University
              </p>
              <h1 className="mt-9 max-w-4xl text-balance text-[clamp(3.25rem,5.8vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.055em] text-[#0B1739]">
                Curiosity Drives Discovery.<span className="mt-2 block text-[#1E40AF]">Metabolism Changes Lives.</span>
              </h1>
              <p className="mt-9 max-w-[620px] text-pretty text-base leading-[1.7] text-[#34435E] sm:text-lg">The Sei Higuchi Lab investigates how bile acids regulate metabolism, appetite, and obesity to uncover new therapeutic strategies for metabolic disease.</p>
              <div className="mt-8 border-l-2 border-[#1E40AF] pl-4 text-sm leading-6 text-[#34435E]">
                <p className="font-semibold text-[#0B1739]">Department of Pharmaceutical Sciences</p><p>College of Pharmacy and Health Sciences</p><p>St. John&apos;s University</p>
              </div>
              <ul aria-label="Research focus areas" className="mt-9 flex flex-wrap gap-3">
                {focusAreas.map((area) => <li key={area} className="rounded-full border border-[#D8E5FF] bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#0B1739] shadow-[0_1px_2px_rgba(11,23,57,0.04)] backdrop-blur transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#1E40AF] hover:bg-[#F4F8FF]">{area}</li>)}
              </ul>
              <div className="mt-11"><Button href="/research" className="group gap-3 px-7">Explore Our Research <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">&rarr;</span></Button></div>
            </MotionReveal>
            <MotionReveal className="relative min-h-[540px] w-full sm:min-h-[620px] lg:h-[min(720px,calc(100vh-10rem))] lg:min-h-[580px]"><HiguchiPortrait priority sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 45vw, 100vw" /></MotionReveal>
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <div className="grid items-center gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20 xl:gap-28">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Our Perspective</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl">Understanding Metabolism Through Bile Acids</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#34435E]">Bile acids do far more than support digestion. They act as powerful biological signals, connecting the liver, gut, brain, and other organs that govern energy balance and metabolic health.</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#34435E]/85">By tracing these connections, our research seeks to understand how metabolism is regulated—and how that knowledge can inform new approaches to metabolic disease.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-[#EAF1FF] shadow-[0_28px_70px_rgba(30,64,175,0.16)] sm:min-h-[560px]">
              <Image
                src="/images/home/lab-research-team.jpg"
                alt="Higuchi Lab members working together at a laboratory instrument."
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071126]/70 to-transparent" />
              <div className="absolute bottom-7 left-7 text-xs font-medium tracking-wide text-white sm:bottom-9 sm:left-9">Collaborative research in the Higuchi Lab</div>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Research Areas</p><h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Questions that move metabolic science forward.</h2></ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {researchAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.07} className="h-full">
                <article className="group flex h-full min-h-[22rem] flex-col rounded-[28px] border border-[#D8E5FF] bg-white p-8 shadow-[0_8px_28px_rgba(11,23,57,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#1E40AF]/35 hover:shadow-[0_24px_60px_rgba(30,64,175,0.11)] motion-reduce:transform-none motion-reduce:transition-none xl:p-9">
                  <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8E5FF] bg-[#F4F8FF] text-[#1E40AF] transition-all duration-300 group-hover:border-[#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white">
                    <area.icon size={25} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#0B1739]">{area.title}</h3>
                  <p className="mt-5 flex-1 text-sm leading-6 text-[#34435E]">{area.description}</p>
                  <Button href={area.href} variant="secondary" className="mt-9 w-fit px-5 py-2.5">Learn More <span aria-hidden="true">&rarr;</span></Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
            <ScrollReveal className="relative min-h-[600px] lg:min-h-[720px]"><HiguchiPortrait /></ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Principal Investigator</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl">Meet Dr. Sei Higuchi</h2>
              <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#34435E] sm:text-lg sm:leading-8"><p>Dr. Sei Higuchi investigates how bile acids act as signaling molecules to shape metabolism, appetite, and intestinal physiology. His research examines the biological connections between the gut and systemic metabolic control.</p><p>By clarifying how these pathways contribute to obesity and metabolic disease, his work seeks to identify new opportunities for therapeutic discovery and improve our understanding of whole-body energy balance.</p></div>
              <div className="mt-10 border-t border-[#D8E5FF] pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#34435E]">Professional Journey</p>
                <ol className="mt-6 grid gap-0 sm:grid-cols-4">
                  {careerTimeline.map((institution, index) => (
                    <li key={institution} className="relative flex gap-4 pb-6 sm:block sm:pb-0 sm:pr-4">
                      <div className="relative flex flex-col items-center sm:block"><span className="relative z-10 block h-3 w-3 shrink-0 rounded-full bg-[#1E40AF] ring-4 ring-[#D8E5FF]" />{index < careerTimeline.length - 1 && <span aria-hidden="true" className="absolute top-3 h-[calc(100%+1.5rem)] w-px bg-[#D8E5FF] sm:left-3 sm:top-1.5 sm:h-px sm:w-[calc(100%-0.75rem)]" />}</div>
                      <p className="text-sm font-semibold leading-5 text-[#0B1739] sm:mt-5">{institution}</p>{index < careerTimeline.length - 1 && <span className="sr-only">then</span>}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
