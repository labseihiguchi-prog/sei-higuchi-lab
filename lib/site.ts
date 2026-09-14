const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const normalizedUrl = configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
  ? configuredUrl
  : `https://${configuredUrl}`;

export const siteUrl = new URL(normalizedUrl);

export const publicRoutes = [
  "/",
  "/research",
  "/people",
  "/publications",
  "/news",
  "/life-in-the-lab",
  "/lab-calendar",
  "/contact",
] as const;
