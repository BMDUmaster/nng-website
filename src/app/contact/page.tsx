import { HomeQuestions } from "@/components/sections/HomeQuestions";
import type { Metadata } from "next";
import Link from "next/link";
import { CallLink } from "@/components/contact/CallLink";
import { ContactForm } from "@/components/contact/ContactForm";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { voicePoster, voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about a consultation or the program lasting six months with Narayani Garg on WhatsApp, by phone or email.",
  alternates: { canonical: "/contact/" },
};

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotusSvg = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>');
const icons = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>',
  call: ico('<path d="M28 22.5v3.6a2.4 2.4 0 0 1-2.6 2.4A23.7 23.7 0 0 1 15 24.8a23.4 23.4 0 0 1-7.2-7.2A23.7 23.7 0 0 1 4.1 7.2 2.4 2.4 0 0 1 6.5 4.6h3.6a2.4 2.4 0 0 1 2.4 2c.2 1.2.5 2.3.9 3.4a2.4 2.4 0 0 1-.6 2.5l-1.5 1.5a19.2 19.2 0 0 0 7.2 7.2l1.5-1.5a2.4 2.4 0 0 1 2.5-.5c1.1.4 2.2.7 3.4.9a2.4 2.4 0 0 1 2 2.4Z"/>'),
  email: ico('<rect x="4" y="7" width="24" height="18" rx="3"/><path d="m27 9-11 8L5 9"/>'),
  visit: ico('<path d="M16 28s-9-7.8-9-14a9 9 0 0 1 18 0c0 6.2-9 14-9 14Z"/><circle cx="16" cy="14" r="3.2"/>'),
  check: ico('<circle cx="16" cy="16" r="12"/><path d="m11 16.5 3.4 3.4L21.5 12"/>'),
  chat: ico('<path d="M6 7h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M11 15h.01M16 15h.01M21 15h.01" stroke-width="2.6"/>'),
  note: ico('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 15h8M13 19h8M13 23h5"/>'),
  path: ico('<path d="M6 26V20M12 26V16M18 26V12M24 26V8M18 6h6v6"/>'),
};
const reach = [
  { name: "WhatsApp", note: "Quick replies", icon: icons.whatsapp },
  { name: "Call", note: "Speak to the team", icon: icons.call },
  { name: "Email", note: "For longer notes", icon: icons.email },
  { name: "In person", note: "By appointment", icon: icons.visit },
];
const stepIcons = [icons.chat, icons.note, icons.path];

const steps = [
  { title: "We get in touch", text: "The team responds through the channel you use to enquire." },
  { title: "We understand your question", text: "Share what is on your mind and what you have tried." },
  { title: "We explain the next step", text: "Discuss a suitable consultation or programme, with fees and availability." },
];

function Arrow() {
  return (
    <span className="cn-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
      </svg>
    </span>
  );
}

/** Contact: green opening with her photograph, the enquiry form in a two-panel card, three ways to reach the team, what
 * happens next with a client's words, then questions. Same look as the consultations page. */
