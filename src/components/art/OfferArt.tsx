import { AstrologyArt, MindArt, NumerologyArt, VastuArt } from "./Art";
import { Drawing } from "@/components/icons/Icon";
import type { ArtSpec, GemCut } from "@/content/offerings/types";

/**
 * Drawings for the service pages. Every one is authored for this site (no stock imagery, no product
 * photographs), in the same stroke family as Art.tsx: the colour and weight come from `.offer-art` in the
 * stylesheet, every stroke has pathLength 1 so it can draw itself in once when it scrolls into view, and
 * reduced-motion and PDF modes show each one complete.
 *
 * Gem and bead drawings are generated from a few numbers (a cut, a count of faces), so every stone and every
 * mukhi in the catalogues has its own drawing without a photograph standing in for what a buyer will receive.
 */

const svgProps = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", focusable: "false", "data-draw": "" } as const;
const L = { pathLength: 1 } as const;

/* ------------------------------------------------------------ birth chart */

/** The twelve houses of the North Indian chart, numbered anticlockwise from the top diamond. */
const HOUSE_PATH: Record<number, string> = {
  1: "M60 4L32 32L60 60L88 32Z",
  2: "M4 4L60 4L32 32Z",
  3: "M4 4L32 32L4 60Z",
  4: "M4 60L32 88L60 60L32 32Z",
  5: "M4 116L4 60L32 88Z",
  6: "M4 116L32 88L60 116Z",
  7: "M60 116L88 88L60 60L32 88Z",
  8: "M116 116L60 116L88 88Z",
  9: "M116 116L88 88L116 60Z",
  10: "M116 60L88 32L60 60L88 88Z",
  11: "M116 4L116 60L88 32Z",
  12: "M116 4L88 32L60 4Z",
};
const HOUSE_LABEL: Record<number, [number, number]> = {
  1: [60, 35], 2: [32, 15], 3: [13, 34], 4: [32, 63], 5: [13, 91], 6: [32, 110],
  7: [60, 91], 8: [88, 110], 9: [107, 91], 10: [88, 63], 11: [107, 34], 12: [88, 15],
};

