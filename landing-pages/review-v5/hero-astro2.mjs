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
