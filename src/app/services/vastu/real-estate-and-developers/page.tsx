import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "real-estate-and-developers");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="real-estate-and-developers" />;
}
