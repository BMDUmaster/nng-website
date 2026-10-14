// Astrology opening, two approved options (Oct 14). Option 1 (default): words, four topic cards and three features
// on the left; her photograph; a deep green column of topics on the right with a turning zodiac wheel. Option 2
// (?hero=2): her photograph inside a turning zodiac ring and a deep green wave band with an invitation.
import { zodiacRing } from './astro-sec.mjs';

const s = (d, w = 1.4) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  heart: s('<path d="M16 27S4 19.5 4 11.5A6 6 0 0 1 16 8.4a6 6 0 0 1 12 3.1C28 19.5 16 27 16 27Z"/>'),
  case: s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
  coins: s('<ellipse cx="13" cy="8" rx="7" ry="3"/><path d="M6 8v4c0 1.7 3.1 3 7 3s7-1.3 7-3V8M6 12v4c0 1.7 3.1 3 7 3M6 16v4c0 1.7 3.1 3 7 3"/><ellipse cx="21" cy="19" rx="6" ry="2.6"/><path d="M15 19v4c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4"/>'),
  lotus: '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>',
  leaf: s('<path d="M7 25C7 13 15 6 26 6c0 11-7 19-19 19Z"/><path d="M7 25 18 14"/>'),
  doc: s('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 16h8M13 20h8M13 24h5"/>'),
  chat: s('<path d="M6 7h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M11 14h.01M16 14h.01M21 14h.01" stroke-width="2.4"/>'),
  cal: s('<rect x="6" y="8" width="20" height="18" rx="2"/><path d="M6 13h20M11 5v5M21 5v5M10 17h2M15 17h2M20 17h2M10 21h2M15 21h2"/>'),
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l5.5-3.5Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"/></svg>',
};
const cards = [[I.heart, 'Relationships', 'Marriage, matching and timing'], [I.case, 'Career', 'Work changes and business'], [I.coins, 'Money', 'Property and major decisions'], [I.lotus, 'Wellbeing', 'Periods and transits']];
const side = [[I.heart, 'Relationships'], [I.case, 'Career'], [I.coins, 'Money'], [I.lotus, 'Wellbeing'], [I.leaf, 'Life decisions']];
const feats = [[I.doc, 'Personalised guidance', 'Based on your birth chart'], [I.chat, 'Practical next steps', 'For real-life questions'], [I.cal, 'Online or in person', 'By appointment']];

const head = (wa, ghost = 'ah4-ghost') => `
  <p class="ah4-kicker"><span aria-hidden="true">${I.star}</span><b>Astrology with Narayani<small>Guidance for a brighter tomorrow</small></b></p>
  <h1 id="hero-title">Find clarity through<br>the wisdom of astrology.<br><em>Align with your true path.</em></h1>
  <span class="ah4-rule" aria-hidden="true"><i></i>${I.star}</span>
  <p class="ah4-lead">Narayani reads your birth chart and life patterns beside your real circumstances, for questions about relationships, career, money, wellbeing and important life decisions.</p>
  <div class="ah4-actions">${wa('hero', 'WhatsApp enquiry', 'ah4-cta').replace('</a>', `<i aria-hidden="true">${I.arrow}</i></a>`)}<a class="${ghost}" href="#ways"><i aria-hidden="true">${I.play}</i>See what we can discuss</a></div>
  <ul class="ah4-cards">${cards.map(([ic, t, d]) => `<li><span>${ic}</span><strong>${t}</strong><em>${d}</em></li>`).join('')}</ul>`;

export function astroHero4(p, { esc, wa }) {
  return `<section class="ah4" id="top" aria-labelledby="hero-title" data-hero-a>
    <div class="ah4-photo" aria-hidden="true"><img src="../_shared/hero/astro-hero.webp" alt="" width="875" height="731" fetchpriority="high"></div>
    <aside class="ah4-side" aria-label="What Narayani reads for"><ul>${side.map(([ic, t]) => `<li><span>${ic}</span>${t}</li>`).join('')}</ul><img class="ah4-wheel" src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000" aria-hidden="true"></aside>
    <div class="ah4-copy">${head(wa)}</div>
    <ul class="ah4-feats">${feats.map(([ic, t, d]) => `<li><span>${ic}</span><div><strong>${t}</strong><em>${d}</em></div></li>`).join('')}</ul>
  </section>
  <section class="ah5" aria-label="Astrology with Narayani" data-hero-b hidden>
    <figure class="ah5-photo" aria-hidden="true">${zodiacRing('ah5-ring')}<img src="../_shared/hero/hero-astrology.webp" alt="" width="720" height="856"></figure>
    <div class="ah5-copy">${head(wa).replace('id="hero-title"', 'id="hero-title-b"')}</div>
    <div class="ah5-band">
      <div class="ah5-invite"><span aria-hidden="true">${I.lotus}</span><div><p>Begin your journey</p><h2>What decision would you like to discuss?</h2><em>Share your question and the team will guide you to the right reading.</em></div></div>
      <ul>${feats.map(([ic, t, d]) => `<li><span>${ic}</span><strong>${t}</strong><em>${d}</em></li>`).join('')}</ul>
    </div>
  </section>`;
}
