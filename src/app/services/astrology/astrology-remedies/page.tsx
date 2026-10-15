import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "astrology-remedies");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="astrology-remedies" />;
}
