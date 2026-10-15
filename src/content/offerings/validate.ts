import type { Block, IconId, OfferingPage } from "./types";
import type { HubInfo } from "./taxonomy";

/**
 * The shape and limits every service page must meet. Used twice: when the site is built (index.ts, so a bad
 * page stops the build) and from the command line while a page is being written:
 *
 *   node scripts/check-offering.mjs src/content/offerings/<file>.ts
 *
 * It imports types only (the taxonomy and the icon list are passed in), so Node can run it directly.
 */
export function pagePath(page: Pick<OfferingPage, "hub" | "slug">) {
  return `/services/${page.hub}/${page.slug ? `${page.slug}/` : ""}`;
}

export type ValidateOptions = {
  /** Every icon id that may be used (the vocabulary during drafting, the drawn registry at build). Omit to skip the existence check. */
  iconIds?: Set<string>;
  /** The hubs and sub-categories from taxonomy.ts, and which sub-category each page sits in. */
  taxonomy: { hubs: HubInfo[]; groupOfPage: Record<string, string> };
};

const ICON_FORMAT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** Icons the template draws itself; page content never uses them. */
const TEMPLATE_ICONS = ["gen-question", "gen-fees", "gen-next-step", "gen-six-months"];

function checkBlock(problems: string[], where: string, block: Block, icon: (id: IconId | undefined, label: string) => void) {
  if (block.type === "table") {
    if (block.head.length < 2) problems.push(`${where}: a table needs at least two columns`);
    block.rows.forEach((row, index) => {
      if (row.length !== block.head.length) problems.push(`${where}: table row ${index + 1} has ${row.length} cells, the header has ${block.head.length}`);
    });
    if (block.icons) {
      if (block.icons.length !== block.rows.length) problems.push(`${where}: a table has ${block.rows.length} rows but ${block.icons.length} icons`);
      block.icons.forEach((id, index) => icon(id, `table row ${index + 1}`));
    }
  }
  if ((block.type === "list" || block.type === "steps" || block.type === "terms") && block.items.length === 0) problems.push(`${where}: an empty ${block.type}`);
  if (block.type === "terms") block.items.forEach((item) => icon(item.icon, `term "${item.term}"`));
  if (block.type === "steps") block.items.forEach((item) => icon(item.icon, `step "${item.title}"`));
  if (block.type === "p" && block.text.trim().length < 20) problems.push(`${where}: a paragraph is too short to be one`);
}

