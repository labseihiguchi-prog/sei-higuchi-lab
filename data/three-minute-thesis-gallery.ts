export type ThreeMinuteThesisPhoto = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

const imageRoot = "/images/life-in-the-lab/3-minute-thesis-2026";

export const threeMinuteThesisPhotos = {
  hero: {
    src: `${imageRoot}/group-wide.jpg`,
    alt: "Students, faculty, and attendees at the 2026 3-Minute Thesis Competition at St. John’s University.",
    width: 2149,
    height: 1612,
  },
  eventGroup: {
    src: `${imageRoot}/event-group.jpg`,
    alt: "Participants and faculty at the 2026 3-Minute Thesis Competition.",
    width: 2288,
    height: 1716,
  },
  eventParticipants: {
    src: `${imageRoot}/event-participants.jpg`,
    alt: "Three participants standing beneath the 2026 3-Minute Thesis Competition screen.",
    width: 3024,
    height: 4032,
  },
  judges: {
    src: `${imageRoot}/judges.jpg`,
    alt: "Faculty judges during the SJU-AAPS Student Chapter 3-Minute Thesis Competition.",
    width: 1600,
    height: 1200,
  },
  audiencePresentation: {
    src: `${imageRoot}/audience-presentation.jpg`,
    alt: "Audience members attending a research presentation during the 2026 3-Minute Thesis Competition.",
    width: 1600,
    height: 1200,
  },
  aapsLeadership: {
    src: `${imageRoot}/aaps-leadership.jpg`,
    alt: "SJU-AAPS Student Chapter representatives at the 2026 3-Minute Thesis Competition.",
    width: 1200,
    height: 1600,
  },
  afsinPresentation: {
    src: `${imageRoot}/afsin-presentation.jpg`,
    alt: "Afsin Malik presenting Higuchi Lab research during the 2026 3-Minute Thesis Competition.",
    width: 1200,
    height: 1600,
  },
  afsinAward: {
    src: `${imageRoot}/afsin-student-voting-award.jpg`,
    alt: "Afsin Malik receiving the Student Voting Award at the 2026 3-Minute Thesis Competition.",
    width: 1200,
    height: 1600,
  },
} satisfies Record<string, ThreeMinuteThesisPhoto>;

export const threeMinuteThesisGallery = Object.values(threeMinuteThesisPhotos);
