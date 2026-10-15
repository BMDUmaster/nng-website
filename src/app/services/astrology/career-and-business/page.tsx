import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "career-and-business");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="career-and-business" />;
}
