import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, grievanceEmail } from "@/components/legal/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "How enquiries, consultations, ongoing guidance and product orders work with Transformation with NNG.",
  alternates: { canonical: "/terms-conditions/" },
};

/** From the "Terms & Conditions" review draft of 17 October 2026, worded for this website. */
export default function TermsPage() {
  return (
    <LegalPage
      kicker="Your consultation. Your choices."
      title="Terms &"
      em="Conditions"
      lead="How enquiries, consultations, ongoing guidance and product orders work with Transformation with NNG."
      points={["An enquiry starts a conversation; it does not confirm a booking or order.", "Agree the scope, total price and cancellation terms in writing before payment.", "Your consumer rights remain protected."]}
      sections={[
        { title: "Who these terms cover", body: <>
          <p>Transformation with NNG is the trade name of SIMMI NITESH GARG, a proprietorship. Our business details appear on the <Link prefetch={false} href="/legal/#business">Legal &amp; contact</Link> page. “NNG”, “we” and “our” refer to this business. Narayani Garg is the practitioner presented on this website.</p>
          <p>These terms cover the website, related landing pages, enquiries and the services or products specifically confirmed by NNG. They do not replace an existing booking agreement or authorise payment. The final terms are provided before a paid booking or order is accepted.</p>
        </> },
        { title: "What you can consult about", body: <>
          <p>Our offer includes the Brainology Program, Astrology, Numerology, Vastulogy and the Personalised Hand Holding Program. Guidance may address questions about wellbeing, relationships, money, career, business or the use of a space. The <Link prefetch={false} href="/disclaimer/">Service Disclaimer</Link> explains the boundaries.</p>
          <p>A service page introduces an area of guidance; it does not promise every method, report or deliverable. Before booking, confirm who conducts the session, its scope, language, format, duration, fee and any follow-up. A written report is included only when the booking confirmation says so.</p>
        </> },
        { title: "Enquiries, booking and payment", body: <>
          <p>An enquiry does not confirm a booking. The full fee is payable before a booking is confirmed. NNG accepts UPI, bank transfer and payment links and issues the bill or invoice. The team confirms the appointment, format, scope, total fee including applicable taxes and official payment recipient in writing before payment. This website does not collect payment directly.</p>
          <p>NNG’s commercial policy is that client cancellations are non-refundable, subject to applicable law. The applicable terms are disclosed before payment. Never share a banking password, card security code or OTP. Submitting an enquiry does not authorise recurring payments or automatic renewal.</p>
        </> },
        { title: "Information you provide", body: <>
          <p>Provide accurate contact details and, where relevant, birth date, birth time, birthplace, names, property information or the question you want to discuss. Tell the team when a birth time or measurement is an estimate. Incorrect inputs can affect an interpretation; ask about corrections before work begins.</p>
          <p>Share another adult’s information only with their permission or other valid authority. A parent or lawful guardian must handle a request involving a child. Do not send medical records, identity documents or private home footage in an initial enquiry. The <Link prefetch={false} href="/privacy-policy/">Privacy Policy</Link> explains how personal information is handled.</p>
        </> },
        { title: "Personalised Hand Holding Program", body: <>
          <p>The Personalised Hand Holding Program is a six-month engagement. The start and end dates and included work are confirmed in writing before enrolment. It includes one scheduled conversation each month, by call or face to face as agreed, plus unlimited messages and recorded replies during the agreed tenure.</p>
          <p>Unlimited messages and recorded replies do not mean unlimited live sessions, immediate replies, 24-hour availability or emergency support. Communication channels, response hours and expected reply times are to be confirmed. Clients are expected to commit to the agreed tenure. Pause arrangements and early-exit and unused-session treatment are confirmed before enrolment.</p>
          <p>If NNG cannot continue the program, the resolution is addressed under the agreed terms and applicable law. No automatic renewal is implied.</p>
        </> },
        { title: "Vastulogy, property inputs and remedies", body: <>
          <p>Confirm whether the assignment covers a home, business premises, property selection, a desk or Body Vastulogy, and whether a visit or report is included. Body Vastulogy is a spiritual consultation; it is not a medical examination, diagnosis or treatment.</p>
          <p>Vastulogy guidance is not a building survey, structural assessment, title check or planning approval. Consult qualified professionals before structural, electrical, legal or investment decisions. Purchasing a gemstone, Rudraksha, crystal or other remedy is a separate, optional decision. Ask for the reasoning, price and product terms before purchasing.</p>
        </> },
        { title: "Products (Mineralogy)", body: <>
          <p>NNG is currently prioritising consultations. Product-selling, delivery, return and refund arrangements for gemstones, Rudraksha and crystals are not yet finalised. A catalogue does not establish an approved product-sale process, and consultation cancellation terms are not product-return terms.</p>
          <p>Before accepting product payments or orders, NNG will confirm the seller, exact product, material and treatment disclosures, certification where applicable, total price, shipping and returns. Existing lawful rights for any already accepted order remain unaffected.</p>
        </> },
        { title: "Changes, cancellations and complaints", body: <>
          <p>Under NNG’s commercial policy, a client who cancels a consultation does not receive a refund. If Narayani cannot attend a scheduled session, the team will arrange a replacement appointment with the client. Nothing in this policy excludes a refund or other remedy required by applicable law, including for non-delivery, deficient service or misrepresentation.</p>
          <p>Client-requested rescheduling, notice periods, late arrival, missed sessions, technical failures and the process if no suitable replacement appointment can be agreed are explained before payment. See <Link prefetch={false} href="/cancellation-refunds/">Cancellation, Returns &amp; Delivery</Link>.</p>
        </> },
        { title: "Content, recordings and respectful use", body: <>
          <p>Website text, artwork, videos and materials are protected by the rights of their respective owners. You may read the resources and use consultation materials for your own agreed personal purpose. Obtain permission before commercial redistribution, resale, impersonation or publication of a private session or another client’s information.</p>
          <p>Any session recording requires an explicit agreement before recording begins. An enquiry or booking does not give NNG permission to use your name, image, voice or story in advertising; testimonial or marketing use requires separate permission. Do not harass the team, misuse the website, introduce malicious code or attempt unauthorised access.</p>
        </> },
        { title: "Responsibility and your legal rights", body: <>
          <p>Interpretations and personal experiences do not establish a guaranteed future result. You remain responsible for your choices and for obtaining qualified professional advice when needed. NNG remains responsible for delivering the service or product it has agreed to provide with the care required by applicable law.</p>
          <p>Nothing here excludes liability that cannot lawfully be excluded, excuses fraud or misrepresentation, or takes away mandatory consumer rights. Indian law applies, subject to any mandatory protections and lawful remedies available to you.</p>
        </> },
        { title: "Changes and questions", body: <>
          <p>Approved terms show their effective date. Material changes are communicated before they apply to a new booking; revised website text does not retrospectively change an accepted order or programme.</p>
          <p>For general questions, write to <a href={`mailto:${site.email}`}>{site.email}</a>. Team NNG handles grievances and complaints internally, by email only, at <a href={`mailto:${grievanceEmail}`}>{grievanceEmail}</a>.</p>
        </> },
      ]}
    />
  );
}
