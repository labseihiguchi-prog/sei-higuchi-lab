"use client";

import Image from "next/image";
import { useState } from "react";

export function HiguchiPortrait({ priority = false, sizes = "(min-width: 1024px) 45vw, 100vw" }: { priority?: boolean; sizes?: string }) {
  const [portraitAvailable, setPortraitAvailable] = useState(true);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#0B1739] shadow-[0_24px_64px_rgba(11,23,57,0.16)]">
      {!portraitAvailable && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]"
          />
          <div aria-hidden="true" className="absolute -right-24 -top-16 h-80 w-80 rounded-full border border-blue-300/20" />
          <div aria-hidden="true" className="absolute -right-12 -top-4 h-56 w-56 rounded-full border border-blue-300/20" />
          <div className="relative flex h-full items-center justify-center p-8">
            <div className="flex aspect-[3/4] w-[62%] max-w-sm items-center justify-center rounded-t-[999px] rounded-b-[1.5rem] border border-white/15 bg-white/[0.06] px-6 text-center shadow-inner backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Dr. Sei Higuchi Portrait
              </p>
            </div>
          </div>
        </>
      )}

      {portraitAvailable && (
        <Image
          src="/images/dr-higuchi.jpg"
          alt="Dr. Sei Higuchi on the St. John’s University campus."
          fill
          sizes={sizes}
          className="object-cover object-[50%_38%]"
          priority={priority}
          onError={() => setPortraitAvailable(false)}
        />
      )}

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-white/25 pt-5 text-white sm:bottom-9 sm:left-9 sm:right-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Principal Investigator</p>
          <p className="mt-2 text-xl font-semibold tracking-tight">Sei Higuchi, Ph.D.</p>
        </div>
        <span aria-hidden="true" className="text-2xl font-light text-blue-200">01</span>
      </div>
    </div>
  );
}
