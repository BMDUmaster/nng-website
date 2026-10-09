import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("brain-training", "hooponopono");

export default function Page() {
  return <OfferingRoute hub="brain-training" slug="hooponopono" />;
}
