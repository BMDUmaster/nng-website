// Numerology opening (Oct 14), from the approved banner: the words, four question chips and two actions on the left;
// her photograph on the right inside a slowly turning ring of numbers, a Lo Shu grid card, a name card and a few
// soft floating number tiles; four assurances in a bar across the bottom.
const s = (d, w = 1.4) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  letter: s('<path d="M8 26 15 6h2l7 20M11 19h10"/>'),
  case: s('<rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/>'),
  pen: s('<path d="m20 5 7 7L13 26H6v-7Z"/><path d="m17 8 7 7"/>'),
  phone: s('<path d="M8 4h5l2 6-3 2a15 15 0 0 0 8 8l2-3 6 2v5a3 3 0 0 1-3 3A22 22 0 0 1 5 7a3 3 0 0 1 3-3Z"/>'),
  shield: s('<path d="M16 4 6 8v7c0 6.5 4.3 11 10 13 5.7-2 10-6.5 10-13V8Z"/><path d="m11.5 16 3 3 6-6"/>'),
  target: s('<circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="6.5"/><circle cx="16" cy="16" r="2"/><path d="m18 14 9-9M23 5h4v4"/>'),
  lotus: '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" aria-hidden="true"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>',
  people: s('<circle cx="12" cy="11" r="4"/><path d="M5 25a7 7 0 0 1 14 0"/><circle cx="22" cy="12" r="3.2"/><path d="M20 18a6 6 0 0 1 8 6"/>'),
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"/></svg>',
};

// A ring of the numbers 1 to 9 with a dotted inner track; transparent everywhere else.
function ring() {
  const c = 300, out = [`<circle cx="300" cy="300" r="290" stroke-width="1.2"/>`, `<circle cx="300" cy="300" r="230" stroke-width=".8" stroke-dasharray="1.5 7" stroke-linecap="round"/>`];
  const order = [1, 6, 7, 4, 5, 2, 8, 3, 9];
  for (let i = 0; i < 9; i++) {
    const a = (i * 40 - 70) * Math.PI / 180;
    out.push(`<text x="${(c + 262 * Math.cos(a)).toFixed(1)}" y="${(c + 262 * Math.sin(a)).toFixed(1)}">${order[i]}</text>`);
  }
  return `<svg class="nh2-ring" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true">${out.join('')}</svg>`;
}

