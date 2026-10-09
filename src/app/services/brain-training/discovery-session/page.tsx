import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("brain-training", "discovery-session");

export default function Page() {
  return <OfferingRoute hub="brain-training" slug="discovery-session" />;
}
