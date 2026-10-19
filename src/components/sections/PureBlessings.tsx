import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset } from "@/lib/assets";

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotus = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>');
const values = [
  // A seated figure in meditation under a soft halo.
  { title: "Spiritual Guidance", text: "For a better tomorrow", icon: ico('<circle cx="16" cy="9" r="2.8"/><path d="M16 12.5v6"/><path d="M10 15.5c2 2.2 4 3 6 3s4-.8 6-3"/><path d="M6.5 24c2.5-2.4 6-3.5 9.5-3.5s7 1.1 9.5 3.5c-2.8 1.6-6 2.3-9.5 2.3S9.3 25.6 6.5 24Z"/><path d="M9.5 6.5a8 8 0 0 1 13 0"/>') },
  // Two women side by side, one hand on the other's shoulder.
  { title: "Women Empowered", text: "Through love & support", icon: ico('<circle cx="11" cy="9" r="3.2"/><circle cx="21" cy="9" r="3.2"/><path d="M4.5 27c0-5.5 2.8-9.5 6.5-9.5 2 0 3.7 1.1 5 3"/><path d="M27.5 27c0-5.5-2.8-9.5-6.5-9.5s-6.5 4-6.5 9.5"/><path d="M15.8 17.9 18.5 19"/>') },
  // The sun rising over the horizon.
  { title: "A Brighter Future", text: "Together", icon: ico('<path d="M3 23h26"/><path d="M9.5 23a6.5 6.5 0 0 1 13 0"/><path d="M16 9v3.5M8 12.5l2.4 2.4M24 12.5l-2.4 2.4M3.5 18.5H7M25 18.5h3.5"/><path d="M9 27h14"/>') },
];
const spark = <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12C6.4 11.3 11.3 6.4 12 0Z" /></svg>;

/**
 * "The power of pure blessings" (Oct 19, from the approved banner): deep green with leaves and gold arcs; her portrait
 * card in a gold frame; the message, two actions and three values; a cream wave along the foot.
 */
export function PureBlessings() {
  return (
    <section className="pb" aria-labelledby="pb-title">
      <span className="pb-art pb-leaf-l" aria-hidden="true" />
      <span className="pb-art pb-corner" aria-hidden="true" />
      <span className="pb-art pb-leaf-r" aria-hidden="true" />
      <svg className="pb-arcs" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1300 0C1560 150 1660 420 1560 700" fill="none" stroke="#D9B160" strokeWidth="1.4" vectorEffect="non-scaling-stroke" opacity=".7" />
        <path d="M0 880C380 820 760 920 1100 880S1520 820 1672 860V941H0Z" fill="#F7EEDB" />
        <path d="M0 880C380 820 760 920 1100 880S1520 820 1672 860" fill="none" stroke="#D9B160" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="pb-spark pb-spark-1">{spark}</span>
      <span className="pb-spark pb-spark-2">{spark}</span>
      <span className="pb-spark pb-spark-3">{spark}</span>
      <div className="pb-inner">
        <figure className="pb-photo">
          <span className="pb-frame" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/pure-blessings.webp")} alt="Narayani Garg: The Power of Pure Blessings" width={720} height={1280} loading="lazy" decoding="async" />
        </figure>
        <div className="pb-copy">
          <span className="pb-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
          <p className="pb-kicker">A message from Narayani</p>
          <h2 id="pb-title">The power of <em>pure blessings</em></h2>
          <span className="pb-rule" aria-hidden="true"><i /><span dangerouslySetInnerHTML={{ __html: lotus }} /><i /></span>
          <p className="pb-lead">A blessing given from the heart, without asking anything in return, carries further than words. Narayani shares hers with the women of Apna Ghar Ashram.</p>
          <div className="pb-actions">
            <a className="pb-cta" href="#seva-title">
              <span>Watch the film</span>
              <span className="pb-go" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 5.5v13l10-6.5z" /></svg></span>
            </a>
            <EnquiryTrigger className="pb-ghost" source="home-blessings">Enquire Now <span aria-hidden="true">→</span></EnquiryTrigger>
          </div>
          <ul className="pb-values" aria-label="What it stands for">
            {values.map((v) => (
              <li key={v.title}>
                <span className="pb-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />
                <strong>{v.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
