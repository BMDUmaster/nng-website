import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset } from "@/lib/assets";
import { areas, areaTopics, figures, site } from "@/content/site";

/*
 * The homepage hero (Oct 15 redesign, from the approved "Spiritual Guidance in Bloom" banner): a cream page with soft
 * leaves; on the left the practices, the heading, a lotus rule, two actions, a note and her figures; on the right her
 * room, softly out of focus, with a slowly turning golden zodiac ring and Narayani standing in front of it (a cut-out of
 * her real photograph); across the foot a deep green wave with the four areas of life. On phones the same pieces stack.
 */

const practices = ["Brainology", "Numerology", "Vastulogy", "Astrology"];

const svg = (d: string) =>
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const icons = {
  people: svg('<circle cx="16" cy="10" r="4.2"/><path d="M8.5 25a7.5 7.5 0 0 1 15 0"/><circle cx="7" cy="12.5" r="3"/><path d="M2.5 23.5a5 5 0 0 1 6.5-4.7"/><circle cx="25" cy="12.5" r="3"/><path d="M29.5 23.5a5 5 0 0 0-6.5-4.7"/>'),
  award: svg('<circle cx="16" cy="12" r="7.5"/><circle cx="16" cy="12" r="4"/><path d="m11 18.5-3 9 4.5-1.8L15 29l1-5M21 18.5l3 9-4.5-1.8L17 29"/>'),
  globe: svg('<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.4 3.2 5 6.9 5 11s-1.6 7.8-5 11c-3.4-3.2-5-6.9-5-11s1.6-7.8 5-11Z"/><path d="M7 10.5h18M7 21.5h18"/>'),
  lotus: svg('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>'),
  heart: svg('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6c0 1.6-.5 3.2-1.3 4.6"/><path d="M22.5 17.5c1.6 0 3 1.3 3 3s-1.4 3-3 3"/>'),
  coins: svg('<ellipse cx="13" cy="8" rx="8" ry="3"/><path d="M5 8v4c0 1.7 3.6 3 8 3s8-1.3 8-3V8M5 12v4c0 1.7 3.6 3 8 3 1.2 0 2.4-.1 3.4-.3M5 16v4c0 1.7 3.6 3 8 3 .9 0 1.8 0 2.6-.2"/><ellipse cx="22" cy="19" rx="6.5" ry="2.6"/><path d="M15.5 19v4c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6v-4"/>'),
  case: svg('<rect x="4" y="10" width="24" height="16" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M4 17h24M14 17v2.5h4V17"/>'),
};
const areaIcon: Record<string, string> = { Health: icons.lotus, Relationship: icons.heart, Money: icons.coins, Career: icons.case };
const figureIcon = [icons.people, icons.award, icons.globe];

const star = (cls: string) =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12C6.4 11.3 11.3 6.4 12 0Z"/></svg>`;

/** A golden ring of the twelve signs with fine ticks; transparent everywhere else. */
function ring() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const c = 300;
  const out: string[] = [
    '<circle cx="300" cy="300" r="292" stroke-width="1.4"/><circle cx="300" cy="300" r="284" stroke-width=".7"/><circle cx="300" cy="300" r="226" stroke-width="1.1"/><circle cx="300" cy="300" r="218" stroke-width=".6" stroke-dasharray="1.5 6"/>',
  ];
  for (let i = 0; i < 12; i++) {
    const a = ((i * 30 - 90) * Math.PI) / 180;
    const b = ((i * 30 - 75) * Math.PI) / 180;
    out.push(`<path d="M${(c + 226 * Math.cos(a)).toFixed(1)} ${(c + 226 * Math.sin(a)).toFixed(1)}L${(c + 284 * Math.cos(a)).toFixed(1)} ${(c + 284 * Math.sin(a)).toFixed(1)}" stroke-width=".8"/>`);
    const x = (c + 255 * Math.cos(b)).toFixed(1);
    const y = (c + 255 * Math.sin(b)).toFixed(1);
    out.push(`<text x="${x}" y="${y}" transform="rotate(${i * 30 + 15} ${x} ${y})">${signs[i]}&#xFE0E;</text>`);
  }
  for (let i = 0; i < 72; i++) {
    const a = (i * 5 * Math.PI) / 180;
    const r1 = i % 6 ? 287 : 284;
    out.push(`<path d="M${(c + r1 * Math.cos(a)).toFixed(1)} ${(c + r1 * Math.sin(a)).toFixed(1)}L${(c + 292 * Math.cos(a)).toFixed(1)} ${(c + 292 * Math.sin(a)).toFixed(1)}" stroke-width=".6"/>`);
  }
  return `<svg class="hm-ring" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true">${out.join("")}</svg>`;
}

