import type { LabGalleryImage } from "@/data/lab-events";

const imageRoot = "/images/life-in-the-lab/keystone-2026";

export const keystonePhotos = {
  hero: {
    src: `${imageRoot}/oral-presentation-hero.jpg`,
    alt: "Afsin Malik presenting Higuchi Lab research at Keystone Symposia 2026 as a slide about pythons and satiety is displayed.",
    width: 4032,
    height: 3024,
  },
  podium: {
    src: `${imageRoot}/afsin-at-podium.jpg`,
    alt: "Afsin Malik standing at the podium during her oral presentation at Keystone Symposia 2026.",
    width: 3060,
    height: 4080,
  },
  poster: {
    src: `${imageRoot}/afsin-with-poster.jpg`,
    alt: "Afsin Malik standing beside her scientific poster at Keystone Symposia 2026.",
    width: 3060,
    height: 4080,
  },
  conferenceRoom: {
    src: `${imageRoot}/conference-room.jpg`,
    alt: "Afsin Malik delivering her oral presentation to attendees at Keystone Symposia 2026.",
    width: 5712,
    height: 4284,
  },
  pparaSlide: {
    src: `${imageRoot}/ppara-slide.jpg`,
    alt: "Afsin Malik presenting a scientific slide about PPAR alpha and the effect of pythocholic acid.",
    width: 4032,
    height: 3024,
  },
  reunion: {
    src: `${imageRoot}/columbia-reunion.jpg`,
    alt: "Dr. Sei Higuchi reunited with longtime Columbia colleagues Lori Sussel and Anthony W. Ferrante Jr.",
    caption:
      "Reunion with Columbia colleagues — Anthony W. Ferrante Jr., MD, PhD, Lori Sussel, PhD, and Dr. Sei Higuchi.",
    width: 1440,
    height: 1440,
  },
  scenery: {
    src: `${imageRoot}/breckenridge-scenery.jpg`,
    alt: "Mountain scenery in Breckenridge, Colorado during Keystone Symposia 2026.",
    width: 4080,
    height: 3060,
  },
} satisfies Record<string, LabGalleryImage>;

export const keystoneGallery = [
  keystonePhotos.podium,
  keystonePhotos.pparaSlide,
  keystonePhotos.scenery,
];
