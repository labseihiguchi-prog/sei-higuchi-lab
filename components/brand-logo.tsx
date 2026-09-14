import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  inverse?: boolean;
  priority?: boolean;
};

export function BrandLogo({ className, inverse = false, priority = false }: BrandLogoProps) {
  return (
    <span className={cn("flex items-center gap-3.5", className)}>
      <Image
        src="/images/logo.png"
        alt="Sei Higuchi Lab logo"
        width={676}
        height={749}
        className="h-[46px] w-auto shrink-0 object-contain lg:h-[58px]"
        priority={priority}
      />
      <span className="block min-w-0">
        <span className={cn("block whitespace-nowrap text-base font-bold leading-none tracking-tight sm:text-lg", inverse ? "text-white" : "text-[#0B1739]")}>
          Sei Higuchi Lab
        </span>
        <span className={cn("mt-1 block whitespace-nowrap text-[0.65rem] font-medium tracking-wide sm:text-[0.7rem]", inverse ? "text-slate-300" : "text-[#34435E]")}>
          St. John&apos;s University
        </span>
      </span>
    </span>
  );
}
