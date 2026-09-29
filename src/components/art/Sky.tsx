/**
 * Background drawings, in hairline ink on the ivory paper. The idea comes from the way the best sites
 * in this field draw quiet orbits around the person, but every figure here is taken from her own
 * practice: the nine grahas and the numbers that belong to them, the North Indian birth chart and
 * the vastu grid. All are decorative and hidden from screen readers.
 */

type Props = { className?: string };

const hair = { fill: "none", stroke: "currentColor", vectorEffect: "non-scaling-stroke" } as const;

const polar = (r: number, deg: number, c = 500) => {
  const a = (deg * Math.PI) / 180;
  return [c + r * Math.cos(a), c + r * Math.sin(a)] as const;
};

/** A fine engraved star: long upright rays, short side rays, a small cross between them. */
export function Star({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`} className="sky-star">
      <path d="M0 -24 L1.4 -1.4 L10 0 L1.4 1.4 L0 24 L-1.4 1.4 L-10 0 L-1.4 -1.4 Z" />
      <path d="M-4.5 -4.5 L4.5 4.5 M4.5 -4.5 L-4.5 4.5" {...hair} strokeWidth="0.8" />
    </g>
  );
}

/*
  The nine grahas, as Indian numerology pairs them with the numbers 1 to 9. Angles are where each
  sits on its path when the page loads; the whole path then turns slowly.
*/
const grahas = [
  { name: "Surya", n: 1, deg: -72, draw: "sun" },
  { name: "Chandra", n: 2, deg: -31, draw: "moon" },
  { name: "Mangal", n: 9, deg: 8, draw: "wine" },
  { name: "Budh", n: 5, deg: 52, draw: "ring-small" },
  { name: "Guru", n: 3, deg: 97, draw: "ring-dot" },
  { name: "Shukra", n: 6, deg: 141, draw: "dot" },
  { name: "Shani", n: 8, deg: 188, draw: "dot-large" },
  { name: "Rahu", n: 4, deg: 229, draw: "ring" },
  { name: "Ketu", n: 7, deg: 262, draw: "ring-small" },
] as const;

function Body({ draw, x, y }: { draw: (typeof grahas)[number]["draw"]; x: number; y: number }) {
  switch (draw) {
    case "sun":
      return (
        <g>
          <circle cx={x} cy={y} r="10" className="sky-gold" />
          <circle cx={x} cy={y} r="17" {...hair} strokeWidth="0.8" className="sky-gold-line" />
        </g>
      );
    case "moon":
      return (
        <g>
          <circle cx={x} cy={y} r="10" {...hair} strokeWidth="0.9" />
          {/* The lit part: inside the disc, outside a second circle shifted 5 units to the right. */}
          <path d={`M${x + 4.4} ${y - 8.98} A10 10 0 1 0 ${x + 4.4} ${y + 8.98} A9 9 0 0 1 ${x + 4.4} ${y - 8.98} Z`} className="sky-ink" />
        </g>
      );
    case "wine":
      return <circle cx={x} cy={y} r="6.5" className="sky-wine" />;
    case "ring":
      return <circle cx={x} cy={y} r="8" {...hair} strokeWidth="1" className="sky-fill-paper" />;
    case "ring-small":
      return <circle cx={x} cy={y} r="5.5" {...hair} strokeWidth="1" className="sky-fill-paper" />;
    case "ring-dot":
      return (
        <g>
          <circle cx={x} cy={y} r="9" {...hair} strokeWidth="1" className="sky-fill-paper" />
          <circle cx={x} cy={y} r="2.4" className="sky-ink" />
        </g>
      );
    case "dot":
      return <circle cx={x} cy={y} r="4.5" className="sky-ink" />;
    case "dot-large":
      return <circle cx={x} cy={y} r="7.5" className="sky-ink" />;
  }
}

/** An open arc from one angle clockwise to another (degrees, 0 at three o'clock). */
const openArc = (r: number, from: number, to: number) => {
  const [x1, y1] = polar(r, from);
  const [x2, y2] = polar(r, to);
  const span = (((to - from) % 360) + 360) % 360;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)}A${r} ${r} 0 ${span > 180 ? 1 : 0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
};

/*
  The dial is left open on its upper left, the side that faces the headline, so the lines never run
  through the words. The numbers run clockwise from the top, 32 degrees apart.
*/
const DIAL_FROM = 262;
const DIAL_TO = 176;

const ZODIAC = [
  "ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO",
  "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES"
];

export function GrahaOrbit({ className = "" }: Props) {
  return (
    <div className={`graha-orbit ${className}`} aria-hidden="true">
      <svg className="graha-dial" viewBox="0 0 1000 1000" focusable="false">
        <circle cx="500" cy="500" r="466" {...hair} strokeWidth="0.8" />
        <circle cx="500" cy="500" r="392" {...hair} strokeWidth="1.1" strokeDasharray="1 9" strokeLinecap="round" className="sky-faint" />
        {ZODIAC.map((sign, i) => {
          const deg = 270 + i * 30;
          const [x1, y1] = polar(458, deg);
          const [x2, y2] = polar(474, deg);
          // Calculate text position
          const [tx, ty] = polar(433, deg + 15);
          return (
            <g key={sign}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} {...hair} strokeWidth="0.8" />
              <text
                x={tx}
                y={ty}
                className="sky-direction sky-gold"
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${deg + 15 + 90}, ${tx}, ${ty})`}
                style={{ fontSize: "14px", letterSpacing: "2px" }}
              >
                {sign}
              </text>
            </g>
          );
        })}
      </svg>
      <svg className="graha-path" viewBox="0 0 1000 1000" focusable="false">
        {/* Spinning Yellow Border */}
        <circle cx="500" cy="500" r="466" fill="none" stroke="#ffcc00" strokeWidth="4" strokeDasharray="100 50" opacity="0.8" />
        <circle cx="500" cy="500" r="330" {...hair} strokeWidth="0.8" />
        {grahas.map((g) => {
          const [x, y] = polar(330, g.deg);
          return <Body key={g.name} draw={g.draw} x={x} y={y} />;
        })}
      </svg>
    </div>
  );
}

