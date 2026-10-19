import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Service Disclaimer",
  description: "The nature and limits of Narayani Garg’s personal and spiritual guidance, before you decide whether a consultation is right for you.",
  alternates: { canonical: "/disclaimer/" },
};

/** From the "Service Disclaimer" review draft of 17 October 2026. */
export default function DisclaimerPage() {
  return (
    <LegalPage
      kicker="Clear boundaries. Informed choices."
      title="Service"
      em="Disclaimer"
      lead="Understand the nature of Narayani’s guidance before deciding whether a consultation is right for you."
      points={["Guidance is personal and spiritual.", "A consultation or product does not guarantee a life outcome.", "Use qualified professional advice for medical, legal, financial and structural decisions."]}
      sections={[
        { title: "Nature of the services", body: <>
          <p>The Brainology Program, Astrology, Numerology and Vastulogy are presented here as personal or spiritual guidance and interpretive traditions. Brainology is NNG’s service name; it is not a claim that the service is neuroscience, clinical psychology or an evidence-based medical treatment.</p>
          <p>The Personalised Hand Holding Program is ongoing guidance within the scope agreed with the team. It is not emergency support or a substitute for professional treatment. Discuss the approach, its limitations and what will be included before booking.</p>
        </> },
        { title: "Health and Body Vastulogy", body: <p>References to health, wellbeing, stress or Body Vastulogy do not offer diagnosis, cure, treatment or medical advice. Do not stop prescribed treatment, alter medication, delay a medical assessment or disregard qualified advice because of a consultation, remedy, video or article. Seek appropriate professional help for medical or mental health concerns.</p> },
        { title: "Money, relationships, career and property", body: <>
          <p>No reading guarantees income, investment performance, a job, business success, reconciliation, marriage, a legal result or a change in another person’s behaviour. Obtain qualified legal, financial or other professional advice for decisions in those areas.</p>
          <p>Vastulogy guidance does not certify structural safety, property title, planning permission or investment suitability. A qualified professional must assess physical changes and regulatory requirements. Interpretations should not be used to make accusations about a partner, employee or family member.</p>
        </> },
        { title: "Remedies and products", body: <>
          <p>Gemstones, Rudraksha, crystals and related items may be chosen for personal or spiritual practice. Their purchase does not guarantee a health, relationship, career or financial effect. Ask why a remedy is suggested and consider your own budget. Buying a product is not a condition of reading the website or sending a consultation enquiry.</p>
          <p>A product’s authenticity, material or laboratory certificate is separate from any spiritual interpretation. Confirm the evidence and exact item before purchasing.</p>
        </> },
        { title: "Testimonials and educational content", body: <>
          <p>Testimonials describe individual experiences. They do not establish typical results, guaranteed outcomes or endorsement by a client’s employer. Articles, diagrams, reels and videos provide general information; they are not a personalised consultation.</p>
          <p>Public content may simplify a subject and may be updated. Confirm the currently offered service, availability and written deliverables with NNG before relying on a description when booking.</p>
        </> },
        { title: "Questions and legal rights", body: <>
          <p>You may ask the team to explain the scope and limitations of a service before deciding. Contact <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <p>This disclaimer does not excuse a misleading claim, defective product, deficient service or other liability that cannot lawfully be excluded. Read it with the <Link prefetch={false} href="/terms-conditions/">Terms &amp; Conditions</Link> and your booking or order confirmation.</p>
        </> },
      ]}
    />
  );
}
