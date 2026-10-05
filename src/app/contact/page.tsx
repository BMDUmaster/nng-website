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
        <div className="section-wrap section-space contact-grid-two-col">
          <div className="contact-info-col">
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

          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-header">
                <h2 style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontSize: "26px", color: "#3c183d", marginBottom: "6px" }}>Send an Enquiry</h2>
                <p style={{ color: "#665267", fontSize: "14.5px", marginBottom: "20px" }}>Fill in your details below and our team will connect with you.</p>
              </div>

              <form action="/enquiry/store" method="POST" id="contactPageForm" className="contact-form-body">
                <input type="hidden" name="source_page" value="contact_page" />

                <div className="form-group">
                  <label htmlFor="c_name">Full Name <span className="req">*</span></label>
                  <input type="text" id="c_name" name="name" required placeholder="Enter your full name" className="form-ctrl" />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="c_phone">Phone / WhatsApp <span className="req">*</span></label>
                    <input type="tel" id="c_phone" name="phone" required placeholder="e.g. 9876543210" className="form-ctrl" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_email">Email Address</label>
                    <input type="email" id="c_email" name="email" placeholder="e.g. name@example.com" className="form-ctrl" />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="c_guidance">Guidance / Service</label>
                    <select id="c_guidance" name="guidance_with" className="form-ctrl form-select-ctrl">
                      <option value="General Consultation">General Consultation</option>
                      <option value="Mind Training & Guidance">Mind Training & Guidance</option>
                      <option value="Numerology & Vastu">Numerology & Vastu</option>
                      <option value="Astrology Assessment">Astrology Assessment</option>
                      <option value="Personalised Hand Holding Program">Personalised Hand Holding Program</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_location">Your Location</label>
                    <input type="text" id="c_location" name="based_in" placeholder="e.g. Delhi, India" className="form-ctrl" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c_message">Your Message</label>
                  <textarea id="c_message" name="message" rows={3} placeholder="Write your question or thoughts..." className="form-ctrl form-textarea-ctrl"></textarea>
                </div>

                <button type="submit" className="button button-primary contact-submit-btn" style={{ width: "100%", borderRadius: "30px", justifyContent: "center", fontWeight: 700 }}>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </button>
              </form>
            </div>
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
