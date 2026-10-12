// Brainology hero visual: a fine gold profile of a head; inside it, the repeating pattern as a loop with its four
// parts; from the loop a new line leaves the old path and rises to a star — the new response. Rings turn slowly behind.
const head = 'M196 430C186 380 150 340 146 270C142 190 196 120 270 116C330 112 360 150 362 196C364 214 372 226 384 246C388 254 380 258 370 260C372 268 370 274 364 278C368 286 366 294 358 298C356 312 352 324 336 326C322 328 312 332 314 352C316 380 320 404 330 430';
const loop = 'M250 215C250 175 300 170 300 205C300 240 250 245 250 215C250 185 200 180 200 212C200 244 250 250 250 215';
const escape = 'M300 205C320 180 350 150 392 118C420 96 440 84 458 76';
const parts = [['Thought', 300, 205], ['Belief', 250, 236], ['Words', 200, 212], ['Reaction', 250, 192]];

export function brainHero(p, { esc }) {
  return `<div class="hero-visual hb" aria-hidden="true">
    <svg class="hb-svg" viewBox="0 0 520 480">
      <defs>
        <radialGradient id="hb-glow" cx="50%" cy="45%" r="50%"><stop offset="0" stop-color="#D7B86B" stop-opacity=".22"/><stop offset=".6" stop-color="#8E4A86" stop-opacity=".08"/><stop offset="1" stop-color="#3C183D" stop-opacity="0"/></radialGradient>
        <linearGradient id="hb-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F1DDA6"/><stop offset=".55" stop-color="#D7B86B"/><stop offset="1" stop-color="#B88A45"/></linearGradient>
      </defs>
      <circle cx="262" cy="250" r="230" fill="url(#hb-glow)"/>
      <g class="hb-rings"><circle cx="262" cy="250" r="214"/><circle class="hb-dash" cx="262" cy="250" r="190"/><circle cx="262" cy="250" r="150" opacity=".35"/></g>
      <g class="hb-ticks">${Array.from({ length: 48 }, (_, i) => { const a = (i / 48) * Math.PI * 2; const r1 = 214, r2 = i % 4 ? 220 : 226; return `<path d="M${(262 + Math.cos(a) * r1).toFixed(1)} ${(250 + Math.sin(a) * r1).toFixed(1)}L${(262 + Math.cos(a) * r2).toFixed(1)} ${(250 + Math.sin(a) * r2).toFixed(1)}"/>`; }).join('')}</g>
      <path class="hb-head" pathLength="1" d="${head}"/>
      <path class="hb-loop" pathLength="1" d="${loop}"/>
      ${parts.map(([t, x, y], i) => `<g class="hb-part" style="--i:${i}"><circle cx="${x}" cy="${y}" r="4.5"/></g>`).join('')}
      <circle class="hb-comet" r="5"><animateMotion dur="6s" repeatCount="indefinite" path="${loop}"/></circle>
      <path class="hb-escape" pathLength="1" d="${escape}"/>
      <g class="hb-star" transform="translate(466 72)"><path d="M0-16C1.6-3.2 3.2-1.6 16 0 3.2 1.6 1.6 3.2 0 16-1.6 3.2-3.2 1.6-16 0-3.2-1.6-1.6-3.2 0-16Z"/><circle r="22"/></g>
    </svg>
    <ul class="hb-chips">
      <li class="hb-c1"><em>01</em>Notice <span>what keeps returning</span></li>
      <li class="hb-c2"><em>02</em>Understand <span>the belief behind it</span></li>
      <li class="hb-c3"><em>03</em>Practise <span>a new response</span></li>
    </ul>
  </div>`;
}