export default function ContactPage() {
  const manish = voices.manish;
  return (
    <div className="cn ct">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.contact)] }} />

      <section className="kh" aria-labelledby="page-title">
        <div className="kh-inner">
          <div className="kh-visual" data-reveal="">
            <div className="kh-arch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/contact-full.webp")} alt={`Narayani Garg, ${site.title}`} width={720} height={1129} fetchPriority="high" />
            </div>
            <div className="kh-face">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/contact-face.webp")} alt="" width={420} height={420} loading="lazy" />
            </div>
            <p className="kh-badge">
              <span>{site.person}</span>
              <small>Psychic Spiritual Mentor</small>
            </p>
            <span className="kh-lotus-art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
          </div>
          <div className="kh-copy" data-reveal="">
            <nav className="cn-crumbs kh-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <p className="kh-kicker">
              <span className="kf-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
              Contact
            </p>
            <h1 id="page-title">
              What is <em>on your mind?</em>
            </h1>
            <p className="kh-lead">
              <span className="cx-long">You do not need to have it all worked out before you enquire. Tell her team a little about what brings you here.</span>
              <span className="cx-short">You do not need to have it all worked out. Just tell her team what brings you here.</span>
            </p>
            <div className="kh-actions">
              <EnquiryTrigger className="kh-cta" source="contact-hero" primary>
                <span className="cx-long">Message on WhatsApp</span>
                <span className="cx-short">WhatsApp</span>
                <span className="kh-go" aria-hidden="true">→</span>
              </EnquiryTrigger>
              <a className="kh-ghost" href="#enquiry">
                <span className="cx-long">Send an enquiry</span>
                <span className="cx-short">Enquiry form</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="kh-reach" aria-label="Ways to reach the team">
              {reach.map((r) => (
                <li key={r.name}>
                  <span className="kh-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: r.icon }} />
                  <span>
                    <strong>{r.name}</strong>
                    <small>{r.note}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cn-sec cf kf" id="enquiry" aria-labelledby="enquiry-title">
        <div className="cn-inner">
          <div className="kf-card" data-reveal="">
            <div className="kf-side">
              <p className="kf-kicker">
                <span className="kf-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
                Send an enquiry
              </p>
              <h2 id="enquiry-title">
                Write to <em>her team</em>
              </h2>
              <p className="kf-lead">Fill in your details and the NNG team will connect with you. A few lines are enough.</p>
              <ul className="kf-points">
                {["The team replies by phone or WhatsApp", "Fees and availability are explained before you book", "Your details stay with the NNG team"].map((t) => (
                  <li key={t}>
                    <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons.check }} />
                    {t}
                  </li>
                ))}
              </ul>
              <a className="kf-mail" href={`mailto:${site.email}`}>
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons.email }} />
                {site.email}
              </a>
            </div>
            <div className="kf-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="cn-sec ct-ways kw" id="ways" aria-labelledby="ways-title">
        <div className="cn-inner">
          <header className="cn-head kw-head" data-reveal="">
            <span className="ch-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <p className="cn-kicker cn-kicker-dark">Get in touch</p>
            <h2 id="ways-title">
              Ways to <em>reach the team</em>
            </h2>
          </header>
          <ul className="kw-cards">
            <li className="kw-card kw-main" data-reveal="">
              <span className="kw-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons.whatsapp }} />
              <div className="kw-text">
                <h3>WhatsApp</h3>
                <p>Choose what it is about, and your message is ready to send.</p>
              </div>
              <EnquiryTrigger className="kw-link" source="contact-ways-whatsapp">
                Start on WhatsApp <span aria-hidden="true">→</span>
              </EnquiryTrigger>
            </li>
            <li className="kw-card" data-reveal="" style={{ "--d": "90ms" } as React.CSSProperties}>
              <span className="kw-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons.call }} />
              <div className="kw-text">
                <h3>Call</h3>
                <p>Speak to the team directly.</p>
              </div>
              <span className="kw-link-wrap">
                <CallLink />
              </span>
            </li>
            <li className="kw-card" data-reveal="" style={{ "--d": "180ms" } as React.CSSProperties}>
              <span className="kw-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons.email }} />
              <div className="kw-text">
                <h3>Email</h3>
                <p>Email is best for anything longer.</p>
              </div>
              <a className="kw-link" href={`mailto:${site.email}`}>
                Write an email <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="cn-sec cn-how ch ct-next" aria-labelledby="next-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <span className="ch-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <p className="cn-kicker cn-kicker-dark">After you enquire</p>
            <h2 id="next-title">
              What happens <em>next</em>
            </h2>
          </header>
          <ol className="cn-steps ct-steps" data-reveal="">
            {steps.map((step, i) => (
              <li key={step.title} style={{ "--d": `${200 + i * 220}ms` } as React.CSSProperties}>
                <span className="cn-step-num">{String(i + 1).padStart(2, "0")}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ch-sprig" src={asset("/images/how-sprig.webp")} alt="" width={104} height={128} loading="lazy" aria-hidden="true" />
                <span className="ch-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: stepIcons[i] }} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <figure className="ct-quote kq" data-reveal="">
            <div className="ct-quote-photo">
              <img src={voicePoster(manish)} alt="Manish G. and another person in a client video" width={380} height={320} loading="lazy" />
              <span>Client experience</span>
            </div>
            <div className="ct-quote-body">
              <span className="ct-quote-mark" aria-hidden="true">“</span>
              <blockquote>
                <p>Whenever we talk to her, it feels as if one of our own is lovingly showing us the right way, and trying to understand things from our side.</p>
              </blockquote>
              <figcaption>
                <strong>{manish.name}</strong>
                <span>On his experience</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <HomeQuestions items={faqs.contact} source="contact-faq" />
      <Reveal />
    </div>
  );
}
