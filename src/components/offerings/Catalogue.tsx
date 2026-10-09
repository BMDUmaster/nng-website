"use client";

import { useState } from "react";
import { BeadArt, GemArt } from "@/components/art/OfferArt";
import { Icon } from "@/components/icons/Icon";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import type { CatalogueItem } from "@/content/offerings/types";

/**
 * The stones or the beads a page describes: a drawing made for this site (never a product photograph),
 * what tradition links it with, a few points worth knowing, and an enquiry. No fee is published for goods:
 * the price is shared when you enquire.
 */
export function Catalogue({
  heading,
  icon,
  intro,
  items,
  topicPrefix,
  source,
}: {
  heading: string;
  icon: string;
  intro: string;
  items: CatalogueItem[];
  topicPrefix: string;
  source: string;
}) {
  const [selection, setSelection] = useState("");
  const shown = items.filter(item => !selection || item.id === selection);
  return (
    <section className="section-wrap section-space offer-catalogue" id="catalogue" aria-labelledby="catalogue-title">
      <div className="offer-catalogue-head">
        <h2 id="catalogue-title">
          <Icon id={icon} />
          <span>{heading}</span>
        </h2>
        <p>{intro}</p>
      </div>
      <label className="catalogue-select">Choose a stone or bead<select value={selection} onChange={event => setSelection(event.target.value)}><option value="">All entries</option>{items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      <ul className="offer-catalogue-list">
        {shown.map((item) => (
          <li key={item.id} id={item.id}>
            <div className="offer-catalogue-art">{item.art.kind === "gem" ? <GemArt cut={item.art.cut} tint={item.art.tint} /> : <BeadArt mukhi={item.art.mukhi} />}</div>
            <div className="offer-catalogue-body">
              <h3>
                {item.name}
                {item.other && <span>{item.other}</span>}
              </h3>
              <p className="offer-catalogue-tradition">{item.tradition}</p>
              <details className="offer-depth offer-item-detail">
                <summary>Details for {item.name}</summary>
                <p>{item.summary}</p>
                <ul className="offer-list offer-list-tight">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
                </ul>
              </details>
              <div className="offer-catalogue-foot">
                <EnquiryTrigger topic={`${topicPrefix}: ${item.name}`} source={`${source}-${item.id}`} className="text-link">
                  Enquire about {item.name}
                </EnquiryTrigger>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
