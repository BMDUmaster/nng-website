import { OfferingRoute, offeringMetadata } from "@/components/offerings/OfferingRoute";

export const metadata = offeringMetadata("vastu", "astro-vastu");

export default function Page() {
  return <OfferingRoute hub="vastu" slug="astro-vastu" />;
}
