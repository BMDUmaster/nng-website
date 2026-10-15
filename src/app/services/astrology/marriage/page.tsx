import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "marriage");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="marriage" />;
}
