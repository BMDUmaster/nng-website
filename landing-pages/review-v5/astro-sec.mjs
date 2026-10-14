// Astrology sections (Oct 14), from the approved references: Meet your guide, The question you bring, and How
// Narayani approaches it. Cream and sage with deep green and gold; compact; no lines beside headings.
const s = (d, w = 1.4) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  lotus: '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>',
  people: s('<circle cx="16" cy="10" r="3.5"/><circle cx="8" cy="12" r="2.8"/><circle cx="24" cy="12" r="2.8"/><path d="M10 25a6 6 0 0 1 12 0M3 24a5 5 0 0 1 7-4.6M29 24a5 5 0 0 0-7-4.6"/>'),
  book: s('<path d="M4 8h9a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H4zM28 8h-9a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3h9z"/>'),
  globe: s('<circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c3.5 3.5 5 7.5 5 12s-1.5 8.5-5 12c-3.5-3.5-5-7.5-5-12s1.5-8.5 5-12Z"/>'),
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l5.5-3.5Z"/></svg>',
  case: s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
  couple: s('<circle cx="11" cy="9" r="4"/><circle cx="21" cy="9" r="4"/><path d="M4 25a7 7 0 0 1 10-6M28 25a7 7 0 0 0-10-6"/><path d="M16 27s-4-2.4-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.6-4 5-4 5Z"/>'),
  choice: s('<path d="M5 26h22M8 26 24 8M17 8h7v7"/><circle cx="8" cy="22" r="2.4"/>'),
  chat: s('<path d="M6 7h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/>'),
  cal: s('<rect x="6" y="8" width="20" height="18" rx="2"/><path d="M6 13h20M11 5v5M21 5v5M10 17h2M15 17h2M20 17h2M10 21h2M15 21h2"/>'),
  doc: s('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 16h8M13 20h8M13 24h5"/>'),
  person: s('<circle cx="16" cy="11" r="5"/><path d="M7 27a9 9 0 0 1 18 0"/>'),
  chart: s('<rect x="5" y="5" width="22" height="22"/><path d="M5 5l22 22M27 5 5 27M16 5 5 16l11 11 11-11Z"/>'),
  clock: s('<circle cx="16" cy="17" r="10"/><path d="M16 11v6l4 3M12 4h8"/>'),
};


// A drawn zodiac ring: fine gold lines and the twelve signs, transparent everywhere else.
const SIGNS = '♈♉♊♋♌♍♎♏♐♑♒♓';
export function zodiacRing(cls) {
  const c = 200, out = [`<circle cx="200" cy="200" r="196" stroke-width="1.6"/>`, `<circle cx="200" cy="200" r="158" stroke-width="1"/>`, `<circle cx="200" cy="200" r="150" stroke-width=".6" stroke-dasharray="2 5"/>`];
  for (let i = 0; i < 12; i++) {
    const a = (i * 30 - 90) * Math.PI / 180, b = (i * 30 - 75) * Math.PI / 180;
    out.push(`<path d="M${(c + 158 * Math.cos(a)).toFixed(1)} ${(c + 158 * Math.sin(a)).toFixed(1)}L${(c + 196 * Math.cos(a)).toFixed(1)} ${(c + 196 * Math.sin(a)).toFixed(1)}" stroke-width="1"/>`);
    const x = (c + 177 * Math.cos(b)).toFixed(1), y = (c + 177 * Math.sin(b)).toFixed(1);
    out.push(`<text x="${x}" y="${y}" transform="rotate(${i * 30 + 15} ${x} ${y})">${SIGNS[i]}&#xFE0E;</text>`);
  }
  return `<svg class="zr ${cls}" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">${out.join('')}</svg>`;
}

