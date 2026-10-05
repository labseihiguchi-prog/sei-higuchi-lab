import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const siteName = "Sei Higuchi Lab";
export const defaultSocialImage = "/images/home/lab-research-team.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  openGraphType?: "website" | "profile";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  openGraphType = "website",
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: openGraphType,
      siteName,
      title,
      description,
      url: canonical,
      images: [{ url: image, alt: `${siteName} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
