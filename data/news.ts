export const newsCategories = ["All", "Publications", "Research & Conferences", "Awards", "Students", "Outreach", "Lab Updates"] as const;

export type NewsCategory = Exclude<(typeof newsCategories)[number], "All">;

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string;
  displayDate?: string;
  href?: string;
  linkLabel?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    href?: string;
    preserveAspectRatio?: boolean;
  };
  details?: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: "sei-higuchi-suny-downstate-seminar-2026",
    title: "Dr. Sei Higuchi to Present at SUNY Downstate",
    summary: "Dr. Sei Higuchi will present a Molecular & Cellular Biology Seminar at SUNY Downstate Health Sciences University on October 7, 2026. His talk, ‘Python snake-specific bile acid, pythocholic acid, regulates glucose homeostasis and mitochondrial function through PPARα signaling in mice,’ will highlight the Higuchi Lab’s research into the metabolic functions of python-derived bile acids.",
    category: "Research & Conferences",
    publishedAt: "2026-10-07",
    displayDate: "October 7, 2026",
    details: [
      "Wednesday, October 7, 2026",
      "12:00 PM",
      "SUNY Downstate Health Sciences University",
      "Health Science Education Building – Lecture Hall 1B",
      "Molecular & Cellular Biology Seminar",
      "Sponsored by the School of Graduate Studies",
    ],
    image: {
      src: "/images/news/sei-higuchi-suny-downstate-seminar-2026.png",
      alt: "Official flyer for Dr. Sei Higuchi’s Molecular & Cellular Biology Seminar at SUNY Downstate Health Sciences University.",
      width: 1360,
      height: 1760,
      href: "/files/sei-higuchi-suny-downstate-seminar-2026.pdf",
      preserveAspectRatio: true,
    },
  },
  {
    id: "sei-higuchi-lab-website-launch-2026",
    title: "Sei Higuchi Lab Website Officially Launches",
    summary: "September 16 marks the official launch of the Sei Higuchi Lab website — a new digital home for our research, people, publications, and life in the lab. The lab celebrated the launch together during a special gathering honoring Afsin’s birthday, her promotion to Doctoral Fellow, and welcoming her daughter Amelie to the Higuchi Lab family.",
    category: "Lab Updates",
    publishedAt: "2026-09-16",
    displayDate: "September 16, 2026",
    href: "/life-in-the-lab/2026-celebrating-afsin-new-chapter",
    linkLabel: "See the celebration",
  },
  {
    id: "congratulations-afsin-malik",
    title: "Congratulations to Afsin Malik",
    summary:
      "The Higuchi Lab sends its warmest congratulations to Afsin Malik on welcoming a baby girl. We wish Afsin and her family happiness, health, and many wonderful moments together.",
    category: "Students",
    publishedAt: "2026",
    displayDate: "2026",
  },
  {
    id: "emerging-research-leader-award-2026",
    title: "Dr. Sei Higuchi Receives Emerging Research Leader Award",
    summary:
      "Dr. Sei Higuchi was recognized with the Emerging Research Leader Award during the 2026 Student Research Conference at St. John’s University. The recognition celebrated his contributions to research, mentorship, and the growth of the Higuchi Lab.",
    category: "Awards",
    publishedAt: "2026-04-15",
    displayDate: "April 15, 2026",
    href: "/life-in-the-lab/2026-student-research-conference",
    linkLabel: "View the 2026 Student Research Conference",
    image: {
      src: "/images/lab/2026-student-research-conference/day-2/research-week-460.webp",
      alt: "Dr. Sei Higuchi holding the Emerging Research Leader Award.",
    },
  },
];
