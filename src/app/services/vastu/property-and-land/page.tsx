import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "property-and-land");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="property-and-land" />;
}
