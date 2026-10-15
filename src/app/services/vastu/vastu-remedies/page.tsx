import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "vastu-remedies");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="vastu-remedies" />;
}
