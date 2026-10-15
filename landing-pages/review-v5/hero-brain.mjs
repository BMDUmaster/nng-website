// Brainology hero visual, from the approved design. The picture keeps its own proportions so the overlay sits on the brain:
// a breathing aura, a fine golden orbit with two lights travelling it, and motes of light rising slowly from the mind.
// Coordinates are in the picture's own pixels (1098 x 705); the brain is centred near (630, 235).
const orbit = 'M630 92C760 92 812 160 812 235C812 310 760 378 630 378C500 378 448 310 448 235C448 160 500 92 630 92Z';
const motes = [[560, 200], [610, 170], [665, 190], [700, 240], [590, 260], [650, 290], [540, 240], [720, 200]];

export function brainHero() {
  return `<div class="hero-visual hb">
    <div class="hb-art" aria-hidden="true">
      <img src="../_shared/hero/brain-hero-art.webp" alt="" width="1098" height="705" fetchpriority="high">
      <svg class="hb-neural" viewBox="0 0 1098 705">
        <defs>
          <radialGradient id="hb-aura"><stop offset="0" stop-color="#FFF1CC" stop-opacity=".9"/><stop offset=".45" stop-color="#FFD891" stop-opacity=".32"/><stop offset="1" stop-color="#FFD891" stop-opacity="0"/></radialGradient>
          <radialGradient id="hb-light"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".4" stop-color="#FFE7AE"/><stop offset="1" stop-color="#FFE7AE" stop-opacity="0"/></radialGradient>
        </defs>
        <ellipse class="hb-aura" cx="630" cy="235" rx="200" ry="160" fill="url(#hb-aura)"/>
        <g transform="rotate(-14 630 235)">
          <path class="hb-orbit" d="${orbit}"/>
          <circle r="11" fill="url(#hb-light)"><animateMotion dur="9s" repeatCount="indefinite" path="${orbit}"/></circle>
          <circle r="7" fill="url(#hb-light)" opacity=".8"><animateMotion dur="9s" begin="-4.5s" repeatCount="indefinite" path="${orbit}"/></circle>
        </g>
        ${motes.map(([x, y], i) => `<circle class="hb-mote" cx="${x}" cy="${y}" r="${(2 + (i % 3) * 0.8).toFixed(1)}" style="--d:${(i * 0.9).toFixed(1)}s"/>`).join('')}
      </svg>
      <span class="hb-sweep"></span>
    </div>
  </div>`;
}
