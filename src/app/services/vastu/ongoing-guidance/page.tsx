import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "ongoing-guidance");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="ongoing-guidance" />;
}
