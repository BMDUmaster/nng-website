import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "legal-matters");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="legal-matters" />;
}
