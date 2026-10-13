// Vastulogy hero visual: a blueprint floor plan drawing itself on a grid, inside a compass ring of the eight directions;
// the needle swings and settles on north.
export function vastuHero() {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const ring = dirs.map((d, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return `<text x="${(200 + Math.cos(a) * 180).toFixed(1)}" y="${(200 + Math.sin(a) * 180 + 5).toFixed(1)}" class="${d === 'N' ? 'hv-n' : ''}">${d}</text>`;
  }).join('');
  const ticks = Array.from({ length: 72 }, (_, i) => {
    const a = (i / 72) * Math.PI * 2;
    const r2 = i % 9 ? 160 : 152;
    return `<path d="M${(200 + Math.cos(a) * 164).toFixed(1)} ${(200 + Math.sin(a) * 164).toFixed(1)}L${(200 + Math.cos(a) * r2).toFixed(1)} ${(200 + Math.sin(a) * r2).toFixed(1)}"/>`;
  }).join('');
  return `<div class="hero-visual hv" aria-hidden="true">
    <span class="hv-glow"></span>
    <svg class="hv-svg" viewBox="0 0 400 400">
      <defs><pattern id="hv-grid" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M12 0H0V12" fill="none" stroke="#9FB49A" stroke-width=".5" opacity=".5"/></pattern><clipPath id="hv-clip"><circle cx="200" cy="200" r="146"/></clipPath></defs>
      <circle cx="200" cy="200" r="196" class="hv-outer"/>
      <g class="hv-ticks">${ticks}</g>
      <g class="hv-dirs">${ring}</g>
      <circle cx="200" cy="200" r="146" fill="#FBF8F1"/>
      <g clip-path="url(#hv-clip)">
        <rect x="40" y="40" width="320" height="320" fill="url(#hv-grid)"/>
        <g class="hv-plan">
          <path pathLength="1" d="M108 112H292V288H108Z"/>
          <path pathLength="1" d="M108 190H180V288M180 112V160M236 112V210H292M236 250V288"/>
          <path pathLength="1" d="M180 288a22 22 0 0 0 22-22"/>
        </g>
        <g class="hv-labels"><text x="144" y="155">Living</text><text x="264" y="160">Kitchen</text><text x="144" y="245">Bedroom</text><text x="264" y="262">Study</text></g>
        <path class="hv-door" d="m196 300 6 10 6-10"/>
      </g>
      <g class="hv-needle"><path d="M200 112 210 200 200 214 190 200Z" class="hv-north"/><path d="M200 288 210 200 200 186 190 200Z" class="hv-south"/><circle cx="200" cy="200" r="7"/></g>
    </svg>
    <p class="hv-cap">Direction · Layout · Daily use</p>
  </div>`;
}
