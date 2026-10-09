import heroRegistry from "@/components/icons/heroes.json";
import iconRegistry from "@/components/icons/registry.json";
import { choiceGroups } from "../choices";
import routes from "../routes.json";
import { pages as authored } from "./pages";
import { groupOfPage, hubs } from "./taxonomy";
import { pagePath, validatePage } from "./validate";
import type { HubSlug, OfferingPage } from "./types";

export type { Block, CatalogueItem, HubSlug, OfferingPage, Section } from "./types";
export { groupOfPage, hubInfo, hubs } from "./taxonomy";

/** The path of a page, as listed in src/content/routes.json. The hub page has an empty slug. */
export const offeringPath = pagePath;


/* ------------------------------------------------------------------ integrity
   These checks run when the site is built, so a page that breaks the shape (or a route with no page, or a
   page with no route) stops the build instead of reaching visitors. The rules themselves live in validate.ts. */
const problems: string[] = [];
/* While the pages are being built, a missing icon or drawing only shows as a placeholder; a production build refuses it. */
const strict = process.env.NODE_ENV === "production" && process.env.NNG_ALLOW_MISSING_ART !== "1";
const iconIds = new Set(Object.keys(iconRegistry));
const heroIds = new Set(Object.keys(heroRegistry));
const routePaths = routes.map((route) => route.path);
// Educational articles below /articles/ have their own content model.
const servicePaths = routePaths.filter((path) => /^\/services\/[a-z0-9-]+\/(?:[a-z0-9-]+\/)?$/.test(path));
const byPath = new Map<string, OfferingPage>();

for (const page of authored) {
  const path = pagePath(page);
  if (byPath.has(path)) problems.push(`duplicate page for ${path}`);
  byPath.set(path, page);
  problems.push(...validatePage(page, routePaths, { iconIds: strict ? iconIds : undefined, taxonomy: { hubs, groupOfPage } }));
  if (strict && page.art.kind === "drawing" && !heroIds.has(page.art.id)) problems.push(`${path}: the drawing "${page.art.id}" has not been made`);
}
/* No two pages open with the same drawing, and no two pages share an icon of their own. */
const artOwners = new Map<string, string>();
const iconOwners = new Map<string, string>();
for (const [path, page] of byPath) {
  const art = JSON.stringify(page.art);
  const sameArt = artOwners.get(art);
  if (sameArt) problems.push(`${path} opens with the same drawing as ${sameArt}`);
  else artOwners.set(art, path);
  const sameIcon = iconOwners.get(page.icon);
  if (sameIcon) problems.push(`${path} has the same page icon (${page.icon}) as ${sameIcon}`);
  else iconOwners.set(page.icon, path);
}
for (const path of servicePaths) if (!byPath.has(path)) problems.push(`no content for ${path}`);
for (const path of byPath.keys()) if (!servicePaths.includes(path)) problems.push(`content for ${path} is not listed in src/content/routes.json`);
for (const group of choiceGroups) {
  for (const choice of group.choices) {
    if (!routePaths.includes(choice.href)) problems.push(`choices: "${choice.say}" points at ${choice.href}, which is not a route`);
  }
}
if (problems.length) throw new Error(`Service pages are not ready:\n - ${problems.join("\n - ")}`);

/** Every service page, in the order of src/content/routes.json. */
export const offeringPages: OfferingPage[] = servicePaths.map((path) => byPath.get(path)!);

export const getOffering = (hub: HubSlug, slug: string): OfferingPage => {
  const page = byPath.get(`/services/${hub}/${slug ? `${slug}/` : ""}`);
  if (!page) throw new Error(`No service page for ${hub}/${slug}`);
  return page;
};

export const hubPage = (hub: HubSlug): OfferingPage => getOffering(hub, "");
export const childPages = (hub: HubSlug): OfferingPage[] => offeringPages.filter((page) => page.hub === hub && page.slug !== "");
export const offeringByPath = (path: string): OfferingPage | undefined => byPath.get(path);
