import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Sei Higuchi Lab | Metabolism & Bile Acid Research", template: "%s | Sei Higuchi Lab" },
  description: "The Sei Higuchi Lab at St. John’s University investigates bile acid biology, metabolism, appetite regulation, obesity, and metabolic disease.",
  applicationName: "Sei Higuchi Lab",
  authors: [{ name: "Sei Higuchi Lab" }],
  creator: "Sei Higuchi Lab",
  keywords: ["Sei Higuchi Lab", "bile acids", "metabolism", "appetite regulation", "obesity", "metabolic disease", "St. John's University"],
  category: "Biomedical research",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Sei Higuchi Lab",
    title: "Sei Higuchi Lab | Metabolism & Bile Acid Research",
    description: "The Sei Higuchi Lab at St. John’s University investigates bile acid biology, metabolism, appetite regulation, obesity, and metabolic disease.",
    url: "/",
    images: [{ url: "/images/home/lab-research-team.jpg", alt: "Members of the Sei Higuchi Lab conducting research." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sei Higuchi Lab | Metabolism & Bile Acid Research",
    description: "The Sei Higuchi Lab at St. John’s University investigates bile acid biology, metabolism, appetite regulation, obesity, and metabolic disease.",
    images: ["/images/home/lab-research-team.jpg"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  verification: { google: "--2NB8f82EdaozclLNjJOxfEk1QEG7BwqIsiJXYcZB8" },
};

export const viewport: Viewport = { themeColor: "#FFFFFF", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="sr-only z-[100] rounded-lg bg-white px-4 py-3 font-semibold text-[#0B1739] shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-offset-2 focus:outline-[#1E40AF]">Skip to content</a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
