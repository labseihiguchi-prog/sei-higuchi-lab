import { conferenceHero, conferencePhotos } from "@/data/conference-gallery";
import {
  endOfSemesterSpring2026Gallery,
  endOfSemesterSpring2026Photos,
} from "@/data/end-of-semester-spring-2026-gallery";
import { keystoneGallery, keystonePhotos } from "@/data/keystone-gallery";
import {
  normanFleischerGallery,
  normanFleischerPhotos,
} from "@/data/norman-fleischer-gallery";
import {
  threeMinuteThesisGallery,
  threeMinuteThesisPhotos,
} from "@/data/three-minute-thesis-gallery";
import { jonathanBirthdayPhotos, linBirthdayPhotos, seiNoraBirthdayPhotos } from "@/data/birthday-galleries";
import { nyspetPhotos } from "@/data/nyspet-gallery";
import { rapidResearchGallery, rapidResearchPhotos } from "@/data/rapid-research-gallery";
import { sidoRestaurantUrl } from "@/data/site-config";

export const labEventCategories = [
  "Research & Conferences",
  "Awards & Achievements",
  "Graduations & Milestones",
  "Celebrations",
  "Beyond the Bench",
] as const;

export const labEventYears = [2026, 2025, 2024] as const;

export type LabEventCategory = (typeof labEventCategories)[number];

export type LabGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type LabEventSection = {
  title: string;
  date: string;
  description: string;
  mainImage: LabGalleryImage;
  gallery: LabGalleryImage[];
  eyebrow?: string;
  links?: { label: string; href: string }[];
  kind?:
    | "editorial"
    | "awards"
    | "spotlight"
    | "compact"
    | "award-portrait"
    | "photo-pair";
};

export type LabEvent = {
  slug: string;
  title: string;
  startDate: string;
  endDate: string;
  displayDate: string;
  year: number;
  location: string;
  categories: LabEventCategory[];
  shortDescription: string;
  introduction?: string[];
  heroImage: LabGalleryImage;
  featured: boolean;
  sections: LabEventSection[];
  gallery: LabGalleryImage[];
};

const allConferenceImages: LabGalleryImage[] = [conferenceHero, ...conferencePhotos];

function image(fileName: string): LabGalleryImage {
  const match = allConferenceImages.find((photo) => photo.src.endsWith(`/${fileName}`));

  if (!match) {
    throw new Error(`Missing conference image: ${fileName}`);
  }

  return match;
}

const dayOneGallery = [
  "research-week-294.webp",
  "research-week-304.webp",
  "dsc-1031.webp",
  "dsc-1034.webp",
  "dsc-1059.webp",
  "dsc-1074.webp",
  "dsc-1081.webp",
  "dsc-1128.webp",
  "dsc-1138.webp",
  "dsc-1148.webp",
  "dsc-1157.webp",
  "dsc-1160.webp",
  "dsc-1165.webp",
  "dsc-1172.webp",
  "dsc-1183.webp",
  "dsc-1185.webp",
  "dsc-1190.webp",
  "dsc-1223.webp",
  "dsc-1228.webp",
  "dsc-1295.webp",
].map(image);

const dayTwoGallery = [
  "research-week-256.webp",
  "research-week-293.webp",
  "research-week-444.webp",
  "research-week-450.webp",
  "research-week-452.webp",
  "research-week-476.webp",
  "research-week-539.webp",
  "dsc-1461.webp",
  "img-9549.webp",
  "dsc-1313.webp",
  "dsc-1317.webp",
].map(image);

const awardsGallery = [
  "research-week-552.webp",
  "research-week-554.webp",
  "research-week-558.webp",
  "research-week-561.webp",
  "research-week-583.webp",
].map(image);

const researchLeaderGallery = ["research-week-457.webp", "dsc-1436.webp"].map(image);

