import { sunyDownstateCover } from "@/data/suny-downstate-gallery";

export const newsCategories = ["All", "Publications", "Research & Conferences", "Awards", "Students", "Outreach", "Lab Updates"] as const;

export type NewsCategory = Exclude<(typeof newsCategories)[number], "All">;

export type NewsParagraph =
  | { text: string }
  | {
      before: string;
      link: { label: string; href: string };
      after: string;
    };

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
  paragraphs?: NewsParagraph[];
  document?: {
    href: string;
    label: string;
  };
};

export const newsItems: NewsItem[] = [
  {
    id: "sei-higuchi-suny-downstate-seminar-2026",
    title: "Dr. Sei Higuchi Presents His Research at SUNY Downstate",
    summary: "On October 7, 2026, Dr. Sei Higuchi visited SUNY Downstate Health Sciences University to present his research on python-derived bile acids, metabolic regulation, and their potential roles in glucose homeostasis and mitochondrial function.",
    category: "Research & Conferences",
    publishedAt: "2026-10-07",
    displayDate: "October 7, 2026",
    paragraphs: [
      {
        before: "The seminar was held at the invitation of ",
        link: {
          label: "Dr. Takahiko Murayama",
          href: "https://sites.google.com/view/murayamalab/team/takahiko-murayama-ph-d",
        },
        after: ", Assistant Professor in the Department of Cell Biology at SUNY Downstate.",
      },
      {
        text: "The visit provided an opportunity to share the Higuchi Lab’s research, exchange scientific perspectives, and strengthen connections between researchers at St. John’s University and SUNY Downstate.",
      },
    ],
    details: [
      "Wednesday, October 7, 2026",
      "12:00 PM",
      "SUNY Downstate Health Sciences University",
      "Health Science Education Building – Lecture Hall 1B",
      "Molecular & Cellular Biology Seminar",
      "Sponsored by the School of Graduate Studies",
    ],
    image: {
      ...sunyDownstateCover,
      preserveAspectRatio: true,
    },
    document: {
      href: "/files/sei-higuchi-suny-downstate-seminar-2026.pdf",
      label: "View the original seminar flyer (PDF)",
    },
    href: "/life-in-the-lab/2026-suny-downstate-seminar",
    linkLabel: "View Event Photos",
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
