import { Icon } from "@/components/icons/Icon";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { consultationOptions, feesPublic } from "@/content/consultation";

/**
 * The four consultation options and their fees, from src/content/consultation.ts. The program's fee is not
 * shown anywhere on the site. Stones and Rudraksha are priced on enquiry.
 *
 * Hub pages and the services page carry the full block. A page for one subject carries the compact one: the
 * same four lines, set small beside the enquiry, so the price is never a tap away from the button.
 */
export function FeeOptions({
  topic,
  source,
  heading = "Consultation options and fees",
  compact = false,
}: {
  topic: string;
  source: string;
  heading?: string;
  compact?: boolean;
}) {
  if (!feesPublic) return <section className="section-wrap section-space offer-fees-pending" id="fees" aria-labelledby="fees-title"><h2 id="fees-title">Discuss your consultation options</h2><p>Format, duration and fees are being finalised. Ask the team about the service you need before you book.</p><EnquiryTrigger topic={topic} source={source}>Ask about options and fees</EnquiryTrigger></section>;
  if (compact) {
    return (
      <section className="section-wrap offer-fees-compact" id="fees" aria-labelledby="fees-title">
        <h2 id="fees-title">
          <Icon id="gen-fees" />
          <span>{heading}</span>
        </h2>
        <ul className="offer-fee-mini">
          {consultationOptions.map((option) => (
            <li key={option.id}>
              <span>
                <strong>{option.mode}</strong> {option.length}
              </span>
              <span className="offer-fee-amount">{option.fee}</span>
            </li>
          ))}
        </ul>
        <p className="offer-fees-note">Each fee is for one session. The team confirms the format, timing and final amount with you before you book.</p>
        <div className="cta-row">
          <EnquiryTrigger topic={topic} source={source} className="button button-primary">
            Enquire to book
          </EnquiryTrigger>
        </div>
      </section>
    );
  }
  return (
    <section className="band offer-fees" id="fees" aria-labelledby="fees-title">
      <div className="section-wrap section-space">
        <div className="offer-fees-head">
          <h2 id="fees-title">
            <Icon id="gen-fees" />
            <span>{heading}</span>
          </h2>
          <p>Each fee is for one session. The team confirms the format, timing and final amount with you before you book.</p>
        </div>
        <ul className="offer-fee-list">
          {consultationOptions.map((option) => (
            <li key={option.id}>
              <div className="offer-fee-when">
                <strong>{option.mode}</strong>
                <span>{option.length}</span>
              </div>
              <p>{option.summary}</p>
              <span className="offer-fee-amount">{option.fee}</span>
            </li>
          ))}
        </ul>
        <div className="cta-row">
          <EnquiryTrigger topic={topic} source={source} className="button button-primary">
            Enquire to book
          </EnquiryTrigger>
        </div>
      </div>
    </section>
  );
}
