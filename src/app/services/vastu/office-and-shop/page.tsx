import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "office-and-shop");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="office-and-shop" />;
}
