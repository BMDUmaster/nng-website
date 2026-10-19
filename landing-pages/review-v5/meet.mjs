// "Meet Narayani": a short introduction in place of the long video. Photograph in an arch, a two-line heading, her
// approach, three facts already published on the site, her own words, and one WhatsApp action.
const icons = {
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15 14.2a4.6 4.6 0 0 1 6 4.3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z"/></svg>',
};

const brainIc = {
  mind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3.2 3.2 0 0 0 7 18a3 3 0 0 0 5 1.5V6a2.5 2.5 0 0 0-3-1.5Z"/><path d="M15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3.2 3.2 0 0 1 17 18a3 3 0 0 1-5 1.5"/><path d="M12 9h-2M12 13H9.5M14 11h-2"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19 13 11"/></svg>',
};
// Neural lines behind the photograph: nodes joined by soft curves.
const nodes = [[40, 70], [120, 30], [210, 60], [300, 25], [380, 80], [30, 190], [130, 160], [250, 150], [370, 200], [60, 300], [180, 270], [320, 300], [400, 330], [110, 400], [260, 410], [380, 440]];
const links = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 7], [4, 8], [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 10], [7, 11], [8, 11], [8, 12], [9, 10], [10, 11], [11, 12], [9, 13], [10, 13], [10, 14], [11, 14], [12, 15], [14, 15]];
const neural = `<svg class="mt-neural" viewBox="0 0 430 470" aria-hidden="true">${links.map(([a, b], i) => { const [x1, y1] = nodes[a], [x2, y2] = nodes[b]; const mx = (x1 + x2) / 2 + (i % 2 ? 12 : -12), my = (y1 + y2) / 2 + (i % 3 ? -10 : 10); return `<path pathLength="1" style="--d:${(i * 0.23).toFixed(2)}s" d="M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}"/>`; }).join('')}${nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 3 ? 2.6 : 3.6}" style="--d:${(i * 0.31).toFixed(2)}s"/>`).join('')}</svg>`;

// Brainology: the hero's sky around the photograph.
const orbit = 'M250 40C380 40 470 160 470 300C470 440 380 560 250 560C120 560 30 440 30 300C30 160 120 40 250 40Z';
const cosmos = `<svg class="mt-cosmos" viewBox="0 0 500 600" aria-hidden="true">
  <defs><radialGradient id="mt-sun"><stop offset="0" stop-color="#FFF1CC" stop-opacity=".95"/><stop offset=".4" stop-color="#FFD891" stop-opacity=".4"/><stop offset="1" stop-color="#FFD891" stop-opacity="0"/></radialGradient>
  <radialGradient id="mt-light"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".4" stop-color="#FFE7AE"/><stop offset="1" stop-color="#FFE7AE" stop-opacity="0"/></radialGradient></defs>
  <circle class="mt-sun" cx="250" cy="230" r="230" fill="url(#mt-sun)"/>
  <path class="mt-orbit" d="${orbit}"/>
  <circle r="12" fill="url(#mt-light)"><animateMotion dur="14s" repeatCount="indefinite" path="${orbit}"/></circle>
  <circle r="8" fill="url(#mt-light)" opacity=".8"><animateMotion dur="14s" begin="-7s" repeatCount="indefinite" path="${orbit}"/></circle>
  ${[[40, 236, 11, 0.2], [52, 176, 12, 0.45], [78, 122, 13, 0.7], [118, 80, 14, 1]].map(([x, y, r, f], i) => `<g class="mt-moon" style="--d:${i * 0.3}s"><mask id="mt-m${i}"><rect x="${x - r - 2}" y="${y - r - 2}" width="${r * 2 + 4}" height="${r * 2 + 4}" fill="#fff"/>${f < 1 ? `<circle cx="${x - r * 2 * f}" cy="${y}" r="${r}" fill="#000"/>` : ''}</mask><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#C9A25A" stroke-width=".9" opacity=".55"/><circle cx="${x}" cy="${y}" r="${r}" fill="#E8C77E" opacity=".55" mask="url(#mt-m${i})"/></g>`).join('')}
  ${[[90, 420], [420, 380], [380, 160], [130, 260], [440, 500], [60, 520]].map(([x, y], i) => `<circle class="mt-mote" cx="${x}" cy="${y}" r="${2 + (i % 3)}" style="--d:${(i * 0.9).toFixed(1)}s"/>`).join('')}
</svg>`;

const meet = {
  brainology: { brain: true, eyebrow: 'Meet your Brainology guide', img: 'meet-narayani.webp', alt: 'Narayani Garg in a pale green saree, standing before a white Buddha relief', h: 'She listens first.<br><em>Then helps you see the pattern.</em>', lead: 'Narayani begins with the person, not the prediction. She asks about the moment that keeps returning, then works with you on the beliefs and reactions behind it, with practices such as NLP, EFT tapping and Ho’oponopono, so the change you practise is your own.' },
  astrology: { img: 'meet-astrology.webp', alt: 'Narayani Garg in a red and orange bandhani saree at her home temple', h: 'She reads the chart.<br><em>And listens to the person.</em>', lead: 'Narayani reads the chart themes relevant to your question beside your real circumstances. She explains her reasoning in plain words, and the decision stays with you.' },
  numerology: { img: 'meet-numerology.webp', alt: 'Narayani Garg in a sea-green sequinned saree before a white Buddha relief', h: 'She reads the numbers.<br><em>And the reason behind them.</em>', lead: 'Narayani begins with why you are asking: a new name, a business shortlist or a change you are weighing. She explains the traditional interpretation in plain words, and the decision to change anything stays with you.' },
  vastulogy: { img: 'meet-vastulogy.webp', alt: 'Narayani Garg in a royal blue silk saree before a white Buddha relief', h: 'She reads the space.<br><em>And the people who use it.</em>', lead: 'Narayani looks at direction, layout and everyday use together with the people who live or work there. She explains her reasoning in plain words, and what you change stays your choice.' },
};

export function meetSection(p, { esc, wa }) {
  const m = meet[p.slug] || meet.brainology;
  return `<section class="v5-meet" aria-labelledby="meet-title"><div class="wrap mt-inner">
    <figure class="mt-photo${m.brain ? ' mt-brain' : ''}" data-reveal>
      <span class="mt-glow" aria-hidden="true"></span>${m.brain ? cosmos : ''}
      <div class="mt-arch"><img src="../_shared/hero/${m.img}" alt="${m.alt}" width="720" height="910" loading="lazy"></div>
      <figcaption><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span></figcaption>
    </figure>
    <div class="mt-copy">
      <p class="mt-eyebrow" data-reveal><span aria-hidden="true">✦</span>${m.eyebrow || 'Meet your guide'}</p>
      <h2 id="meet-title" data-reveal>${m.h}</h2>
      <p class="mt-lead" data-reveal>${m.lead}</p>
      <ul class="mt-facts" data-reveal>
        <li><span>${icons.globe}</span><strong><b data-count="10000">10,000</b>+</strong><em>Worldwide clients</em></li>
        <li><span>${icons.book}</span><strong>15+</strong><em>Years of experience</em></li>
        <li><span>${icons.people}</span><strong>50K+</strong><em>Lives transformed</em></li>
      </ul>
      <blockquote class="mt-quote" data-reveal><span class="mt-qmark" aria-hidden="true">“</span><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>A remedy works when the mind works. — Narayani Garg</cite></blockquote>
      <div class="mt-cta" data-reveal>${wa('meet', 'Talk to Narayani’s team', 'wa-btn')}</div>
    </div>
  </div></section>`;
}
