import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "name-numerology");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="name-numerology" />;
}
