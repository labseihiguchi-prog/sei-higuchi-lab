export type NormanFleischerPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const imageRoot = "/images/life-in-the-lab/norman-fleischer-2026";

export const normanFleischerPhotos = {
  hero: {
    src: `${imageRoot}/20260508_133037.jpg`,
    alt: "Higuchi Lab members and colleagues at the Norman Fleischer NYC Regional Diabetes Symposium.",
    width: 4080,
    height: 3060,
  },
  posterAfsinMain: {
    src: `${imageRoot}/20260508_130418.jpg`,
    alt: "Afsin Malik presenting a poster at the Norman Fleischer NYC Regional Diabetes Symposium.",
    width: 2252,
    height: 4000,
  },
  posterAfsin: {
    src: `${imageRoot}/20260508_130242.jpg`,
    alt: "Afsin Malik standing beside a Higuchi Lab research poster.",
    width: 3000,
    height: 4000,
  },
  posterLinDiscussion: {
    src: `${imageRoot}/20260508_131957.jpg`,
    alt: "Lin Choi discussing a research poster with symposium attendees.",
    width: 3000,
    height: 4000,
  },
  posterLin: {
    src: `${imageRoot}/20260508_133216.jpg`,
    alt: "Lin Choi presenting a Higuchi Lab poster.",
    width: 2252,
    height: 4000,
  },
  posterKevin: {
    src: `${imageRoot}/20260508_133510.jpg`,
    alt: "Kevin Lee discussing a Higuchi Lab poster with a symposium attendee.",
    width: 4080,
    height: 3060,
  },
  posterAfsinDiscussion: {
    src: `${imageRoot}/20260508_134614.jpg`,
    alt: "Afsin Malik explaining a Higuchi Lab research poster to symposium attendees.",
    width: 4080,
    height: 3060,
  },
  connectionsMain: {
    src: `${imageRoot}/20260508_131926.jpg`,
    alt: "Kevin Lee and Lin Choi with Dr. Rebecca Anne Haeusler at the symposium.",
    width: 3060,
    height: 4080,
  },
  connectionsHiguchi: {
    src: `${imageRoot}/20260508_133316.jpg`,
    alt: "Dr. Sei Higuchi speaking with a symposium attendee near the Higuchi Lab posters.",
    width: 3000,
    height: 4000,
  },
  connectionsDiscussion: {
    src: `${imageRoot}/20260508_131911.jpg`,
    alt: "Higuchi Lab members participating in a scientific discussion during the poster session.",
    width: 3060,
    height: 4080,
  },
  columbiaMain: {
    src: `${imageRoot}/20260508_170508.jpg`,
    alt: "Mais Alkyam, Kevin Lee, and Lin Choi outside Columbia University’s Russ Berrie Medical Science Pavilion.",
    width: 3060,
    height: 4080,
  },
  columbiaWalkGroup: {
    src: `${imageRoot}/20260508_161359.jpg`,
    alt: "Dr. Sei Higuchi guiding lab members during a walk through the Columbia University campus.",
    width: 3000,
    height: 4000,
  },
  columbiaWalk: {
    src: `${imageRoot}/20260508_161727.jpg`,
    alt: "Dr. Sei Higuchi leading the group through the Columbia University campus.",
    width: 3000,
    height: 4000,
  },
  columbiaTour: {
    src: `${imageRoot}/20260508_161742.jpg`,
    alt: "Dr. Sei Higuchi pointing out part of his former Columbia University research environment.",
    width: 2252,
    height: 4000,
  },
  haeuslerLab: {
    src: `${imageRoot}/20260508_164320.jpg`,
    alt: "Sign for the Rebecca Haeusler Laboratory at Columbia University.",
    width: 4000,
    height: 3000,
  },
  galleryGroup: {
    src: `${imageRoot}/20260508_104314.jpg`,
    alt: "Mais Alkyam, Kevin Lee, and Lin Choi with a Higuchi Lab poster at the symposium.",
    width: 4000,
    height: 3000,
  },
  galleryPresentation: {
    src: `${imageRoot}/20260508_155334.jpg`,
    alt: "Kevin Lee attending a symposium presentation.",
    width: 3060,
    height: 4080,
  },
} satisfies Record<string, NormanFleischerPhoto>;

export const normanFleischerGallery = Object.values(normanFleischerPhotos);
