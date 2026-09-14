import Link from "next/link";
import { navigation } from "@/data/navigation";
import { instagramConfig } from "@/data/site-config";
import { BrandLogo } from "./brand-logo";
import { PageContainer } from "./page-container";

export function Footer() {
  return (
    <footer className="border-t border-[#D8E5FF]/20 bg-[#071126] py-14 text-blue-100 sm:py-16">
      <PageContainer className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="max-w-sm">
          <Link href="/" aria-label="Sei Higuchi Lab home" className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <span className="inline-flex rounded-2xl bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
              <BrandLogo />
            </span>
          </Link>
          <p className="mt-6 text-sm leading-7 text-blue-100/75">Department of Pharmaceutical Sciences<br />College of Pharmacy and Health Sciences<br />St. John&apos;s University</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_auto] lg:justify-self-end">
          <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200/70">Explore</p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="grid max-w-2xl grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="flex min-h-11 items-center rounded text-sm font-medium text-blue-100/80 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          </div>
          {instagramConfig.profileUrl && (
            <div className="max-w-xs">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200/70">Instagram</p>
              <a
                href={instagramConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-3 rounded-xl px-1 py-2 text-blue-100/80 transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
                aria-label="Follow the Sei Higuchi Lab on Instagram"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors duration-200 group-hover:border-white/30 group-hover:bg-white/10">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37a4 4 0 1 1-7.79 1.26 4 4 0 0 1 7.79-1.26Z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold">Follow us on Instagram</span>
                  <span className="mt-0.5 block text-xs text-blue-200/65 transition-colors duration-200 group-hover:text-blue-100">@seihiguchilab</span>
                </span>
              </a>
            </div>
          )}
        </div>
        <div className="border-t border-white/10 pt-6 lg:col-span-2">
          <p className="text-xs text-blue-100/50">© {new Date().getFullYear()} Sei Higuchi Lab. All rights reserved.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
