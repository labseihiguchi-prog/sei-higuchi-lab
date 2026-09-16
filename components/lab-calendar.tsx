"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarEvents, calendarTypeLabels, type CalendarEventType } from "@/data/calendar-events";

const types = Object.keys(calendarTypeLabels) as CalendarEventType[];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function eventDateForYear(event: (typeof calendarEvents)[number], year: number) {
  if (event.recurringDate) return `${year}-${event.recurringDate}`;
  return event.date ?? event.dateRange?.start ?? "";
}

function newYorkToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return { year: Number(value("year")), monthIndex: Number(value("month")) - 1, dateKey: `${value("year")}-${value("month")}-${value("day")}` };
}

export function LabCalendar() {
  const [today, setToday] = useState(() => newYorkToday());
  const [dateReady, setDateReady] = useState(false);
  const confettiRef = useRef<HTMLDivElement>(null);
  const isCelebrationDay = dateReady && today.dateKey.slice(5) === "09-16";

  useEffect(() => {
    const updateDate = () => { setToday(newYorkToday()); setDateReady(true); };
    updateDate();
    const interval = window.setInterval(updateDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isCelebrationDay || !confettiRef.current) return;
    const host = confettiRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animations: Animation[] = [];
    const stop = () => { animations.forEach((animation) => animation.cancel()); animations = []; };
    const start = () => {
      stop();
      if (reducedMotion.matches) return;
      animations = Array.from(host.children).map((piece, index) => piece.animate(
        [
          { opacity: 0, transform: "translateY(-24px) rotate(0deg)" },
          { opacity: 0.6, offset: 0.1 },
          { opacity: 0, transform: `translateY(${host.clientHeight + 24}px) rotate(${index % 2 ? 300 : -300}deg)` },
        ],
        { duration: 6500 + (index % 4) * 900, delay: -(index * 700), iterations: Infinity, easing: "linear" },
      ));
    };
    start();
    reducedMotion.addEventListener("change", start);
    window.addEventListener("resize", start);
    return () => { stop(); reducedMotion.removeEventListener("change", start); window.removeEventListener("resize", start); };
  }, [isCelebrationDay]);
  const [month, setMonth] = useState(new Date(today.year, today.monthIndex, 1));
  const [activeTypes, setActiveTypes] = useState<CalendarEventType[]>(types);
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const visible = useMemo(() => calendarEvents.filter((event) => event.showOnCalendar && activeTypes.includes(event.type)), [activeTypes]);
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : index - firstDay + 1);
  const monthLabel = month.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const monthStart = `${year}-${String(monthIndex + 1).padStart(2, "0")}-01`;
  const upcomingThreshold = year === today.year && monthIndex === today.monthIndex ? today.dateKey : monthStart;
  const upcoming = visible
    .map((event) => ({ event, date: eventDateForYear(event, year) }))
    .filter(({ date }) => date >= upcomingThreshold)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  function toggle(type: CalendarEventType) {
    setActiveTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type]);
  }

  return (
    <div className="relative isolate grid min-w-0 gap-8 overflow-hidden xl:grid-cols-[minmax(0,1fr)_20rem]">
      {isCelebrationDay && <div ref={confettiRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden motion-reduce:hidden">
        {Array.from({ length: 16 }, (_, index) => <span key={index} className="pointer-events-none absolute -top-4 h-3 w-1.5 rounded-sm opacity-0" style={{ left: `${4 + index * 6}%`, backgroundColor: ["#1E40AF", "#60A5FA", "#C982A3", "#B78B50"][index % 4] }} />)}
      </div>}
      <div className="min-w-0">
        <div className="flex min-w-0 flex-col gap-6 overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-white p-5 shadow-[0_12px_38px_rgba(11,23,57,0.05)] sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <button type="button" aria-label="Previous month" onClick={() => setMonth(new Date(year, monthIndex - 1, 1))} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8E5FF] text-[#1E40AF] hover:bg-[#F4F8FF]"><ChevronLeft aria-hidden="true" /></button>
            <h2 className="min-w-0 text-center text-xl font-semibold tracking-[-0.03em] text-[#0B1739] sm:text-3xl">{monthLabel}</h2>
            <button type="button" aria-label="Next month" onClick={() => setMonth(new Date(year, monthIndex + 1, 1))} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8E5FF] text-[#1E40AF] hover:bg-[#F4F8FF]"><ChevronRight aria-hidden="true" /></button>
          </div>
          <fieldset className="min-w-0">
            <legend className="sr-only">Filter calendar events</legend>
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {types.map((type) => <button key={type} type="button" aria-pressed={activeTypes.includes(type)} onClick={() => toggle(type)} className={`min-h-10 min-w-0 rounded-full border px-2.5 py-2 text-xs font-semibold sm:px-3.5 ${activeTypes.includes(type) ? "border-[#1E40AF] bg-[#1E40AF] text-white" : "border-[#D8E5FF] bg-white text-[#34435E]"}`}>{calendarTypeLabels[type]}</button>)}
            </div>
          </fieldset>
        </div>
        <div className="mt-5 w-full max-w-full overflow-hidden rounded-[24px] border border-[#D8E5FF] bg-white">
          <div className="grid grid-cols-7 border-b border-[#D8E5FF] bg-[#F4F8FF]">{dayNames.map((day) => <div key={day} className="p-2 text-center text-[0.65rem] font-bold uppercase tracking-wider text-[#1E40AF] sm:p-3 sm:text-xs">{day}</div>)}</div>
          <div className="grid grid-cols-7">
            {cells.map((day, index) => {
              const dateKey = day ? `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : "";
              const events = day ? visible.filter((event) => {
                const start = eventDateForYear(event, year);
                const end = event.dateRange?.end ?? start;
                return dateKey >= start && dateKey <= end;
              }) : [];
              return <div key={`${index}-${day ?? "blank"}`} className="min-h-24 border-b border-r border-[#D8E5FF] p-1.5 sm:min-h-32 sm:p-2.5">
                {day && <><span className="text-xs font-semibold text-[#0B1739] sm:text-sm">{day}</span><ul className="mt-1.5 space-y-1">{events.map((event) => <li key={event.id}>{event.href ? <Link href={event.href} className="block break-words rounded-md bg-[#EAF1FF] px-1.5 py-1 text-[0.58rem] font-semibold leading-tight text-[#1E40AF] [overflow-wrap:anywhere] hover:bg-[#D8E5FF] sm:text-[0.68rem]">{event.title}</Link> : <span className="block break-words rounded-md bg-[#FFF4D8] px-1.5 py-1 text-[0.58rem] font-semibold leading-tight text-[#72520A] [overflow-wrap:anywhere] sm:text-[0.68rem]">{event.title}</span>}</li>)}</ul></>}
              </div>;
            })}
          </div>
        </div>
      </div>
      <aside className="self-start rounded-[28px] border border-[#D8E5FF] bg-[#0B1739] p-6 text-white shadow-[0_20px_48px_rgba(11,23,57,0.12)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Upcoming</p>
        <ol className="mt-5 space-y-5">{upcoming.map(({ event, date }) => <li key={event.id} className="border-b border-white/10 pb-5 last:border-0 last:pb-0"><p className="text-xs font-semibold text-blue-200">{new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>{event.href ? <Link href={event.href} className="mt-1 block font-semibold hover:text-blue-200">{event.title}</Link> : <p className="mt-1 font-semibold">{event.title}</p>}<p className="mt-1 text-xs text-blue-100/65">{calendarTypeLabels[event.type]}</p></li>)}</ol>
      </aside>
    </div>
  );
}
