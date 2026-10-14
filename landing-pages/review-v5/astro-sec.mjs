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
    <figure class="aq2-photo" aria-hidden="true"><img src="../_shared/hero/aq-red.webp" alt="" width="900" height="859" loading="lazy"><svg class="aq2-wheel" viewBox="0 0 400 400" fill="none" stroke="currentColor"><circle cx="200" cy="200" r="196" stroke-width="1.6"/><circle cx="200" cy="200" r="160" stroke-width="1"/><circle cx="200" cy="200" r="150" stroke-width="0.6" stroke-dasharray="2 5"/><path d="M200.0 40.0L200.0 4.0" stroke-width="1"/><text x="246.1" y="28.1" transform="rotate(15 246.1 28.1)">♈&#xFE0E;</text><path d="M280.0 61.4L298.0 30.3" stroke-width="1"/><text x="325.9" y="74.1" transform="rotate(45 325.9 74.1)">♉&#xFE0E;</text><path d="M338.6 120.0L369.7 102.0" stroke-width="1"/><text x="371.9" y="153.9" transform="rotate(75 371.9 153.9)">♊&#xFE0E;</text><path d="M360.0 200.0L396.0 200.0" stroke-width="1"/><text x="371.9" y="246.1" transform="rotate(105 371.9 246.1)">♋&#xFE0E;</text><path d="M338.6 280.0L369.7 298.0" stroke-width="1"/><text x="325.9" y="325.9" transform="rotate(135 325.9 325.9)">♌&#xFE0E;</text><path d="M280.0 338.6L298.0 369.7" stroke-width="1"/><text x="246.1" y="371.9" transform="rotate(165 246.1 371.9)">♍&#xFE0E;</text><path d="M200.0 360.0L200.0 396.0" stroke-width="1"/><text x="153.9" y="371.9" transform="rotate(195 153.9 371.9)">♎&#xFE0E;</text><path d="M120.0 338.6L102.0 369.7" stroke-width="1"/><text x="74.1" y="325.9" transform="rotate(225 74.1 325.9)">♏&#xFE0E;</text><path d="M61.4 280.0L30.3 298.0" stroke-width="1"/><text x="28.1" y="246.1" transform="rotate(255 28.1 246.1)">♐&#xFE0E;</text><path d="M40.0 200.0L4.0 200.0" stroke-width="1"/><text x="28.1" y="153.9" transform="rotate(285 28.1 153.9)">♑&#xFE0E;</text><path d="M61.4 120.0L30.3 102.0" stroke-width="1"/><text x="74.1" y="74.1" transform="rotate(315 74.1 74.1)">♒&#xFE0E;</text><path d="M120.0 61.4L102.0 30.3" stroke-width="1"/><text x="153.9" y="28.1" transform="rotate(345 153.9 28.1)">♓&#xFE0E;</text><path d="M346.0 200.0L356.0 200.0" stroke-width="0.6"/><path d="M349.4 213.1L355.4 213.6" stroke-width="0.6"/><path d="M343.8 225.4L353.6 227.1" stroke-width="0.6"/><path d="M344.9 238.8L350.7 240.4" stroke-width="0.6"/><path d="M337.2 249.9L346.6 253.4" stroke-width="0.6"/><path d="M335.9 263.4L341.4 265.9" stroke-width="0.6"/><path d="M326.4 273.0L335.1 278.0" stroke-width="0.6"/><path d="M322.9 286.0L327.8 289.5" stroke-width="0.6"/><path d="M311.8 293.8L319.5 300.3" stroke-width="0.6"/><path d="M306.1 306.1L310.3 310.3" stroke-width="0.6"/><path d="M293.8 311.8L300.3 319.5" stroke-width="0.6"/><path d="M286.0 322.9L289.5 327.8" stroke-width="0.6"/><path d="M273.0 326.4L278.0 335.1" stroke-width="0.6"/><path d="M263.4 335.9L265.9 341.4" stroke-width="0.6"/><path d="M249.9 337.2L253.4 346.6" stroke-width="0.6"/><path d="M238.8 344.9L240.4 350.7" stroke-width="0.6"/><path d="M225.4 343.8L227.1 353.6" stroke-width="0.6"/><path d="M213.1 349.4L213.6 355.4" stroke-width="0.6"/><path d="M200.0 346.0L200.0 356.0" stroke-width="0.6"/><path d="M186.9 349.4L186.4 355.4" stroke-width="0.6"/><path d="M174.6 343.8L172.9 353.6" stroke-width="0.6"/><path d="M161.2 344.9L159.6 350.7" stroke-width="0.6"/><path d="M150.1 337.2L146.6 346.6" stroke-width="0.6"/><path d="M136.6 335.9L134.1 341.4" stroke-width="0.6"/><path d="M127.0 326.4L122.0 335.1" stroke-width="0.6"/><path d="M114.0 322.9L110.5 327.8" stroke-width="0.6"/><path d="M106.2 311.8L99.7 319.5" stroke-width="0.6"/><path d="M93.9 306.1L89.7 310.3" stroke-width="0.6"/><path d="M88.2 293.8L80.5 300.3" stroke-width="0.6"/><path d="M77.1 286.0L72.2 289.5" stroke-width="0.6"/><path d="M73.6 273.0L64.9 278.0" stroke-width="0.6"/><path d="M64.1 263.4L58.6 265.9" stroke-width="0.6"/><path d="M62.8 249.9L53.4 253.4" stroke-width="0.6"/><path d="M55.1 238.8L49.3 240.4" stroke-width="0.6"/><path d="M56.2 225.4L46.4 227.1" stroke-width="0.6"/><path d="M50.6 213.1L44.6 213.6" stroke-width="0.6"/><path d="M54.0 200.0L44.0 200.0" stroke-width="0.6"/><path d="M50.6 186.9L44.6 186.4" stroke-width="0.6"/><path d="M56.2 174.6L46.4 172.9" stroke-width="0.6"/><path d="M55.1 161.2L49.3 159.6" stroke-width="0.6"/><path d="M62.8 150.1L53.4 146.6" stroke-width="0.6"/><path d="M64.1 136.6L58.6 134.1" stroke-width="0.6"/><path d="M73.6 127.0L64.9 122.0" stroke-width="0.6"/><path d="M77.1 114.0L72.2 110.5" stroke-width="0.6"/><path d="M88.2 106.2L80.5 99.7" stroke-width="0.6"/><path d="M93.9 93.9L89.7 89.7" stroke-width="0.6"/><path d="M106.2 88.2L99.7 80.5" stroke-width="0.6"/><path d="M114.0 77.1L110.5 72.2" stroke-width="0.6"/><path d="M127.0 73.6L122.0 64.9" stroke-width="0.6"/><path d="M136.6 64.1L134.1 58.6" stroke-width="0.6"/><path d="M150.1 62.8L146.6 53.4" stroke-width="0.6"/><path d="M161.2 55.1L159.6 49.3" stroke-width="0.6"/><path d="M174.6 56.2L172.9 46.4" stroke-width="0.6"/><path d="M186.9 50.6L186.4 44.6" stroke-width="0.6"/><path d="M200.0 54.0L200.0 44.0" stroke-width="0.6"/><path d="M213.1 50.6L213.6 44.6" stroke-width="0.6"/><path d="M225.4 56.2L227.1 46.4" stroke-width="0.6"/><path d="M238.8 55.1L240.4 49.3" stroke-width="0.6"/><path d="M249.9 62.8L253.4 53.4" stroke-width="0.6"/><path d="M263.4 64.1L265.9 58.6" stroke-width="0.6"/><path d="M273.0 73.6L278.0 64.9" stroke-width="0.6"/><path d="M286.0 77.1L289.5 72.2" stroke-width="0.6"/><path d="M293.8 88.2L300.3 80.5" stroke-width="0.6"/><path d="M306.1 93.9L310.3 89.7" stroke-width="0.6"/><path d="M311.8 106.2L319.5 99.7" stroke-width="0.6"/><path d="M322.9 114.0L327.8 110.5" stroke-width="0.6"/><path d="M326.4 127.0L335.1 122.0" stroke-width="0.6"/><path d="M335.9 136.6L341.4 134.1" stroke-width="0.6"/><path d="M337.2 150.1L346.6 146.6" stroke-width="0.6"/><path d="M344.9 161.2L350.7 159.6" stroke-width="0.6"/><path d="M343.8 174.6L353.6 172.9" stroke-width="0.6"/><path d="M349.4 186.9L355.4 186.4" stroke-width="0.6"/></svg></figure>
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
