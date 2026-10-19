import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, grievanceEmail } from "@/components/legal/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What this website does with information, what happens when you contact Transformation with NNG, and the choices you have.",
  alternates: { canonical: "/privacy-policy/" },
};

/**
 * From the "Privacy Policy" review draft of 17 October 2026. Sections 02 and 08 describe this website as it is now:
 * enquiry forms that reach the team, and analytics on the pages.
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      kicker="Your information, handled with care."
      title="Privacy"
      em="Policy"
      lead="What this website does with information, what happens when you contact NNG, and the choices you have."
      points={["Enquiry forms send your details only to the NNG team.", "Analytics help us understand visits and improve the website.", "Private consultation inputs are collected only when the team asks for them."]}
      sections={[
        { title: "Who is responsible", body: <p>Transformation with NNG is the trade name of SIMMI NITESH GARG, a proprietorship, GSTIN 09BZEPC7660L2ZZ. See our <Link prefetch={false} href="/legal/#business">business address and contact details</Link>. Team NNG handles grievances internally, by email only at <a href={`mailto:${grievanceEmail}`}>{grievanceEmail}</a>.</p> },
        { title: "When you browse or send an enquiry", body: <>
          <p>Our hosting and network providers may process technical information such as your IP address, browser information and requested pages to deliver and secure the website, under their own policies.</p>
          <p>When you use an enquiry form, the details you enter (such as your name, email, phone number, occupation, the topic you choose and your message) are sent to the NNG team: the contact page form to our website administration, and the landing-page forms to a private spreadsheet and the team’s email inbox. WhatsApp buttons open WhatsApp with a prepared message; you decide whether to send it, and WhatsApp processes it under its own terms.</p>
        </> },
        { title: "When you contact or book with the team", body: <>
          <p>Once you send a message or email, the team receives its contents, your contact details and any attachments. We may need your name, phone or email, country or time zone, chosen service and appointment preferences to respond and arrange a booking.</p>
          <p>For an agreed Astrology or Numerology service, relevant inputs may include names, birth date, birth time and birthplace. For Vastulogy, they may include a floor plan, directions, measurements and limited property photographs. The exact inputs are explained before collection; do not send everything listed here by default.</p>
          <p>Avoid sending medical reports, intimate details, government identity documents or banking credentials in an initial enquiry.</p>
        </> },
        { title: "Why information is used", body: <>
          <p>We use information to answer your enquiry, find the right service, prepare and deliver an agreed consultation or report, manage an agreed programme, keep required transaction records and resolve complaints.</p>
          <p>Collecting information for a consultation does not authorise testimonials, model training or unrelated use. Marketing messages are optional and you can opt out at any time.</p>
        </> },
        { title: "Another person’s details and children", body: <>
          <p>Do not share a partner’s, colleague’s, employee’s or other adult’s birth details or private records without their permission or other valid authority. Where their information is needed, the team confirms the purpose and collects only the minimum required.</p>
          <p>Bookings and purchases are handled by adults aged 18 or over. A request concerning a child must be made by a parent or lawful guardian. Do not send a child’s photograph, school report or medical record in an initial enquiry.</p>
        </> },
        { title: "Home footage, recordings and testimonials", body: <>
          <p>Do not send a home walkthrough unless the team has first agreed its need, who will see it, how long it is kept and how it is deleted. A floor plan, selected photographs or a conversation is often enough. Remove faces, documents, valuables and access codes that are not needed.</p>
          <p>Session recordings require a separate agreement before recording begins. A testimonial, screenshot, photograph or client film is used publicly only with permission covering that use. You can ask to review or withdraw that permission through the contact below.</p>
        </> },
        { title: "Who may receive information", body: <p>Internal access to client information is limited to Team NNG. Our messaging, email, spreadsheet and hosting providers process information on our behalf to deliver those services. Only information necessary for the agreed purpose is shared.</p>, note: { title: "Privacy arrangements still to confirm", text: "Storage and service providers; access permissions; retention and deletion periods; session recording; report-generation tools and the data they receive." } },
        { title: "Cookies, analytics and external media", body: <>
          <p>This website uses analytics and advertising measurement: Google Tag Manager, Google Analytics, Microsoft Clarity and, on the main website, the Meta Pixel. These help us understand visits, improve pages and measure our advertising, and they may set cookies. You can block or delete cookies in your browser settings.</p>
          <p>Videos hosted on YouTube, Instagram or Google Drive may receive technical information when you open them. External links are governed by their providers’ policies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google</a>, <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp</a>, <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer">Instagram and Meta</a>.</p>
        </> },
        { title: "Retention, security and deletion", body: <p>Information is kept only for the agreed purpose and necessary legal, accounting or dispute requirements. We use restricted access and secured accounts and devices. No website or messaging service can guarantee absolute security, and no security certification is claimed here.</p> },
        { title: "Your choices and requests", body: <p>You can ask about the information held, request correction or deletion, withdraw consent for an optional use, or opt out of marketing. Write to <a href={`mailto:${site.email}?subject=Privacy%20request`}>{site.email}</a> with “Privacy request” in the subject, using only the details needed to find your enquiry.</p> },
        { title: "Contact and policy updates", body: <p>General contact: <a href={`mailto:${site.email}`}>{site.email}</a> or <a href="tel:+919205511101">+91 92055 11101</a>. Privacy grievances and other complaints: <a href={`mailto:${grievanceEmail}`}>{grievanceEmail}</a> (email only). The final version will state its effective date and explain material changes before new uses of information begin.</p> },
      ]}
    />
  );
}
