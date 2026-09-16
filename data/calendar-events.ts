import { labEvents } from "@/data/lab-events";

export type CalendarEventType = "birthday" | "conference" | "presentation" | "lab-event" | "milestone";

export type CalendarEvent = {
  id: string;
  title: string;
  type: CalendarEventType;
  date?: string;
  recurringDate?: string;
  dateRange?: { start: string; end: string };
  recurring?: boolean;
  personSlug?: string;
  description?: string;
  href?: string;
  showOnCalendar: boolean;
  homepageCelebration?: boolean;
};

const birthdays: Array<[string, string, string?]> = [
  ["Kristhel", "01-19", "kristhel-salvatierra"], ["Rosa", "02-04"], ["Ludo", "02-06", "ludovica-zola"],
  ["Kevin", "02-10", "kevin-lee"], ["Afrida", "02-12"], ["Sydney", "03-07", "sydney-idahosa"],
  ["Mais", "03-19", "mais-alkyam"], ["Rebbica", "03-28"], ["Daniel", "04-06"], ["Yamin", "04-25", "yamin-farabih"],
  ["Kareena", "05-22", "kareena-poonai"], ["Jonathan", "06-08", "jonathan-oh"], ["Lin", "06-28", "lin-choi"],
  ["MD", "06-30"], ["Gabby", "07-19", "gabriella-colella"], ["Dr. Sei", "08-12", "sei-higuchi"],
  ["Nora", "08-12"], ["Hernoor", "08-18"], ["Afsin", "09-05", "afsin-malik"], ["Brianna", "12-15", "brianna-blanco"],
];

export const birthdayEvents: CalendarEvent[] = birthdays.map(([name, recurringDate, personSlug]) => ({
  id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-birthday`,
  title: `${name}'s Birthday`,
  type: "birthday",
  recurringDate,
  recurring: true,
  personSlug,
  showOnCalendar: true,
  homepageCelebration: true,
}));

export function getBirthdaysForMonthDay(monthDay: string) {
  return birthdayEvents.filter((event) => event.recurringDate === monthDay);
}

const archiveEvents: CalendarEvent[] = labEvents.map((event) => ({
  id: event.slug,
  title: event.title,
  type: event.categories.includes("Research & Conferences")
    ? "conference"
    : event.slug.includes("thesis")
      ? "presentation"
      : event.categories.includes("Graduations & Milestones")
        ? "milestone"
        : "lab-event",
  ...(event.startDate === event.endDate
    ? { date: event.startDate }
    : { dateRange: { start: event.startDate, end: event.endDate } }),
  description: event.shortDescription,
  href: `/life-in-the-lab/${event.slug}`,
  showOnCalendar: true,
}));

export const websiteAnniversary: CalendarEvent = {
  id: "sei-higuchi-lab-website-anniversary",
  title: "Sei Higuchi Lab Website Anniversary",
  type: "milestone",
  recurringDate: "09-16",
  recurring: true,
  description: "Celebrating the anniversary of the official launch of the Sei Higuchi Lab website on September 16, 2026.",
  href: "/news",
  showOnCalendar: true,
  homepageCelebration: true,
};

export const calendarEvents: CalendarEvent[] = [...birthdayEvents, websiteAnniversary, ...archiveEvents];

export const calendarTypeLabels: Record<CalendarEventType, string> = {
  birthday: "Birthdays",
  conference: "Conferences",
  presentation: "Presentations",
  "lab-event": "Lab Events",
  milestone: "Milestones",
};
