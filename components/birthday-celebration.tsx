"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { getBirthdaysForMonthDay, websiteAnniversary } from "@/data/calendar-events";
import { people } from "@/data/people";

const confetti = [
  ["8%", "12%", "#1E40AF", "-12deg"],
  ["18%", "74%", "#60A5FA", "18deg"],
  ["30%", "7%", "#F59E0B", "35deg"],
  ["43%", "88%", "#1E40AF", "-30deg"],
  ["58%", "10%", "#93C5FD", "12deg"],
  ["70%", "84%", "#FBBF24", "42deg"],
  ["83%", "15%", "#2563EB", "-20deg"],
  ["91%", "76%", "#60A5FA", "28deg"],
] as const;

function newYorkDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return { dayKey: `${value("year")}-${value("month")}-${value("day")}`, monthDay: `${value("month")}-${value("day")}` };
}

export function BirthdayCelebration() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dateParts, setDateParts] = useState({ dayKey: "", monthDay: "" });
  const anniversaryConfettiRef = useRef<HTMLDivElement>(null);
  const { dayKey, monthDay } = dateParts;
  const isWebsiteAnniversary = monthDay === websiteAnniversary.recurringDate;
  const birthdays = getBirthdaysForMonthDay(monthDay).filter((event) => event.homepageCelebration);
  const storageKey = `higuchi-lab-birthday-${dayKey}`;

  useEffect(() => {
    const updateDate = () => setDateParts(newYorkDateParts(new Date()));
    updateDate();
    const interval = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isWebsiteAnniversary) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const animations = Array.from(anniversaryConfettiRef.current?.children ?? []).map((piece, index) =>
      piece.animate(
        [
          { opacity: 0, transform: "translateY(-20px) rotate(0deg)" },
          { opacity: 0.85, offset: 0.15 },
          { opacity: 0, transform: `translateY(60vh) rotate(${index % 2 ? 220 : -220}deg)` },
        ],
        { duration: 3200, delay: index * 100, iterations: 1, fill: "none", easing: "ease-out" },
      ),
    );
    const stop = () => animations.forEach((animation) => animation.cancel());
    const handleMotionChange = () => { if (reducedMotion.matches) stop(); };
    reducedMotion.addEventListener("change", handleMotionChange);
    const timeout = window.setTimeout(stop, 4200);
    return () => {
      stop();
      window.clearTimeout(timeout);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [isWebsiteAnniversary, dayKey]);

  useEffect(() => {
    if (birthdays.length === 0 || window.localStorage.getItem(storageKey)) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.localStorage.setItem(storageKey, "shown");
    dialog.showModal();
    setIsOpen(true);
  }, [birthdays.length, storageKey]);

  function close() {
    dialogRef.current?.close();
  }

  function handleClosed() {
    setIsOpen(false);
    returnFocusRef.current?.focus();
  }

  if (birthdays.length === 0 && !isWebsiteAnniversary) return null;

  return (
    <>
      {isWebsiteAnniversary && (
        <>
          <div ref={anniversaryConfettiRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden motion-reduce:hidden">
            {confetti.map(([top, left, color], index) => (
              <span key={index} className="pointer-events-none absolute h-3 w-1.5 rounded-sm opacity-0" style={{ top: `${Number.parseInt(top) / 4}%`, left, backgroundColor: color }} />
            ))}
          </div>
          <aside aria-label="Website anniversary" className="pointer-events-none fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-md rounded-2xl border border-[#D8E5FF] bg-white/95 p-4 text-center text-[#0B1739] shadow-lg sm:left-auto sm:right-6">
            <p className="text-sm font-semibold">Happy Birthday to Our Digital Home! 🎉</p>
            <p className="mt-1 text-xs leading-5 text-[#34435E]">Celebrating the Sei Higuchi Lab website, launched September 16, 2026.</p>
          </aside>
        </>
      )}
      {birthdays.length > 0 && <dialog
      ref={dialogRef}
      aria-labelledby="birthday-title"
      onClose={handleClosed}
      onCancel={(event) => { event.preventDefault(); close(); }}
      className="m-auto w-[min(92vw,42rem)] max-w-none overflow-hidden rounded-[30px] border border-[#D8E5FF] bg-white p-0 text-[#0B1739] shadow-[0_30px_100px_rgba(7,17,38,0.32)] backdrop:bg-[#071126]/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative isolate overflow-hidden px-6 py-9 text-center sm:px-10 sm:py-11">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#EAF1FF,transparent_62%)]" />
        {isOpen && confetti.map(([top, left, color, rotate], index) => (
          <span key={`${top}-${left}`} aria-hidden="true" className="absolute h-3 w-1.5 animate-pulse rounded-full motion-reduce:animate-none" style={{ top, left, backgroundColor: color, transform: `rotate(${rotate})`, animationDelay: `${index * 90}ms` }} />
        ))}
        <button type="button" onClick={close} aria-label="Close birthday celebration" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E5FF] bg-white/90 text-[#1E40AF] transition-colors hover:bg-[#F4F8FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]">
          <X aria-hidden="true" size={20} />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">A Higuchi Lab Celebration</p>
        <h2 id="birthday-title" className="mx-auto mt-4 max-w-xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Happy Birthday {birthdays.map((event) => event.title.replace("'s Birthday", "")).join(" & ")}!
        </h2>
        <div className={`mx-auto mt-7 grid max-w-lg gap-5 ${birthdays.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {birthdays.map((birthday) => {
            const person = people.find((member) => member.slug === birthday.personSlug);
            const portrait = person ? (
              <Image src={person.image} alt={`Portrait of ${person.name}`} fill sizes="180px" className="object-cover" style={{ objectPosition: person.imagePosition }} />
            ) : (
              <span className="flex h-full items-center justify-center text-3xl font-semibold text-[#1E40AF]">{birthday.title.charAt(0)}</span>
            );
            return <div key={birthday.id}>
              {person ? <Link href={`/people/${person.slug}`} onClick={close} className="group mx-auto block w-full max-w-[11rem] rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]"><span className="relative block aspect-square overflow-hidden rounded-[22px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_12px_30px_rgba(30,64,175,0.12)] transition-transform group-hover:-translate-y-1 motion-reduce:transform-none">{portrait}</span><span className="mt-3 block text-sm font-semibold text-[#1E40AF]">View profile</span></Link> : <div className="mx-auto w-full max-w-[11rem]"><div className="relative aspect-square overflow-hidden rounded-[22px] border border-[#D8E5FF] bg-[#EAF1FF]">{portrait}</div></div>}
            </div>;
          })}
        </div>
        <p className="mx-auto mt-7 max-w-md text-sm leading-6 text-[#34435E]">Wishing you a wonderful birthday from everyone in the Higuchi Lab.</p>
      </div>
    </dialog>}
    </>
  );
}
