import Link from "next/link";
import { site } from "@/content/site";

export type LegalSection = { title: string; body: React.ReactNode; note?: { title: string; text: React.ReactNode } };

export const grievanceEmail = "enquire@nngarg.com";
export const legalVersion = "Version 17 October 2026 · Effective date pending";
export const legalPages = [
  { href: "/terms-conditions/", title: "Terms & Conditions", text: "How enquiries, consultations, ongoing guidance and product orders work with Transformation with NNG." },
  { href: "/privacy-policy/", title: "Privacy Policy", text: "What this website does with information, what happens when you contact NNG, and the choices you have." },
  { href: "/cancellation-refunds/", title: "Cancellation, Returns & Delivery", text: "Consultation changes, programme exits and product order questions, in one place." },
  { href: "/disclaimer/", title: "Service Disclaimer", text: "The nature of Narayani’s guidance, before you decide whether a consultation is right for you." },
];

/** The two contact cards at the foot of every legal page. */
export function LegalContacts() {
  return (
    <div className="lg-contacts">
      <div>
        <h2>General enquiries</h2>
        <p>Ask the team about a consultation or order.</p>
        <a href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
      </div>
      <div>
        <h2>Grievances &amp; complaints</h2>
        <p>Handled by Team NNG. Email only. Please include your booking or order reference, if available.</p>
        <a href={`mailto:${grievanceEmail}`}>{grievanceEmail} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}

export function LegalHero({ kicker, title, em, lead, meta, crumb }: { kicker: string; title: string; em: string; lead: string; meta?: string; crumb: string }) {
  return (
    <section className="lg-hero" aria-labelledby="page-title">
      <div className="lg-hero-inner">
        <nav className="cn-crumbs lg-crumbs" aria-label="Breadcrumb">
          <Link prefetch={false} href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {crumb !== "Legal & contact" && <><Link prefetch={false} href="/legal/">Legal</Link><span aria-hidden="true">/</span></>}
          <span aria-current="page">{crumb}</span>
        </nav>
        <p className="lg-kicker">{kicker}</p>
        <h1 id="page-title">{title} <em>{em}</em></h1>
        <p className="lg-lead">{lead}</p>
        {meta && <p className="lg-updated">{meta}</p>}
      </div>
    </section>
  );
}

/**
 * A legal page (Oct 18, from the review drafts): a green banner with the title, three key points, then numbered
 * sections on a cream card with a contents list beside them on wide screens, and the two contact cards.
 */
export function LegalPage({ kicker, title, em, lead, points, sections }: {
  kicker: string;
  title: string;
  em: string;
  lead: string;
  points: string[];
  sections: LegalSection[];
}) {
  const id = (i: number) => `section-${i + 1}`;
  return (
    <div className="lg">
      <LegalHero kicker={kicker} title={title} em={em} lead={lead} meta={legalVersion} crumb={`${title} ${em}`} />
      <ul className="lg-points">
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <div className="lg-body">
        <aside className="lg-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {sections.map((s, i) => (
              <li key={s.title}><a href={`#${id(i)}`}>{s.title}</a></li>
            ))}
          </ol>
        </aside>
        <article className="lg-card">
          {sections.map((s, i) => (
            <section key={s.title} id={id(i)} className="lg-sec" aria-labelledby={`${id(i)}-title`}>
              <h2 id={`${id(i)}-title`}><span className="lg-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
              <div className="lg-text">{s.body}</div>
              {s.note && (
                <div className="lg-note">
                  <p className="lg-note-title">{s.note.title}</p>
                  <p>{s.note.text}</p>
                </div>
              )}
            </section>
          ))}
          <nav className="lg-others" aria-label="Other legal pages">
            {legalPages.filter((p) => !p.title.startsWith(title.replace(" &", ""))).map((p) => (
              <Link key={p.href} prefetch={false} href={p.href}>{p.title} <span aria-hidden="true">→</span></Link>
            ))}
          </nav>
        </article>
      </div>
      <div className="lg-wrap"><LegalContacts /></div>
    </div>
  );
}
