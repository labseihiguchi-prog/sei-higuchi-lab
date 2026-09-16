export const newsCategories = ["All", "Publications", "Conferences", "Awards", "Students", "Outreach", "Lab Updates"] as const;

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
  };
};

export const newsItems: NewsItem[] = [
  {
    id: "sei-higuchi-lab-website-launch-2026",
    title: "Sei Higuchi Lab Website Officially Launches",
    summary: "September 16 marks the official launch of the Sei Higuchi Lab website — a new digital home for our research, people, publications, and life in the lab. The lab celebrated the launch together during a special gathering honoring Afsin’s birthday, her promotion to Doctoral Fellow, and welcoming her daughter Amilie to the Higuchi Lab family.",
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
