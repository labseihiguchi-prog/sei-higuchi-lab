import { MotionReveal } from "./motion-reveal";
import { PageContainer } from "./page-container";

export function PageHero({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-24 sm:py-32 lg:py-36">
      <PageContainer>
        <MotionReveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Sei Higuchi Lab</p>
          <h1 className="text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">{title}</h1>
        </MotionReveal>
      </PageContainer>
    </section>
  );
}
