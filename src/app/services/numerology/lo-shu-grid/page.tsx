import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "lo-shu-grid");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="lo-shu-grid" />;
}