/** The North Indian birth chart: a square, its diagonals, and the diamond that makes the twelve houses. */
export function KundliBackdrop({ className = "" }: Props) {
  return (
    <svg className={`backdrop backdrop-kundli ${className}`} viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <rect x="20" y="20" width="260" height="260" {...hair} strokeWidth="1" />
      <path d="M20 20L280 280M280 20L20 280M150 20L280 150L150 280L20 150Z" {...hair} strokeWidth="1" />
    </svg>
  );
}

/** The vastu grid: nine by nine squares, the centre (brahmasthan) marked, and the eight directions. */
export function VastuBackdrop({ className = "" }: Props) {
  const step = 240 / 9;
  const lines = Array.from({ length: 8 }, (_, i) => 30 + step * (i + 1));
  const dirs = [
    ["N", 150, 14],
    ["NE", 282, 18],
    ["E", 288, 150],
    ["SE", 282, 284],
    ["S", 150, 288],
    ["SW", 18, 284],
    ["W", 12, 150],
    ["NW", 18, 18],
  ] as const;
  return (
    <svg className={`backdrop backdrop-vastu ${className}`} viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <rect x="30" y="30" width="240" height="240" {...hair} strokeWidth="1.1" />
      <path d={lines.map((v) => `M${v} 30V270M30 ${v}H270`).join("")} {...hair} strokeWidth="0.7" className="sky-faint" />
      <rect x={30 + step * 3} y={30 + step * 3} width={step * 3} height={step * 3} {...hair} strokeWidth="1.1" />
      <circle cx="150" cy="150" r="4" className="sky-ink" />
      {dirs.map(([d, x, y]) => (
        <text key={d} x={x} y={y} className="sky-direction" textAnchor="middle" dominantBaseline="central">
          {d}
        </text>
      ))}
    </svg>
  );
}

/** Quiet orbits and Astro Chakra mandala for program section and footer. */
export function OrbitBackdrop({ className = "" }: Props) {
  // Generate 12 astro house spokes (30 degrees each)
  const zodiacRays = Array.from({ length: 12 }, (_, i) => {
    const angle = i * 30;
    const [x1, y1] = polar(190, angle);
    const [x2, y2] = polar(420, angle);
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(197, 154, 69, 0.2)" strokeWidth="0.8" strokeDasharray="4 4" />;
  });

  // Generate 8-point sacred geometry lotus chakra star lines
  const octagramLines = Array.from({ length: 8 }, (_, i) => {
    const angle = i * 45;
    const [x1, y1] = polar(100, angle);
    const [x2, y2] = polar(300, angle + 135);
    return <line key={`oct-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(197, 154, 69, 0.25)" strokeWidth="0.9" />;
  });

  return (
    <svg className={`backdrop backdrop-orbit astro-chakra-spin ${className}`} viewBox="0 0 1000 1000" aria-hidden="true" focusable="false" style={{ opacity: 0.35 }}>
      {/* Central Astro Chakra Mandala - Very Light & Delicate */}
      <circle cx="500" cy="500" r="90" fill="none" stroke="rgba(197, 154, 69, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="500" cy="500" r="190" fill="none" stroke="rgba(197, 154, 69, 0.22)" strokeWidth="1.2" />
      <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(197, 154, 69, 0.25)" strokeWidth="1.2" />
      <circle cx="500" cy="500" r="420" fill="none" stroke="rgba(197, 154, 69, 0.2)" strokeWidth="1.2" strokeDasharray="3 6" strokeLinecap="round" />

      {/* 12 Astrological Houses / Zodiac Spokes */}
      <g className="zodiac-spokes">
        {zodiacRays}
      </g>

      {/* Octagram Star / Sacred Chakra Geometry */}
      <g className="chakra-octagram">
        {octagramLines}
      </g>

      {/* Planetary Nodes (Soft Light Gold) */}
      <circle cx={polar(300, -40)[0]} cy={polar(300, -40)[1]} r="9" fill="rgba(197, 154, 69, 0.35)" />
      <circle cx={polar(190, 130)[0]} cy={polar(190, 130)[1]} r="7" fill="none" stroke="rgba(197, 154, 69, 0.4)" strokeWidth="1.2" />
      <circle cx={polar(420, 200)[0]} cy={polar(420, 200)[1]} r="6" fill="rgba(197, 154, 69, 0.3)" />
      <circle cx={polar(300, 180)[0]} cy={polar(300, 180)[1]} r="8" fill="none" stroke="rgba(197, 154, 69, 0.3)" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx={polar(420, 310)[0]} cy={polar(420, 310)[1]} r="6" fill="rgba(197, 154, 69, 0.35)" />

      <Star x={polar(300, 75)[0]} y={polar(300, 75)[1]} size={1.2} />
      <Star x={polar(420, 240)[0]} y={polar(420, 240)[1]} size={1.4} />
      <Star x={polar(190, 15)[0]} y={polar(190, 15)[1]} size={1.1} />
    </svg>
  );
}
