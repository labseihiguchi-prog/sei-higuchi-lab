import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">{eyebrow}</p>}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-[#0B1739] sm:text-5xl">{title}</h2>
      {description && <p className="mt-6 text-lg leading-8 text-[#34435E]">{description}</p>}
    </div>
  );
}
