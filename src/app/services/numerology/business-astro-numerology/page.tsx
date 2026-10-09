import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "business-astro-numerology");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="business-astro-numerology" />;
}
