import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "specialised-spaces");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="specialised-spaces" />;
}