const labEventsUnsorted: LabEvent[] = [
  {
    slug: "2026-keystone-symposia-gut-brain-axis",
    title: "Keystone Symposia — Gut-Brain Axis",
    startDate: "2026-03-16",
    endDate: "2026-03-19",
    displayDate: "March 16–19, 2026",
    year: 2026,
    location: "Beaver Run Conference Center, Breckenridge, Colorado",
    categories: ["Research & Conferences"],
    shortDescription:
      "Afsin Malik represented the Higuchi Lab at the 2026 Keystone Symposia Gut-Brain Axis meeting, where she was selected to present her research through both an oral presentation and a scientific poster.",
    introduction: [
      "Afsin Malik represented the Higuchi Lab at the 2026 Keystone Symposia Gut-Brain Axis meeting in Breckenridge, Colorado, where she was selected to share her research through both an oral presentation and a scientific poster. Presenting the lab’s work to an international scientific audience marked an exciting milestone in her doctoral training. Dr. Sei Higuchi also attended the meeting.",
    ],
    heroImage: keystonePhotos.hero,
    featured: false,
    sections: [
      {
        eyebrow: "Research Highlight",
        title:
          "16α-Hydroxylated Bile Acid Mediates Food Intake Through Intestinal Oleoylethanolamide (OEA)-PPARα Signaling",
        date: "2026-03-17",
        description:
          "Afsin presented the lab’s work investigating how 16α-hydroxylated bile acid influences food intake through intestinal oleoylethanolamide (OEA)-PPARα signaling.",
        mainImage: keystonePhotos.poster,
        gallery: [keystonePhotos.podium],
        kind: "spotlight",
      },
      {
        eyebrow: "Oral Presentation",
        title: "An Important Professional Milestone",
        date: "2026-03-17",
        description:
          "Being selected for an oral presentation at Keystone was an important milestone for Afsin and an exciting achievement for the Higuchi Lab.",
        mainImage: keystonePhotos.conferenceRoom,
        gallery: keystoneGallery.slice(1),
        kind: "editorial",
      },
      {
        eyebrow: "Scientific Connections",
        title: "A Columbia Reunion",
        date: "2026-03-19",
        description:
          "The meeting also gave Dr. Higuchi the chance to reconnect with longtime friends and former Columbia colleagues Lori Sussel, PhD, and Anthony W. Ferrante Jr., MD, PhD, bringing together old friendships and shared connections in metabolism and diabetes research.",
        mainImage: keystonePhotos.reunion,
        gallery: [],
        kind: "compact",
      },
    ],
    gallery: [keystonePhotos.hero, keystonePhotos.poster, ...keystoneGallery, keystonePhotos.reunion],
  },
  {
    slug: "2026-student-research-conference",
    title: "2026 Student Research Conference",
    startDate: "2026-04-14",
    endDate: "2026-04-15",
    displayDate: "April 14–15, 2026",
    year: 2026,
    location: "St. John’s University",
    categories: ["Research & Conferences", "Awards & Achievements"],
    shortDescription:
      "The 2026 St. John’s University Student Research Conference brought students and faculty together to share research through poster exhibitions and panel presentations. The Higuchi Lab participated across both days, showcasing student research and celebrating an outstanding collection of achievements.",
    heroImage: image("main-picture.webp"),
    featured: true,
    sections: [
      {
        eyebrow: "April 14, 2026",
        title: "Day 1 — Poster Presentations",
        date: "2026-04-14",
        description:
          "Higuchi Lab members kicked off the 2026 Student Research Conference by presenting their research during the poster exhibition, sharing their work with students, faculty, and the broader St. John’s research community.",
        mainImage: image("dsc-1207.webp"),
        gallery: dayOneGallery,
        kind: "editorial",
      },
      {
        eyebrow: "April 15, 2026",
        title: "Day 2 — Presentations & Awards",
        date: "2026-04-15",
        description:
          "The second day continued with research presentations and concluded with the conference awards. Afsin Malik presented research during a panel session, while Dr. Sei Higuchi served as a judge for another panel.",
        mainImage: image("research-week-414.webp"),
        gallery: dayTwoGallery,
        kind: "editorial",
      },
      {
        eyebrow: "Awards & Achievements",
        title: "A Proud Day for the Higuchi Lab",
        date: "2026-04-15",
        description:
          "The conference concluded with multiple first-place poster awards recognizing research presented by members of the Higuchi Lab. Sydney O. Idahosa, Afsin Malik, Kevin Lee, Rosa Kang, Lin Choi, and Brianna Blanco were among the award recipients. Kevin Lee had an especially memorable conference, receiving recognition for multiple posters to which he contributed.",
        mainImage: image("research-week-580.webp"),
        gallery: awardsGallery,
        kind: "awards",
      },
      {
        eyebrow: "Faculty Recognition",
        title: "Emerging Research Leader Award",
        date: "2026-04-15",
        description:
          "Dr. Sei Higuchi was recognized with the Emerging Research Leader Award during the 2026 Student Research Conference.",
        mainImage: image("research-week-460.webp"),
        gallery: researchLeaderGallery,
        kind: "spotlight",
      },
    ],
    gallery: allConferenceImages,
  },
  {
    slug: "2026-3-minute-thesis-competition",
    title: "3-Minute Thesis",
    startDate: "2026-04-16",
    endDate: "2026-04-16",
    displayDate: "April 16, 2026",
    year: 2026,
    location: "DAC-128, St. John’s University",
    categories: ["Awards & Achievements"],
    shortDescription:
      "Afsin Malik represented the Higuchi Lab and received the Student Voting Award at the SJU-AAPS Student Chapter’s 2026 3-Minute Thesis event, hosted by Mais Alkyam.",
    introduction: [
      "The Higuchi Lab was proudly represented at the SJU-AAPS Student Chapter’s 2026 3-Minute Thesis Competition by doctoral researcher Afsin Malik. With only three minutes to communicate her research, Afsin introduced the audience to the lab’s work investigating pythocholic acid and its potential relevance to obesity and metabolic health.",
      "Mais Alkyam served as host, bringing graduate researchers together with faculty judges, students, and members of the St. John’s research community in DAC-128.",
    ],
    heroImage: threeMinuteThesisPhotos.hero,
    featured: false,
    sections: [
      {
        eyebrow: "Higuchi Lab Research",
        title: "Research in Three Minutes",
        date: "2026-04-16",
        description:
          "The 3-Minute Thesis format challenges researchers to communicate the significance of their work clearly and concisely. Afsin used the format to introduce the audience to the Higuchi Lab’s research involving pythocholic acid and obesity.",
        mainImage: threeMinuteThesisPhotos.afsinPresentation,
        gallery: [threeMinuteThesisPhotos.audiencePresentation],
        kind: "compact",
      },
      {
        eyebrow: "Awards & Achievements",
        title: "Student Voting Award",
        date: "2026-04-16",
        description:
          "Afsin’s presentation resonated with the student audience, earning her the Student Voting Award. The recognition highlighted both the scientific story behind her work and her ability to communicate complex research clearly and engagingly in just three minutes.",
        mainImage: threeMinuteThesisPhotos.afsinAward,
        gallery: [],
        kind: "award-portrait",
      },
      {
        eyebrow: "Competition Results",
        title: "Competition Recognition",
        date: "2026-04-16",
        description:
          "Himaxi Patel received Judges’ First Place, Drishti Rathod received Judges’ Second Place, and Afsin Malik of the Higuchi Lab received the Student Voting Award. Himaxi and Drishti are students in Dr. Ketan D. Patel’s research group; the Student Voting Award was a separate recognition category.",
        mainImage: threeMinuteThesisPhotos.eventGroup,
        gallery: [],
        kind: "editorial",
      },
      {
        eyebrow: "SJU-AAPS Student Chapter",
        title: "Hosted by Mais Alkyam",
        date: "2026-04-16",
        description:
          "Mais Alkyam helped lead the 2026 3-Minute Thesis event as host, guiding the program as graduate researchers presented their work to faculty judges, students, and members of the St. John’s research community.",
        mainImage: threeMinuteThesisPhotos.aapsLeadership,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Evaluation Panel",
        title: "Faculty Judges",
        date: "2026-04-16",
        description:
          "The presentations were evaluated by Dr. Saurabh Agarwal, Dr. Tanaji T. Talele, and Dr. Nitesh K. Kunda.",
        mainImage: threeMinuteThesisPhotos.judges,
        gallery: [],
        kind: "editorial",
      },
      {
        eyebrow: "St. John’s University",
        title: "A Strong Research Community",
        date: "2026-04-16",
        description:
          "The competition also brought together faculty and members of the broader St. John’s research community, including Associate Dean Dr. Aaron Muth, former Department Chair Dr. Vijaya L. Korlipara, Dr. Sandra Reznik, and Dr. Ketan D. Patel.",
        mainImage: threeMinuteThesisPhotos.audiencePresentation,
        gallery: [threeMinuteThesisPhotos.eventParticipants],
        kind: "editorial",
      },
    ],
    gallery: threeMinuteThesisGallery,
  },
  {
    slug: "2026-end-of-semester-party-spring",
    title: "End of Semester Party — Spring 2026",
    startDate: "2026-05-05",
    endDate: "2026-05-05",
    displayDate: "May 5, 2026",
    year: 2026,
    location: "Higuchi Lab, St. John’s University",
    categories: ["Celebrations"],
    shortDescription:
      "The Higuchi Lab closed the Spring 2026 semester with a joyful celebration of a new PhD Candidate, six graduates, three birthdays, and the people who keep the lab community connected.",
    introduction: [
      "On May 5, 2026, the Higuchi Lab came together to celebrate the close of the Spring semester — and there was a lot to celebrate. The afternoon recognized academic milestones, graduating members, birthdays, and the people who help make the lab feel like a community.",
      "With cake, thoughtful gifts, colorful activities, and plenty of friendly competition, the gathering offered everyone a chance to pause, laugh, and enjoy being together outside the usual rhythm of experiments and deadlines.",
    ],
    heroImage: endOfSemesterSpring2026Photos.hero,
    featured: false,
    sections: [
      {
        eyebrow: "Spring 2026",
        title: "A Lot to Celebrate",
        date: "2026-05-05",
        description:
          "The afternoon brought several happy occasions into one gathering: a major doctoral milestone, six graduating lab members, three birthdays, and a small moment of appreciation for the care that goes into bringing everyone together.",
        mainImage: endOfSemesterSpring2026Photos.hero,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Milestone",
        title: "A New PhD Candidate",
        date: "2026-05-05",
        description:
          "A major highlight of the celebration was recognizing Sydney, who passed her comprehensive examination and officially became a PhD Candidate. The lab marked the achievement together and celebrated an important step forward in her doctoral journey.",
        mainImage: endOfSemesterSpring2026Photos.phdCandidateCelebration,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Graduations & Milestones",
        title: "Celebrating Our Graduates",
        date: "2026-05-05",
        description:
          "The lab also celebrated Brianna, Ludo, Gabby, Nora, Lin, and Daniel as they prepared to graduate. It was a chance to recognize their contributions, cheer on what comes next, and share one more joyful afternoon together.",
        mainImage: endOfSemesterSpring2026Photos.graduationBalloon,
        gallery: [endOfSemesterSpring2026Photos.graduatesGroup],
        kind: "photo-pair",
      },
      {
        eyebrow: "Four Birthdays",
        title: "Birthday Celebration",
        date: "2026-05-05",
        description:
          "The group shared birthday wishes — and cake — for Mais, Sydney, Daniel, and Yamin, adding another reason to gather around the table and celebrate together.",
        mainImage: endOfSemesterSpring2026Photos.celebrationCakePortrait,
        gallery: [endOfSemesterSpring2026Photos.birthdayCakeDetail],
        kind: "photo-pair",
      },
      {
        eyebrow: "Thank You, Mais",
        title: "A Little Lab Appreciation",
        date: "2026-05-05",
        description:
          "The lab also recognized Mais Alkyam for regularly planning and organizing lab events. The small gesture was a warm thank-you for the energy, care, and attention to detail she brings to creating moments the group can enjoy together.",
        mainImage: endOfSemesterSpring2026Photos.labAppreciation,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Around the Lab",
        title: "Color Hunting: Lab Edition",
        date: "2026-05-05",
        description:
          "Color Hunting: Lab Edition turned a playful visual challenge into one of the afternoon’s most photogenic activities. Guests arranged vivid bottles, compared combinations, and joined in one colorful setup after another — with Dr. Higuchi taking a turn, too.",
        mainImage: endOfSemesterSpring2026Photos.colorHuntingBottles,
        gallery: [
          endOfSemesterSpring2026Photos.colorHuntingParticipant,
          endOfSemesterSpring2026Photos.colorHuntingDrHiguchi,
          endOfSemesterSpring2026Photos.colorHuntingSmiles,
        ],
        kind: "editorial",
      },
      {
        eyebrow: "Party Games",
        title: "Let the Games Begin",
        date: "2026-05-05",
        description:
          "The afternoon’s activities included Bingo, Cup Tower, Bing Bong, and Color Hunting: Lab Edition. From racing to build cup towers to trying to land balls in cups, the games brought plenty of competition, close calls, and laughter to the hallway.",
        mainImage: endOfSemesterSpring2026Photos.gamesLaughter,
        gallery: [endOfSemesterSpring2026Photos.cupTowerGame],
        kind: "editorial",
      },
      {
        eyebrow: "Bingo",
        title: "Bingo Champion",
        date: "2026-05-05",
        description:
          "Kevin came out on top in Bingo and received a gift card from Dr. Sei Higuchi — along with some well-earned bragging rights.",
        mainImage: endOfSemesterSpring2026Photos.kevinBingoWinner,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Together Beyond the Bench",
        title: "Good Science, Great Company",
        date: "2026-05-05",
        description:
          "Between experiments, presentations, milestones, and deadlines, days like this are a reminder that science is also about the people beside you. It was a fitting way to close the Spring 2026 semester — together.",
        mainImage: endOfSemesterSpring2026Photos.partyCandid,
        gallery: [],
        kind: "compact",
      },
      {
        eyebrow: "Later That Day",
        title: "Later That Day — NYSPET Elections",
        date: "2026-05-05",
        description:
          "After the end-of-semester celebration wrapped up, several lab members headed to the NYSPET elections held later that day. Mais Alkyam was elected Chair, Afsin Malik was elected Vice Chair, and Yamin was elected Secretary. Parul Suri from the Agarwal Lab was elected Treasurer. The event ended with another fun moment when Kareena won the raffle.",
        mainImage: nyspetPhotos.group,
        gallery: [nyspetPhotos.speakerOne, nyspetPhotos.speakerTwo, nyspetPhotos.secretary, nyspetPhotos.raffle, nyspetPhotos.candid],
        kind: "editorial",
      },
    ],
    gallery: [...endOfSemesterSpring2026Gallery, ...Object.values(nyspetPhotos)],
  },
  {
    slug: "2026-rapid-research-celebrating-women-in-science",
    title: "Rapid Research — Celebrating Women in Science",
    startDate: "2026-05-06",
    endDate: "2026-05-06",
    displayDate: "May 6, 2026",
    year: 2026,
    location: "St. John’s University",
    categories: ["Awards & Achievements"],
    shortDescription:
      "AAPS and AWIS brought science communication, friendly competition, and an end-of-semester celebration together for an afternoon honoring women in science.",
    introduction: [
      "Rapid Research brought together the AAPS Student Chapter at St. John’s University and the Association for Women in Science (AWIS) for an afternoon celebrating women, science, and the power of communication.",
      "Organized as an end-of-semester celebration, the event combined science communication, friendly competition, and community — highlighting the important contributions women continue to make across scientific fields.",
    ],
    heroImage: rapidResearchPhotos.hero,
    featured: false,
    sections: [
      {
        eyebrow: "Science Communication",
        title: "Turning Research Into a Story",
        date: "2026-05-06",
        description:
          "The program began with an AWIS presentation focused on science communication and storytelling. The session explored how researchers can explain complex scientific ideas in ways that are engaging and understandable to non-scientific audiences — an increasingly important skill for researchers communicating beyond the laboratory.",
        mainImage: rapidResearchPhotos.speaker,
        gallery: [rapidResearchPhotos.audience],
        kind: "editorial",
      },
      {
        eyebrow: "AAPS × AWIS",
        title: "Rapid Research Competition",
        date: "2026-05-06",
        description:
          "Following the science communication session, participants put those ideas into practice during the Rapid Research competition. Researchers were challenged to showcase their work clearly, concisely, and in a way that could connect with a broader audience. Representing the Higuchi Lab, Afsin Malik and Mais Alkyam both participated in the competition.",
        mainImage: rapidResearchPhotos.hero,
        gallery: [rapidResearchPhotos.judges],
        kind: "editorial",
      },
      {
        eyebrow: "Award Highlight",
        title: "2nd Place — Mais Alkyam",
        date: "2026-05-06",
        description:
          "Mais Alkyam earned 2nd Place in the Rapid Research competition, marking another proud moment for the Higuchi Lab. Mais also helped organize the event in her role as Vice Chair of the AAPS Student Chapter at St. John’s University.",
        mainImage: rapidResearchPhotos.award,
        gallery: [],
        kind: "award-portrait",
      },
      {
        eyebrow: "End-of-Semester Celebration",
        title: "Celebrating Women in Science",
        date: "2026-05-06",
        description:
          "After the competition, the event transitioned into an end-of-semester celebration filled with food, music, games, conversation, and a photo booth. The afternoon created space not only to share research, but also to celebrate the women shaping science and the community supporting them.",
        mainImage: rapidResearchPhotos.photoBooth,
        gallery: [rapidResearchPhotos.musicOne, rapidResearchPhotos.musicTwo],
        kind: "editorial",
      },
      {
        eyebrow: "With Thanks",
        title: "Community Partners",
        date: "2026-05-06",
        description:
          "Food for the celebration was catered by Sido Restaurant. The photo booth experience was generously provided free of charge by SmileUAreFamous.",
        mainImage: rapidResearchPhotos.catering,
        gallery: [],
        links: [
          ...(sidoRestaurantUrl ? [{ label: "Sido Restaurant", href: sidoRestaurantUrl }] : []),
          { label: "SmileUAreFamous", href: "https://www.smileuarefamous.com/" },
        ],
        kind: "compact",
      },
      {
        eyebrow: "Event Gallery",
        title: "An Afternoon of Science and Community",
        date: "2026-05-06",
        description: "Scenes from the communication session, competition, award presentation, and celebration.",
        mainImage: rapidResearchPhotos.hero,
        gallery: rapidResearchGallery.filter((photo) => photo.src !== rapidResearchPhotos.hero.src),
        kind: "editorial",
      },
    ],
    gallery: rapidResearchGallery,
  },
  {
    slug: "2026-jonathan-birthday-celebration",
    title: "Jonathan’s Birthday Celebration",
    startDate: "2026-06-10",
    endDate: "2026-06-10",
    displayDate: "June 10, 2026",
    year: 2026,
    location: "Higuchi Lab, St. John’s University",
    categories: ["Celebrations"],
    shortDescription: "The Higuchi Lab celebrated Jonathan’s June 8 birthday with cake, candles, and a cheerful break together in the lab.",
    heroImage: jonathanBirthdayPhotos.hero,
    featured: false,
    sections: [{
      eyebrow: "Celebrations",
      title: "A Birthday Break Beyond the Bench",
      date: "2026-06-10",
      description: "The Higuchi Lab celebrated Jonathan’s birthday with cake and a cheerful break together in the lab. A simple celebration, a few candles, and another good memory beyond the bench.",
      mainImage: jonathanBirthdayPhotos.candles,
      gallery: [jonathanBirthdayPhotos.cake],
      kind: "photo-pair",
    }],
    gallery: Object.values(jonathanBirthdayPhotos),
  },
  {
    slug: "2026-lin-birthday-celebration",
    title: "Lin’s Birthday Celebration",
    startDate: "2026-07-16",
    endDate: "2026-07-16",
    displayDate: "July 16, 2026",
    year: 2026,
    location: "Higuchi Lab, St. John’s University",
    categories: ["Celebrations"],
    shortDescription: "The Higuchi Lab celebrated Lin’s June 28 birthday with cake and another cheerful moment together in the lab.",
    heroImage: linBirthdayPhotos.hero,
    featured: false,
    sections: [{
      eyebrow: "Celebrations",
      title: "A Sweet Lab Moment",
      date: "2026-07-16",
      description: "The Higuchi Lab celebrated Lin’s birthday with cake and another cheerful moment together in the lab. A simple celebration and a sweet reminder that some of the best lab memories happen beyond the bench.",
      mainImage: linBirthdayPhotos.portrait,
      gallery: [linBirthdayPhotos.hero],
      kind: "photo-pair",
    }],
    gallery: Object.values(linBirthdayPhotos),
  },
  {
    slug: "2026-dr-sei-nora-birthday-celebration",
    title: "Dr. Sei & Nora’s Birthday Celebration",
    startDate: "2026-08-12",
    endDate: "2026-08-12",
    displayDate: "August 12, 2026",
    year: 2026,
    location: "Higuchi Lab, St. John’s University",
    categories: ["Celebrations"],
    shortDescription: "The Higuchi Lab celebrated Dr. Sei and Nora’s shared August 12 birthday with cake, food, balloons, and gifts.",
    introduction: [
      "The Higuchi Lab celebrated two birthdays on August 12 — Dr. Sei and Nora! Although Nora couldn’t join us in person, she was definitely there in our hearts as we celebrated them both.",
      "The celebration included cake, food, balloons, and gifts for Dr. Sei. To end the day in true Higuchi Lab fashion, Dr. Sei put on all of his birthday gifts at once and posed for a photo — birthday hat, St. John’s tie, and College of Pharmacy & Health Sciences hoodie included.",
    ],
    heroImage: seiNoraBirthdayPhotos.hero,
    featured: false,
    sections: [
      { eyebrow: "Shared Birthday", title: "Celebrating Dr. Sei and Nora", date: "2026-08-12", description: "Cake, food, and balloons brought the lab together while Nora was warmly included in the celebration even though she could not attend in person.", mainImage: seiNoraBirthdayPhotos.table, gallery: [seiNoraBirthdayPhotos.cake], kind: "photo-pair" },
      { eyebrow: "Birthday Style", title: "All the Gifts, All at Once", date: "2026-08-12", description: "Dr. Sei wore every birthday gift the lab gave him and posed for one final picture in his new St. John’s gear.", mainImage: seiNoraBirthdayPhotos.gifts, gallery: [], kind: "compact" },
    ],
    gallery: Object.values(seiNoraBirthdayPhotos),
  },
  {
    slug: "2026-norman-fleischer-nyc-regional-diabetes-symposium",
    title: "May 8, 2026 — Norman Fleischer NYC Regional Diabetes Symposium",
    startDate: "2026-05-08",
    endDate: "2026-05-08",
    displayDate: "May 8, 2026",
    year: 2026,
    location: "Columbia University Vagelos Education Center, New York City",
    categories: ["Research & Conferences"],
    shortDescription:
      "The Norman Fleischer NYC Regional Diabetes Symposium brought together researchers, clinicians, and students from across the New York metropolitan area to share current diabetes research and strengthen scientific collaboration. Lin Choi, Afsin Malik, and Kevin Lee presented posters representing the Higuchi Lab.",
    introduction: [
      "The Norman Fleischer NYC Regional Diabetes Symposium brought together researchers, clinicians, and students from across the New York metropolitan area to share current diabetes research and strengthen scientific collaboration. Lin Choi, Afsin Malik, and Kevin Lee presented posters representing the Higuchi Lab.",
      "Mais Alkyam and Dr. Sei Higuchi also attended. During the symposium, the group connected with Dr. Rebecca Anne Haeusler, Dr. Higuchi’s former mentor at Columbia University, as well as former lab colleagues Kazunari Nohara and Joshua Cook.",
      "After the symposium, Dr. Higuchi took the group on a short tour of Columbia University and his former research environment, including a visit to the Rebecca Haeusler Laboratory.",
    ],
    heroImage: normanFleischerPhotos.hero,
    featured: false,
    sections: [
      {
        eyebrow: "Poster Session",
        title: "Poster Presentations",
        date: "2026-05-08",
        description:
          "Lin Choi, Afsin Malik, and Kevin Lee presented posters representing the Higuchi Lab, sharing their work with researchers, clinicians, and students from across the New York metropolitan area.",
        mainImage: normanFleischerPhotos.posterAfsinMain,
        gallery: [
          normanFleischerPhotos.posterAfsin,
          normanFleischerPhotos.posterLinDiscussion,
          normanFleischerPhotos.posterLin,
          normanFleischerPhotos.posterKevin,
          normanFleischerPhotos.posterAfsinDiscussion,
        ],
        kind: "editorial",
      },
      {
        eyebrow: "Scientific Community",
        title: "Scientific Connections",
        date: "2026-05-08",
        description:
          "Mais Alkyam and Dr. Sei Higuchi also attended. During the symposium, the group connected with Dr. Rebecca Anne Haeusler, Dr. Higuchi’s former mentor at Columbia University, as well as former lab colleagues Kazunari Nohara and Joshua Cook.",
        mainImage: normanFleischerPhotos.connectionsMain,
        gallery: [
          normanFleischerPhotos.connectionsHiguchi,
          normanFleischerPhotos.connectionsDiscussion,
        ],
        kind: "editorial",
      },
      {
        eyebrow: "Columbia University",
        title:
          "Back Where It Started — Columbia and Dr. Higuchi’s Former Research Environment",
        date: "2026-05-08",
        description:
          "After the symposium, Dr. Higuchi took the group on a short tour of Columbia University and his former research environment, including a visit to the Rebecca Haeusler Laboratory.",
        mainImage: normanFleischerPhotos.columbiaMain,
        gallery: [
          normanFleischerPhotos.columbiaWalkGroup,
          normanFleischerPhotos.columbiaWalk,
          normanFleischerPhotos.columbiaTour,
          normanFleischerPhotos.haeuslerLab,
        ],
        kind: "editorial",
      },
      {
        eyebrow: "Event Moments",
        title: "Photo Gallery",
        date: "2026-05-08",
        description:
          "Scenes from the symposium, poster session, scientific conversations, and the group’s visit to Columbia University.",
        mainImage: normanFleischerPhotos.galleryGroup,
        gallery: [normanFleischerPhotos.galleryPresentation],
        kind: "editorial",
      },
    ],
    gallery: normanFleischerGallery,
  },
];

export const labEvents = [...labEventsUnsorted].sort(
  (a, b) => b.startDate.localeCompare(a.startDate),
);

export const featuredLabEvent = labEvents.find((event) => event.featured) ?? labEvents[0];

export function getLabEventBySlug(slug: string) {
  return labEvents.find((event) => event.slug === slug);
}
