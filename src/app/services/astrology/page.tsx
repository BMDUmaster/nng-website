import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="" />;
}
