// Astrology opening, from the approved banner: Narayani's photograph with the zodiac wheel on the right, the words on
// a warm dark ground to the left, three features beneath.
const ic = {
  lotus: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 24c-3-3-4.5-7-4.5-10.5S13.5 7 16 5c2.5 2 4.5 5 4.5 8.5S19 21 16 24Z"/><path d="M16 24c-4-.5-8-3-9.5-7.5 3-.5 6 .5 8 2.5M16 24c4-.5 8-3 9.5-7.5-3-.5-6 .5-8 2.5"/><path d="M6 26h20"/></svg>',
  infinity: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M16 16c-2.5-3-4.5-5-7-5a5 5 0 0 0 0 10c2.5 0 4.5-2 7-5Zm0 0c2.5 3 4.5 5 7 5a5 5 0 0 0 0-10c-2.5 0-4.5 2-7 5Z"/></svg>',
  calendar: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><rect x="6" y="8" width="20" height="18" rx="2"/><path d="M6 13h20M11 5v5M21 5v5"/><path d="M10 17h2M15 17h2M20 17h2M10 21h2M15 21h2"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.5 2.7 6.2 6.8.6-5.1 4.5 1.5 6.6L12 17l-5.9 3.4 1.5-6.6-5.1-4.5 6.8-.6Z"/></svg>',
};

export function astroHeroFull(p, { esc, wa }) {
  const feats = [['lotus', 'Personalised guidance', 'Based on your birth chart'], ['infinity', 'Practical next steps', 'For real-life questions'], ['calendar', 'Online or in person', 'By appointment']];
  return `<div class="hero-banner v5-hero-banner ah2-banner"><div class="ah2-photo" aria-hidden="true"><img src="../_shared/hero/astro-hero.webp" alt="" width="875" height="731" fetchpriority="high"><span class="ah2-sweep"></span></div>
  <section class="hero wrap ah2" id="top" aria-labelledby="hero-title">
    <div class="ah2-copy">
      <p class="ah2-pill"><span>${ic.star}</span>Astrology with Narayani</p>
      <p class="ah2-role">Narayani Garg · Psychic Spiritual Mentor</p>
      <h1 id="hero-title">Find clarity through<br>the wisdom of astrology.<br><em>Align with your true path.</em></h1>
      <p class="ah2-lead">Narayani reads your birth chart and life patterns beside your real circumstances, for questions about relationships, career, money, wellbeing and important life decisions.</p>
      <div class="ah2-actions">${wa('hero', 'WhatsApp enquiry', 'wa-btn')}<a class="ah2-ghost" href="#ways"><span>See what we can discuss</span><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></i></a></div>
      <ul class="ah2-feats">${feats.map(([k, t, d], i) => `<li style="--i:${i}"><span>${ic[k]}</span><div><strong>${t}</strong><em>${d}</em></div></li>`).join('')}</ul>
    </div>
  </section></div>`;
}

// Astrology opening (Oct 14), from the approved green banner: a cream panel with a curved edge holds the words, her
// photograph sits to the right with a hand-written line and a list of topics, a deep green wave closes the banner.
export function astroHero3(p, { esc, wa }) {
  const feats = [['lotus', 'Personalised guidance', 'Based on your birth chart'], ['infinity', 'Practical next steps', 'For real-life questions'], ['calendar', 'Online or in person', 'By appointment']];
  const topics = ['Relationships', 'Career', 'Money', 'Wellbeing', 'Life decisions'];
  const lotus = '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>';
  const leaf = '<svg viewBox="0 0 120 160" aria-hidden="true"><path d="M60 158C58 120 40 96 22 70 8 50 14 18 40 8c26 10 40 40 34 72-4 24-12 44-14 78Z"/></svg>';
  return `<div class="ah3">
    <div class="ah3-photo" aria-hidden="true"><img src="../_shared/hero/astro-hero.webp" alt="" width="875" height="731" fetchpriority="high"><img class="ah3-wheel" src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000"></div>
    <p class="ah3-script" aria-hidden="true"><span>Same patterns,</span><span>different</span><span>possibilities</span></p>
    <ul class="ah3-topics" aria-label="Questions Narayani reads for">${topics.map((t, i) => `<li style="--i:${i}">${t}</li>`).join('')}</ul>
    <span class="ah3-leaf ah3-leaf-a" aria-hidden="true">${leaf}</span><span class="ah3-leaf ah3-leaf-b" aria-hidden="true">${leaf}</span>
    <section class="ah3-panel" id="top" aria-labelledby="hero-title">
      <div class="ah3-copy">
        <p class="ah3-pill"><span aria-hidden="true">${ic.star}</span>Astrology with Narayani</p>
        <p class="ah3-role">Narayani Garg · Psychic Spiritual Mentor</p>
        <h1 id="hero-title">Find clarity through<br>the wisdom of astrology.<br><em>Align with your true path.</em></h1>
        <p class="ah3-lead">Narayani reads your birth chart and life patterns beside your real circumstances, for questions about relationships, career, money, wellbeing and important life decisions.</p>
        <div class="ah3-actions">${wa('hero', 'WhatsApp enquiry', 'ah3-cta').replace('</a>', '<i class="ah3-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></i></a>')}<a class="ah3-ghost" href="#ways"><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l5.5-3.5Z"/></svg></i>See what we can discuss</a></div>
        <ul class="ah3-feats">${feats.map(([k, t, d], i) => `<li style="--i:${i}"><span>${ic[k]}</span><strong>${t}</strong><em>${d}</em></li>`).join('')}</ul>
      </div>
    </section>
    <div class="ah3-band" aria-hidden="true"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 60C300 10 620 0 900 30s420 60 540 30V120H0Z" fill="#1E3A2A"/><path d="M0 60C300 10 620 0 900 30s420 60 540 30" fill="none" stroke="#D2AE6E" stroke-width="1.6"/></svg><p><i></i><span>${lotus}</span><i></i></p><p class="ah3-band-text">A clearer mind · A calmer you</p></div>
  </div>`;
}

