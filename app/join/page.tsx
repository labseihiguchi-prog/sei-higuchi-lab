import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: { canonical: "/join-us" },
  robots: { index: false, follow: false, nocache: true },
};

export default function JoinPage() {
  redirect("/join-us");
}
