const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sei-higuchi-lab.vercel.app";

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
