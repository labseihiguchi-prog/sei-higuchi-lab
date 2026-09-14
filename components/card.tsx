import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("rounded-[24px] border border-[#D8E5FF] bg-white p-7 shadow-[var(--surface-shadow)]", className)} {...props} />;
}
