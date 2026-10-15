import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("astrology", "specific-issue-reading");

export default function Page() {
  return <OfferingRoute hub="astrology" slug="specific-issue-reading" />;
}
