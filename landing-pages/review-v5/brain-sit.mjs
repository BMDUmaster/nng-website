// Brainology "Client voices" and "The question you bring", from the approved references: film cards beside the words on
// plum, then three situation cards with photographs, a glowing mind and four pattern pills on cream.
const I = {
  person: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="16" cy="11" r="5"/><path d="M6 27a10 10 0 0 1 20 0"/></svg>',
  heart: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M16 26S5 19.5 5 12a5.5 5.5 0 0 1 11-1 5.5 5.5 0 0 1 11 1c0 7.5-11 14-11 14Z"/></svg>',
  sprout: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 27V14"/><path d="M16 16c0-5-4-8-10-8 0 6 4 9 10 8ZM16 19c0-5 4-8 10-8 0 6-4 9-10 8Z"/></svg>',
  pattern: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="16" cy="8" r="3.5"/><circle cx="8" cy="20" r="3.5"/><circle cx="24" cy="20" r="3.5"/><circle cx="16" cy="16" r="2"/><path d="M14 11l-4 6M18 11l4 6M11.5 20h9"/></svg>',
  couple: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="9" r="4"/><circle cx="21" cy="9" r="4"/><path d="M4 25a7 7 0 0 1 10-6M28 25a7 7 0 0 0-10-6"/><path d="M16 27s-4-2.4-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.6-4 5-4 5Z"/></svg>',
  case: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><rect x="5" y="10" width="22" height="15" rx="2.5"/><path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10M5 16h22M14 16v2h4v-2"/></svg>',
  growth: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="18" r="8"/><circle cx="14" cy="15" r="3"/><path d="M8.5 23.5a6 6 0 0 1 11 0M20 12l7-7M22 5h5v5"/></svg>',
  mind: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6a4 4 0 0 0-4 4 4 4 0 0 0-3 6.5A4.5 4.5 0 0 0 10 24a4 4 0 0 0 6 2V8a3.5 3.5 0 0 0-3-2Z"/><path d="M19 6a4 4 0 0 1 4 4 4 4 0 0 1 3 6.5A4.5 4.5 0 0 1 22 24a4 4 0 0 1-6 2"/><path d="M16 12h-3M16 18h-4M19 15h-3M20 20h-4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 7 5 5-5 5M13 7l5 5-5 5"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>',
};

