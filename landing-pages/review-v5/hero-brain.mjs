// Brainology hero visual, from the approved design. The picture sits in a box at its own proportions, so the overlay can
// trace the brain exactly: a breathing glow, neural paths that light in turn, sparks at their junctions.
// Coordinates are in the picture's own pixels (1098 x 705).
const nodes = [[520, 200], [575, 160], [640, 150], [700, 185], [735, 245], [700, 300], [630, 320], [560, 300], [600, 235], [665, 235], [540, 255]];
const paths = [
  'M520 200C545 175 560 165 575 160C600 150 620 148 640 150',
  'M640 150C670 160 690 170 700 185C718 210 730 225 735 245',
  'M735 245C725 270 715 285 700 300C680 312 655 320 630 320',
  'M630 320C605 318 580 310 560 300C545 285 540 270 540 255',
  'M540 255C545 230 565 215 600 235C620 245 645 240 665 235',
  'M600 235C590 210 585 185 575 160',
  'M665 235C680 215 690 200 700 185',
  'M520 200C525 220 530 240 540 255',
];

export function brainHero(p, { esc }) {
  return `<div class="hero-visual hb">
    <div class="hb-art" aria-hidden="true">
      <img src="../_shared/hero/brain-hero-art.webp" alt="" width="1098" height="705" fetchpriority="high">
      <svg class="hb-neural" viewBox="0 0 1098 705">
        <defs><radialGradient id="hb-brain-glow"><stop offset="0" stop-color="#FFE9B5" stop-opacity=".85"/><stop offset=".5" stop-color="#FFD58A" stop-opacity=".25"/><stop offset="1" stop-color="#FFD58A" stop-opacity="0"/></radialGradient></defs>
        <ellipse class="hb-brain-glow" cx="630" cy="235" rx="170" ry="130" fill="url(#hb-brain-glow)"/>
        ${paths.map((d, i) => `<path class="hb-path" pathLength="1" d="${d}" style="--d:${(i * 0.55).toFixed(2)}s"/>`).join('')}
        ${nodes.map(([x, y], i) => `<circle class="hb-node" cx="${x}" cy="${y}" r="4" style="--d:${(i * 0.37).toFixed(2)}s"/>`).join('')}
      </svg>
      <span class="hb-sweep"></span>
      <span class="hb-sun"></span>
    </div>
    <p class="hb-badge"><span class="hb-badge-dot" aria-hidden="true"></span><strong>${esc(p.short || p.name)}</strong><em>with Narayani Garg</em></p>
  </div>`;
}
