// Hero visual per page: Narayani's photograph in a gold arch, a ring motif for the page's practice turning slowly
// behind it, a small photograph of the practice's tools, and a glass note with the page's first fact.
const ring = (items, r, cls = '') => items.map((t, i) => {
  const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
  return `<text class="${cls}" x="${(200 + Math.cos(a) * r).toFixed(1)}" y="${(200 + Math.sin(a) * r + 5).toFixed(1)}">${t}</text>`;
}).join('');

const motifs = {
  brainology: `<circle class="ha-line" cx="200" cy="200" r="186"/><circle class="ha-dash" cx="200" cy="200" r="166"/>${['Thought', 'Belief', 'Words', 'Reaction'].map((t, i) => {
    const a = (i / 4) * Math.PI * 2 - Math.PI / 4;
    const x = 200 + Math.cos(a) * 186, y = 200 + Math.sin(a) * 186;
    return `<g class="ha-node" style="--d:${i}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5"/></g>`;
  }).join('')}`,
  numerology: `<circle class="ha-line" cx="200" cy="200" r="186"/>${ring([1, 2, 3, 4, 5, 6, 7, 8, 9], 172, 'ha-num')}<circle class="ha-dash" cx="200" cy="200" r="152"/>`,
  vastulogy: `<circle class="ha-line" cx="200" cy="200" r="186"/><circle class="ha-dash" cx="200" cy="200" r="168"/>${ring(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'], 177, 'ha-dir')}`,
  astrology: `<circle class="ha-line" cx="200" cy="200" r="190"/><circle class="ha-line" cx="200" cy="200" r="158"/>${ring(['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((g) => g + '︎'), 174, 'ha-zod')}${Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2 - Math.PI / 2 + Math.PI / 12; return `<path class="ha-tick" d="M${(200 + Math.cos(a) * 158).toFixed(1)} ${(200 + Math.sin(a) * 158).toFixed(1)}L${(200 + Math.cos(a) * 190).toFixed(1)} ${(200 + Math.sin(a) * 190).toFixed(1)}"/>`; }).join('')}`,
  'hand-holding': `<circle class="ha-line" cx="200" cy="200" r="186"/>${Array.from({ length: 6 }, (_, i) => { const a = Math.PI * (1.05 + i * 0.18); return `<g class="ha-month" style="--d:${i}"><circle cx="${(200 + Math.cos(a) * 186).toFixed(1)}" cy="${(200 + Math.sin(a) * 186).toFixed(1)}" r="7"/><text x="${(200 + Math.cos(a) * 160).toFixed(1)}" y="${(200 + Math.sin(a) * 160 + 4).toFixed(1)}">${i + 1}</text></g>`; }).join('')}`,
};
const spin = { brainology: false, numerology: true, vastulogy: true, astrology: true, 'hand-holding': false };
const alt = {
  brainology: 'Narayani Garg seated beside a white Buddha statue',
  numerology: 'A portrait of Narayani Garg',
  vastulogy: 'Narayani Garg standing in a bright room with plants',
  astrology: 'Narayani Garg at a table before a zodiac wheel',
  'hand-holding': 'Narayani Garg in a yellow saree beside a Buddha statue',
};

export function heroArt(p, { esc }) {
  const s = p.slug;
  const [fa, fb] = p.facts[0];
  return `<div class="hero-visual ha ha-${s}">
    <svg class="ha-ring${spin[s] ? ' is-spin' : ''}" viewBox="0 0 400 400" aria-hidden="true">${motifs[s] || motifs.brainology}</svg>
    <figure class="ha-arch"><img src="../_shared/hero/hero-${s}.webp" alt="${alt[s] || 'Narayani Garg'}" width="640" height="900" fetchpriority="high"><figcaption><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span></figcaption></figure>
    <div class="ha-prop" aria-hidden="true"><img src="../_shared/hero/prop-${s}.webp" alt="" width="420" height="280" loading="lazy"><span>${esc(p.short || p.name)}</span></div>
    <p class="ha-note"><span class="ha-note-dot" aria-hidden="true"></span><strong>${esc(fa)}</strong><span>${esc(fb)}</span></p>
  </div>`;
}
