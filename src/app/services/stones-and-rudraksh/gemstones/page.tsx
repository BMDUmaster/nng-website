import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("stones-and-rudraksh", "gemstones");

export default function Page() {
  return <OfferingRoute hub="stones-and-rudraksh" slug="gemstones" />;
}