/** The North Indian birth chart. Houses in `houses` (1 to 12) are lit, the way a reading names the house it is about. */
export function HouseChart({ houses = [] }: { houses?: number[] }) {
  const lit = new Set(houses);
  return (
    <svg viewBox="0 0 120 120" {...svgProps} data-art="chart" role="img" aria-label={lit.size ? `A North Indian birth chart with house ${[...lit].join(" and ")} marked` : "A North Indian birth chart"}>
      {[...lit].map((house) => (
        <path key={house} d={HOUSE_PATH[house]} data-lit="" fill="var(--detail)" fillOpacity=".26" stroke="none" />
      ))}
      <path {...L} d="M4 4H116V116H4Z" />
      <path {...L} d="M4 4L116 116M116 4L4 116" opacity=".7" />
      <path {...L} d="M60 4L116 60L60 116L4 60Z" />
      {Object.entries(HOUSE_LABEL).map(([house, [x, y]]) => (
        <text key={house} x={x} y={y} className={`offer-art-label${lit.has(Number(house)) ? " is-lit" : ""}`} textAnchor="middle">
          {house}
        </text>
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- numbers */

function NumberWorking({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 160 120" {...svgProps} role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function NumberArt({ variant }: { variant: "loshu" | "dob" | "name" | "mobile" | "signature" | "business" }) {
  switch (variant) {
    case "loshu":
      return <NumerologyArt />;
    case "dob":
      return (
        <NumberWorking label="A birth date, 14, reduced to a single number: 1 plus 4 is 5">
          <text x="80" y="34" className="offer-art-num" textAnchor="middle" fontSize="30">14</text>
          <path {...L} d="M52 46H108" opacity=".5" />
          <text x="80" y="70" className="offer-art-num is-soft" textAnchor="middle" fontSize="17">1 + 4</text>
          <path {...L} d="M64 82H96" opacity=".5" />
          <text x="80" y="110" className="offer-art-num is-accent" textAnchor="middle" fontSize="30">5</text>
        </NumberWorking>
      );
    case "name":
      return (
        <NumberWorking label="Letters turned into numbers: A, S, H, A become 1, 3, 5, 1, which add to 10, then to 1">
          {["A", "S", "H", "A"].map((letter, index) => (
            <text key={index} x={34 + index * 31} y="40" className="offer-art-num" textAnchor="middle" fontSize="26">{letter}</text>
          ))}
          <path {...L} d="M16 52H144" opacity=".5" />
          {[1, 3, 5, 1].map((value, index) => (
            <text key={index} x={34 + index * 31} y="78" className="offer-art-num is-soft" textAnchor="middle" fontSize="19">{value}</text>
          ))}
          <text x="80" y="110" className="offer-art-num is-accent" textAnchor="middle" fontSize="24">10 = 1</text>
        </NumberWorking>
      );
    case "mobile":
      return (
        <NumberWorking label="A mobile phone showing a ten digit number">
          <rect {...L} x="52" y="6" width="56" height="108" rx="8" />
          <path {...L} d="M72 15H88" opacity=".6" />
          {[["9", "8", "7", "6", "5"], ["4", "3", "2", "1", "0"]].map((row, r) =>
            row.map((digit, c) => (
              <text key={`${r}-${c}`} x={62 + c * 9} y={52 + r * 18} className="offer-art-num" textAnchor="middle" fontSize="11">{digit}</text>
            )),
          )}
          <path {...L} d="M62 76H98" opacity=".5" />
          <text x="80" y="92" className="offer-art-num is-accent" textAnchor="middle" fontSize="13">45 = 9</text>
          <path {...L} d="M72 105H88" opacity=".6" />
        </NumberWorking>
      );
    case "signature":
      return (
        <NumberWorking label="A flowing signature with an underline">
          <path {...L} d="M14 78C22 40 34 26 40 40C46 56 30 86 44 84C58 82 62 46 72 50C82 54 70 80 84 78C98 76 100 52 112 56C124 60 116 82 130 76C138 72 142 62 148 58" />
          <path {...L} d="M20 98C60 92 110 100 146 90" opacity=".6" />
          <circle {...L} cx="150" cy="96" r="1.8" />
        </NumberWorking>
      );
    case "business":
      return (
        <NumberWorking label="A business signboard hanging from two hooks, with a number on it">
          <path {...L} d="M44 8V28M116 8V28" />
          <rect {...L} x="22" y="28" width="116" height="54" rx="3" />
          <path {...L} d="M38 46H92M38 60H76" opacity=".7" />
          <circle {...L} cx="114" cy="55" r="13" />
          <text x="114" y="61" className="offer-art-num is-accent" textAnchor="middle" fontSize="17">8</text>
          <path {...L} d="M10 108H150" opacity=".5" />
        </NumberWorking>
      );
  }
}

/* ------------------------------------------------------------------ plans */

/** The eight directions, clockwise from north, for the compass. */
const DIRECTIONS = [0, 45, 90, 135, 180, 225, 270, 315];

export function PlanArt({ variant }: { variant: "home" | "office" | "site" | "astro" | "township" | "elements" }) {
  switch (variant) {
    case "home":
      return <VastuArt />;
    case "office":
      return (
        <svg viewBox="0 0 160 120" {...svgProps} data-art="office" role="img" aria-label="A plan of an office with a desk, a chair and a door">
          <path {...L} d="M70 104H28V18H132V104H90" />
          <path {...L} d="M90 104V86M90 86A18 18 0 0 0 72 104" opacity=".6" />
          <path {...L} d="M52 14H108" opacity=".6" />
          <rect {...L} x="52" y="34" width="52" height="22" rx="1" />
          <circle {...L} cx="78" cy="68" r="6" />
          <rect {...L} x="112" y="28" width="14" height="34" rx="1" opacity=".7" />
          <path {...L} d="M148 20L152 30H144Z" />
          <path {...L} d="M148 30V38" />
        </svg>
      );
    case "site":
      return (
        <svg viewBox="0 0 160 120" {...svgProps} data-art="site" role="img" aria-label="A plot of land with a road along one side and a foundation stone in the north east corner">
          <path {...L} d="M30 26L128 20L134 94L24 98Z" />
          <path {...L} d="M63 24V96M96 22V95M28 50L131 45M27 74L133 70" opacity=".35" />
          <path {...L} d="M8 107H152M8 113H152" opacity=".6" />
          <rect {...L} x="114" y="28" width="10" height="10" />
          <path {...L} d="M14 14L18 24H10Z" />
          <path {...L} d="M14 24V34" />
        </svg>
      );
    case "township":
      return (
        <svg viewBox="0 0 160 120" {...svgProps} data-art="township" role="img" aria-label="A site plan of a development: towers in blocks either side of two crossing roads, with a park at the centre">
          <path {...L} d="M12 12H148V108H12Z" />
          <path {...L} d="M12 60H148M80 12V108" opacity=".6" />
          {[[22, 20], [52, 20], [22, 66], [52, 66], [92, 20], [122, 20], [92, 66], [122, 66]].map(([x, y]) => (
            <path key={`${x}-${y}`} {...L} d={`M${x} ${y}h22v28h-22z`} opacity=".85" />
          ))}
          <circle {...L} cx="80" cy="60" r="9" style={{ fill: "var(--paper)" }} />
          <path {...L} d="M138 4l4 8h-8z" />
        </svg>
      );
    case "elements": {
      const centre = [60, 62] as const;
      const points = [-90, -18, 54, 126, 198].map((deg) => polar(centre[0], centre[1], 38, 38, deg));
      return (
        <svg viewBox="0 0 120 120" {...svgProps} data-art="elements" role="img" aria-label="Five circles around a sixth: earth, water, fire, air and space">
          <path {...L} d={`M${points.map(pt).join("L")}Z`} opacity=".5" />
          {points.map((p, index) => (
            <path key={`s${index}`} {...L} d={`M${centre[0]} ${centre[1]}L${pt(p)}`} opacity=".3" />
          ))}
          {points.map((p, index) => (
            <circle key={index} {...L} cx={p[0].toFixed(2)} cy={p[1].toFixed(2)} r="11" style={{ fill: "var(--paper)" }} />
          ))}
          <circle {...L} cx={centre[0]} cy={centre[1]} r="6" />
        </svg>
      );
    }
    case "astro":
      return (
        <svg viewBox="0 0 120 120" {...svgProps} data-art="astro-vastu" role="img" aria-label="A compass with eight directions around an open centre">
          <circle {...L} cx="60" cy="62" r="46" />
          <circle {...L} cx="60" cy="62" r="8" />
          {DIRECTIONS.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = (r: number) => (60 + r * Math.sin(rad)).toFixed(2);
            const y = (r: number) => (62 - r * Math.cos(rad)).toFixed(2);
            return <path key={angle} {...L} d={`M${x(14)} ${y(14)}L${x(40)} ${y(40)}`} opacity=".6" />;
          })}
          {DIRECTIONS.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return <circle key={`n${angle}`} {...L} cx={(60 + 46 * Math.sin(rad)).toFixed(2)} cy={(62 - 46 * Math.cos(rad)).toFixed(2)} r="3.2" style={{ fill: "var(--paper)" }} />;
          })}
          <path {...L} d="M60 4L63.5 11H56.5Z" />
        </svg>
      );
  }
}

/* -------------------------------------------------------------- practices */

export function PracticeArt({ variant }: { variant: "threads" | "nlp" | "tapping" | "ripple" }) {
  switch (variant) {
    case "threads":
      return <MindArt />;
    case "nlp":
      return (
        <svg viewBox="0 0 120 120" {...svgProps} data-art="nlp" role="img" aria-label="Three points joined in a loop: a thought, the words for it, and what you do next">
          <circle {...L} cx="60" cy="62" r="34" />
          <path {...L} d="M60 28L89.4 79H30.6Z" opacity=".5" />
          {[[60, 28], [89.4, 79], [30.6, 79]].map(([x, y]) => (
            <circle key={`${x}-${y}`} {...L} cx={x} cy={y} r="6.5" style={{ fill: "var(--paper)" }} />
          ))}
        </svg>
      );
    case "tapping":
      return (
        <svg viewBox="0 0 120 120" {...svgProps} data-art="tapping" role="img" aria-label="An arch with eight points along it, each tapped in turn">
          <path {...L} d="M26 104V56a34 34 0 0 1 68 0V104" />
          <path {...L} d="M38 104V58a22 22 0 0 1 44 0V104" opacity=".4" />
          <path {...L} d="M16 104H104" />
          <g className="tap-points">
            {[[60, 36], [46, 41], [74, 41], [38, 58], [82, 58], [38, 78], [82, 78], [60, 94]].map(([x, y], index) => (
              <circle key={index} cx={x} cy={y} r="2.6" style={{ ["--t" as string]: index }} />
            ))}
          </g>
        </svg>
      );
    case "ripple":
      return (
        <svg viewBox="0 0 120 120" {...svgProps} data-art="ripple" role="img" aria-label="Rings spreading outward from a single point">
          <circle {...L} cx="60" cy="62" r="8" />
          <circle {...L} cx="60" cy="62" r="18" opacity=".8" />
          <circle {...L} cx="60" cy="62" r="30" opacity=".55" />
          <circle {...L} cx="60" cy="62" r="44" opacity=".3" />
          <circle cx="60" cy="62" r="2.6" style={{ fill: "var(--detail)", stroke: "none" }} />
        </svg>
      );
  }
}

/* ---------------------------------------------------------- time, the sky */

/** Vimshottari dasha: nine planetary periods of 7, 20, 6, 10, 7, 18, 16, 19 and 17 years, drawn to scale. */
export function TimelineArt() {
  const years = [7, 20, 6, 10, 7, 18, 16, 19, 17];
  const total = years.reduce((sum, y) => sum + y, 0);
  const x0 = 12;
  const width = 136;
  let x = x0;
  const segments = years.map((y) => {
    const w = (y / total) * width;
    const d = `M${x.toFixed(2)} 52H${(x + w).toFixed(2)}V76H${x.toFixed(2)}Z`;
    const mid = x + w / 2;
    x += w;
    return { d, mid };
  });
  return (
    <svg viewBox="0 0 160 120" {...svgProps} data-art="timeline" role="img" aria-label="A bar of nine periods making up a 120 year cycle, one of them marked as the present">
      {segments.map((segment, index) => (
        <path key={index} {...L} d={segment.d} opacity={index % 2 ? 0.7 : 1} />
      ))}
      <path {...L} d={`M${segments[3].mid.toFixed(2)} 38L${(segments[3].mid - 5).toFixed(2)} 46H${(segments[3].mid + 5).toFixed(2)}Z`} />
      {[0, 30, 60, 90, 120].map((age) => {
        const tick = x0 + (age / total) * width;
        return (
          <g key={age}>
            <path {...L} d={`M${tick.toFixed(2)} 76V84`} opacity=".6" />
            <text x={tick.toFixed(2)} y="96" className="offer-art-label" textAnchor="middle">{age}</text>
          </g>
        );
      })}
    </svg>
  );
}

/** The 27 nakshatras as a ring, with one marked where the Moon stood. */
export function WheelArt() {
  const cx = 60;
  const cy = 62;
  const ticks = Array.from({ length: 27 }, (_, i) => {
    const a = (i / 27) * 2 * Math.PI - Math.PI / 2;
    return `M${(cx + 34 * Math.cos(a)).toFixed(2)} ${(cy + 34 * Math.sin(a)).toFixed(2)}L${(cx + 46 * Math.cos(a)).toFixed(2)} ${(cy + 46 * Math.sin(a)).toFixed(2)}`;
  });
  const moon = (3.5 / 27) * 2 * Math.PI - Math.PI / 2;
  return (
    <svg viewBox="0 0 120 120" {...svgProps} data-art="wheel" role="img" aria-label="A ring divided into 27 parts, with the Moon marked in one of them">
      <circle {...L} cx={cx} cy={cy} r="46" />
      <circle {...L} cx={cx} cy={cy} r="34" />
      {ticks.map((d, index) => (
        <path key={index} {...L} d={d} opacity=".8" />
      ))}
      <circle cx={(cx + 40 * Math.cos(moon)).toFixed(2)} cy={(cy + 40 * Math.sin(moon)).toFixed(2)} r="3.4" style={{ fill: "var(--brand-brass)", stroke: "none" }} />
      <circle {...L} cx={cx} cy={cy} r="3" />
    </svg>
  );
}

/** A clock face: the moment a question is asked. */
export function MomentArt() {
  const cx = 60;
  const cy = 62;
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * 2 * Math.PI;
    const inner = i % 3 === 0 ? 34 : 38;
    return `M${(cx + inner * Math.sin(a)).toFixed(2)} ${(cy - inner * Math.cos(a)).toFixed(2)}L${(cx + 44 * Math.sin(a)).toFixed(2)} ${(cy - 44 * Math.cos(a)).toFixed(2)}`;
  });
  return (
    <svg viewBox="0 0 120 120" {...svgProps} data-art="moment" role="img" aria-label="A clock face">
      <circle {...L} cx={cx} cy={cy} r="50" />
      {ticks.map((d, index) => (
        <path key={index} {...L} d={d} />
      ))}
      <path {...L} d="M60 62V34" />
      <path {...L} d="M60 62L78 72" />
      <circle {...L} cx={cx} cy={cy} r="2.6" />
    </svg>
  );
}

