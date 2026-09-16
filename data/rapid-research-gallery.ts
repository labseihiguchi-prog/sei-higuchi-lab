import type { LabGalleryImage } from "@/data/lab-events";

const root = "/images/life-in-the-lab/rapid-research-2026";

export const rapidResearchPhotos = {
  hero: { src: `${root}/IMG-20260506-WA0250.jpg`, alt: "A participant presenting during the Rapid Research competition.", width: 5120, height: 3840 },
  speaker: { src: `${root}/20260506_113936.jpg`, alt: "The science communication session with attendees listening in person and online.", width: 2251, height: 1688 },
  audience: { src: `${root}/20260506_114004.jpg`, alt: "Attendees gathered for the Rapid Research program.", width: 2195, height: 1646 },
  judges: { src: `${root}/20260506_115235.jpg`, alt: "Judges listening during the Rapid Research competition.", width: 2337, height: 1753 },
  photoBooth: { src: `${root}/20260506_133212[1].jpg`, alt: "The photo booth setup at the end-of-semester celebration.", width: 1839, height: 1379 },
  catering: { src: `${root}/20260506_134503[1].jpg`, alt: "A detail from the catered celebration.", width: 1739, height: 1304 },
  musicOne: { src: `${root}/20260506_144412[1].jpg`, alt: "Live music during the celebration following the competition.", width: 2957, height: 1665 },
  musicTwo: { src: `${root}/20260506_144854[1].jpg`, alt: "Another musical moment from the celebration.", width: 2380, height: 1340 },
  award: { src: `${root}/IMG-20260506-WA0216.jpg`, alt: "Mais Alkyam receiving recognition for second place in the Rapid Research competition.", width: 768, height: 1024 },
} satisfies Record<string, LabGalleryImage>;

export const rapidResearchGallery = Object.values(rapidResearchPhotos);

export const rapidResearchPhotoBoothGallery: LabGalleryImage[] = [
  { src: `${root}/img_0015.jpg`, width: 4272, height: 2848, alt: "Lab members posing with colorful science-themed bottles at the photo booth." },
  { src: `${root}/img_0018.jpg`, width: 4272, height: 2848, alt: "Lab members enjoying the photo booth with pipettes and laboratory props." },
  { src: `${root}/img_0019.jpg`, width: 4272, height: 2848, alt: "A cheerful group photo against the sparkling photo booth backdrop." },
  { src: `${root}/img_0022.jpg`, width: 4272, height: 2848, alt: "The lab team posing together with pipettes and colorful bottles." },
  { src: `${root}/img_0024.jpg`, width: 4272, height: 2848, alt: "A playful photo booth moment with science-themed props." },
  { src: `${root}/img_0069.jpg`, width: 4272, height: 2848, alt: "Lab members sharing a smiling photo booth moment with colorful lab bottles." },
];
