import type { LabGalleryImage } from "@/data/lab-events";

const root = "/images/life-in-the-lab/2026-end-of-semester-party/nyspet";

export const nyspetPhotos = {
  speakerOne: { src: `${root}/DSC_2170.JPG`, alt: "A speaker addressing attendees during the NYSPET elections.", width: 6000, height: 4000 },
  speakerTwo: { src: `${root}/DSC_2175.JPG`, alt: "Another speaker during the NYSPET elections held later that day.", width: 6000, height: 4000 },
  secretary: { src: `${root}/DSC_2189.JPG`, alt: "A candidate speaking during the NYSPET elections.", width: 6000, height: 4000 },
  raffle: { src: `${root}/DSC_2199.JPG`, alt: "Kareena with the raffle winner sign at the NYSPET event.", width: 6000, height: 4000 },
  candid: { src: `${root}/DSC_2210.JPG`, alt: "A candid moment following the NYSPET elections.", width: 6000, height: 4000 },
  group: { src: `${root}/DSC_2213.JPG`, alt: "Attendees gathered after the NYSPET elections.", width: 6000, height: 4000 },
} satisfies Record<string, LabGalleryImage>;