/* ----------------------------------------------------------- stones, beads */

const polar = (cx: number, cy: number, rx: number, ry: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return [cx + rx * Math.cos(rad), cy + ry * Math.sin(rad)] as const;
};
const pt = (p: readonly [number, number]) => `${p[0].toFixed(2)} ${p[1].toFixed(2)}`;
const ring = (cx: number, cy: number, rx: number, ry: number, n: number, offset: number) =>
  Array.from({ length: n }, (_, i) => polar(cx, cy, rx, ry, offset + (360 / n) * i));

/** The lines of a gem drawn from above, on an 80 by 80 canvas. */
function gemShapes(cut: GemCut, tint: string) {
  const fill = { fill: tint, fillOpacity: 0.17 } as const;
  switch (cut) {
    case "round": {
      const outer = ring(40, 40, 30, 30, 8, 22.5);
      const table = ring(40, 40, 14, 14, 8, 22.5);
      return (
        <>
          <circle {...L} cx="40" cy="40" r="30" {...fill} />
          <path {...L} d={`M${table.map(pt).join("L")}Z`} />
          {table.map((p, i) => <path key={i} {...L} d={`M${pt(p)}L${pt(outer[i])}`} opacity=".7" />)}
        </>
      );
    }
    case "oval": {
      const outer = ring(40, 40, 22, 30, 8, 22.5);
      const table = ring(40, 40, 10, 14, 8, 22.5);
      return (
        <>
          <path {...L} d="M18 40A22 30 0 1 0 62 40A22 30 0 1 0 18 40" {...fill} />
          <path {...L} d={`M${table.map(pt).join("L")}Z`} />
          {table.map((p, i) => <path key={i} {...L} d={`M${pt(p)}L${pt(outer[i])}`} opacity=".7" />)}
        </>
      );
    }
    case "cushion":
      return (
        <>
          <path {...L} d="M22 12H58Q68 12 68 22V58Q68 68 58 68H22Q12 68 12 58V22Q12 12 22 12Z" {...fill} />
          <path {...L} d="M32 27H48Q53 27 53 32V48Q53 53 48 53H32Q27 53 27 48V32Q27 27 32 27Z" />
          {[[27, 27, 14, 14], [53, 27, 66, 14], [53, 53, 66, 66], [27, 53, 14, 66]].map(([x1, y1, x2, y2]) => (
            <path key={`${x1}${y1}`} {...L} d={`M${x1} ${y1}L${x2} ${y2}`} opacity=".7" />
          ))}
        </>
      );
    case "emerald":
      return (
        <>
          <path {...L} d="M27 10H53L66 23V57L53 70H27L14 57V23Z" {...fill} />
          <path {...L} d="M31 19H49L57 27V53L49 61H31L23 53V27Z" opacity=".8" />
          <path {...L} d="M35 28H45L49 32V48L45 52H35L31 48V32Z" opacity=".6" />
        </>
      );
    case "cabochon":
      return (
        <>
          <path {...L} d="M12 40A28 22 0 1 0 68 40A28 22 0 1 0 12 40" {...fill} />
          <path {...L} d="M22 36A18 11 0 0 1 42 27" opacity=".8" />
          <path {...L} d="M20 52Q40 62 60 52" opacity=".4" />
        </>
      );
    case "pear":
      return (
        <>
          <path {...L} d="M40 8C52 27 62 39 62 52A22 22 0 0 1 18 52C18 39 28 27 40 8Z" {...fill} />
          <path {...L} d="M40 23C47 35 52 44 52 52A12 12 0 0 1 28 52C28 44 33 35 40 23Z" opacity=".8" />
          <path {...L} d="M40 23V10M28 52L20 54M52 52L60 54M40 64V74" opacity=".5" />
        </>
      );
  }
}

