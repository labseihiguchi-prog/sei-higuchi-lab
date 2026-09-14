import type { MetadataRoute } from "next";
import { labEvents } from "@/data/lab-events";
import { profileMembers } from "@/data/people";
import { publicRoutes, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...publicRoutes,
    ...profileMembers.map((person) => `/people/${person.slug}`),
    ...labEvents.map((event) => `/life-in-the-lab/${event.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/research" || route === "/publications" ? 0.9 : 0.7,
  }));
}