export function validatePage(page: OfferingPage, routePaths: string[], options: ValidateOptions): string[] {
  const problems: string[] = [];
  const where = pagePath(page);
  const limit = (label: string, value: string | undefined, max: number) => {
    if (!value || value.length === 0) problems.push(`${where}: ${label} is empty`);
    else if (value.length > max) problems.push(`${where}: ${label} is ${value.length} characters, the limit is ${max}`);
  };
  const count = (label: string, n: number, min: number, max: number) => {
    if (n < min || n > max) problems.push(`${where}: ${label} has ${n} items, expected ${min} to ${max}`);
  };

  /* Every icon on a page is used once. A heading and a term never share a drawing. */
  const used = new Map<string, string>();
  const icon = (id: IconId | undefined, label: string) => {
    if (!id) {
      problems.push(`${where}: ${label} has no icon`);
      return;
    }
    if (!ICON_FORMAT.test(id)) {
      problems.push(`${where}: ${label} has the icon id "${id}", which is not lowercase words joined by hyphens`);
      return;
    }
    if (TEMPLATE_ICONS.includes(id)) problems.push(`${where}: ${label} uses "${id}", an icon the template draws itself`);
    if (options.iconIds && !options.iconIds.has(id)) problems.push(`${where}: ${label} uses the icon "${id}", which is not in the icon vocabulary`);
    const before = used.get(id);
    if (before) problems.push(`${where}: the icon "${id}" is used twice on one page (${before}, and ${label})`);
    else used.set(id, label);
  };

  limit("title", page.title, 60);
  limit("metaTitle", page.metaTitle, 44);
  limit("metaDescription", page.metaDescription, 155);
  limit("card", page.card, 90);
  limit("lead", page.lead, 320);
  limit("enquiryTopic", page.enquiryTopic, 80);
  limit("cta", page.cta, 60);
  if (page.metaDescription && page.metaDescription.length < 70) problems.push(`${where}: metaDescription is under 70 characters`);

  icon(page.icon, "the page icon");
  const { hubs, groupOfPage } = options.taxonomy;
  const hubInfo = hubs.find((hub) => hub.slug === page.hub);
  if (!hubInfo) problems.push(`${where}: unknown hub ${page.hub}`);
  if (page.slug === "") {
    if (page.group !== "") problems.push(`${where}: a hub page has an empty group`);
  } else {
    const expected = groupOfPage[`${page.hub}/${page.slug}`];
    if (!page.group) problems.push(`${where}: group is empty`);
    else if (hubInfo && !hubInfo.groups.some((group) => group.id === page.group)) problems.push(`${where}: group "${page.group}" is not a sub-category of ${page.hub}`);
    else if (expected && expected !== page.group) problems.push(`${where}: group "${page.group}" should be "${expected}"`);
  }

  count("covers", page.covers.length, 3, 7);
  page.covers.forEach((phrase) => limit(`covers "${phrase}"`, phrase, 32));

  count("intro", page.intro.length, 2, 4);
  count("sections", page.sections.length, 3, 9);
  count("faqs", page.faqs.length, 6, 12);
  count("related", page.related.length, 2, 4);

  limit("lookAt.heading", page.lookAt.heading, 70);
  icon(page.lookAt.icon, "the lookAt heading");
  count("lookAt.items", page.lookAt.items.length, 3, 6);
  page.lookAt.items.forEach((item, index) => {
    icon(item.icon, `lookAt item ${index + 1}`);
    limit(`lookAt item ${index + 1}`, item.text, 150);
  });

  if (page.bring.heading) limit("bring.heading", page.bring.heading, 60);
  icon(page.bring.icon, "the bring heading");
  count("bring.items", page.bring.items.length, 1, 6);
  page.bring.items.forEach((item, index) => {
    icon(item.icon, `bring item ${index + 1}`);
    limit(`bring item ${index + 1}`, item.text, 130);
  });

  if (page.session) {
    count("session.steps", page.session.steps.length, 3, 5);
    icon(page.session.icon, "the session heading");
    if (page.session.heading) limit("session.heading", page.session.heading, 70);
    page.session.steps.forEach((step) => icon(step.icon, `session step "${step.title}"`));
  }
  if (page.suits) {
    icon(page.suits.icon, "the suits heading");
    count("suits.yes", page.suits.yes.length, 2, 4);
    count("suits.no", page.suits.no.length, 2, 4);
  }

  const ids = new Set<string>();
  for (const section of page.sections) {
    if (!/^[a-z0-9-]+$/.test(section.id)) problems.push(`${where}: section id "${section.id}" must use a-z, 0-9 and hyphens`);
    if (["session", "suits", "fees", "faq", "pages", "catalogue", "overview", "related", "choose", "ready"].includes(section.id)) problems.push(`${where}: section id "${section.id}" is reserved`);
    if (ids.has(section.id)) problems.push(`${where}: duplicate section id "${section.id}"`);
    ids.add(section.id);
    limit(`section "${section.id}" heading`, section.heading, 90);
    limit(`section "${section.id}" chip`, section.chip, 24);
    icon(section.icon, `section "${section.id}"`);
    if (section.blocks.length === 0) problems.push(`${where}: section "${section.id}" has no blocks`);
    section.blocks.forEach((block) => checkBlock(problems, `${where} section "${section.id}"`, block, icon));
  }
  page.intro.forEach((block) => checkBlock(problems, `${where} intro`, block, icon));
  page.related.forEach((path) => {
    if (!routePaths.includes(path)) problems.push(`${where}: related path ${path} is not a route`);
    if (!/^\/services\/[a-z0-9-]+\//.test(path) && path !== "/hand-holding-program/") problems.push(`${where}: related path ${path} must be a service page or /hand-holding-program/`);
    if (path === where) problems.push(`${where}: a page cannot list itself as related`);
  });
  const faqQuestions = new Set<string>();
  for (const faq of page.faqs) {
    if (faqQuestions.has(faq.q)) problems.push(`${where}: duplicate FAQ "${faq.q}"`);
    faqQuestions.add(faq.q);
    if (!faq.q.trim().endsWith("?")) problems.push(`${where}: the FAQ "${faq.q}" should end with a question mark`);
    if (faq.a.length < 40) problems.push(`${where}: the answer to "${faq.q}" is too short`);
    if (faq.a.length > 900) problems.push(`${where}: the answer to "${faq.q}" is over 900 characters`);
  }
  if (page.slug === "" && !page.indexHeading) problems.push(`${where}: a hub page needs indexHeading`);
  if (page.slug !== "" && page.indexHeading) problems.push(`${where}: only a hub page has indexHeading`);
  if (page.catalogue) {
    count("catalogue.items", page.catalogue.items.length, 2, 24);
    limit("catalogue chip", page.catalogue.chip, 24);
    icon(page.catalogue.icon, "the catalogue heading");
  }
  return problems;
}

/** Every icon id a page uses, for the build report and the icon studios. */
export function iconsOfPage(page: OfferingPage): string[] {
  const found: string[] = [page.icon, page.lookAt.icon, ...page.lookAt.items.map((item) => item.icon), page.bring.icon, ...page.bring.items.map((item) => item.icon)];
  if (page.suits) found.push(page.suits.icon);
  if (page.session) found.push(page.session.icon, ...page.session.steps.map((step) => step.icon));
  if (page.catalogue) found.push(page.catalogue.icon);
  const fromBlock = (block: Block) => {
    if (block.type === "terms") found.push(...block.items.map((item) => item.icon));
    if (block.type === "steps") found.push(...block.items.map((item) => item.icon));
    if (block.type === "table" && block.icons) found.push(...block.icons);
  };
  page.intro.forEach(fromBlock);
  for (const section of page.sections) {
    found.push(section.icon);
    section.blocks.forEach(fromBlock);
  }
  return found;
}
