import type { Metadata } from "next";
import { LabCalendar } from "@/components/lab-calendar";
import { MotionReveal } from "@/components/motion-reveal";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = { title: "Lab Calendar", description: "Birthdays, conferences, presentations, milestones, and events from the Sei Higuchi Lab." };

export default function LabCalendarPage() {
  return <>
    <section className="border-b border-[#D8E5FF] bg-gradient-to-b from-[#F4F8FF] to-white py-20 sm:py-28">
      <PageContainer><MotionReveal className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E40AF]">Higuchi Lab</p><h1 className="mt-5 text-balance text-5xl font-bold tracking-[-0.05em] text-[#0B1739] sm:text-6xl lg:text-7xl">Lab Calendar</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[#34435E] sm:text-xl">Follow birthdays, conferences, presentations, lab events, and milestones across the year.</p></MotionReveal></PageContainer>
    </section>
    <section className="bg-[#F4F8FF] py-16 sm:py-24"><PageContainer><LabCalendar /></PageContainer></section>
  </>;
}