/** A Rudraksha bead seen from the side: a sphere with one line for each mukhi (face), meeting at the poles. */
function beadShapes(mukhi: number) {
  const faces = Math.max(1, Math.min(21, mukhi));
  // Turned a little, as a bead is held, so even a one-faced bead shows its line.
  const shown = Array.from({ length: faces }, (_, i) => ((2 * Math.PI) / faces) * i + 0.35).filter((phi) => Math.cos(phi) > 0.04);
  return (
    <>
      <circle {...L} cx="40" cy="40" r="30" />
      {shown.map((phi) => {
        const a = 30 * Math.abs(Math.sin(phi));
        const d = a < 0.8 ? "M40 10V70" : `M40 10A${a.toFixed(2)} 30 0 0 ${Math.sin(phi) > 0 ? 1 : 0} 40 70`;
        return <path key={phi} {...L} d={d} opacity=".8" />;
      })}
      <circle {...L} cx="40" cy="11" r="1.8" />
    </>
  );
}

export function GemArt({ cut, tint }: { cut: GemCut; tint: string }) {
  return (
    <svg viewBox="0 0 80 80" {...svgProps} aria-hidden="true" data-art="gem">
      {gemShapes(cut, tint)}
    </svg>
  );
}

export function BeadArt({ mukhi }: { mukhi: number }) {
  return (
    <svg viewBox="0 0 80 80" {...svgProps} aria-hidden="true" data-art="bead">
      {beadShapes(mukhi)}
    </svg>
  );
}

