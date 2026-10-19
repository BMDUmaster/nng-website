import type { Metadata } from "next";
import Link from "next/link";
import { LegalContacts, LegalHero, grievanceEmail, legalPages } from "@/components/legal/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Legal & contact",
  description: "Terms, privacy, cancellations and the service disclaimer for Transformation with NNG, with business and contact details.",
  alternates: { canonical: "/legal/" },
};

const business: [string, React.ReactNode][] = [
  ["Trade name", "Transformation with NNG"],
  ["Legal name", "SIMMI NITESH GARG"],
  ["Business type", "Proprietorship"],
  ["GSTIN", "09BZEPC7660L2ZZ"],
  ["Principal business address", "D2/1504, Cleo County, Plot No. GH-5, Vikas Marg, Sector 121, Noida, Gautambuddha Nagar, Uttar Pradesh 201301, India"],
  ["General enquiries", <a key="e" href={`mailto:${site.email}`}>{site.email}</a>],
  ["General enquiry phone", <a key="p" href="tel:+919205511101">+91 92055 11101</a>],
  ["Grievances (email only)", <a key="g" href={`mailto:${grievanceEmail}`}>{grievanceEmail}</a>],
  ["Payment methods", "UPI, bank transfer and payment links"],
  ["Bill / invoice", "NNG issues the bill / invoice"],
  ["Complaint handling", "Team NNG"],
];

/** Legal hub (Oct 18, from the "Legal & contact" review draft). */
export default function LegalHubPage() {
  return (
    <div className="lg">
      <LegalHero kicker="Clear information, before you decide." title="Legal &" em="contact" lead="Understand your consultation, your information and your order. Everything in one place." meta="17 October 2026" crumb="Legal & contact" />
      <div className="lg-wrap">
        <ol className="lg-hub">
          {legalPages.map((p, i) => (
            <li key={p.href}>
              <Link prefetch={false} href={p.href}>
                <span className="lg-hub-num">{String(i + 1).padStart(2, "0")}</span>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
                <span className="lg-hub-go">Read the page <span aria-hidden="true">→</span></span>
              </Link>
            </li>
          ))}
        </ol>

        <section className="lg-card lg-biz" id="business" aria-labelledby="business-title">
          <h2 id="business-title">Business &amp; contact details</h2>
          <dl>
            {business.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <p className="lg-small">Business identity as shown on the GST registration certificate issued on 30 August 2026.</p>
        </section>

        <section className="lg-card lg-confirmed" aria-labelledby="confirmed-title">
          <h2 id="confirmed-title">Confirmed terms and remaining decisions</h2>
          <p>NNG has confirmed full payment before booking, a commercial no-refund policy for client cancellations subject to applicable law, rescheduling when Narayani cannot attend, and one monthly call or face-to-face conversation plus unlimited messages and recorded replies for the Hand Holding Program.</p>
          <p>These points still need confirmation before the policies take effect:</p>
          <ul>
            <li><strong>Client changes and missed sessions:</strong> what happens if a client reschedules, is late, misses the session or loses internet access, and how much notice is needed.</li>
            <li><strong>NNG cannot deliver:</strong> the resolution offered if no suitable replacement appointment can be agreed or NNG cannot finish a program.</li>
            <li><strong>Hand Holding details:</strong> channels, days and hours, expected reply time, whether a program can be paused, and early-exit and unused-session rules.</li>
            <li><strong>Privacy arrangements:</strong> where records are stored, who can access them, which tools generate reports, whether sessions are recorded, and when information is deleted.</li>
            <li><strong>Final review:</strong> formal complaint response and escalation arrangements, and legal review before activation. Product rules follow once product sales are ready.</li>
          </ul>
        </section>
        <LegalContacts />
      </div>
    </div>
  );
}
