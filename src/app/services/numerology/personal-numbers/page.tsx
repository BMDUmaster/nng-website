import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "personal-numbers");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="personal-numbers" />;
}
