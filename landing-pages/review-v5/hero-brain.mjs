// Brainology hero visual, from the approved design: a face in profile with the mind lit within, moon phases, the sun
// and a golden path. The picture fades into the pearl ground; a light passes over it and small stars glint.
const stars = [[18, 22], [30, 8], [72, 14], [88, 36], [62, 30], [24, 58], [82, 60], [50, 12]];

export function brainHero() {
  return `<div class="hero-visual hb" aria-hidden="true">
    <div class="hb-art"><img src="../_shared/hero/brain-hero-art.webp" alt="" width="1098" height="705" fetchpriority="high"></div>
    <span class="hb-sweep"></span>
    <span class="hb-sun"></span>
    ${stars.map(([x, y], i) => `<i class="hb-star" style="left:${x}%;top:${y}%;--d:${(i * 0.7).toFixed(1)}s"></i>`).join('')}
  </div>`;
}
