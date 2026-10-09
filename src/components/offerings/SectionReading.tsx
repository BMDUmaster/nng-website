import type { Block } from "@/content/offerings/types";
import { BlockList } from "./Blocks";
import { readingParts } from "@/content/offerings/reading";

export function SectionReading({ blocks, label, takeaway, practical = false }: { blocks: Block[]; label: string; takeaway?: string; practical?: boolean }) {
  if (practical) return <BlockList blocks={blocks} />;
  if (takeaway) return <>
    <p className="offer-p">{takeaway}</p>
    <BlockList blocks={blocks.filter(block => block.type === "note" || block.type === "quote")} />
    <details className="offer-depth">
      <summary>Read the background: {label.toLowerCase()}</summary>
      <BlockList blocks={blocks.filter(block => block.type !== "note" && block.type !== "quote")} />
    </details>
  </>;
  const parts = readingParts(blocks);
  if (!parts) return <BlockList blocks={blocks} />;
  return <>
    <BlockList blocks={parts.visible} />
    <details className="offer-depth">
      <summary>Explore {label.toLowerCase()}</summary>
      <BlockList blocks={parts.detail} />
    </details>
  </>;
}

/** Decision-layer copy only; full authored material is preserved in the shared reference region. */
export function SectionTakeaway({ blocks, takeaway }: { blocks: Block[]; takeaway?: string }) {
  const parts = readingParts(blocks);
  const notes = blocks.filter(block => block.type === "note" || block.type === "quote");
  return <>{takeaway ? <p className="offer-p">{takeaway}</p> : <BlockList blocks={parts ? parts.visible.filter(block => block.type !== "note" && block.type !== "quote") : blocks.filter(block => block.type !== "note" && block.type !== "quote")} />}<BlockList blocks={notes} /></>;
}
