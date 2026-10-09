import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "dashas-and-transits");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="dashas-and-transits" />;
}
