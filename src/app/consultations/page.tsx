import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FeeOptions } from "@/components/offerings/FeeOptions";
import { PageHero } from "@/components/sections/Sections";
import { SectionChips } from "@/components/sections/SectionChips";
import { areas, areaTopics, legal } from "@/content/site";
import { feesPublic } from "@/content/consultation";
import { Icon } from "@/components/icons/Icon";
import { ProgramProcess } from "@/components/sections/ProgramProcess";

export const metadata: Metadata = {
  title: "Personal consultation with Dr. Narayani Garg",
  description: "Choose an online or in-person consultation with Narayani Garg. Explore session options, fees, how to begin and ongoing personal guidance.",
  alternates: { canonical: "/consultations/" },
};

const concerns = {
  Health: "Your wellbeing, stress patterns and everyday habits",
  Relationship: "A relationship question or a pattern that keeps repeating",
  Career: "A career decision, change or question about direction",
  Money: "Your approach to money and the decisions around it",
} as const;
const concernIcons = {
  Health: "page-health-and-wellbeing",
  Relationship: "group-relationships",
  Career: "page-career-and-business",
  Money: "work-finance",
} as const;

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        personal
        title="Start with what is on your mind"
        lead="You do not need to choose a practice first. Bring your question. Narayani considers your circumstances and thought patterns, with astrology, numerology or Vastu where relevant."
        visualLate
        visual={<div className="practice-vastu-portrait"><Portrait name="Dr. Narayani Garg" note="Personal guidance" priority sizes="(max-width: 680px) 110px, 340px" /></div>}
      >
        <div className="cta-row">
          <EnquiryTrigger source="consultations-hero" primary>Enquire about a consultation</EnquiryTrigger>
          <a className="text-link" href="#fees">See session options</a>
        </div>
        <p className="consultation-format-note">Online, including from abroad, or in person by appointment</p>
      </PageHero>
      <SectionChips label="Plan your consultation" items={[
        { id: "choose", label: "Where to begin" },
        ...(feesPublic ? [{ id: "fees", label: "Options and fees" }] : []),
        { id: "how", label: "How it works" },
        { id: "support", label: "Ongoing support" },
      ]} />
      <section className="section-wrap section-space offer-choices" id="choose" aria-labelledby="choose-title">
        <div className="offer-choices-head">
          <h2 id="choose-title">Begin with one question</h2>
          <p>Choose an area below, or ask the team to help you find a starting point.</p>
        </div>
        <div className="offer-choices-grid consultation-concerns">
          {areas.map(area => (
            <div className="offer-choices-group" key={area}>
              <h3><Icon id={concernIcons[area]} />{area}</h3>
              <p>{concerns[area]}</p>
              <EnquiryTrigger className="text-link" topic={areaTopics[area]} source={`consultations-${area.toLowerCase()}`}>Ask about {area.toLowerCase()}</EnquiryTrigger>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <EnquiryTrigger className="text-link" topic="choosing the right service" source="consultations-unsure">I am not sure where to begin</EnquiryTrigger>
          <Link prefetch={false} className="text-link" href="/services/">Explore the practices</Link>
        </div>
        <p className="offer-fees-note">{legal.disclaimer}</p>
      </section>
      <FeeOptions topic="a personal consultation" source="consultations-fees" />
      <section className="consultation-journey" id="how" aria-labelledby="how-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="how-title">From your question to an appointment</h2>
            <p>An enquiry starts a conversation with the team. It does not book or pay for a session.</p>
          </div>
          <ProgramProcess steps={[
            { title: "Share your question", text: "Tell the team what is on your mind and what you have tried." },
            { title: "Confirm the details", text: "Agree on format, duration, availability and fee before booking. For online sessions, share your country and time zone." },
            { title: "Meet Narayani", text: "Attend your appointment online or in person." },
            { title: "Decide what comes next", text: "Discuss your next steps and whether ongoing guidance would suit you." },
          ]} />
          <div className="cta-row"><EnquiryTrigger source="consultations-how">Speak to the team</EnquiryTrigger><Link prefetch={false} className="text-link" href="/contact/">Call or email instead</Link></div>
        </div>
      </section>
      <section className="band" id="support" aria-labelledby="support-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="support-title">A session or ongoing support?</h2>
            <p>Start with a consultation for the question in front of you. If you want to keep working on your habits and choices, explore the Personalised Hand Holding Program.</p>
          </div>
          <div className="cta-row"><Link prefetch={false} className="button" href="/hand-holding-program/">Explore the Hand Holding Program</Link><Link prefetch={false} className="text-link" href="/about/">Get to know Narayani</Link></div>
        </div>
      </section>
    </>
  );
}
