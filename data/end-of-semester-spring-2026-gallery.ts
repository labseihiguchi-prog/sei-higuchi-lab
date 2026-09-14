import type { LabGalleryImage } from "@/data/lab-events";

const basePath = "/images/life-in-the-lab/2026-end-of-semester-party";

export const endOfSemesterSpring2026Photos = {
  hero: {
    src: `${basePath}/end-of-semester-group.jpg`,
    alt: "Higuchi Lab members gathered in a decorated hallway for the Spring 2026 end-of-semester party.",
    width: 2000,
    height: 1500,
  },
  celebrationCakePortrait: {
    src: `${basePath}/celebration-cake-portrait.jpg`,
    alt: "Mais and another lab member hold the celebration cake during the end-of-semester party.",
    width: 1500,
    height: 2000,
  },
  phdCandidateCelebration: {
    src: `${basePath}/phd-candidate-celebration.jpg`,
    alt: "Lab members share a congratulatory moment during the Spring 2026 celebration.",
    width: 2000,
    height: 1126,
  },
  graduationBalloon: {
    src: `${basePath}/graduation-balloon.jpg`,
    alt: "A gold graduation balloon at the Higuchi Lab celebration.",
    width: 2000,
    height: 1333,
  },
  graduatesGroup: {
    src: `${basePath}/graduates-group.jpg`,
    alt: "Graduating lab members gathered together with the celebration cake.",
    width: 2000,
    height: 1500,
  },
  birthdayCakeDetail: {
    src: `${basePath}/birthday-cake-detail.jpg`,
    alt: "The birthday cake prepared for the lab celebration.",
    width: 1500,
    height: 2000,
  },
  labAppreciation: {
    src: `${basePath}/lab-appreciation.jpg`,
    alt: "A lab member receives a wrapped token of appreciation while the group looks on.",
    width: 2000,
    height: 1126,
  },
  colorHuntingBottles: {
    src: `${basePath}/color-hunting-bottles.jpg`,
    alt: "Brightly colored bottles arranged for Color Hunting: Lab Edition.",
    width: 2000,
    height: 1333,
  },
  colorHuntingParticipant: {
    src: `${basePath}/color-hunting-participant.jpg`,
    alt: "A participant arranges colorful bottles during Color Hunting: Lab Edition.",
    width: 2000,
    height: 1333,
  },
  colorHuntingDrHiguchi: {
    src: `${basePath}/color-hunting-dr-higuchi.jpg`,
    alt: "Dr. Sei Higuchi takes a turn arranging bottles during Color Hunting: Lab Edition.",
    width: 2000,
    height: 1333,
  },
  colorHuntingSmiles: {
    src: `${basePath}/color-hunting-smiles.jpg`,
    alt: "A smiling participant completes a colorful bottle arrangement.",
    width: 2000,
    height: 1333,
  },
  gamesLaughter: {
    src: `${basePath}/games-laughter.jpg`,
    alt: "Lab members playing Bing Bong by trying to land colored balls in cups during the End of Semester Party.",
    width: 2000,
    height: 1333,
  },
  cupTowerGame: {
    src: `${basePath}/cup-tower-game.jpg`,
    alt: "Lab members race to build a tower from red cups.",
    width: 1333,
    height: 2000,
  },
  kevinBingoWinner: {
    src: `${basePath}/kevin-bingo-winner.jpg`,
    alt: "Kevin holds his Bingo card and gift card beside Dr. Sei Higuchi.",
    width: 1821,
    height: 1366,
  },
  partyCandid: {
    src: `${basePath}/party-candid.jpg`,
    alt: "Lab members smile and watch the games during the celebration.",
    width: 2000,
    height: 1333,
  },
} satisfies Record<string, LabGalleryImage>;

export const endOfSemesterSpring2026Gallery: LabGalleryImage[] = [
  endOfSemesterSpring2026Photos.hero,
  endOfSemesterSpring2026Photos.celebrationCakePortrait,
  endOfSemesterSpring2026Photos.phdCandidateCelebration,
  endOfSemesterSpring2026Photos.graduationBalloon,
  endOfSemesterSpring2026Photos.graduatesGroup,
  endOfSemesterSpring2026Photos.birthdayCakeDetail,
  endOfSemesterSpring2026Photos.labAppreciation,
  endOfSemesterSpring2026Photos.colorHuntingBottles,
  endOfSemesterSpring2026Photos.colorHuntingParticipant,
  endOfSemesterSpring2026Photos.colorHuntingDrHiguchi,
  endOfSemesterSpring2026Photos.colorHuntingSmiles,
  endOfSemesterSpring2026Photos.gamesLaughter,
  endOfSemesterSpring2026Photos.cupTowerGame,
  endOfSemesterSpring2026Photos.kevinBingoWinner,
  endOfSemesterSpring2026Photos.partyCandid,
];
