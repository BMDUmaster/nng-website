import type { Metadata } from "next";
import { LegalPage, grievanceEmail } from "@/components/legal/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cancellation, Returns & Delivery",
  description: "Consultation changes, Hand Holding Program exits, reports and product order questions with Transformation with NNG.",
  alternates: { canonical: "/cancellation-refunds/" },
};

/** From the "Cancellation, Returns & Delivery" review draft of 17 October 2026. */
export default function CancellationPage() {
  return (
    <LegalPage
      kicker="Know the terms before you pay."
      title="Cancellation, Returns &"
      em="Delivery"
      lead="A clear place for consultation changes, programme exits and product order questions."
      points={["The full fee is payable before booking confirmation.", "Client cancellations are non-refundable under NNG’s commercial policy, subject to applicable law.", "Some rescheduling, programme and privacy arrangements remain under review."]}
      sections={[
        { title: "Current status", body: <>
          <p>This page reflects NNG’s confirmed full-payment requirement and commercial no-refund policy for client cancellations. It also records the monthly contact format for the Hand Holding Program. Outstanding cases are marked below.</p>
          <p>This website does not collect payment. The final terms are explained before a new booking is paid for, and they do not retrospectively replace an existing client agreement. Existing terms and applicable law remain relevant.</p>
        </> },
        { title: "Consultations: changes, cancellations and no-shows", body: <>
          <p>If a client cancels a consultation, NNG’s commercial policy is that the fee is not refunded. If Narayani cannot attend the scheduled session, NNG will arrange a replacement appointment with the client.</p>
          <p>Nothing in this policy excludes a refund or other remedy required by applicable law, including for non-delivery, deficient service or misrepresentation. For a change request, contact the team promptly with the booking reference, appointment date and time zone.</p>
        </>, note: { title: "Still awaiting confirmation", text: "Client-requested rescheduling: required notice and permitted changes. Late arrival and missed sessions. Technical or connection failures. The resolution where NNG cannot deliver the session or no suitable replacement appointment can be agreed." } },
        { title: "Hand Holding Program: contact, commitment and changes", body: <>
          <p>The six-month program includes one scheduled conversation per month, by call or face to face as agreed, plus unlimited messages and recorded replies during the agreed tenure. Unlimited messaging does not promise instant responses, unlimited live sessions, 24/7 support or emergency care.</p>
          <p>NNG expects clients to commit to the full agreed tenure. Pause, early-exit and unused-session arrangements are explained in the written program confirmation before enrolment. An enquiry does not authorise automatic renewal or recurring charges.</p>
        </>, note: { title: "Still awaiting confirmation", text: "Communication channels, contact hours and expected response time; whether pauses are allowed; exact early-exit and unused-session treatment; exceptional circumstances; and what happens if NNG cannot continue." } },
        { title: "Reports and personalised work", body: <>
          <p>A report is offered only when its contents, preparation start, delivery channel and turnaround have been confirmed. Flag incorrect inputs promptly. If a file cannot be opened or was sent to the wrong address, contact the team for help.</p>
          <p>The personalised nature of the work does not remove rights for non-delivery, a materially misdescribed deliverable or deficient service under applicable law.</p>
        </>, note: { title: "Awaiting NNG decision", text: "Which reports are sold; when personalised preparation starts; the correction and rework process; cancellation before or after preparation; and a remedy for missed delivery commitments." } },
        { title: "Products: returns not yet finalised", body: <>
          <p>NNG is currently focusing on consultations. Product sale and return arrangements will be set out separately before product transactions begin. Consultation cancellation terms do not establish a no-return policy for products. Any already accepted order remains subject to its agreed terms and applicable consumer rights.</p>
        </>, note: { title: "Deferred until the product offering is ready", text: "Seller and invoicing responsibility, product disclosures, return address, change-of-mind rules, damaged or incorrect items, return shipping, replacements and refunds." } },
        { title: "Product delivery: arrangements deferred", body: <p>Delivery regions, dispatch estimates, charges, courier partners, tracking, transit damage, loss and international shipping arrangements are not yet set. No delivery commitment is created by this page, and product payments or orders are not accepted until the relevant terms are confirmed and disclosed.</p> },
        { title: "Requesting a resolution or refund", body: <>
          <p>For a complaint or refund dispute, email <a href={`mailto:${grievanceEmail}?subject=Booking%20or%20order%20complaint`}>{grievanceEmail}</a>. Include your name, booking or order reference, transaction date, the issue and the resolution you are seeking. Share proof of payment with unnecessary financial details hidden. Never send an OTP, card security code or banking password.</p>
          <p>For routine booking changes or order updates, use <a href={`mailto:${site.email}`}>{site.email}</a> or <a href="tel:+919205511101">+91 92055 11101</a>. NNG accepts UPI, bank transfer and payment links and issues the bill or invoice. For a refund request, the team confirms the request reference, its decision and reasons, any amount approved, the refund method and the expected processing date. Approved refunds are ordinarily returned through the original payment route.</p>
          <p>No provision here restricts access to a competent consumer forum, regulator or other lawful remedy.</p>
        </> },
      ]}
    />
  );
}
