import registry from "./registry.json";
import heroes from "./heroes.json";

/**
 * Hand-drawn icons and scenes for the service pages. Each one is drawn for one idea (src/components/icons/src
 * and heroes, compiled by scripts/build-icons.mjs), so a heading, a defined term or a step never borrows a
 * picture drawn for something else. They are server components: the registries stay out of the browser bundle
 * and the page carries only the small SVG it uses.
 *
 * Colour and weight come from the stylesheet (.ic, .dr): an ink line in the brand plum, an accent in brass.
 */
type Item = [number, string] | ["t", number, number, number, number, string];
const icons = registry as unknown as Record<string, Item[]>;
const scenes = heroes as unknown as Record<string, { w: number; h: number; p: Item[] }>;

/** A production build refuses a missing icon or drawing; NNG_ALLOW_MISSING_ART=1 (a dry run of the pipeline only) shows a placeholder instead. */
const strict = process.env.NODE_ENV === "production" && process.env.NNG_ALLOW_MISSING_ART !== "1";

export const hasIcon = (id: string) => id in icons;
export const hasHero = (id: string) => id in scenes;

function shapes(items: Item[], draw: boolean) {
  return items.map((item, index) => {
    if (item[0] === "t") {
      const [, kind, x, y, size, text] = item;
      return (
        <text key={index} className={`k${kind}`} x={x} y={y} fontSize={size}>
          {text}
        </text>
      );
    }
    const [kind, d] = item;
    return <path key={index} className={`k${kind}`} d={d} {...(draw ? { pathLength: 1 } : {})} {...(draw && kind === 4 ? { "data-lit": "" } : {})} />;
  });
}

/** One icon, on a 48 by 48 grid. Decorative: the words beside it carry the meaning. */
export function Icon({ id, className }: { id: string; className?: string }) {
  const items = icons[id];
  if (!items) {
    // While the pages are being built, a missing icon shows as a dashed ring. A production build never ships one.
    if (strict) throw new Error(`No icon drawn for "${id}"`);
    return (
      <svg className={className ? `ic ${className}` : "ic"} viewBox="0 0 48 48" aria-hidden="true" focusable="false" data-missing={id}>
        <circle cx="24" cy="24" r="14" strokeDasharray="3 5" />
      </svg>
    );
  }
  return (
    <svg className={className ? `ic ${className}` : "ic"} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {shapes(items, false)}
    </svg>
  );
}

/** A scene drawn for one page. It draws itself in once when it scrolls into view (the stylesheet's [data-draw] rules). */
export function Drawing({ id, label }: { id: string; label: string }) {
  const scene = scenes[id];
  if (!scene) {
    if (strict) throw new Error(`No drawing made for "${id}"`);
    return (
      <svg className="dr" viewBox="0 0 320 240" role="img" aria-label={label} focusable="false" data-missing={id}>
        <rect x="40" y="40" width="240" height="160" strokeDasharray="4 6" />
      </svg>
    );
  }
  return (
    <svg className="dr" viewBox={`0 0 ${scene.w} ${scene.h}`} role="img" aria-label={label} focusable="false" data-draw="">
      {shapes(scene.p, true)}
    </svg>
  );
}
