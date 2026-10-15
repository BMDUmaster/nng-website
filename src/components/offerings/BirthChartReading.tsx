import { Explainer, type DiagramKind } from "@/components/art/Explainer";
import depth from "@/components/art/VisualDepth.module.css";
import { Icon } from "@/components/icons/Icon";
import type { Block, Section } from "@/content/offerings/types";
import { BlockList } from "./Blocks";

const takeaways: Record<string, { heading: string; text: string; diagram?: DiagramKind; caution?: string }> = {
  "birth-details": { heading: "Start with your birth details", text: "Your date, time and place set the chart. If the time is uncertain, say so before the reading.", diagram: "birth-details" },
  rectification: { heading: "Unsure of your birth time?", text: "Dated life events can help assess a possible time. A rectified time remains an assumption, not a confirmed record.", caution: "Practitioners can arrive at different times. Missing or uncertain details limit what can be read." },
  lagna: { heading: "The rising sign anchors the chart", text: "The lagna marks the first house. The other houses are counted from it, which is why birth time matters." },
  houses: { heading: "Twelve houses, different life themes", text: "The houses relate to themes such as work, relationships and home. Narayani focuses on those relevant to your question.", diagram: "houses" },
  grahas: { heading: "Planets are read together", text: "Jyotish gives the nine grahas different symbolic meanings. Their position and relationships matter, not one planet in isolation." },
  signs: { heading: "A sign adds context", text: "A planet, its sign and its house are considered together. No placement gives a complete answer on its own." },
  divisional: { heading: "A closer view of one concern", text: "D1 is the main chart. Traditional readings also use divisional charts such as D9 for partnership and D10 for work.", diagram: "divisional", caution: "Divisional charts depend closely on accurate birth time. They are not independent guarantees." },
  yogas: { heading: "A combination is not a promise", text: "Yogas are named planetary combinations in Jyotish. Their interpretation depends on the rest of the chart, not the name alone." },
  "how-she-reads": { heading: "Your question leads the reading", text: "Begin with what is on your mind. Narayani checks the chart, explains the relevant themes and timing, and discusses your next step. The decision stays with you.", diagram: "how-she-reads" },
};

export function BirthChartIntro({ blocks }: { blocks: Block[] }) {
  return <>
    <p>A kundli maps the sky at your birth. Bring the question you want to discuss; Narayani explains the relevant parts and their limits.</p>
    <details className={depth.depth}>
      <summary>What a kundli contains</summary>
      <BlockList blocks={blocks} />
    </details>
  </>;
}

export function BirthChartSection({ section, compact = false }: { section: Section; compact?: boolean }) {
  const item = takeaways[section.id];
  if (!item) throw new Error(`Missing birth chart takeaway: ${section.id}`);
  const notes = section.blocks.filter(block => block.type === "note" || block.type === "quote");
  const detail = section.blocks.filter(block => block.type !== "note" && block.type !== "quote");
  return <section className={`section-wrap ${depth.reading}`} id={section.id} aria-labelledby={`${section.id}-title`}>
    <div className={item.diagram ? depth.readingGrid : undefined}>
      <div>
        <h2 id={`${section.id}-title`}><Icon id={section.icon} /><span>{item.heading}</span></h2>
        <p>{item.text}</p>
        {item.caution && <p className="offer-note">{item.caution}</p>}
      </div>
      {item.diagram && <Explainer kind={item.diagram} label={`${item.heading}. Educational illustration, not a personal chart.`} />}
    </div>
    {section.id === "houses" ? <p className="offer-note">These are symbolic associations, not a medical diagnosis. Symptoms belong with a doctor. Narayani does not read lifespan.</p> : <BlockList blocks={notes} />}
    {item.diagram === "houses" && <p className={depth.illustrationNote}>Illustrative chart only. House numbers are not zodiac signs or a personal reading.</p>}
    {!compact && <details className={depth.depth}>
      <summary>Explore {section.chip.toLowerCase()} in depth</summary>
      <BlockList blocks={section.id === "houses" ? section.blocks : detail} />
    </details>}
  </section>;
}
