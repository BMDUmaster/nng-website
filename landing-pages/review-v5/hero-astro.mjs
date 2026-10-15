// Astrology hero visual: the zodiac wheel turning slowly in a night sky, an inner orbit with a travelling planet,
// a crescent and glinting stars.
const stars = [[8, 14], [22, 6], [40, 18], [70, 8], [88, 20], [94, 48], [80, 82], [60, 92], [14, 84], [4, 56], [30, 70], [96, 70]];

export function astroHero() {
  return `<div class="hero-visual hz" aria-hidden="true">
    <span class="hz-glow"></span>
    ${stars.map(([x, y], i) => `<i class="hz-star" style="left:${x}%;top:${y}%;--d:${(i * 0.45).toFixed(2)}s"></i>`).join('')}
    <div class="hz-wheel"><img src="../_shared/hero/zodiac.webp" alt="" width="1000" height="1000" fetchpriority="high"></div>
    <svg class="hz-orbit" viewBox="0 0 400 400"><circle cx="200" cy="200" r="86"/><circle class="hz-planet" r="6"><animateMotion dur="14s" repeatCount="indefinite" path="M200 114a86 86 0 1 1 0 172a86 86 0 1 1 0-172"/></circle></svg>
    <span class="hz-moon"></span>
  </div>`;
}
