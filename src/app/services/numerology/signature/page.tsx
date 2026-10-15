import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("numerology", "signature");

export default function Page() {
  return <OfferingRoute hub="numerology" slug="signature" />;
}
