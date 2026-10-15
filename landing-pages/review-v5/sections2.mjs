// Editorial versions of "The question you bring" and the practices / options grid, with a plum arch, gold arcs and
// a dried branch behind. Shared by every v5 page.
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const star = '<svg class="s2-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" fill="currentColor"/></svg>';

// A dried branch: a few stems with small buds.
const branch = `<svg class="s2-branch" viewBox="0 0 200 300" aria-hidden="true">${[
  ['M120 300C118 230 130 160 160 70', [[150, 120], [158, 96], [142, 150], [163, 74], [135, 180]]],
  ['M124 250C100 210 80 180 40 150', [[60, 166], [46, 154], [80, 184], [96, 196]]],
  ['M126 220C140 190 170 170 196 160', [[176, 168], [190, 162], [160, 178]]],
  ['M140 160C130 120 112 90 96 40', [[104, 64], [98, 46], [112, 92], [120, 112]]],
].map(([d, buds]) => `<path d="${d}" fill="none" stroke="#9C7A55" stroke-width="1.1"/>${buds.map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="${2.4 + (i % 2)}" ry="${4.6 + (i % 3)}" transform="rotate(${(i * 47) % 90 - 45} ${x} ${y})" fill="${i % 2 ? '#C9A57A' : '#B48C5E'}"/>`).join('')}`).join('')}</svg>`;

export const decor = `<div class="s2-decor" aria-hidden="true"><span class="s2-arch"></span><svg class="s2-arcs" viewBox="0 0 800 600" preserveAspectRatio="none"><path pathLength="1" d="M80 -20C420 0 640 200 700 620"/><path pathLength="1" d="M260 40C480 40 660 160 790 330"/></svg>${star}${branch}</div>`;

export const kicker = (text) => `<p class="s2-kicker"><span aria-hidden="true"></span>${text}</p>`;
export function goldTail(lines, esc) {
  const parts = lines.split('\n').map(esc);
  const last = parts.pop().split(' ');
  const tail = last.splice(-2).join(' ');
  return [...parts, `${last.join(' ')} <em>${tail}</em>`].join('<br>');
}

export function situations2(p, { esc, scenarioArt, wa }) {
  const ed = !!p.rich;
  return `<section class="v5-sit2${ed ? ' s3' : ''}" aria-labelledby="situation-title">${ed ? '' : decor}<div class="section wrap s2-inner">
    ${kicker('The question you bring')}
    <h2 id="situation-title">${goldTail(p.situationTitle, esc)}</h2>
    ${ed ? `<p class="s3-intro">${esc(p.situationIntro.split(' Recognising')[0])}</p>` : ''}
    <div class="s2-cards" data-carousel>${p.situations.map(([t, d], i) => `<article class="s2-card" data-reveal style="--i:${i}" title="${esc(d)}">
      <span class="s2-no">0${i + 1}</span>
      <div class="s2-art">${star}<span class="s2-moon"></span>${scenarioArt(p, i)}<svg class="s2-wave" viewBox="0 0 300 60" aria-hidden="true"><path pathLength="1" d="M0 44C60 46 80 20 130 26S220 54 300 30"/><circle cx="40" cy="44" r="3"/></svg></div>
      <h3>${esc(t)}</h3>
      <p>${esc(d)}</p>
      <div class="s2-foot"><span></span>${ed && wa ? wa('situation', 'Start with this', 's3-link') : `<a class="s2-go" href="#enquire" aria-label="Enquire about: ${esc(t)}">${arrow}</a>`}</div>
    </article>`).join('')}</div>
    <div class="s2-dots" aria-hidden="true">${p.situations.map((_, i) => `<i${i ? '' : ' class="is-on"'}></i>`).join('')}</div>
    ${ed && p.slug === 'brainology' ? `<p class="s3-note" data-reveal><span aria-hidden="true">✦</span>Recognising that pattern is the starting point, <em>not a reason to blame yourself.</em></p>` : ''}
  </div></section>`;
}

export function practices2(p, { esc, cta, pageIcon }) {
  const four = p.topics.length === 4 ? ' s2-four' : '';
  const ed = !!p.rich;
  return `<section class="v5-prac2${ed ? ' pr3' : ''}" id="ways" aria-labelledby="ways-title">${ed ? '<span class="pr3-glow" aria-hidden="true"></span>' : decor}<div class="section wrap s2-inner">
    <div class="s2-head">
      <div>${kicker(esc(p.scopeEyebrow || 'Your consultation options'))}<h2 id="ways-title">${goldTail(p.scopeTitle, esc)}</h2></div>
      ${cta(p, 'scope', p.cta, '', 's2-pill')}
    </div>
    <ul class="s2-tiles${four}">${p.topics.map(([t], i) => `<li data-reveal style="--i:${i}"><span class="s2-ic s2-ic-${i % 3}">${pageIcon(p, 'topics', i)}<i class="s2-orbit"><b></b></i></span><span class="s2-name"><strong>${esc(t)}</strong><span></span></span><span class="s2-side"><em>0${i + 1}</em><a class="s2-go" href="#enquire" aria-label="Enquire about ${esc(t)}">${arrow}</a></span></li>`).join('')}</ul>
  </div></section>`;
}
