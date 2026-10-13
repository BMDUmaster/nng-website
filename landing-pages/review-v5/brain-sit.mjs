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
  return `<section class="stories-band cv3" id="stories" aria-labelledby="stories-title"><div class="wrap cv3-inner">
    <div class="cv3-head">
      <p class="cv3-kicker"><span aria-hidden="true">✦</span>Client voices</p>
      <h2 id="stories-title">${esc(a)}<br><em>${esc(b)}</em></h2>
      <p class="cv3-sub">Real clients, in their own words. Tap a film to hear their experience.</p>
      ${wa('voices', 'Share your situation', 'cv3-cta')}
      <p class="cv3-note">Personal experiences of Narayani’s guidance. Individual experiences vary.</p>
    </div>
    <div class="cv3-list">${p.proof.map((key, i) => { const v = voices[key]; return `<article class="cv3-card" style="--i:${i}">
      <button class="cv3-film" type="button" data-clip="/videos/stories/${clips[key]}.mp4" data-clip-title="${esc(v.title)}" data-clip-note="${esc(v.context)}" aria-label="Watch ${esc(v.name)}’s experience"><img src="${assets + v.image}" alt="" width="720" height="1280" loading="lazy"><span class="cv3-play" aria-hidden="true">${I.play}</span><span class="cv3-time">${esc(v.duration || '')}</span></button>
      <div class="cv3-words"><p class="cv3-topic">${esc(v.title)}</p><blockquote>“${esc(v.quote || v.summary)}”</blockquote><p class="cv3-who"><strong>${esc(v.name)}</strong><span>${esc(v.context)}</span></p></div>
    </article>`; }).join('')}</div>
  </div></section>`;
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
