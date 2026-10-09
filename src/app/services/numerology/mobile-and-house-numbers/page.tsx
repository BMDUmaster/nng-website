import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "mobile-and-house-numbers");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="mobile-and-house-numbers" />;
}
