"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { PageContainer } from "./page-container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header onKeyDown={handleKeyDown} className="sticky top-0 z-50 border-b border-[#D8E5FF] bg-white/95 shadow-[0_3px_18px_rgba(11,23,57,0.035)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/88">
      <PageContainer className="flex min-h-[72px] items-center justify-between gap-8 xl:min-h-20">
        <Link href="/" aria-label="Sei Higuchi Lab home" className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]" onClick={() => setOpen(false)}>
          <BrandLogo priority />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#D8E5FF] text-[#0B1739] transition-[background-color,border-color,color,transform] duration-200 hover:border-[#1E40AF] hover:bg-[#F4F8FF] hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] active:scale-[0.98] xl:hidden"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close primary navigation" : "Open primary navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={cn("absolute left-0 top-full w-full border-b border-[#D8E5FF] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(11,23,57,0.08)] xl:static xl:block xl:w-auto xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none", open ? "block" : "hidden xl:block")}>
          <ul className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-4 2xl:gap-6">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "relative flex min-h-11 items-center rounded px-1 text-sm font-medium text-[#34435E] transition-[color,transform] duration-200 after:absolute after:inset-x-1 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#1E40AF] after:transition-transform after:duration-200 hover:-translate-y-px hover:text-[#1E40AF] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none",
                      active && "text-[#1E40AF] after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
