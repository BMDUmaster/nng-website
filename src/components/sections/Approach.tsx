import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { method } from "@/content/services";
import { asset, assetSet } from "@/lib/assets";
import { ApproachMotion } from "./ApproachMotion";

const steps = [
  {
    word: "Notice",
    text: "What keeps repeating?",
    points: ["Understand patterns in your thoughts", "Spot emotional triggers", "See what’s holding you back"],
    icon: (
      <g>
        <path pathLength={1} d="M24 10v28" />
        <path pathLength={1} d="M24 12c-3-4-10-3-11 2-4 1-5 6-2 9-2 3 0 8 4 8 1 3 6 4 9 1" />
        <path pathLength={1} d="M24 12c3-4 10-3 11 2 4 1 5 6 2 9 2 3 0 8-4 8-1 3-6 4-9 1" />
        <path pathLength={1} d="M17 20c2 0 4 1 4 3M31 20c-2 0-4 1-4 3M17 30c2 0 4-1 4-3M31 30c-2 0-4-1-4-3" />
      </g>
    ),
  },
  {
    word: "Understand",
    text: "What influences your response?",
    points: ["Remove limiting beliefs", "Understand your emotions", "Gain clarity on your next steps"],
    icon: (
      <g>
        <path pathLength={1} d="M12 36C10 20 20 10 38 10c0 18-8 28-24 26" />
        <path pathLength={1} d="M12 36C18 28 24 22 32 16" />
      </g>
    ),
  },
  {
    word: "Practise",
    text: "Try a different response in daily life.",
    points: ["Build new habits", "Shift your perspective", "Create lasting change"],
    icon: (
      <g>
        <circle pathLength={1} cx="24" cy="24" r="7" />
        <path pathLength={1} d="M24 8v5M24 35v5M8 24h5M35 24h5M12.7 12.7l3.5 3.5M31.8 31.8l3.5 3.5M12.7 35.3l3.5-3.5M31.8 16.2l3.5-3.5" />
      </g>
    ),
  },
];


/** A large golden zodiac wheel (signs, twelve houses, fine rings) that turns slowly behind her on desktop. */
function wheel() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const c = 300;
  const out: string[] = ['<circle cx="300" cy="300" r="294" stroke-width="1.6"/><circle cx="300" cy="300" r="286" stroke-width=".6"/><circle cx="300" cy="300" r="222" stroke-width="1.2"/><circle cx="300" cy="300" r="150" stroke-width=".8"/><circle cx="300" cy="300" r="70" stroke-width=".8"/>'];
  for (let i = 0; i < 12; i++) {
    const a = ((i * 30 - 90) * Math.PI) / 180;
    out.push(`<path d="M${(c + 70 * Math.cos(a)).toFixed(1)} ${(c + 70 * Math.sin(a)).toFixed(1)}L${(c + 286 * Math.cos(a)).toFixed(1)} ${(c + 286 * Math.sin(a)).toFixed(1)}" stroke-width=".7"/>`);
    const b = ((i * 30 - 75) * Math.PI) / 180;
    const x = (c + 254 * Math.cos(b)).toFixed(1);
    const y = (c + 254 * Math.sin(b)).toFixed(1);
    out.push(`<text x="${x}" y="${y}" transform="rotate(${i * 30 + 15} ${x} ${y})">${signs[i]}&#xFE0E;</text>`);
  }
  for (let i = 0; i < 72; i++) {
    const a = (i * 5 * Math.PI) / 180;
    out.push(`<path d="M${(c + 216 * Math.cos(a)).toFixed(1)} ${(c + 216 * Math.sin(a)).toFixed(1)}L${(c + 222 * Math.cos(a)).toFixed(1)} ${(c + 222 * Math.sin(a)).toFixed(1)}" stroke-width=".6"/>`);
  }
  return `<svg class="ab-wheel" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true">${out.join("")}</svg>`;
}

/**
 * "Why she starts with the mind" as one wide banner: her words, the three steps and the enquiry on the left; her
 * photograph in the meditation room fills the right edge, with her line on it. On phones the photograph leads.
 */
export function Approach() {
  return (
    <section className="ab" id="approach" aria-labelledby="approach-title">
      <div className="ab-photo">
        <img
          src={asset("/images/approach-narayani-900.webp")}
          srcSet={assetSet("/images/approach-narayani-900.webp 900w, /images/approach-narayani-1400.webp 1400w")}
          sizes="(max-width: 1099px) 100vw, 46vw"
          alt="Narayani Garg in her meditation room"
          width={1400}
          height={1194}
          loading="lazy"
          decoding="async"
        />
        <blockquote className="ab-quote">
          <p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p>
          <footer>
            <strong>Narayani Garg</strong>
            <small>A remedy works when the mind works.</small>
          </footer>
        </blockquote>
      </div>

      <div className="ab-stage" aria-hidden="true">
        <span className="ab-glow" />
        <span className="ab-wheel-wrap" dangerouslySetInnerHTML={{ __html: wheel() }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ab-person" src={asset("/images/approach-cut.webp")} alt="" width={494} height={1023} loading="lazy" decoding="async" />
      </div>

      <div className="ab-inner">
        <div className="ab-copy">
          <p className="ab-kicker">Her approach</p>
          <h2 id="approach-title">
            Why she starts with the <em>mind</em>
          </h2>
          <p className="ab-lead">Knowing what to change is one thing. Living differently is another. Her work brings the two together.</p>

          <ol className="ab-steps" data-draw-steps="">
            {steps.map((step, i) => (
              <li key={step.word} style={{ "--n": i } as React.CSSProperties}>
                <span className="ab-icon" aria-hidden="true">
                  <span className="ab-num">{String(i + 1).padStart(2, "0")}</span>
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {step.icon}
                  </svg>
                </span>
                <h3>{step.word}</h3>
                <p>{step.text}</p>
                <ul className="ab-points">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="ab-actions">
            <EnquiryTrigger className="ab-cta" source="home-who-for">
              <span>Explore her approach</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </EnquiryTrigger>
            <details className="ab-more">
              <summary>
                <span>Explore Mind, Direction and Alignment</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </summary>
              <dl>
                {method.map((item) => (
                  <div key={item.word}>
                    <dt>{item.word}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
        </div>
      </div>
      <ApproachMotion />
    </section>
  );
}
