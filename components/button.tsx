import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none",
        variant === "primary"
          ? "bg-gradient-to-br from-[#1E40AF] to-[#17358F] text-white shadow-[0_8px_24px_rgba(30,64,175,0.17)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(30,64,175,0.24)] active:translate-y-0 active:shadow-[0_6px_18px_rgba(30,64,175,0.16)]"
          : "border border-[#D8E5FF] bg-white text-[#0B1739] hover:border-[#1E40AF] hover:bg-[#F4F8FF]",
        className,
      )}
      {...props}
    />
  );
}