export function astroMeet(p, { esc, wa }) {
  const facts = [[I.people, '<b data-count="10000">10,000</b>+', 'Clients guided'], [I.book, 'Author', 'Change Your Mind, Transform Your Life'], [I.globe, 'Worldwide', 'Online, or in person by appointment']];
  return `<section class="am" aria-labelledby="meet-title"><div class="am-inner">
    <figure class="am-photo">
      <span class="am-arch"><img src="../_shared/hero/meet-astrology.webp" alt="Narayani Garg in a red and orange bandhani saree at her home temple" width="720" height="875" loading="lazy"></span>
      <figcaption><span aria-hidden="true">${I.lotus}</span>Narayani Garg<small>Psychic Spiritual Mentor</small></figcaption>
    </figure>
    <div class="am-card">
      <img class="am-wheel" src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000" loading="lazy" aria-hidden="true">
      <p class="am-kicker"><span aria-hidden="true">${I.lotus}</span>Meet your guide</p>
      <h2 id="meet-title">She reads the chart.<br><em>And listens to the person.</em></h2>
      <p class="am-lead">Narayani reads the chart themes relevant to your question beside your real circumstances. She explains her reasoning in plain words, and the decision stays with you.</p>
      <ul class="am-facts">${facts.map(([ic, t, d]) => `<li><span>${ic}</span><div><strong>${t}</strong><em>${d}</em></div></li>`).join('')}</ul>
      <blockquote class="am-quote"><span aria-hidden="true">“</span><div><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>A remedy works when the mind works. — Narayani Garg</cite></div></blockquote>
      <div class="am-actions">${wa('meet', 'Talk to Narayani’s team', 'am-cta').replace('</a>', `<i class="am-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<a class="am-ghost" href="#approach"><i aria-hidden="true">${I.play}</i>See how it works</a></div>
    </div>
  </div></section>`;
}

export function astroQuestion(p, { esc, wa }) {
  const [a, b] = p.situationTitle.split('\n');
  const icons = [I.case, I.couple, s('<path d="M5 15 16 6l11 9"/><path d="M8 13v13h16V13"/><path d="M13 26v-7h6v7"/>')];
  const deco = [
    '<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 72h10V56H8zM26 72h10V44H26zM44 72h10V34H44zM62 72h10V22H62z" fill="currentColor" fill-opacity=".18"/><path d="M6 50C30 46 50 32 82 10M72 10h10v10" stroke-linecap="round"/></svg>',
    '<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 70S12 52 12 34a13 13 0 0 1 28-6 13 13 0 0 1 28 6c0 18-28 36-28 36Z"/><path d="M66 50S48 38 48 26a9 9 0 0 1 18-4 9 9 0 0 1 18 4c0 12-18 24-18 24Z"/></svg>',
    '<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M70 6v26M58 10h22l4 4-4 4H58zM70 32C40 40 70 52 40 62S20 74 30 78"/></svg>',
  ];
  const sparkle = (x, y, z) => `<i class="aq-spark" style="left:${x};top:${y};--z:${z}" aria-hidden="true"></i>`;
  return `<section class="aq aq2" aria-labelledby="situation-title">
    <figure class="aq2-photo" aria-hidden="true">${zodiacRing('aq2-ring')}<span class="aq2-circle"><img src="../_shared/hero/aq-face.webp" alt="" width="640" height="640" loading="lazy"></span></figure>
    ${sparkle('8%', '30%', 1)}${sparkle('47%', '14%', 0.7)}${sparkle('51%', '38%', 1.2)}${sparkle('3%', '72%', 0.8)}${sparkle('96%', '92%', 0.7)}
    <div class="aq-inner">
      <div class="aq2-copy">
        <p class="aq-kicker"><span aria-hidden="true">✦</span>The question you bring</p>
        <h2 id="situation-title">${esc(a)}<br><em>${esc(b)}</em></h2>
        <p class="aq-lead">${esc(p.situationIntro)}</p>
        <p class="aq2-script" aria-hidden="true"><span>Same patterns,</span><span>different possibilities</span></p>
      </div>
      <div class="aq-cards">${p.situations.map(([t, d], i) => `<article style="--i:${i}">
        <span class="aq2-deco" aria-hidden="true">${deco[i]}</span>
        <div class="aq-head"><span class="aq-ic" aria-hidden="true">${icons[i]}</span><em aria-hidden="true">0${i + 1}</em></div>
        <h3>${esc(t)}</h3><p>${esc(d)}</p>
        ${wa('situation', 'Start with this', 'aq-go').replace('</a>', `<i aria-hidden="true">${I.arrow}</i></a>`)}
      </article>`).join('')}</div>
    </div>
  </section>`;
}

export function astroApproach(p, { esc }) {
  const [a, b] = p.methodTitle.split('\n');
  const bw = b.split(' '); const tail = bw.splice(-2).join(' ');
  const chain = [[I.chat, 'Your question'], [I.cal, 'Birth date, time & place'], [I.doc, 'Relevant chart themes'], [I.person, 'Your choices']];
  const icons = [I.chart, I.clock, I.person];
  return `<section class="ap" id="approach" aria-labelledby="approach-title"><div class="ap-inner">
    <img class="ap-wheel" src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000" loading="lazy" aria-hidden="true">
    <p class="ap-kicker"><span aria-hidden="true">✦</span>How Narayani approaches it</p>
    <h2 id="approach-title">${esc(a)}<br>${esc(bw.join(' '))} <em>${esc(tail)}</em></h2>
    <p class="ap-lead">${esc(p.methodIntro)}</p>
    <div class="ap-chain"><p>What a reading brings together</p><ol>${chain.map(([ic, t], i) => `<li style="--i:${i}"><span aria-hidden="true">${ic}</span>${t}</li>`).join('')}</ol></div>
    <ol class="ap-steps">${p.method.map(([t, d], i) => `<li style="--i:${i}"><em>0${i + 1}</em><span class="ap-ic" aria-hidden="true">${icons[i]}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
    <p class="ap-foot"><span aria-hidden="true">${I.lotus}</span>Read together · Decided by you</p>
  </div></section>`;
}

// Astrology "Why her approach matters" (Oct 14 h), from the approved banner: words, two cards and three promises
// beside her photograph in an arch framed by a turning zodiac ring, then a deep green invitation.
export function astroWhy(p, { esc, wa }) {
  const cards = [[I.person, 'The person matters.', 'Explore your beliefs and responses alongside the reading.'], [I.chat, 'The choice stays yours.', 'Ask questions and understand the reasoning. No threats or pressure to purchase a remedy.']];
  const shield = s('<path d="M16 4 6 8v7c0 6.5 4.3 11 10 13 5.7-2 10-6.5 10-13V8Z"/><path d="m11.5 16 3 3 6-6"/>');
  const cart = s('<path d="M4 6h3l3 13h12l3-9H9"/><circle cx="12" cy="25" r="1.6"/><circle cx="21" cy="25" r="1.6"/>');
  const bulb = s('<path d="M12 22h8M13 26h6M16 4a8 8 0 0 0-5 14.2c.8.7 1 1.6 1 2.8h8c0-1.2.2-2.1 1-2.8A8 8 0 0 0 16 4Z"/>');
  const promises = [[shield, 'No fear-based predictions'], [cart, 'No pressure to buy a remedy'], [bulb, 'The reasoning explained, the choice yours']];
  const [c1, c2] = p.closeTitle.split('\n');
  const w2 = c2.split(' '); const tail = w2.splice(-2).join(' ');
  return `<section class="aw" aria-labelledby="why-title"><div class="aw-inner">
    <div class="aw-copy">
      <p class="aq-kicker"><span aria-hidden="true">✦</span>Why her approach matters</p>
      <h2 id="why-title">Mind first.<br><em>Guidance without fear.</em></h2>
      <div class="aw-cards">${cards.map(([ic, t, d]) => `<article><span class="aw-ic" aria-hidden="true">${ic}</span><div><h3>${t}</h3><p>${d}</p></div><a class="aw-go" href="#enquire" aria-label="${t} Enquire">${I.arrow}</a></article>`).join('')}</div>
      <ul class="aw-promise">${promises.map(([ic, t]) => `<li><span aria-hidden="true">${ic}</span>${t}</li>`).join('')}</ul>
    </div>
    <figure class="aw-photo">${zodiacRing('aw-ring')}<span class="aw-arch"><img src="../_shared/hero/wy-narayani.webp" alt="Narayani Garg in a blue saree beside a white Buddha relief" width="720" height="923" loading="lazy"></span><figcaption><span aria-hidden="true">${I.lotus}</span><div>Narayani Garg<small>Psychic Spiritual Mentor</small></div></figcaption></figure>
    <p class="aw-script" aria-hidden="true"><span>Same patterns,</span><span>different</span><span>possibilities</span></p>
    <div class="aw-band">
      <div><p class="aw-band-kicker">Begin with the NNG team</p><h3>${esc(c1)} ${esc(w2.join(' '))} <em>${esc(tail)}</em></h3><p>${esc(p.closeCopy)}</p></div>
      ${wa('why', 'Get started', 'aw-cta')}
    </div>
  </div></section>`;
}
