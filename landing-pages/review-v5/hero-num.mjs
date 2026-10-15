// Numerology hero visual: a Lo Shu grid of pearl tiles turning over 1 to 9 inside a slowly turning ring of numerals,
// with a gold bead travelling the ring.
const grid = [4, 9, 2, 3, 5, 7, 8, 1, 6];

export function numHero() {
  const ring = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
    return `<text x="${(200 + Math.cos(a) * 178).toFixed(1)}" y="${(200 + Math.sin(a) * 178 + 6).toFixed(1)}">${i + 1}</text>`;
  }).join('');
  return `<div class="hero-visual hn" aria-hidden="true">
    <span class="hn-glow"></span>
    <svg class="hn-ring" viewBox="0 0 400 400"><circle cx="200" cy="200" r="196"/><circle class="hn-dash" cx="200" cy="200" r="160"/><g class="hn-nums">${ring}</g><circle class="hn-bead" r="6"><animateMotion dur="16s" repeatCount="indefinite" path="M200 40a160 160 0 1 1 0 320a160 160 0 1 1 0-320"/></circle></svg>
    <div class="hn-grid">${grid.map((n) => `<span style="--o:${n}">${n}</span>`).join('')}</div>
    <p class="hn-cap">Lo Shu grid</p>
  </div>`;
}
