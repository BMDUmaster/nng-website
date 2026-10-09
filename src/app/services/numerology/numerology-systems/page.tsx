import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "numerology-systems");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="numerology-systems" />;
}