/** The hub drawing for stones and Rudraksha: one stone and one bead, side by side. */
export function StonesArt() {
  return (
    <svg viewBox="0 0 160 100" {...svgProps} data-art="stones" role="img" aria-label="A cut gemstone beside a Rudraksha bead">
      <g transform="translate(2 10) scale(.98)">{gemShapes("oval", "#9b1c3a")}</g>
      <g transform="translate(78 10) scale(.98)">{beadShapes(5)}</g>
    </svg>
  );
}

/** The opening drawing for a service page, chosen by the page's `art` spec. */
export function OfferArt({ spec, label }: { spec: ArtSpec; label?: string }) {
  switch (spec.kind) {
    case "drawing":
      return <Drawing id={spec.id} label={label ?? "A drawing made for this page"} />;
    case "chart":
      return <HouseChart houses={spec.houses} />;
    case "numbers":
      return <NumberArt variant={spec.variant} />;
    case "plan":
      return <PlanArt variant={spec.variant} />;
    case "practice":
      return <PracticeArt variant={spec.variant} />;
    case "timeline":
      return <TimelineArt />;
    case "wheel":
      return <WheelArt />;
    case "moment":
      return <MomentArt />;
    case "stones":
      return <StonesArt />;
    case "bead":
      return <BeadArt mukhi={spec.mukhi ?? 5} />;
  }
}

/** The drawing on each service's card (homepage and services page), keyed by service slug. */
export const serviceArt = {
  "brain-training": MindArt,
  numerology: NumerologyArt,
  vastu: VastuArt,
  astrology: AstrologyArt,
  "stones-and-rudraksh": StonesArt,
} as const;
