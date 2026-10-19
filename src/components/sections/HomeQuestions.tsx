import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import type { Faq } from "@/content/faq";

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const chat = ico('<path d="M6 8.5A3.5 3.5 0 0 1 9.5 5h13A3.5 3.5 0 0 1 26 8.5v8a3.5 3.5 0 0 1-3.5 3.5H14l-5.5 5v-5h0A3.5 3.5 0 0 1 6 16.5Z"/><path d="M11.5 12.5h.01M16 12.5h.01M20.5 12.5h.01" stroke-width="2.4"/>');
const team = ico('<circle cx="16" cy="10" r="4"/><path d="M8.5 25a7.5 7.5 0 0 1 15 0"/><circle cx="7" cy="12.5" r="3"/><path d="M2.5 23.5a5 5 0 0 1 6.5-4.7"/><circle cx="25" cy="12.5" r="3"/><path d="M29.5 23.5a5 5 0 0 0-6.5-4.7"/>');
const shield = ico('<path d="M16 4 26 8v7c0 6.5-4.3 11-10 13-5.7-2-10-6.5-10-13V8Z"/><path d="m11.5 16 3 3 6-6"/>');
const topicIcons: [RegExp, string][] = [
  [/fee|cost|price|pay/i, ico('<path d="M10 7h13M10 12h13M10 7c7 0 9 2 9 5s-3 5-9 5l10 9"/>')],
  [/medical|replace|professional advice|doctor/i, shield],
  [/outside|india|abroad|online|country/i, ico('<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.4 3.2 5 6.9 5 11s-1.6 7.8-5 11c-3.4-3.2-5-6.9-5-11s1.6-7.8 5-11Z"/>')],
  [/begin|start|first/i, ico('<circle cx="16" cy="16" r="11"/><path d="m20.5 11.5-3 6-6 3 3-6z"/>')],
  [/program|different|six|month/i, ico('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/>')],
  [/remed|stone|gem|rudraksh|crystal/i, ico('<path d="M10 6h12l5 7-11 14L5 13Z"/><path d="M5 13h22M12 6l4 21M20 6l-4 21"/>')],
  [/share|ask|bring|detail|information|birth time|need/i, ico('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 15h8M13 19h8M13 23h5"/>')],
  [/course|teach|learn/i, ico('<path d="M3 12 16 6l13 6-13 6Z"/><path d="M8 14.5V21c2.5 2 5 3 8 3s5.5-1 8-3v-6.5"/>')],
  [/proof|science|scientific|predict/i, ico('<circle cx="14" cy="14" r="8"/><path d="m20 20 7 7"/>')],
  [/area|one consultation|cover|more than/i, ico('<rect x="5" y="5" width="9" height="9" rx="2"/><rect x="18" y="5" width="9" height="9" rx="2"/><rect x="5" y="18" width="9" height="9" rx="2"/><rect x="18" y="18" width="9" height="9" rx="2"/>')],
  [/.*/, ico('<circle cx="16" cy="16" r="11"/><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.2-1.5 2.3v.5"/><path d="M16 22.5h.01" stroke-width="2.4"/>')],
];
const topicIcon = (q: string) => topicIcons.find(([re]) => re.test(q))![1];

/**
 * Home "Before you enquire" (Oct 19, from the approved card): her photograph in a gold arch beside the heading and
 * three values; a card inviting any other question; then the questions as numbered rows with an icon, opening in place.
 */
export function HomeQuestions({ items, source = "home-faq" }: { items: Faq[]; source?: string }) {
  return (
    <section className="qa" id="faq" aria-labelledby="faq-title">
      <div className="qa-inner">
        <header className="qa-head">
          <p className="qa-kicker">Frequently asked</p>
          <h2 id="faq-title" className="qa-title">Frequently asked <em>questions</em></h2>
          <p className="qa-lead">Find answers to common questions about consultations, programs and how we work.</p>
        </header>

        <div className="qa-ask">
          <span className="qa-ask-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: chat }} />
          <div className="qa-ask-copy">
            <p className="qa-ask-kicker">Still have a question?</p>
            <p className="qa-ask-title">Something else on your mind?</p>
            <p className="qa-ask-text">If you have any other questions, feel free to ask. We’re here to help.</p>
          </div>
          <div className="qa-ask-action">
            <EnquiryTrigger className="qa-ask-btn" source={source}>
              <span>Ask your question</span>
              <span className="qa-ask-go" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg></span>
            </EnquiryTrigger>
            <p className="qa-ask-team"><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: team }} />Get a response from Narayani’s team</p>
          </div>
        </div>

        <div className="qa-list">
          {items.map((item, i) => (
            <details key={item.q} className="qa-item" name={source}>
              <summary>
                <span className="qa-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="qa-topic" aria-hidden="true" dangerouslySetInnerHTML={{ __html: topicIcon(item.q) }} />
                <span className="qa-q">{item.q}</span>
                <span className="qa-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
