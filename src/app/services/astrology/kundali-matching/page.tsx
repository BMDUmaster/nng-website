import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "kundali-matching");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="kundali-matching" />;
}
