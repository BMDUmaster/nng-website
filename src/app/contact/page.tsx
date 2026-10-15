import type { Metadata } from "next";
import Link from "next/link";
import { CallLink } from "@/components/contact/CallLink";
import { ContactForm } from "@/components/contact/ContactForm";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { HomeFaq } from "@/components/sections/HomeLower";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { voicePoster, voices } from "@/content/voices";
import { asset, assetSet } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about a consultation or the program lasting six months with Narayani Garg on WhatsApp, by phone or email.",
  alternates: { canonical: "/contact/" },
};

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

/** Contact: a plum opening, the enquiry form, three ways to reach the team, what happens next with a client's words, then questions. */
export default function ContactPage() {
  const manish = voices.manish;
  return (
    <div className="cn ct">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.contact)] }} />

      <section className="cn-hero" aria-labelledby="page-title">
        <div className="cn-hero-inner">
          <div className="cn-hero-copy" data-reveal="">
            <nav className="cn-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <p className="cn-kicker">Contact</p>
            <h1 id="page-title">
              What is <em>on your mind?</em>
            </h1>
            <p className="cn-lead">You do not need to have it all worked out before you enquire. Tell her team a little about what brings you here.</p>
            <div className="cn-actions">
              <EnquiryTrigger className="cn-cta" source="contact-hero" primary>
                <span>Message on WhatsApp</span>
                <Arrow />
              </EnquiryTrigger>
              <a className="cn-ghost" href="#enquiry">
                Send an enquiry
              </a>
            </div>
          </div>
          <div className="cn-hero-visual" data-reveal="">
            <div className="cn-arch">
              <picture>
                <source type="image/avif" srcSet={assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w")} sizes="(max-width: 900px) 62vw, 380px" />
                <img src={asset("/images/narayani-portrait-684.webp")} alt={`Narayani Garg, ${site.title}`} width={684} height={1000} fetchPriority="high" />
              </picture>
            </div>
            <p className="cn-badge">
              <span>{site.person}</span>
              <small>{site.title}</small>
            </p>
          </div>
        </div>
      </section>

      <section className="cn-sec cf" id="enquiry" aria-labelledby="enquiry-title">
        <div className="cn-inner cf-inner">
          <div className="cf-copy" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Send an enquiry</p>
            <h2 id="enquiry-title">
              Write to <em>her team</em>
            </h2>
            <p className="cf-lead">Fill in your details and the NNG team will connect with you. A few lines are enough; you do not need to explain everything here.</p>
            <ul className="cf-points">
              <li>The team replies by phone or WhatsApp</li>
              <li>Fees and availability are explained before you book</li>
              <li>Your details stay with the NNG team</li>
            </ul>
          </div>
          <div data-reveal="" style={{ "--d": "120ms" } as React.CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="cn-sec ct-ways" id="ways" aria-labelledby="ways-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Get in touch</p>
            <h2 id="ways-title">Ways to reach the team</h2>
          </header>
          <ul className="ct-cards">
            <li className="ct-card ct-card-main" data-reveal="">
              <span className="ct-icon ct-icon-wa" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" /></svg>
              </span>
              <h3>WhatsApp</h3>
              <p>Choose what it is about, and your message is ready to send.</p>
              <EnquiryTrigger className="ct-link" source="contact-ways-whatsapp">
                Start on WhatsApp <span aria-hidden="true">→</span>
              </EnquiryTrigger>
            </li>
            <li className="ct-card" data-reveal="" style={{ "--d": "90ms" } as React.CSSProperties}>
              <span className="ct-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
              </span>
              <h3>Call</h3>
              <p>Speak to the team directly.</p>
              <span className="ct-link-wrap"><CallLink /></span>
            </li>
            <li className="ct-card" data-reveal="" style={{ "--d": "180ms" } as React.CSSProperties}>
              <span className="ct-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              </span>
              <h3>Email</h3>
              <p>Email is best for anything longer.</p>
              <a className="ct-link" href={`mailto:${site.email}`}>
                {site.email} <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="cn-sec cn-how ct-next" aria-labelledby="next-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">After you enquire</p>
            <h2 id="next-title">What happens after you enquire</h2>
          </header>
          <ol className="cn-steps ct-steps" data-reveal="">
            {steps.map((step, i) => (
              <li key={step.title} style={{ "--d": `${200 + i * 220}ms` } as React.CSSProperties}>
                <span className="cn-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <figure className="ct-quote" data-reveal="">
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
                <span>On his experience · Translated from Hindi</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <HomeFaq items={faqs.contact} title="Before you write" intro="A few practical questions, before you share your details." source="contact-faq" />
      <Reveal />
    </div>
  );
}
