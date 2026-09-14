"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const topic = String(formData.get("topic") ?? "General inquiry");
    const message = String(formData.get("message") ?? "");
    const subject = `Sei Higuchi Lab Inquiry – ${topic}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Topic: ${topic}`, "", message].join("\n");

    window.location.href = `mailto:labseihiguchi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with a prepared message to the Sei Higuchi Lab.");
  }

  const inputClassName = "mt-2 min-h-12 w-full rounded-xl border border-[#D8E5FF] bg-white px-4 py-3 text-sm text-[#0B1739] outline-none transition-colors placeholder:text-[#34435E]/60 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/15";

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D8E5FF] bg-white p-7 shadow-[0_16px_48px_rgba(11,23,57,0.065)] sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#0B1739]">
          Name <span className="text-[#1E40AF]" aria-hidden="true">*</span>
          <input required autoComplete="name" name="name" className={inputClassName} placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-[#0B1739]">
          Email <span className="text-[#1E40AF]" aria-hidden="true">*</span>
          <input required type="email" autoComplete="email" name="email" className={inputClassName} placeholder="you@example.com" />
        </label>
      </div>
      <label className="mt-6 block text-sm font-semibold text-[#0B1739]">
        Topic <span className="text-[#1E40AF]" aria-hidden="true">*</span>
        <select required name="topic" defaultValue="" className={inputClassName}>
          <option value="" disabled>Select a topic</option>
          <option value="research">Research inquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="graduate">Graduate opportunities</option>
          <option value="undergraduate">Undergraduate research</option>
          <option value="visiting">Visiting researcher inquiry</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="mt-6 block text-sm font-semibold text-[#0B1739]">
        Message <span className="text-[#1E40AF]" aria-hidden="true">*</span>
        <textarea required name="message" rows={6} className={`${inputClassName} resize-y`} placeholder="Briefly describe your inquiry. Please do not include sensitive personal information." />
      </label>
      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#17358F] px-6 py-3 text-sm font-semibold text-white shadow-[0_9px_26px_rgba(30,64,175,0.2)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_13px_32px_rgba(30,64,175,0.27)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none">
          <Send size={17} strokeWidth={1.8} className="mr-2" aria-hidden="true" />
          Prepare Inquiry
        </button>
        <p className="text-xs leading-5 text-[#34435E]">Opens a prepared message in your email app.</p>
      </div>
      {status && <p role="status" className="mt-5 rounded-xl border border-[#D8E5FF] bg-[#F4F8FF] px-4 py-3 text-sm leading-6 text-[#34435E]">{status}</p>}
    </form>
  );
}
