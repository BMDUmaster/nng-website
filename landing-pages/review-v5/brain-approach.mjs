// Brainology: the approach as a journey. Step cards on the left; on the right a winding gold path through three
// stops, an arch of sunlit stone with an olive sprig, and a plum crescent.
const icons = [
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="4.2"/><circle cx="16" cy="16" r="1.4" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="15" cy="12" r="5"/><path d="M6 27c0-5 4-8.5 9-8.5s9 3.5 9 8.5z"/><path d="M24 4v4M22 6h4M22.6 4.6l2.8 2.8M25.4 4.6l-2.8 2.8"/></svg>',
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M25 12a10 10 0 0 0-17.5-3.5L5 11"/><path d="M5 5v6h6"/><path d="M7 20a10 10 0 0 0 17.5 3.5L27 21"/><path d="M27 27v-6h-6"/></svg>',
];
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const short = ['What keeps returning', 'Thoughts & beliefs', 'A different response'];

const olive = `<svg class="bj-olive" viewBox="0 0 120 220" aria-hidden="true"><path d="M70 220C66 170 60 120 40 20" fill="none" stroke="#6D6A3E" stroke-width="1.6"/>${[[68, 196, -50], [66, 178, 48], [63, 160, -52], [60, 142, 46], [57, 124, -50], [53, 106, 44], [50, 88, -48], [46, 70, 40], [43, 52, -42], [41, 34, 30]].map(([x, y, r], i) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="15" transform="rotate(${r} ${x} ${y}) translate(0 -12)" fill="${i % 2 ? '#7E8758' : '#97A06B'}"/>`).join('')}</svg>`;

export function brainApproach(p, { esc }) {
  const [first, second] = p.methodTitle.split('\n');
  const title = `${esc(first)}<br>${esc(second).replace('new response.', '<em>new response.</em>')}`;
  const nodes = [[150, 150], [110, 320], [150, 490]];
  const path = 'M280 96C270 130 220 150 206 206C192 262 120 300 166 376C212 452 226 470 206 546C190 606 330 630 470 604';
  return `<section class="v5-brain" id="approach" aria-labelledby="approach-title"><div class="section wrap bj-inner">
    <div class="bj-copy">
      <p class="bj-kicker"><span aria-hidden="true"></span>How Narayani approaches it</p>
      <h2 id="approach-title">${title}</h2>
      <p class="bj-intro">${esc(p.methodIntro)}</p>
      <ol class="bj-steps v5-steps2" data-steps>${p.method.map(([t, d], i) => `<li data-step="${i}" data-reveal style="--i:${i}" tabindex="0" role="button" aria-pressed="false"><span class="bj-no">0${i + 1}</span><span class="bj-ic bj-ic-${i}">${icons[i]}</span><span class="bj-text"><strong>${esc(t)}</strong><span>${esc(d)}</span></span><span class="bj-go" aria-hidden="true">${arrow}</span></li>`).join('')}</ol>
    </div>
    <figure class="visual-explainer bj-figure" data-motion>
      <span class="bj-plum" aria-hidden="true"></span>
      <div class="bj-card">
        <p class="bj-glance"><span aria-hidden="true">✦</span>${esc(p.short || p.name)}<span class="bj-glance-tail"> / at a glance</span></p>
        <svg class="bj-path" viewBox="0 0 560 660" aria-hidden="true"><path pathLength="1" d="${path}"/><circle class="bj-dot" r="4.5"><animateMotion dur="12s" repeatCount="indefinite" path="${path}"/></circle></svg>
        <div class="bj-nodes visual-key" role="group" aria-label="The three steps">${p.method.map(([t], i) => `<button type="button" class="bj-node" data-visual-step="${i}" aria-pressed="false" style="--x:${nodes[i][0]}px;--y:${nodes[i][1]}px;--i:${i}" disabled><span class="bj-ic bj-ic-${i}">${icons[i]}</span><span class="bj-label"><em>0${i + 1}.</em><strong>${esc(t)}</strong><span>${short[i]}</span></span></button>`).join('')}</div>
        <p class="bj-tag" aria-hidden="true">A clearer mind <i>✦</i> A calmer you</p>
        ${olive}
      </div>
      <p class="visual-hint" hidden>Tap a step.</p>
    </figure>
  </div></section>`;
}