export function brainVoices(p, { esc, wa, voices, assets, clips }) {
  const [a, b] = p.proofTitle.split('\n');
  const lotus = '<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><path d="M24 28c-4-4-6-9-6-14s2-9 6-12c4 3 6 7 6 12s-2 10-6 14Z"/><path d="M24 28c-6-1-12-5-14-12 5-1 10 1 13 5M24 28c6-1 12-5 14-12-5-1-10 1-13 5"/><path d="M23 28C14 28 6 24 3 19c5-1 10 0 14 3M25 28c9 0 17-4 20-9-5-1-10 0-14 3"/></svg>';
  const leaf = '<svg viewBox="0 0 120 160" aria-hidden="true"><path d="M60 158C58 120 40 96 22 70 8 50 14 18 40 8c26 10 40 40 34 72-4 24-12 44-14 78Z"/></svg>';
  const chev = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  return `<section class="stories-band cv5" id="stories" aria-labelledby="stories-title">
    <div class="cv5-main">
      <span class="cv5-leaf cv5-leaf-a" aria-hidden="true">${leaf}</span><span class="cv5-leaf cv5-leaf-b" aria-hidden="true">${leaf}</span>
      <div class="cv5-head">
        <div><p class="cv5-kicker"><span aria-hidden="true">✦</span>Client voices</p>
        <h2 id="stories-title">${esc(a)}<br><em>${esc(b)}</em></h2>
        <p class="cv5-sub">Real clients, in their own words. Tap a film to hear their experience of Narayani’s guidance.</p></div>
        <div class="cv5-act">${wa('voices', 'Share your situation', 'cv5-cta').replace('</a>', `<i class="cv5-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<p>Personal experiences of Narayani’s guidance.<br>Individual experiences vary.</p></div>
      </div>
      <div class="cv5-list" data-cv5>${p.proof.map((key, i) => { const v = voices[key]; const clip = `data-clip="/videos/stories/${clips[key]}.mp4" data-clip-title="${esc(v.title)}" data-clip-note="${esc(v.context)}"`; return `<article class="cv5-card" style="--i:${i}">
        <button class="cv5-film" type="button" ${clip} aria-label="Watch ${esc(v.name)}’s experience"><img src="${assets + v.image}" alt="" width="720" height="1280" loading="lazy"><span class="cv5-play" aria-hidden="true">${I.play}</span>${v.duration ? `<span class="cv5-time">${esc(v.duration)}</span>` : ''}</button>
        <div class="cv5-words"><span class="cv5-mark" aria-hidden="true">${v.quote ? '“' : ''}</span><div><p class="cv5-topic">${esc(v.title)}</p>${v.quote ? `<blockquote>“${esc(v.quote)}”</blockquote>` : `<p class="cv5-summary">${esc(v.summary)}</p>`}
        <div class="cv5-who"><p><strong>${esc(v.name)}</strong><span>${esc(v.context)}</span></p><button class="cv5-go" type="button" ${clip} aria-label="Watch ${esc(v.name)}’s film">${I.arrow}</button></div></div></div>
      </article>`; }).join('')}</div>
      <div class="cv5-nav"><div class="cv5-dots" aria-hidden="true">${p.proof.map((_, i) => `<i${i ? '' : ' class="is-on"'}></i>`).join('')}</div><div class="cv5-arrows"><button type="button" data-cv5-prev aria-label="Previous story">${chev('m15 6-6 6 6 6')}</button><button type="button" data-cv5-next aria-label="Next story">${chev('m9 6 6 6-6 6')}</button></div></div>
      <p class="cv5-foot"><i aria-hidden="true"></i><span aria-hidden="true">${lotus}</span>A clearer mind <b aria-hidden="true">·</b> A calmer you<i aria-hidden="true"></i></p>
    </div>
  </section>`;
}

export function brainSituations(p, { esc, wa }) {
  const [a, b] = p.situationTitle.split('\n');
  const pics = [['sit-rel', I.couple], ['sit-work', I.case], ['sit-money', I.growth]];
  const pills = [['Thoughts', I.person], ['Emotions', I.heart], ['Habits', I.sprout], ['Patterns', I.pattern]];
  return `<section class="q4" aria-labelledby="situation-title"><div class="wrap q4-inner">
    <div class="q4-top">
      <div class="q4-copy">
        <p class="q4-kicker"><span aria-hidden="true">✦</span>The question you bring<i aria-hidden="true"></i></p>
        <h2 id="situation-title">${esc(a)}<br><em>${esc(b)}</em></h2>
        <p class="q4-intro">${esc(p.situationIntro.split(' Recognising')[0])}</p>
      </div>
      <div class="q4-visual" aria-hidden="true">
        <p class="q4-script"><span>Different</span><span>situations,</span><span>same patterns</span></p>
        <svg class="q4-arrow" viewBox="0 0 90 80" fill="none" stroke="#9A6324" stroke-width="1.4" stroke-linecap="round"><path pathLength="1" d="M6 4C4 34 26 62 80 70"/><path pathLength="1" d="M68 62l12 8-13 5"/></svg>
        <div class="q4-mind"><img src="../_shared/hero/sit-mind.webp" alt="" width="350" height="353" loading="lazy"><span class="q4-glow"></span></div>
        <ul class="q4-pills">${pills.map(([t, ic], i) => `<li style="--i:${i}"><span>${ic}</span>${t}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="q4-cards">${p.situations.map(([t, d], i) => `<article class="q4-card" style="--i:${i}">
      <div class="q4-photo"><img src="../_shared/hero/${pics[i][0]}.webp" alt="" width="348" height="158" loading="lazy"><span class="q4-no">0${i + 1}</span><svg class="q4-wave" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34C90 64 170 6 260 22S360 50 400 30V60H0Z" fill="#FFFCF7"/><path pathLength="1" d="M0 34C90 64 170 6 260 22S360 50 400 30" fill="none" stroke="#D2AE6E" stroke-width="1.4"/></svg></div>
      <span class="q4-ic" aria-hidden="true">${pics[i][1]}</span>
      <h3>${esc(t)}</h3>
      <p>${esc(d)}</p>
      <div class="q4-foot">${wa('situation', 'Start with this', 'q4-start').replace('</a>', `<i class="q4-go" aria-hidden="true">${I.arrow}</i></a>`)}<span class="q4-rule" aria-hidden="true"></span><a class="q4-more" href="#approach">Understand your patterns <span aria-hidden="true">${I.chev}</span></a></div>
    </article>`).join('')}</div>
    <p class="q4-note"><span aria-hidden="true">${I.mind}</span>Recognising that pattern is the starting point, <em>not a reason to blame yourself.</em></p>
  </div></section>`;
}

// Brainology "How Narayani approaches it" (Oct 13 j): compact, on deep green. Her photograph in an arched frame, the
// words, the chain that repeats (one link lit at a time) and the three steps. Fits one screen on desktop and phone.
export function brainApproach3(p, { esc }) {
  const [a, b] = p.methodTitle.split('\n');
  const w = b.split(' '); const tail = w.splice(-2).join(' ');
  const [lead, ...rest] = p.methodIntro.split('. ');
  const loop = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 12a10 10 0 0 0-17.5-3.5L5 11"/><path d="M5 5v6h6"/><path d="M7 20a10 10 0 0 0 17.5 3.5L27 21"/><path d="M27 27v-6h-6"/></svg>';
  const eye = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="4.2"/><circle cx="16" cy="16" r="1.4" fill="currentColor"/></svg>';
  const words = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M6 7h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M10 13h12M10 17h8" stroke-linecap="round"/></svg>';
  const bolt = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 4 8 18h7l-2 10 11-15h-7l2-9Z"/></svg>';
  const links = [['A thought', I.mind], ['A belief', I.heart], ['The words you use', words], ['A reaction', bolt]];
  const icons = [eye, I.person, loop];
  return `<section class="a6" id="approach" aria-labelledby="approach-title"><div class="a6-inner">
    <figure class="a6-photo"><img src="../_shared/hero/ap-narayani-real.webp" alt="Narayani Garg beside a white Buddha relief" width="900" height="1003" loading="lazy"><figcaption><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span></figcaption></figure>
    <div class="a6-copy">
      <p class="a6-kicker"><span aria-hidden="true">✦</span>How Narayani approaches it</p>
      <h2 id="approach-title">${esc(a)}<br>${esc(w.join(' '))} <em>${esc(tail)}</em></h2>
      <p class="a6-intro"><span class="a6-lead">${esc(lead)}. </span>${esc(rest.join('. '))}</p>
      <div class="a6-chain"><p>The chain that repeats</p><ol>${links.map(([t, ic], i) => `<li style="--i:${i}"><span aria-hidden="true">${ic}</span>${t}</li>`).join('')}</ol></div>
      <ol class="a6-steps">${p.method.map(([t, d], i) => `<li style="--i:${i}"><span class="a6-ic" aria-hidden="true">${icons[i]}</span><div><h3><em>0${i + 1}</em>${esc(t)}</h3><p>${esc(d)}</p></div></li>`).join('')}</ol>
    </div>
  </div></section>`;
}

// Brainology "What the program draws on" (Oct 13 k): six practice cards with a photograph each, on cream with deep
// green and gold. Compact rows on phones so all six fit one screen.
export function brainPractices(p, { esc, wa, pageIcon }) {
  const [a, b] = p.scopeTitle.split('\n');
  const w = b.split(' '); const tail = w.splice(-2).join(' ');
  return `<section class="pr4" id="ways" aria-labelledby="ways-title"><div class="pr4-inner">
    <div class="pr4-head">
      <div><p class="pr4-kicker"><span aria-hidden="true">✦</span>${esc(p.scopeEyebrow || 'What the program draws on')}<i aria-hidden="true"></i></p>
      <h2 id="ways-title">${esc(a)}<br>${esc(w.join(' '))} <em>${esc(tail)}</em></h2></div>
      <p class="pr4-script" aria-hidden="true"><span>Same patterns,</span><span>different possibilities</span></p>
      ${wa('scope', 'WhatsApp enquiry', 'pr4-cta')}
    </div>
    <ul class="pr4-grid">${p.topics.map(([t, d], i) => `<li style="--i:${i}">
      <div class="pr4-text"><p class="pr4-top"><em>0${i + 1}</em><span aria-hidden="true">${pageIcon(p, 'topics', i)}</span></p><h3>${esc(t)}</h3><p>${esc(d)}</p></div>
      <img src="../_shared/hero/pr-${i + 1}.webp" alt="" width="194" height="264" loading="lazy">
    </li>`).join('')}</ul>
    <p class="pr4-foot"><i aria-hidden="true"></i>A clearer mind <b aria-hidden="true">·</b> A calmer you<i aria-hidden="true"></i></p>
  </div></section>`;
}

// Brainology "Why her approach matters" (Oct 13 o): the words, two principle cards and three promises beside her
// photograph in a gold-lined arch, then a compact deep green invitation card.
export function brainWhy(p, { esc, wa, icon }) {
  const principles = [['reflection', 'The person matters.', 'Explore your beliefs and responses as you practise something new.'], ['listen', 'The choice stays yours.', 'Ask questions and understand the reasoning. No threats or pressure to purchase a remedy.']];
  const shield = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 6 8v7c0 6.5 4.3 11 10 13 5.7-2 10-6.5 10-13V8Z"/><path d="m11.5 16 3 3 6-6"/></svg>';
  const cart = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h3l3 13h12l3-9H9"/><circle cx="12" cy="25" r="1.6"/><circle cx="21" cy="25" r="1.6"/><path d="m15 11 4 4M19 11l-4 4"/></svg>';
  const bulb = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22h8M13 26h6M16 4a8 8 0 0 0-5 14.2c.8.7 1 1.6 1 2.8h8c0-1.2.2-2.1 1-2.8A8 8 0 0 0 16 4Z"/></svg>';
  const promises = [[shield, 'No fear-based predictions'], [cart, 'No pressure to buy a remedy'], [bulb, 'The reasoning explained, the choice yours']];
  const [ct1, ct2] = p.closeTitle.split('\n');
  return `<section class="wy4" aria-labelledby="why-title"><div class="wy4-inner">
    <div class="wy4-copy">
      <p class="wy4-kicker"><span aria-hidden="true">✦</span>Why her approach matters</p>
      <h2 id="why-title">Mind first.<br><em>Guidance without fear.</em></h2>
      <figure class="wy4-photo wy4-photo-m" aria-hidden="true"><img src="../_shared/hero/wy-narayani.webp" alt="" width="720" height="923" loading="lazy"></figure>
      <div class="wy4-cards">${principles.map(([ic, t, d], i) => `<article style="--i:${i}"><span class="wy4-ic" aria-hidden="true">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div>
      <ul class="wy4-promise">${promises.map(([ic, t], i) => `<li style="--i:${i}"><span aria-hidden="true">${ic}</span>${t}</li>`).join('')}</ul>
    </div>
    <figure class="wy4-photo wy4-photo-d"><img src="../_shared/hero/wy-narayani.webp" alt="Narayani Garg beside a white Buddha relief" width="720" height="923" loading="lazy"><figcaption>Narayani Garg<span>Psychic Spiritual Mentor</span></figcaption></figure>
    <div class="wy4-band">
      <div><p class="wy4-band-kicker">Begin with the NNG team</p><h3>${esc(ct1)} <em>${esc(ct2)}</em></h3><p>${esc(p.closeCopy)}</p></div>
      ${wa('why', 'Get started', 'wy4-cta')}
    </div>
  </div></section>`;
}
