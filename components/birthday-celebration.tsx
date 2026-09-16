"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { getBirthdaysForMonthDay } from "@/data/calendar-events";
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
  const isLaunchCelebration = dayKey >= "2026-09-16" && dayKey <= "2026-09-21";
  const birthdays = getBirthdaysForMonthDay(monthDay).filter((event) => event.homepageCelebration);
  const storageKey = `higuchi-lab-birthday-${dayKey}`;

  useEffect(() => {
    const updateDate = () => setDateParts(newYorkDateParts(new Date()));
    updateDate();
    const interval = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLaunchCelebration) return;
    // September's New York midnight is EDT. Expire even if the page stays open.
    const timeout = window.setTimeout(() => setDateParts(newYorkDateParts(new Date())), Math.max(0, Date.parse("2026-09-22T00:00:00-04:00") - Date.now()));
    return () => window.clearTimeout(timeout);
  }, [isLaunchCelebration]);

  useEffect(() => {
    if (!isLaunchCelebration) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animations: Animation[] = [];
    const stop = () => { animations.forEach((animation) => animation.cancel()); animations = []; };
    const start = () => {
      stop();
      if (reducedMotion.matches) return;
      animations = Array.from(anniversaryConfettiRef.current?.children ?? []).map((piece, index) => {
        const direction = index < confetti.length ? 1 : -1;
        const spread = index % confetti.length;
        return piece.animate(
        [
          { opacity: 0, transform: "translate(0, 0) rotate(0deg)", offset: 0 },
          { opacity: 0.8, transform: `translate(${direction * (12 + spread * 2)}vw, -22vh) rotate(${direction * 100}deg)`, offset: 0.1 },
          { opacity: 0.65, transform: `translate(${direction * (20 + spread * 3)}vw, -35vh) rotate(${direction * 220}deg)`, offset: 0.22 },
          { opacity: 0, transform: `translate(${direction * (24 + spread * 3)}vw, 12vh) rotate(${direction * 400}deg)`, offset: 0.45 },
          { opacity: 0, transform: "translate(0, 0)", offset: 1 },
        ],
        { duration: 9000, delay: spread * 60, iterations: Infinity, easing: "ease-out" },
        );
      });
    };
    start();
    reducedMotion.addEventListener("change", start);
    return () => {
      stop();
      reducedMotion.removeEventListener("change", start);
    };
  }, [isLaunchCelebration]);

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

  if (birthdays.length === 0 && !isLaunchCelebration) return null;

  return (
    <>
      {isLaunchCelebration && (
        <>
          <div ref={anniversaryConfettiRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden motion-reduce:hidden">
            {[...confetti, ...confetti].map(([, , color], index) => (
              <span key={index} className="pointer-events-none absolute h-3 w-1.5 rounded-sm opacity-0" style={{ top: "65%", left: index < confetti.length ? "0" : undefined, right: index >= confetti.length ? "0" : undefined, backgroundColor: color }} />
            ))}
          </div>
          <section aria-labelledby="website-launch-title" className="border-b border-[#D8E5FF] bg-gradient-to-br from-[#EAF1FF] via-white to-[#FBEAF0] px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="mx-auto max-w-5xl">
              <h2 id="website-launch-title" className="text-balance text-3xl font-bold leading-tight tracking-[-0.04em] text-[#1E40AF] sm:text-4xl lg:text-5xl"><span aria-hidden="true">🎉 </span>The Sei Higuchi Lab Website Is Officially Live!</h2>
              <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-[#34435E] sm:text-lg sm:leading-8">Welcome to our new digital home — a place to discover our research, meet our team, follow our journey, and celebrate life in the Higuchi Lab.</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#1E40AF] sm:text-sm">Officially launched September 16, 2026</p>
            </div>
          </section>
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