// Astrology "Your consultation options" (Oct 14), from the approved reference: the words beside her photograph in a
// gold-lined arch with a faint zodiac wheel, six option cards, then an action and three assurances.
export function astroOptions(p, { esc, wa }) {
  const s = (d) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const icons = [
    s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
    s('<circle cx="11" cy="9" r="4"/><circle cx="21" cy="9" r="4"/><path d="M4 25a7 7 0 0 1 10-6M28 25a7 7 0 0 0-10-6"/><path d="M16 27s-4-2.4-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.6-4 5-4 5Z"/>'),
    s('<path d="M5 15 16 6l11 9"/><path d="M8 13v13h16V13"/><path d="M13 26v-7h6v7"/>'),
    s('<path d="M3 12 16 6l13 6-13 6Z"/><path d="M9 15v6c2 2 4.5 3 7 3s5-1 7-3v-6M29 12v7"/>'),
    s('<rect x="6" y="6" width="20" height="20"/><path d="M6 6l20 20M26 6 6 26M16 6 6 16l10 10 10-10Z"/>'),
    s('<circle cx="16" cy="17" r="9"/><path d="M16 12v5l3 2M13 4h6M16 4v4"/>'),
  ];
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const shield = s('<path d="M16 4 6 8v7c0 6.5 4.3 11 10 13 5.7-2 10-6.5 10-13V8Z"/><path d="m11.5 16 3 3 6-6"/>');
  const people = s('<circle cx="16" cy="10" r="3.5"/><circle cx="8" cy="12" r="2.8"/><circle cx="24" cy="12" r="2.8"/><path d="M10 25a6 6 0 0 1 12 0M3 24a5 5 0 0 1 7-4.6M29 24a5 5 0 0 0-7-4.6"/>');
  const assure = [[ic.lotus, 'Personal guidance', 'Based on your chart'], [shield, 'Practical insights', 'For real-life decisions'], [people, 'One-to-one consultation', 'Online or in person']];
  const [a, b] = p.scopeTitle.split('\n');
  const bw = b.split(' '); const tail = bw.splice(-2).join(' ');
  return `<section class="ao" id="ways" aria-labelledby="ways-title"><div class="ao-inner">
    <div class="ao-top">
      <div class="ao-copy">
        <p class="ao-kicker"><span aria-hidden="true">✦</span>Your consultation options</p>
        <h2 id="ways-title">${esc(a)}<br>${esc(bw.join(' '))} <em>${esc(tail)}</em></h2>
        <p class="ao-lead">${esc(p.scopeIntro)}</p>
      </div>
      <p class="ao-script" aria-hidden="true"><span>Same patterns,</span><span>different possibilities</span></p>
      <figure class="ao-photo" aria-hidden="true"><img class="ao-wheel" src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000" loading="lazy"><span class="ao-arch"><img src="../_shared/hero/hero-astrology.webp" alt="" width="720" height="856" loading="lazy"></span></figure>
    </div>
    <ul class="ao-grid">${p.topics.map(([t, d], i) => `<li style="--i:${i}"><span class="ao-ic">${icons[i]}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div><em class="ao-no" aria-hidden="true">0${i + 1}</em><a class="ao-go" href="#enquire" aria-label="Enquire about ${esc(t)}">${arrow}</a></li>`).join('')}</ul>
    <div class="ao-foot">${wa('scope', 'WhatsApp enquiry', 'ao-cta').replace('</a>', `<i class="ao-arrow" aria-hidden="true">${arrow}</i></a>`)}<ul>${assure.map(([icn, t, d]) => `<li><span>${icn}</span><div><strong>${t}</strong><em>${d}</em></div></li>`).join('')}</ul></div>
  </div></section>`;
}
