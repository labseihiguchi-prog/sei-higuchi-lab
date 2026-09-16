"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { LabGalleryImage } from "@/data/lab-events";

export function EventPhotoGallery({ images, label, preserveOrientation = false, celebrationBackdrop = false }: { images: LabGalleryImage[]; label: string; preserveOrientation?: boolean; celebrationBackdrop?: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex !== null && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedIndex]);

  const close = () => {
    dialogRef.current?.close();
    setSelectedIndex(null);
  };

  const move = (direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + images.length) % images.length;
    });
  };

  const selected = selectedIndex === null ? null : images[selectedIndex];

  return (
    <>
      <div className={celebrationBackdrop ? "relative isolate overflow-hidden rounded-[28px] border border-[#D8E5FF] bg-[#F7F5EF] p-4 sm:p-7 lg:p-10" : undefined}>
      {celebrationBackdrop && <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/life-in-the-lab/afsin-celebration-backdrop.svg')] bg-[length:540px_360px] sm:bg-[length:720px_480px]" />}
      <ul className={preserveOrientation ? "grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-6" : "grid auto-flow-dense grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12"} aria-label={label}>
        {images.map((photo, index) => {
          const feature = index % 7 === 0;
          const wide = index % 5 === 2;

          return (
            <li
              key={photo.src}
              className={preserveOrientation ? "" : `${feature ? "col-span-2 row-span-2 lg:col-span-7" : wide ? "col-span-2 lg:col-span-7" : "col-span-1 lg:col-span-5"}`}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open image ${index + 1} of ${images.length}: ${photo.alt}`}
                className={`group relative block w-full overflow-hidden rounded-[20px] border border-[#D8E5FF] bg-[#EAF1FF] shadow-[0_8px_28px_rgba(11,23,57,0.05)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(30,64,175,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] motion-reduce:transform-none motion-reduce:transition-none ${preserveOrientation ? "" : feature ? "aspect-[4/3]" : wide ? "aspect-[16/10]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill={!preserveOrientation}
                  width={preserveOrientation ? photo.width : undefined}
                  height={preserveOrientation ? photo.height : undefined}
                  sizes={feature || wide ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 50vw"}
                  className={preserveOrientation ? "h-auto w-full" : "object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"}
                />
                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#0B1739]/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  <Expand size={18} aria-hidden="true" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelectedIndex(null)}
        className="m-auto w-[min(94vw,1180px)] max-w-none overflow-visible rounded-[24px] bg-[#07112B] p-0 text-white shadow-2xl backdrop:bg-[#07112B]/85 backdrop:backdrop-blur-sm"
        aria-label={`${label} image viewer`}
      >
        {selected && (
          <div className="relative flex min-h-[50vh] flex-col items-center justify-center p-4 sm:p-7">
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white transition-colors hover:bg-white hover:text-[#0B1739] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              <X size={21} aria-hidden="true" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="View previous image"
                  className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white transition-colors hover:bg-white hover:text-[#0B1739] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="View next image"
                  className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white transition-colors hover:bg-white hover:text-[#0B1739] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </>
            )}

            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              sizes="94vw"
              className="h-auto max-h-[78vh] w-auto max-w-full rounded-[16px] object-contain"
            />
            <div className="mt-4 flex w-full items-start justify-between gap-5 px-1 text-sm text-blue-100">
              <p>{selected.caption ?? selected.alt}</p>
              {!celebrationBackdrop && <p className="shrink-0 tabular-nums">{(selectedIndex ?? 0) + 1} / {images.length}</p>}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
