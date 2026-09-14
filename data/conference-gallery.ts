export type ConferencePhoto = {
  src: string;
  alt: string;
  day: "Day 1" | "Day 2";
  width: number;
  height: number;
};

const root = "/images/lab/2026-student-research-conference";

export const conferenceHero: ConferencePhoto = {
  src: `${root}/day-1/main-picture.webp`,
  alt: "Members of the Sei Higuchi Lab at the 2026 Student Research Conference.",
  day: "Day 1",
  width: 1800,
  height: 1012,
};

export const conferencePhotos: ConferencePhoto[] = [
  { src: `${root}/day-1/research-week-294.webp`, alt: "Faculty members reviewing a presentation during the 2026 Student Research Conference.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/research-week-304.webp`, alt: "Dr. Sei Higuchi participating in a conference discussion.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1031.webp`, alt: "A student researcher beside a scientific poster during the conference.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1034.webp`, alt: "A student explaining a research poster to a conference attendee.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1059.webp`, alt: "A student researcher standing beside a conference poster.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1074.webp`, alt: "A student researcher engaged in conversation at the poster session.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1081.webp`, alt: "A student discussing research during the poster session.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1128.webp`, alt: "A conference participant presenting scientific work at a poster.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1138.webp`, alt: "A student researcher speaking with conference attendees.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1148.webp`, alt: "Three conference participants together during the poster session.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1157.webp`, alt: "Researchers gathered beside a scientific poster.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1160.webp`, alt: "Three lab members together at a poster presentation.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1165.webp`, alt: "Lab members gathered during the conference poster session.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1172.webp`, alt: "Dr. Sei Higuchi and a lab member beside a research poster.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1183.webp`, alt: "A conference participant listening during a poster discussion.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1185.webp`, alt: "A student researcher speaking with a conference attendee.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1190.webp`, alt: "A student explaining research findings during the poster session.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1207.webp`, alt: "Sei Higuchi Lab members together at the conference.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1223.webp`, alt: "Students exchanging ideas beside a scientific poster.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1228.webp`, alt: "A student presenting research to a conference attendee.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-1/dsc-1295.webp`, alt: "Two student researchers in conversation near their posters.", day: "Day 1", width: 1800, height: 1200 },
  { src: `${root}/day-2/dsc-1313.webp`, alt: "A speaker presenting during the 2026 Student Research Conference.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/dsc-1317.webp`, alt: "A conference speaker addressing the audience from a podium.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-256.webp`, alt: "Sei Higuchi Lab members together on the second day of the conference.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-293.webp`, alt: "Faculty members reviewing a presentation during the conference.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-414.webp`, alt: "Lab members gathered for a group portrait on the second day.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-444.webp`, alt: "Dr. Sei Higuchi and conference participants sharing a light moment.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-450.webp`, alt: "A conference participant photographing the recognition program.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-452.webp`, alt: "A lab member smiling during the conference recognition program.", day: "Day 2", width: 1800, height: 1199 },
  { src: `${root}/day-2/research-week-457.webp`, alt: "Dr. Sei Higuchi receiving the Emerging Research Leader Award.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-460.webp`, alt: "Dr. Sei Higuchi holding the Emerging Research Leader Award.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-476.webp`, alt: "A student researcher attending the conference recognition program.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-539.webp`, alt: "Dr. Sei Higuchi photographing a conference moment.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-552.webp`, alt: "Students receiving recognition during the conference awards program.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-554.webp`, alt: "Three student researchers displaying conference recognition certificates.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-558.webp`, alt: "Two student researchers displaying conference recognition certificates.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-561.webp`, alt: "Two conference participants displaying recognition certificates.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-580.webp`, alt: "Lab members celebrating together with conference certificates.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/research-week-583.webp`, alt: "Lab members gathered after the conference recognition program.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/dsc-1436.webp`, alt: "Dr. Sei Higuchi holding the Emerging Research Leader Award at the poster session.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/dsc-1461.webp`, alt: "A student recognition presentation during the conference.", day: "Day 2", width: 1800, height: 1200 },
  { src: `${root}/day-2/img-9549.webp`, alt: "Lab members sharing a candid moment around a conference table.", day: "Day 2", width: 1800, height: 1350 },
];
