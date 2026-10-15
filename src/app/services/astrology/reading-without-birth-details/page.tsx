import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "reading-without-birth-details");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="reading-without-birth-details" />;
}
