import type { Metadata } from "next";
import { CallArt, LetterArt, WhatsAppArt } from "@/components/art/Art";
import { VastuBackdrop } from "@/components/art/Sky";
import { Portrait } from "@/components/brand/Portrait";
import { CallLink } from "@/components/contact/CallLink";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FaqSection, PageHero } from "@/components/sections/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a consultation or the program lasting six months with Narayani Garg on WhatsApp, by phone or email.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.contact)] }} />

      <PageHero
        crumb="Contact"
        title="What is on your mind?"
        lead="You do not need to have it all worked out before you enquire. Tell her team a little about what brings you here."
        backdrop={<VastuBackdrop className="in-page-hero" />}
        visual={<Portrait name={site.person} note={site.title} className="hide-on-phone contact-portrait" sizes="30vw" />}
      >
        <div className="cta-row">
          <EnquiryTrigger source="contact-hero" primary>
            Message on WhatsApp
          </EnquiryTrigger>
          <a className="text-link" href="#ways-title">Other ways to reach us</a>
        </div>
      </PageHero>

      <section className="band" aria-labelledby="ways-title">
        <div className="section-wrap section-space contact-grid contact-grid--single">
          <div>
            <h2 id="ways-title">Ways to reach the team</h2>
            <ul className="ways">
              <li>
                <WhatsAppArt />
                <div>
                  <h3>WhatsApp</h3>
                  <p>Choose what it is about, and your message is ready to send.</p>
                  <EnquiryTrigger className="text-link" source="contact-ways-whatsapp">
                    Start on WhatsApp
                  </EnquiryTrigger>
                </div>
              </li>
              <li>
                <CallArt />
                <div>
                  <h3>Call</h3>
                  <p>Speak to the team directly.</p>
                  <CallLink />
                </div>
              </li>
              <li>
                <LetterArt />
                <div>
                  <h3>Email</h3>
                  <p>Email is best for anything longer.</p>
                  <a className="text-link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space" aria-labelledby="next-title">
        <div className="section-heading">
          <h2 id="next-title">What happens after you enquire</h2>
        </div>
        <ol className="steps steps-three">
          <li>
            <span className="list-number">1</span>
            <h3>We get in touch</h3>
            <p>The team responds through the channel you use to enquire.</p>
          </li>
          <li>
            <span className="list-number">2</span>
            <h3>We understand what you need</h3>
            <p>A few questions about what is on your mind, and what you have tried.</p>
          </li>
          <li>
            <span className="list-number">3</span>
            <h3>We suggest the next step</h3>
            <p>The right consultation or the program, with fees and availability.</p>
          </li>
        </ol>
        <div className="contact-quote-showcase">
          <div className="contact-quote-image-wrap">
            <img
              src={asset("/images/testimonials/client-1.webp")}
              alt="Manish G. and another person in a client video"
              className="contact-quote-img"
              width={380}
              height={320}
              loading="lazy"
            />
            <div className="contact-quote-badge">
              <span>Client Experience</span>
            </div>
          </div>
          <div className="contact-quote-body">
            <span className="quote-mark-icon" aria-hidden="true">“</span>
            <blockquote className="contact-quote-text">
              “Whenever we talk to her, it feels as if one of our own is lovingly showing us the right way, and trying to understand things from our side.”
            </blockquote>
            <div className="contact-quote-author">
              <strong>Manish G.</strong>
              <span>On his experience · Translated from Hindi</span>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={faqs.contact}
        title="Before you write"
        intro="A few practical questions, before you share your details."
        source="contact-faq"
      />
    </>
  );
}
