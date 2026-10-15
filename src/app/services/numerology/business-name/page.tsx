import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "business-name");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="business-name" />;
}
