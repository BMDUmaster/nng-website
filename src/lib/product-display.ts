/** Card-only presentation. Catalogue titles, prices and order messages remain unchanged. */
export function productDisplay(title: string, details: string[]) {
  const readable = title.replace(/\b[A-Z]{4,}\b/g, word => word[0] + word.slice(1).toLowerCase());
  const separator = readable.search(/\s(?:\||•)\s|\swith\s/i);
  const split = readable.length > 65 && separator > 20;
  return {
    title: split ? readable.slice(0, separator) : readable,
    subtitle: split ? readable.slice(separator).replace(/^\s*[|•]\s*/, "").trim() : "",
    specification: details.find(item => /^(beads? size|size|material):/i.test(item)) ?? "",
  };
}
