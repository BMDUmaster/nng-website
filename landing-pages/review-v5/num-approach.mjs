// Numerology: the approach as a still life. Step cards on the left; on the right a Lo Shu grid of marble tiles on a
// plinth, inside a gold orbit, before a plum arch and a pearl arch, with a dried-flower vase, the name and signature
// cards it connects to, and a legend of the three inputs.
const icons = [
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4C9.4 4 4 8.8 4 14.6c0 3 1.4 5.7 3.8 7.6L6.6 28l6-3.2c1.1.3 2.2.4 3.4.4 6.6 0 12-4.8 12-10.6S22.6 4 16 4Z"/><path d="M13 12a3 3 0 1 1 4.2 2.8c-.8.4-1.2 1-1.2 1.9v.6"/><circle cx="16" cy="20.6" r=".6" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="5" width="6" height="6" rx="1"/><rect x="13" y="5" width="6" height="6" rx="1"/><rect x="21" y="5" width="6" height="6" rx="1"/><rect x="5" y="13" width="6" height="6" rx="1"/><rect x="13" y="13" width="6" height="6" rx="1"/><rect x="21" y="13" width="6" height="6" rx="1"/><rect x="5" y="21" width="6" height="6" rx="1"/><rect x="13" y="21" width="6" height="6" rx="1"/><rect x="21" y="21" width="6" height="6" rx="1"/></svg>',
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 28V17L7 8M16 17l9-9"/><path d="M7 13V8h5M25 13V8h-5"/></svg>',
];
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const person = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>';
const pen = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15.5 4.5 19.5 8.5 9 19H5v-4z"/><path d="m13.5 6.5 4 4"/></svg>';

// Lo Shu order, revealed 1 to 9.
const grid = [4, 9, 2, 3, 5, 7, 8, 1, 6];
// Dried flowers: stems with clusters of small blossoms.
const flowers = `<svg class="na-flowers" viewBox="0 0 140 220" aria-hidden="true">${[[70, 220, 30, 30], [70, 220, 60, 10], [70, 220, 96, 24], [70, 220, 18, 70], [70, 220, 116, 66], [70, 220, 48, 50], [70, 220, 88, 46]].map(([x1, y1, x2, y2]) => `<path d="M${x1} ${y1}Q${(x1 + x2) / 2} ${(y1 + y2) / 2 + 20} ${x2} ${y2}" fill="none" stroke="#A8916B" stroke-width="1"/>${Array.from({ length: 7 }, (_, k) => `<circle cx="${x2 + Math.cos(k * 0.9) * (6 + k)}" cy="${y2 + Math.sin(k * 1.3) * (5 + k * 0.8)}" r="${2.6 - k * 0.15}" fill="${k % 2 ? '#E9D9BC' : '#F4EADA'}" stroke="#C6AE86" stroke-width=".5"/>`).join('')}`).join('')}</svg>`;

const legendIc = ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16M8 3v5M16 3v5"/></svg>', person, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M12 4a8 8 0 0 0-8 8M12 7a5 5 0 0 0-5 5v3M12 10a2 2 0 0 0-2 2v6M14 12v4a5 5 0 0 1-1 3M17 12a5 5 0 0 0-5-5M20 12a8 8 0 0 0-8-8"/></svg>'];
const archNums = [[1, -160], [3, -125], [9, -90], [7, -55]].map(([n, d]) => `<text x="${(200 + 165 * Math.cos(d * Math.PI / 180)).toFixed(1)}" y="${(200 + 165 * Math.sin(d * Math.PI / 180)).toFixed(1)}">${n}</text>`).join('');

export function numApproach(p, { esc }) {
  const [first, second] = p.methodTitle.split('\n');
  const title = `${esc(first)}<br>${esc(second).replace('in view.', '<em>in view.</em>')}`;
  return `<section class="v5-num" id="approach" aria-labelledby="approach-title"><div class="section wrap na-inner">
    <div class="na-copy">
      <p class="bj-kicker"><span aria-hidden="true"></span>How Narayani approaches it</p>
      <h2 id="approach-title">${title}</h2>
      <p class="na-intro">${esc(p.methodIntro)}</p>
      <ol class="na-steps v5-steps2" data-steps>${p.method.map(([t, d], i) => `<li data-step="${i}" data-reveal style="--i:${i}" tabindex="0" role="button" aria-pressed="false" title="${esc(d)}"><span class="na-ic">${icons[i]}</span><span class="na-tx"><strong>${esc(t)}</strong><small>${esc(d)}</small></span><span class="na-no">0${i + 1}</span><span class="bj-go" aria-hidden="true">${arrow}</span></li>`).join('')}</ol>
    </div>
    <figure class="na-figure" data-motion aria-label="Illustration: the traditional Lo Shu grid, beside a name and a signature. It shows the traditional arrangement, not your personal calculation.">
      <div class="na-stage">
        <span class="na-arch-plum" aria-hidden="true"></span><svg class="na-arch-nums" viewBox="0 0 400 400" aria-hidden="true">${archNums}</svg>
        <span class="na-arch-pearl" aria-hidden="true"></span>
        <p class="na-glance"><span aria-hidden="true">✦</span>${esc(p.short || p.name)}<span class="bj-glance-tail"> / at a glance</span></p>
        <span class="na-moon" aria-hidden="true"></span>
        <div class="na-orbit" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
        <div class="na-grid" aria-hidden="true">${grid.map((n) => `<span style="--o:${n}">${n}</span>`).join('')}</div>
        <div class="na-plinth" aria-hidden="true"><span>Lo Shu grid</span></div>
        <span class="na-slab" aria-hidden="true"></span>
        <div class="na-vase" aria-hidden="true">${flowers}<span class="na-pot"></span></div>
        <span class="na-ball na-ball-1" aria-hidden="true"></span><span class="na-ball na-ball-2" aria-hidden="true"></span>
        <svg class="na-links" viewBox="0 0 640 650" aria-hidden="true"><path pathLength="1" d="M414 300H436V250H452"/><path pathLength="1" d="M410 360H436V420H452"/></svg>
        <div class="na-card na-card-name"><span class="na-badge">${person}</span><strong>Name &amp; spelling</strong><div class="na-name"><b>A</b><i></i><i></i><i></i></div></div>
        <div class="na-card na-card-sign"><span class="na-badge">${pen}</span><strong>Signature &amp; identity</strong><svg class="na-sign" viewBox="0 0 150 60" aria-hidden="true"><path pathLength="1" d="M6 52C14 30 20 8 26 10s-6 40 0 40S40 14 46 16s-4 30 4 30 14-16 24-14 20 8 40 2 26-8 30-10"/></svg></div>
        <ul class="na-legend"><li data-legend="0"><i>${legendIc[0]}</i><span>Birth date<small>Your numbers</small></span></li><li data-legend="1"><i>${legendIc[1]}</i><span>Name<small>Your vibration</small></span></li><li data-legend="2"><i>${legendIc[2]}</i><span>Identity<small>Your signature</small></span></li></ul>
      </div>
    </figure>
  </div></section>`;
}
