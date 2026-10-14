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
    <div class="ah3-photo" aria-hidden="true"><img src="../_shared/hero/astro-hero.webp" alt="" width="875" height="731" fetchpriority="high"></div>
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
