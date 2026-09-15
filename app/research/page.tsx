import type { Metadata } from "next";
import Image from "next/image";
import {
  BarChart3,
  Dna,
  Factory,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Microscope,
  Orbit,
  PawPrint,
  Search,
  Stethoscope,
  Target,
  TestTube2,
} from "lucide-react";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { createPageMetadata } from "@/lib/seo";

const workflow = [
  { icon: Search, title: "Basic Discovery", description: "Identify biological questions and signaling pathways." },
  { icon: TestTube2, title: "Cellular Studies", description: "Examine mechanisms in controlled cellular systems." },
  { icon: PawPrint, title: "Animal Models", description: "Study integrated physiology and metabolic responses." },
  { icon: Stethoscope, title: "Translational Potential", description: "Connect foundational insight with future therapeutic possibilities." },
];

const techniques = [
  { icon: PawPrint, title: "Animal experiment", description: "We use animal models of obesity, diabetes, and mental disorders. We also use genetically modified mice." },
  { icon: TestTube2, title: "Cell culture", description: "We culture several types of cells, such as primary mouse hepatocytes, mouse intestinal organoids, and microglial cells." },
  { icon: BarChart3, title: "Metabolic function analysis", description: "We evaluate glucose homeostasis and lipid metabolism using GTT, ITT and lipid assay." },
  { icon: Dna, title: "Gene and protein expression", description: "We use qPCR and western blotting for gene and protein expression." },
  { icon: Orbit, title: "Mitochondrial activity", description: "We evaluate mitochondrial activity using Seahorse XF Analyzer." },
  { icon: Microscope, title: "Histology", description: "We analyze the pathology using a histological technique (H&E staining and immunohistochemistry)." },
  { icon: FlaskConical, title: "Unique compounds", description: "For future drug discovery, we test the function of newly identified compounds." },
  { icon: Target, title: "Receptor activation assay", description: "We evaluate the potency of the compound using a reporter assay." },
];

const collaborationTypes = [
  { icon: GraduationCap, title: "Academic", description: "Shared questions, complementary expertise, and rigorous scientific exchange." },
  { icon: HeartPulse, title: "Clinical", description: "Connections that help bridge biological insight and human health." },
  { icon: Factory, title: "Industry", description: "Translational perspectives that support therapeutic innovation." },
];

export const metadata: Metadata = createPageMetadata({
  title: "Research | Sei Higuchi Lab",
  description: "Explore Sei Higuchi Lab research in bile acid biology, appetite regulation, obesity, metabolic disease, and translational therapeutics.",
  path: "/research",
  image: "/images/research/lab-researcher.jpg",
});

