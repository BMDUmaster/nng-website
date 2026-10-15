import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "intuitive-consult");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="intuitive-consult" />;
}
