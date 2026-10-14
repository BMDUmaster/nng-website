// Vastulogy opening (Oct 14), from the approved banner: the words, four space choices in a card and two actions on the
// left; her photograph on the right with a slowly turning compass rose and a fine floor-plan sketch behind her, and a
// name card; four assurances along the bottom.
const s = (d, w = 1.4) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  home: s('<path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13"/><path d="M13 27v-8h6v8"/>'),
  case: s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
  build: s('<path d="M7 27V6h12v21M19 12h6v15M4 27h24M11 10h4M11 14h4M11 18h4M11 22h4M22 16h1M22 20h1"/>'),
  desk: s('<path d="M4 14h24M7 14v12M25 14v12M18 14v6h7"/><rect x="10" y="6" width="9" height="6" rx="1"/><path d="M14.5 12v2"/>'),
  compass: s('<circle cx="16" cy="16" r="11"/><path d="m20 12-2.5 5.5L12 20l2.5-5.5Z"/><path d="M16 3v3M16 26v3M3 16h3M26 16h3"/>'),
  sprout: s('<path d="M16 28V15"/><path d="M16 17c0-5-4-8-10-8 0 6 4 9 10 8ZM16 19c0-5 4-8 10-8 0 6-4 9-10 8Z"/>'),
  lotus: '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 6.5v11l9-5.5Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"/></svg>',
};

// A compass rose: rings, ticks, an eight-point star and the cardinal letters.
function rose() {
  const out = ['<circle cx="200" cy="200" r="188"/>', '<circle cx="200" cy="200" r="150" stroke-dasharray="2 6"/>', '<circle cx="200" cy="200" r="34"/>'];
  for (let i = 0; i < 72; i++) { const a = i * 5 * Math.PI / 180, r1 = i % 6 ? 180 : 170; out.push(`<path d="M${(200 + r1 * Math.cos(a)).toFixed(1)} ${(200 + r1 * Math.sin(a)).toFixed(1)}L${(200 + 188 * Math.cos(a)).toFixed(1)} ${(200 + 188 * Math.sin(a)).toFixed(1)}"/>`); }
  const pt = (a, r) => `${(200 + r * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(200 + r * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
  for (let i = 0; i < 8; i++) { const a = i * 45 - 90, len = i % 2 ? 105 : 150; out.push(`<path class="vh-ray${i % 2 ? '' : ' vh-ray-main'}" d="M${pt(a - 9, 22)}L${pt(a, len)}L${pt(a + 9, 22)}Z"/>`); }
  [['N', -90], ['E', 0], ['S', 90], ['W', 180]].forEach(([l, a]) => out.push(`<text x="${pt(a, 166).split(' ')[0]}" y="${pt(a, 166).split(' ')[1]}">${l}</text>`));
  return `<svg class="vh-rose" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden="true">${out.join('')}</svg>`;
}
const plan = '<svg class="vh-plan" viewBox="0 0 160 140" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="4" y="4" width="152" height="132"/><path d="M70 4v62H4M70 90v46M110 66h46M110 66v70M70 90h40"/><rect x="14" y="14" width="40" height="22" rx="2"/><path d="M14 46h40"/><rect x="84" y="16" width="56" height="12" rx="3"/><rect x="84" y="32" width="12" height="24" rx="3"/><circle cx="120" cy="46" r="8"/><rect x="18" y="98" width="34" height="20" rx="2"/><rect x="120" y="84" width="26" height="40" rx="2"/></svg>';

export function vastuHero2(p, { esc, wa }) {
  const chips = [[I.home, 'Home'], [I.case, 'Office or shop'], [I.build, 'Property to buy'], [I.desk, 'Work desk']];
  const feats = [[I.compass, 'Right direction,<br>better energy'], [I.sprout, 'Balanced spaces<br>for growth'], [I.home, 'Practical &amp;<br>easy guidance'], [I.lotus, 'Personalised<br>Vastulogy consultation']];
  const [l1, l2] = p.headline[0].split('\n');
  return `<section class="vh" id="top" aria-labelledby="hero-title">
    <div class="vh-visual" aria-hidden="true">
      <div class="vh-photo"><img src="../_shared/hero/num-hero.webp" alt="" width="1100" height="966" fetchpriority="high"></div>
      ${rose()}${plan}
      <i class="vh-spark vh-s1">${I.star}</i><i class="vh-spark vh-s2">${I.star}</i><i class="vh-spark vh-s3">${I.star}</i>
      <div class="vh-photo vh-cut"><img src="../_shared/hero/num-hero-cut.webp" alt="" width="1100" height="966"></div>
      <div class="vh-name"><span>${I.lotus}</span><div>Narayani Garg<small>Psychic Spiritual Mentor</small></div></div>
    </div>
    <div class="vh-copy">
      <p class="vh-kicker"><span aria-hidden="true">${I.star}</span>Vastulogy</p>
      <h1 id="hero-title">${esc(l1)}<br>${esc(l2)}<br><em>${esc(p.headline[1])}</em></h1>
      <p class="vh-lead">${esc(p.description)}</p>
      <ul class="vh-chips" aria-label="Bring the space">${chips.map(([ic, t]) => `<li><span>${ic}</span>${t}</li>`).join('')}</ul>
      <div class="vh-actions">${wa('hero', 'WhatsApp enquiry', 'vh-cta').replace('</a>', `<i class="vh-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<a class="vh-ghost" href="#approach">How it works<i aria-hidden="true">${I.play}</i></a></div>
    </div>
    <ul class="vh-feats">${feats.map(([ic, t]) => `<li><span>${ic}</span><strong>${t}</strong></li>`).join('')}</ul>
  </section>`;
}
