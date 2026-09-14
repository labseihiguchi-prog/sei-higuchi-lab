import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LabMember } from "@/data/people";

type PersonCardProps = {
  person: LabMember;
};

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      href={`/people/${person.slug}`}
      aria-label={`View ${person.name}'s profile`}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#D8E5FF] bg-white shadow-[0_10px_34px_rgba(11,23,57,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-[#1E40AF]/35 hover:shadow-[0_24px_54px_rgba(30,64,175,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[#D8E5FF] bg-[#EAF1FF]">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
          style={{ objectPosition: person.imagePosition }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#0B1739]">{person.name}</h3>
        <p className="mt-2 text-sm font-semibold text-[#1E40AF]">{person.role}</p>
        {person.researchInterests && (
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#34435E]">{person.researchInterests}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#1E40AF]">
          View Profile
          <ArrowRight
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </span>
      </div>
    </Link>
  );
}
