import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "property-and-big-decisions");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="property-and-big-decisions" />;
}
