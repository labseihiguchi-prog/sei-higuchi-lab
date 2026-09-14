import Image from "next/image";

export type SimplePerson = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
};

export function SimplePersonCard({ person }: { person: SimplePerson }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#D8E5FF] bg-white shadow-[0_10px_34px_rgba(11,23,57,0.05)]">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[#D8E5FF] bg-[#EAF1FF]">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: person.imagePosition ?? "50% 35%" }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#0B1739]">{person.name}</h3>
        <p className="mt-2 text-sm font-semibold text-[#1E40AF]">{person.role}</p>
      </div>
    </article>
  );
}
