const signs = [
  ['TAURUS', '♉'], ['ARIES', '♈'], ['PISCES', '♓'], ['AQUARIUS', '♒'],
  ['CAPRICORN', '♑'], ['SAGITTARIUS', '♐'], ['SCORPIO', '♏'], ['LIBRA', '♎'],
  ['VIRGO', '♍'], ['LEO', '♌'], ['CANCER', '♋'], ['GEMINI', '♊'],
];

/** One complete vector wheel: no raster labels or overlaid replacement patches. */
export function ZodiacWheel() {
  return <svg className="zodiac-vector" viewBox="0 0 1000 1000" focusable="false" aria-hidden="true">
    {[490, 475, 415, 390, 295].map(radius => <circle key={radius} cx="500" cy="500" r={radius} fill="none" stroke="currentColor" strokeWidth={radius === 490 ? 2.5 : 1.5} />)}
    {signs.map(([name, symbol], index) => <g key={name} transform={`rotate(${index * 30 - 15} 500 500)`}>
      <text x="500" y="59" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontFamily="Georgia, serif" fontSize="26" fontWeight="600" letterSpacing="1.2">{name}</text>
      <text x="500" y="158" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontFamily="'Apple Symbols', 'Segoe UI Symbol', serif" fontSize="62">{symbol + '\uFE0E'}</text>
    </g>)}
    {signs.map(([name], index) => <line key={name} x1="500" y1="10" x2="500" y2="205" transform={`rotate(${index * 30} 500 500)`} stroke="currentColor" strokeWidth="1.5" />)}
  </svg>;
}
