import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "health-and-wellbeing");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="health-and-wellbeing" />;
}
