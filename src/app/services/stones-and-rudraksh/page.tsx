import type { Metadata } from "next";
import { StoneLibrary } from "@/components/learning/StoneLibrary";
import { stoneHubPath } from "@/content/stone-articles";

export const metadata: Metadata = {
  title: "Gemstones, crystals and Rudraksha: reading room",
  description: "Five educational demo guides to gemstone identification, reports, crystal care, Rudraksha terminology and thoughtful buying.",
  alternates: { canonical: stoneHubPath },
};

export default function Page() {
  return <StoneLibrary />;
}
