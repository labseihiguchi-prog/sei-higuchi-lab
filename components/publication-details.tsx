import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/data/publications";

export function PublicationAuthors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author, index) => (
        <span key={`${author}-${index}`}>
          {index > 0 && "; "}
          {author === "Sei Higuchi" ? <strong className="font-semibold text-[#0B1739]">{author}</strong> : author}
        </span>
      ))}
    </>
  );
}

export function PublicationCitation({ publication }: { publication: Publication }) {
  const details = [
    publication.volume,
    publication.issue ? `(${publication.issue})` : undefined,
    publication.pages ? `: ${publication.pages}` : undefined,
  ].filter(Boolean).join("");

  return (
    <p className="text-sm leading-6 text-[#34435E]">
      <span className="italic">{publication.journal}</span>
      {details && <>, {details}</>}
      . {publication.year}.
    </p>
  );
}

export function PublicationLinks({ publication, inverse = false }: { publication: Publication; inverse?: boolean }) {
  if (!publication.pubmed && !publication.doi) return null;

  const baseClass = inverse
    ? "border-white/35 bg-white text-[#1E40AF] hover:bg-[#F4F8FF] focus-visible:outline-white"
    : "border-[#BFD2FA] bg-white text-[#1E40AF] hover:border-[#1E40AF] hover:bg-[#F4F8FF] focus-visible:outline-[#1E40AF]";

  return (
    <div className="flex flex-wrap gap-3">
      {publication.pubmed && (
        <a
          href={publication.pubmed}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View “${publication.title}” on PubMed (opens in a new tab)`}
          className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${baseClass}`}
        >
          View on PubMed <ArrowUpRight aria-hidden="true" className="ml-2 shrink-0" size={16} strokeWidth={1.8} />
        </a>
      )}
      {publication.doi && (
        <a
          href={`https://doi.org/${publication.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View DOI for “${publication.title}” (opens in a new tab)`}
          className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${baseClass}`}
        >
          View DOI <ArrowUpRight aria-hidden="true" className="ml-2 shrink-0" size={16} strokeWidth={1.8} />
        </a>
      )}
    </div>
  );
}