/** A four-point sparkle centred on (x, y). */
const sparkle = (x: number, y: number, r: number) =>
  `M${x} ${y - r}C${x + r * 0.14} ${y - r * 0.14} ${x + r * 0.14} ${y - r * 0.14} ${x + r} ${y}C${x + r * 0.14} ${y + r * 0.14} ${x + r * 0.14} ${y + r * 0.14} ${x} ${y + r}C${x - r * 0.14} ${y + r * 0.14} ${x - r * 0.14} ${y + r * 0.14} ${x - r} ${y}C${x - r * 0.14} ${y - r * 0.14} ${x - r * 0.14} ${y - r * 0.14} ${x} ${y - r}Z`;

/** Constellations, crescent moons, a radiant star and twinkling points around the ring. */
function sky() {
  const dots = (pts: number[][]) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`).join("");
  const twinkles = [[118, 70, 11], [452, 40, 8], [30, 300, 12], [580, 470, 9], [96, 540, 8], [300, 8, 7], [540, 250, 7], [20, 120, 6]];
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i * 22.5 * Math.PI) / 180;
    const r = i % 2 ? 18 : 32;
    return `<path d="M${(572 + 9 * Math.cos(a)).toFixed(1)} ${(320 + 9 * Math.sin(a)).toFixed(1)}L${(572 + r * Math.cos(a)).toFixed(1)} ${(320 + r * Math.sin(a)).toFixed(1)}"/>`;
  }).join("");
  return `<svg class="hm-sky" viewBox="0 0 600 600" fill="none" aria-hidden="true">
    <g class="hm-const"><path d="M58 150 96 104 150 128 128 186M470 112 510 160 548 142 586 200M520 400 556 440 536 500 580 540M24 420 62 460 44 520"/>${dots([[58, 150], [96, 104], [150, 128], [128, 186], [470, 112], [510, 160], [548, 142], [586, 200], [520, 400], [556, 440], [536, 500], [580, 540], [24, 420], [62, 460], [44, 520]])}</g>
    <path class="hm-moon" d="M520 8a40 40 0 1 0 44 58 33 33 0 1 1-44-58Z"/>
    <path class="hm-moon hm-moon-s" d="M452 30a18 18 0 1 0 20 27 15 15 0 1 1-20-27Z"/>
    <g class="hm-sun"><circle cx="572" cy="320" r="6"/>${rays}</g>
    ${twinkles.map(([x, y, r], i) => `<path class="hm-twinkle" style="--d:${(i * 0.55).toFixed(2)}s" d="${sparkle(x, y, r)}"/>`).join("")}
  </svg>`;
}

/** Soft leaves in a corner: a stem with alternating leaves. */
const leaves = (cls: string) =>
  `<svg class="hm-leaves ${cls}" viewBox="0 0 220 300" aria-hidden="true"><path class="hm-stem" d="M20 300C60 230 90 160 160 60" fill="none"/><path d="M58 236c-34-4-52-36-46-62 30 6 50 34 46 62Z"/><path d="M78 196c-6-34 16-62 44-66 4 30-16 58-44 66Z"/><path d="M96 166c-32-10-42-44-28-68 26 12 38 44 28 68Z"/><path d="M118 126c-2-32 22-56 50-56 0 30-22 54-50 56Z"/><path d="M136 100c-28-14-32-46-14-66 22 16 28 44 14 66Z"/><path d="M40 270c-32 4-56-18-58-44 28-2 50 18 58 44Z"/></svg>`;

const html = (markup: string) => ({ __html: markup });

export function HomeHero() {
  return (
    <section className="hm" aria-labelledby="hero-title">
      <div className="hm-room" aria-hidden="true" />
      <span className="hm-leaf-layer" aria-hidden="true" dangerouslySetInnerHTML={html(leaves("hm-leaves-tl") + leaves("hm-leaves-bl") + leaves("hm-leaves-br"))} />

      <div className="hm-inner">
        <div className="hm-copy">
          <p className="hm-kicker">
            {practices.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </p>
          <p className="hm-name">
            <span className="hm-name-star" aria-hidden="true" dangerouslySetInnerHTML={html(star("hm-star"))} />
            <span>
              Personal guidance with <strong>Narayani Garg</strong>
            </span>
          </p>
          <h1 id="hero-title">
            Let’s talk about <em>what’s on your mind.</em>
          </h1>
          <div className="hm-rule" aria-hidden="true">
            <i />
            <span dangerouslySetInnerHTML={html(icons.lotus)} />
            <i />
          </div>
          <p className="hm-lead">
            Bring your questions about health, relationship, money or career. Explore it with spiritual guidance and mindset work.
          </p>
          <div className="hm-actions">
            <EnquiryTrigger className="hm-cta" source="hero" primary>
              <span className="hm-cta-wa" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
                </svg>
              </span>
              <span>Enquire about a consultation</span>
              <span className="hm-arrow" aria-hidden="true">→</span>
            </EnquiryTrigger>
            <a className="hm-ghost" href="#approach">
              <span className="hm-play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9.5 7.5v9l7-4.5-7-4.5Z" />
                </svg>
              </span>
              <span>How she works</span>
              <span className="hm-arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hm-note">
            <span className="hm-dot" aria-hidden="true" />
            Ask the team for the next available appointment
          </p>
          <dl className="hm-figures" aria-label="Narayani's experience">
            {figures.map((figure, i) => (
              <div key={figure.label} style={{ "--i": i } as React.CSSProperties}>
                <span className="hm-fig-icon" aria-hidden="true" dangerouslySetInnerHTML={html(figureIcon[i] ?? icons.people)} />
                <dt>{figure.label}</dt>
                <dd>{figure.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hm-visual">
          <div className="hm-stage">
            <span className="hm-sky-wrap" aria-hidden="true" dangerouslySetInnerHTML={html(sky())} />
            <span className="hm-ring-wrap" aria-hidden="true" dangerouslySetInnerHTML={html(ring())} />
            <img
              className="hm-person"
              src={asset("/images/hero-narayani-cut.webp")}
              alt={`Narayani Garg, ${site.title}`}
              width={296}
              height={818}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
        </div>
      </div>

      <nav className="hm-areas" aria-label="Enquire about an area of life">
        <svg className="hm-wave" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="hm-wave-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1F5640" />
              <stop offset="1" stopColor="#0E3325" />
            </linearGradient>
          </defs>
          <path className="hm-wave-body" d="M0 44C180 14 380 14 560 40S860 70 1010 46 1300 0 1440 18V170H0Z" />
          <path className="hm-wave-line" d="M0 44C180 14 380 14 560 40S860 70 1010 46 1300 0 1440 18" />
          <path className="hm-wave-line hm-wave-line-2" d="M0 158C240 140 470 150 720 160s480 6 720-14" />
        </svg>
        <ul>
          {areas.map((area, i) => (
            <li key={area} style={{ "--i": i } as React.CSSProperties}>
              {i > 0 && <span className="hm-area-star" aria-hidden="true" dangerouslySetInnerHTML={html(star("hm-sep"))} />}
              <EnquiryTrigger className="hm-area" topic={areaTopics[area]} source={`hero-area-${area.toLowerCase()}`}>
                <span className="hm-area-icon" aria-hidden="true" dangerouslySetInnerHTML={html(areaIcon[area] ?? icons.lotus)} />
                <span className="hm-area-label">{area}</span>
              </EnquiryTrigger>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
