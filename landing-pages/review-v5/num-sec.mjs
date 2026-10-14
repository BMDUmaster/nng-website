// Numerology sections (Oct 14): The question you bring and Your consultation options, from the approved banners.
const s = (d, w = 1.4) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"/></svg>';
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const lotus = '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>';
const leaf = (cls) => `<svg class="nh2-leaves ${cls}" viewBox="0 0 200 260" aria-hidden="true"><path d="M40 200c-30-6-40-40-30-64 26 10 38 38 30 64Z"/><path d="M62 168c-6-30 14-58 40-62 4 28-14 54-40 62Z"/><path d="M84 142c-26-14-30-48-14-68 22 16 28 46 14 68Z"/><path d="M28 236c-28 6-50-14-52-38 26-2 46 16 52 38Z"/></svg>`;
const ic = {
  name: s('<rect x="4" y="7" width="24" height="18" rx="2"/><path d="m8 21 3-9 3 9M9 18h4M17 13h7M17 17h7M17 21h5"/>'),
  case: s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
  everyday: s('<rect x="5" y="5" width="9" height="9" rx="1"/><rect x="18" y="5" width="9" height="9" rx="1"/><rect x="5" y="18" width="9" height="9" rx="1"/><circle cx="22.5" cy="22.5" r="4.5"/>'),
  grid: s('<rect x="5" y="5" width="22" height="22" rx="2"/><path d="M12.3 5v22M19.7 5v22M5 12.3h22M5 19.7h22"/>'),
  sign: s('<path d="M5 24c3-8 6-16 8-16s-2 14 1 14 4-9 6-9-1 7 2 7 4-3 6-4"/>'),
  phone: s('<rect x="9" y="4" width="14" height="24" rx="3"/><path d="M14 24h4"/>'),
  build: s('<path d="M6 27V9l8-4v22M14 27V12l12 4v11M4 27h24M9 12h2M9 16h2M9 20h2M18 18h2M22 18h2M18 22h2M22 22h2"/>'),
  astro: s('<rect x="5" y="5" width="22" height="22"/><path d="M5 5l22 22M27 5 5 27"/>'),
};

// A turning dial of numbers with spokes.
function dial(cls, nums) {
  const out = ['<circle cx="300" cy="300" r="290"/>', '<circle cx="300" cy="300" r="220"/>', '<circle cx="300" cy="300" r="120"/>', '<circle cx="300" cy="300" r="22" fill="currentColor" fill-opacity=".35"/>'];
  nums.forEach((n, i) => { const t = (-90 + i * (360 / nums.length)) * Math.PI / 180; out.push(`<text x="${(300 + 255 * Math.cos(t)).toFixed(1)}" y="${(300 + 255 * Math.sin(t)).toFixed(1)}">${n}</text>`); });
  for (let i = 0; i < 12; i++) { const t = i * 30 * Math.PI / 180; out.push(`<path d="M${(300 + 30 * Math.cos(t)).toFixed(1)} ${(300 + 30 * Math.sin(t)).toFixed(1)}L${(300 + 220 * Math.cos(t)).toFixed(1)} ${(300 + 220 * Math.sin(t)).toFixed(1)}"/>`); }
  return `<svg class="nd ${cls}" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true">${out.join('')}</svg>`;
}

export function numQuestion(p, { esc, wa }) {
  const [a, b] = p.situationTitle.split('\n');
  const bw = b.replace(/\.$/, '').split(' '); const tail = bw.splice(-3).join(' ');
  const icons = [ic.name, ic.case, ic.everyday];
  return `<section class="nq" aria-labelledby="situation-title">
    ${dial('nq-dial', [3, 2, 9, 8, 7, 6, 3, 1, 5])}
    <svg class="nq-moon" viewBox="0 0 120 220" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 0v44M20 64v120" stroke-width="1"/><circle cx="20" cy="54" r="5" fill="currentColor"/><circle cx="20" cy="150" r="3" fill="currentColor"/><circle cx="74" cy="60" r="42" stroke-width="2"/><path d="M92 32a38 38 0 1 0 0 56 32 32 0 1 1 0-56Z" fill="currentColor" fill-opacity=".22" stroke="none"/></svg>
    <span class="nh2-spark nq-s1" aria-hidden="true">${star}</span><span class="nh2-spark nq-s2" aria-hidden="true">${star}</span>
    ${leaf('nq-leaf-l')}${leaf('nq-leaf-r')}
    <div class="nq-inner">
      <p class="nq-kicker">The question you bring</p>
      <h2 id="situation-title">${esc(a)}<br>${esc(bw.join(' '))} <em>${esc(tail)}</em>.</h2>
      <p class="nq-lead">${esc(p.situationIntro)}</p>
      <div class="nq-cards" data-nq>${p.situations.map(([t, d], i) => `<article style="--i:${i}">
        <div class="nq-photo"><img src="../_shared/hero/nq-${i + 1}.webp" alt="" width="333" height="148" loading="lazy"><em>0${i + 1}</em><span class="nq-ic" aria-hidden="true">${icons[i]}</span></div>
        <h3>${esc(t)}</h3><p>${esc(d)}</p>
        ${wa('situation', 'Start with this', 'nq-cta').replace('</a>', `<i aria-hidden="true">${arrow}</i></a>`)}
      </article>`).join('')}</div>
      <div class="nq-dots" aria-hidden="true">${p.situations.map((_, i) => `<i${i ? '' : ' class="is-on"'}></i>`).join('')}</div>
    </div>
  </section>`;
}

export function numOptions(p, { esc, wa }) {
  const [a, b] = p.scopeTitle.split('\n');
  const icons = [ic.grid, ic.name, ic.sign, ic.phone, ic.build, ic.astro];
  return `<section class="no" id="ways" aria-labelledby="ways-title"><div class="no-inner">
    <div class="no-main">
      <p class="nh2-kicker no-kicker"><span aria-hidden="true">${star}</span>Your consultation options</p>
      <h2 id="ways-title">${esc(a)}<br><em>${esc(b)}</em></h2>
      <p class="no-lead">${esc(p.scopeIntro)}</p>
      ${wa('scope', 'WhatsApp enquiry', 'no-cta').replace('</a>', `<i class="nh2-arrow" aria-hidden="true">${arrow}</i></a>`)}
      <ul class="no-grid">${p.topics.map(([t, d], i) => `<li style="--i:${i}"><span class="no-ic" aria-hidden="true">${icons[i]}</span><em aria-hidden="true">0${i + 1}</em><h3>${esc(t)}</h3><p id="no-d${i}">${esc(d)}</p><button class="no-more" type="button" aria-expanded="false" aria-controls="no-d${i}">See more</button><a class="no-go" href="#enquire" aria-label="Enquire about ${esc(t)}">${arrow}</a></li>`).join('')}</ul>
    </div>
    <figure class="no-photo" aria-hidden="true">
      ${dial('no-dial', [3, 11, 8, 9, 1, 2, 7, 6, 4])}
      <span class="no-arch"><img src="../_shared/hero/num-hero.webp" alt="" width="1100" height="966" loading="lazy"></span>
      <figcaption><span>${lotus}</span><div>Narayani Garg<small>Psychic Spiritual Mentor</small></div></figcaption>
    </figure>
  </div></section>`;
}