export function numHero2(p, { esc, wa }) {
  const chips = [[I.letter, 'Name & spelling'], [I.case, 'Business name'], [I.pen, 'Signature'], [I.phone, 'Mobile & house number']];
  const feats = [[I.shield, 'Personal guidance', 'Based on your numbers'], [I.target, 'Clarity in decisions', 'For name, business or signature'], [I.lotus, 'Traditional approach', 'Time-tested numerology insights'], [I.people, 'One-to-one consultation', 'Online or in person']];
  const grid = [4, 9, 2, 3, 5, 7, 8, 1, 6];
  const tile = (n, cls) => `<span class="nh2-tile ${cls}" aria-hidden="true">${n}</span>`;
  return `<section class="nh2" id="top" aria-labelledby="hero-title">
    <svg class="nh2-leaves nh2-leaves-r" viewBox="0 0 200 260" aria-hidden="true"><path d="M40 200c-30-6-40-40-30-64 26 10 38 38 30 64Z"/><path d="M62 168c-6-30 14-58 40-62 4 28-14 54-40 62Z"/><path d="M84 142c-26-14-30-48-14-68 22 16 28 46 14 68Z"/><path d="M28 236c-28 6-50-14-52-38 26-2 46 16 52 38Z"/></svg>
    <svg class="nh2-leaves" viewBox="0 0 200 260" aria-hidden="true"><path d="M10 258C30 200 60 150 110 120" fill="none" stroke="#3F5E3A" stroke-width="2"/><path d="M40 200c-30-6-40-40-30-64 26 10 38 38 30 64Z"/><path d="M62 168c-6-30 14-58 40-62 4 28-14 54-40 62Z"/><path d="M84 142c-26-14-30-48-14-68 22 16 28 46 14 68Z"/><path d="M28 236c-28 6-50-14-52-38 26-2 46 16 52 38Z"/></svg>
    <div class="nh2-visual" aria-hidden="true">
      ${ring()}
      <div class="nh2-photo"><img src="../_shared/hero/num-hero.webp" alt="" width="1100" height="966" fetchpriority="high"></div>
      ${tile(3, 'nh2-t1')}${tile(7, 'nh2-t2')}${tile(6, 'nh2-t3')}${tile(7, 'nh2-t4')}
      <i class="nh2-spark nh2-s1">${I.star}</i><i class="nh2-spark nh2-s2">${I.star}</i><i class="nh2-spark nh2-s3">${I.star}</i>
      <div class="nh2-grid">${grid.map((n) => `<span${n === 5 ? ' class="is-mid"' : ''}>${n}</span>`).join('')}</div>
      <div class="nh2-name"><span>${I.lotus}</span><div>Narayani Garg<small>Psychic Spiritual Mentor</small></div></div>
    </div>
    <div class="nh2-copy">
      <p class="nh2-kicker"><span aria-hidden="true">${I.star}</span>Numerology <em>with Narayani Garg</em></p>
      <h1 id="hero-title">${esc(p.headline[0])}<br><em>${esc(p.headline[1])}</em></h1>
      <p class="nh2-lead">${esc(p.description)}</p>
      <p class="nh2-label">Bring the question</p>
      <ul class="nh2-chips">${chips.map(([ic, t]) => `<li>${ic}${t}</li>`).join('')}</ul>
      <div class="nh2-actions">${wa('hero', 'WhatsApp enquiry', 'nh2-cta').replace('</a>', `<i class="nh2-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<a class="nh2-ghost" href="#approach">How it works<i aria-hidden="true">${I.chev}</i></a></div>
    </div>
    <ul class="nh2-feats">${feats.map(([ic, t, d]) => `<li><span>${ic}</span><div><strong>${t}</strong><em>${d}</em></div></li>`).join('')}</ul>
  </section>`;
}

// Numerology "Meet your guide" (Oct 14), from the approved banner: her photograph in an arch with a turning arc of
// numbers, leaves and a name card; the words, three fact cards, her quote and an action with three small assurances.
export function numMeet(p, { esc, wa }) {
  const people = s('<circle cx="12" cy="11" r="4"/><path d="M5 25a7 7 0 0 1 14 0"/><circle cx="22" cy="12" r="3.2"/><path d="M20 18a6 6 0 0 1 8 6"/>');
  const book = s('<path d="M8 4h13l4 4v20H8z"/><path d="M12 12h9M12 16h9M12 20h6"/>');
  const globe = s('<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.5 3.5 5 7 5 11s-1.5 7.5-5 11c-3.5-3.5-5-7-5-11s1.5-7.5 5-11Z"/>');
  const cal = s('<rect x="6" y="8" width="20" height="18" rx="2"/><path d="M6 13h20M11 5v5M21 5v5"/>');
  const facts = [[people, '<b data-count="10000">10,000</b>+', 'clients guided'], [book, 'Author', 'Change Your Mind, Transform Your Life'], [globe, 'Worldwide', 'Online, or in person by appointment']];
  const small = [[I.shield, 'Confidential<br>&amp; secure'], [cal, 'Flexible<br>appointments'], [I.people, 'Personalised<br>guidance']];
  const arc = [];
  const nums = [8, 7, 3, 3, 7, 1, 2, 9];
  for (let i = 0; i < 8; i++) { const a = (200 + i * 22) * Math.PI / 180; arc.push(`<text x="${(300 + 268 * Math.cos(a)).toFixed(1)}" y="${(300 + 268 * Math.sin(a)).toFixed(1)}">${nums[i]}</text>`); }
  for (let i = 0; i < 40; i++) { const a = (190 + i * 4.6) * Math.PI / 180, r1 = i % 5 ? 286 : 280; arc.push(`<path d="M${(300 + r1 * Math.cos(a)).toFixed(1)} ${(300 + r1 * Math.sin(a)).toFixed(1)}L${(300 + 292 * Math.cos(a)).toFixed(1)} ${(300 + 292 * Math.sin(a)).toFixed(1)}"/>`); }
  return `<section class="nm" aria-labelledby="meet-title"><div class="nm-inner">
    <figure class="nm-photo">
      <svg class="nm-arc" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="300" cy="300" r="292" stroke-width="1.2"/><circle cx="300" cy="300" r="250" stroke-width=".7" stroke-dasharray="2 6"/>${arc.join('')}</svg>
      <span class="nm-arch"><img src="../_shared/hero/meet-numerology.webp" alt="Narayani Garg in a sea-green sequinned saree before a white Buddha relief" width="720" height="719" loading="lazy"></span>
      <i class="nh2-spark nm-s1">${I.star}</i><i class="nh2-spark nm-s2">${I.star}</i>
      <figcaption><span aria-hidden="true">${I.lotus}</span><div>Narayani Garg<small>Psychic Spiritual Mentor</small></div></figcaption>
    </figure>
    <div class="nm-copy">
      <p class="nh2-kicker nm-kicker"><span aria-hidden="true">${I.star}</span>Meet your guide</p>
      <h2 id="meet-title">She reads the numbers.<br><em>And the reason behind them.</em></h2>
      <p class="nm-lead">Narayani begins with why you are asking: a new name, a business shortlist or a change you are weighing. She explains the traditional interpretation in plain words, and the decision to change anything stays with you.</p>
      <ul class="nm-facts">${facts.map(([ic, t, d]) => `<li><span>${ic}</span><strong>${t}</strong><em>${d}</em></li>`).join('')}</ul>
      <blockquote class="nm-quote"><span aria-hidden="true">“</span><div><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>Narayani Garg</cite></div><i aria-hidden="true">${I.lotus}</i></blockquote>
      <div class="nm-foot">${wa('meet', 'Talk to Narayani’s team', 'nh2-cta nm-cta').replace('</a>', `<i class="nh2-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<ul>${small.map(([ic, t]) => `<li><span>${ic}</span>${t}</li>`).join('')}</ul></div>
    </div>
  </div></section>`;
}
