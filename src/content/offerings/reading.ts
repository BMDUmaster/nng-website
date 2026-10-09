import type { Block } from "./types";

/** Keep every authored block while shortening the default reading path. */
export function readingParts(blocks: Block[]) {
  const words = JSON.stringify(blocks).split(/\s+/).length;
  if (words <= 65) return null;

  const visible: Block[] = [];
  const detail: Block[] = [];
  const first = blocks[0];
  if (first?.type === "p") {
    const openings = [...first.text.matchAll(/[.!?](?=\s)/g)]
      .map(match => first.text.slice(0, match.index! + 1))
      .filter(text => {
        const count = text.split(/\s+/).length;
        return count >= 8 && count <= 45 && (text.match(/\*/g)?.length ?? 0) % 2 === 0;
      });
    const opening = openings[0];
    // Do not split italic markup across paragraphs.
    if (first.text.split(/\s+/).length > 45 && opening &&
        (opening.match(/\*/g)?.length ?? 0) % 2 === 0) {
      visible.push({ type: "p", text: opening });
      detail.push({ type: "p", text: first.text.slice(opening.length).trimStart() });
    } else visible.push(first);
  }
  for (const block of blocks.slice(first?.type === "p" ? 1 : 0)) {
    if (block.type === "note" || block.type === "quote") visible.push(block);
    else detail.push(block);
  }
  return detail.length ? { visible, detail } : null;
}
