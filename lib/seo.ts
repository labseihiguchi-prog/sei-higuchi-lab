import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const siteName = "Sei Higuchi Lab";
export const defaultSocialImage = "/images/home/lab-research-team.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
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
