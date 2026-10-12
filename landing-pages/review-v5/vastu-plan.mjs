// Vastu: an illustrated floor plan for the approach section. Drawn as SVG so its parts can arrive in turn and
// light with the steps: 0 direction (compass, entrance), 1 rooms, 2 daily use (furniture).
const plant = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="vp-plant"><circle r="11" class="vp-pot"/>${[0, 72, 144, 216, 288].map((a) => `<ellipse rx="4.2" ry="9" transform="rotate(${a}) translate(0 -8)"/>`).join('')}<circle r="3" class="vp-pot-c"/></g></g>`;
const chair = (x, y, w = 14, h = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`;

const icons = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  sofa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z"/><path d="M6 18v2M18 18v2"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15 14.2a4.6 4.6 0 0 1 6 4.3"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
};

export const chevron = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 7 5 5-5 5"/></svg>';

// A botanical sprig: a curved stem with almond leaves in two sage tones, each with a midrib.
const sprig = [[24, 282, -58, 1], [30, 252, 54, 1.05], [36, 222, -56, 1.1], [44, 192, 52, 1.1], [54, 162, -54, 1.05], [66, 132, 50, 1], [80, 102, -50, 0.95], [94, 72, 46, 0.85], [106, 44, -40, 0.75], [114, 22, 10, 0.7]];
export const leaves = (id) => `<svg class="v5-leaves" viewBox="0 0 160 310" aria-hidden="true"><defs><linearGradient id="lf-a-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9DAF86"/><stop offset="1" stop-color="#6E8257"/></linearGradient><linearGradient id="lf-b-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C3CFB2"/><stop offset="1" stop-color="#8FA07A"/></linearGradient></defs><path class="lf-stem" d="M20 306C34 240 52 160 116 14"/>${sprig.map(([x, y, r, k], i) => `<g class="lf" style="--d:${i * 0.35}s" transform="translate(${x} ${y}) rotate(${r}) scale(${k})"><path d="M0 0C11-9 13-30 0-44C-13-30-11-9 0 0Z" fill="url(#lf-${i % 3 ? 'a' : 'b'}-${id})"/><path class="lf-rib" d="M0-2V-40"/></g>`).join('')}</svg>`;

export function vastuPlan() {
  const legend = [['compass', 'Direction', 'Orientation & entrance'], ['sofa', 'Arrangement', 'Rooms & seating'], ['people', 'Daily use', 'People & routines']];
  return `<figure class="consultation-art visual-explainer v5-plan" data-motion>
    <div class="visual-label"><span class="visual-kicker">Vastu / at a glance</span><span aria-hidden="true">✦</span></div>
    <svg class="vp" viewBox="0 0 560 470" role="img" aria-labelledby="vp-title"><title id="vp-title">An example floor plan with bedroom, seating area, living and dining rooms, the entrance and north marked. It is not a Vastu assessment.</title>
      <rect class="vp-floor" x="40" y="30" width="430" height="370" rx="2"/>
      <g class="vp-rooms">
        <rect x="45" y="35" width="165" height="175"/><rect x="45" y="220" width="165" height="175"/>
        <rect x="220" y="35" width="245" height="200"/><rect x="220" y="240" width="245" height="155"/>
      </g>
      <g class="vp-use">
        <rect class="vp-rug" x="290" y="70" width="140" height="125" rx="6"/>
        <rect class="vp-rug" x="72" y="252" width="116" height="104" rx="6"/>
        <rect x="60" y="62" width="82" height="108" rx="5"/><rect x="66" y="68" width="32" height="18" rx="4"/><rect x="104" y="68" width="32" height="18" rx="4"/><path d="M60 104h82"/>
        <rect x="150" y="62" width="22" height="22" rx="3"/><rect x="192" y="58" width="12" height="80" rx="2"/>
        <rect x="112" y="282" width="36" height="50" rx="3"/>${chair(98, 294, 10, 26)}${chair(152, 294, 10, 26)}
        <path d="M330 80h110v105h-20v-85h-90z"/><circle cx="372" cy="146" r="17"/><rect x="236" y="92" width="10" height="76" rx="2"/>
        <rect x="292" y="300" width="88" height="42" rx="4"/>${chair(302, 287)}${chair(329, 287)}${chair(356, 287)}${chair(302, 345)}${chair(329, 345)}${chair(356, 345)}
        <rect x="436" y="256" width="26" height="134" rx="2"/><rect x="441" y="330" width="16" height="22" rx="3"/><circle cx="445" cy="272" r="4"/><circle cx="455" cy="272" r="4"/><circle cx="445" cy="285" r="4"/><circle cx="455" cy="285" r="4"/>
      </g>
      <g class="vp-plants">${plant(66, 188, 0.8)}${plant(176, 108, 0.8)}${plant(68, 244, 0.8)}${plant(188, 370, 0.8)}${plant(446, 56, 0.9)}${plant(244, 372, 0.9)}${plant(420, 220, 0.85)}</g>
      <g class="vp-doors"><path d="M215 150a50 50 0 0 0-50 50"/><path d="M120 215a45 45 0 0 0 45 45"/><path d="M215 330a45 45 0 0 1-45 45"/><path d="M255 400a45 45 0 0 1 45-45"/></g>
      <g class="vp-walls"><path pathLength="1" d="M255 400H40V30h430v370H300"/><path pathLength="1" d="M215 30v120M215 200v130M215 375v25M40 215h80M165 215h50M380 240h90"/></g>
      <g class="vp-labels"><text x="128" y="200">Bedroom</text><text x="128" y="240">Seating</text><text x="300" y="58">Living</text><text x="312" y="275">Dining</text></g>
      <g class="vp-dir">
        <g class="vp-entry"><path d="m277 410-8 13h16z"/><text x="277" y="446">Entrance</text></g>
        <g class="vp-compass" transform="translate(512 78)"><circle class="vp-ring" r="38"/><circle class="vp-dial" r="27"/><text y="-44">N</text><path class="vp-needle" d="M0-17 8 14 0 8-8 14z"/></g>
      </g>
    </svg>
    <div class="visual-key" role="group" aria-label="Explore the illustration">${legend.map(([ic, a, b], i) => `<button type="button" data-visual-step="${i}" aria-pressed="false" aria-label="Highlight ${a}: ${b}" disabled><span class="vk-icon">${icons[ic]}</span><strong>${a}</strong><span>${b}</span></button>`).join('')}</div>
    <p class="visual-hint" hidden>Tap a label to explore the illustration.</p>
  </figure>`;
}
