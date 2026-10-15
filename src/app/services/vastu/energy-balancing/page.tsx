import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "energy-balancing");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="energy-balancing" />;
}
