import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "directions-and-elements");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="directions-and-elements" />;
}