export default function ResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D8E5FF]/70" />
        <div aria-hidden="true" className="absolute -right-8 top-28 h-44 w-44 rounded-full border border-[#D8E5FF]/70" />
        <PageContainer className="relative">
          <MotionReveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
            <h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">Research</h1>
            <p className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-[#1E40AF] sm:text-3xl">
              Advancing metabolism research through bile acids, appetite regulation, and translational science.
            </p>
            <p className="mt-7 max-w-[720px] text-base leading-8 text-[#34435E] sm:text-lg">
              Our research examines how molecular signals coordinate metabolism across cells, organs, and the whole body. By connecting fundamental biology with physiology and pharmacology, we seek clearer paths toward future metabolic therapies.
            </p>
          </MotionReveal>
        </PageContainer>
      </section>

      <section id="research-philosophy" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-28">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">How We Think</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl lg:text-6xl">Our Research Philosophy</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#34435E]">
                The Sei Higuchi Lab investigates how bile acids function as signaling molecules that regulate metabolism, appetite, lipid sensing, and obesity. Our work combines molecular biology, physiology, pharmacology, and translational research to uncover new therapeutic strategies for metabolic disease.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-[#F4F8FF] shadow-[0_22px_60px_rgba(30,64,175,0.09)] sm:min-h-[560px]">
              <Image src="/images/research/lab-researcher.jpg" alt="A Higuchi Lab researcher conducting laboratory work." fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-[55%_center]" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071126]/65 to-transparent" />
              <p className="absolute bottom-8 left-8 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/90">Research in the Higuchi Lab</p>
            </ScrollReveal>
          </div>
        </PageContainer>
      </section>

      <section id="research-workflow" className="scroll-mt-20 border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Research Workflow</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">A connected path from question to impact.</h2>
          </ScrollReveal>
          <ol className="mt-16 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {workflow.map((stage, index) => (
              <li key={stage.title} className="contents">
                <ScrollReveal delay={index * 0.08} className="rounded-[24px] border border-[#D8E5FF] bg-white p-7 shadow-[0_8px_30px_rgba(11,23,57,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/30 hover:shadow-[0_18px_42px_rgba(30,64,175,0.08)] motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8FF] text-[#1E40AF]"><stage.icon size={23} strokeWidth={1.6} aria-hidden="true" /></div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#1E40AF]">Stage {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0B1739]">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#34435E]">{stage.description}</p>
                </ScrollReveal>
                {index < workflow.length - 1 && <span aria-hidden="true" className="flex items-center justify-center py-1 text-xl text-[#1E40AF] lg:px-1 lg:py-0"><span className="lg:hidden">&darr;</span><span className="hidden lg:inline">&rarr;</span></span>}
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section id="techniques" className="scroll-mt-20 bg-white py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Techniques &amp; Technologies</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Tools for studying metabolism across scales.</h2>
          </ScrollReveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techniques.map((technique, index) => (
              <li key={technique.title}>
                <ScrollReveal delay={(index % 4) * 0.05} className="h-full rounded-[22px] border border-[#D8E5FF] bg-white p-6 shadow-[0_6px_22px_rgba(11,23,57,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/30 hover:shadow-[0_16px_36px_rgba(30,64,175,0.075)] motion-reduce:transform-none motion-reduce:transition-none">
                  <technique.icon size={24} strokeWidth={1.6} className="text-[#1E40AF]" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold text-[#0B1739]">{technique.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#34435E]">{technique.description}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section id="collaborations" className="scroll-mt-24 border-y border-[#D8E5FF] bg-[#F4F8FF] py-24 sm:py-32 lg:py-40">
        <PageContainer>
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Collaborations</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">Collaboration Drives Discovery</h2>
            <p className="mt-6 text-lg leading-8 text-[#34435E]">The Sei Higuchi Lab welcomes collaborations across academia, medicine, and industry to advance metabolic research and therapeutic innovation.</p>
          </ScrollReveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {collaborationTypes.map((type, index) => (
              <ScrollReveal key={type.title} delay={index * 0.08} className="rounded-[26px] border border-[#D8E5FF] bg-white p-8 shadow-[0_10px_34px_rgba(11,23,57,0.055)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/30 hover:shadow-[0_20px_44px_rgba(30,64,175,0.085)] motion-reduce:transform-none motion-reduce:transition-none">
                <type.icon size={28} strokeWidth={1.5} className="text-[#1E40AF]" aria-hidden="true" />
                <h3 className="mt-7 text-xl font-semibold text-[#0B1739]">{type.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#34435E]">{type.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-[#1E40AF] py-20 text-white sm:py-24 lg:py-28">
        <PageContainer>
          <ScrollReveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Work With Us</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Interested in collaborating?</h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">The Sei Higuchi Lab welcomes opportunities to connect with researchers, clinicians, and industry partners whose expertise complements our work in bile acid biology, metabolism, appetite regulation, obesity, and metabolic disease.</p>
            </div>
            <Link href="mailto:labseihiguchi@gmail.com?subject=Research%20Collaboration%20Inquiry%20%E2%80%93%20Sei%20Higuchi%20Lab" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1E40AF] shadow-lg transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#F4F8FF] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start a Collaboration <span aria-hidden="true" className="ml-2">&rarr;</span></Link>
          </ScrollReveal>
        </PageContainer>
      </section>
    </>
  );
}
