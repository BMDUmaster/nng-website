"use client";

import { useState } from "react";
import { LoopRail } from "@/components/ui/LoopRail";
import { SocialLogo } from "@/components/brand/SocialLogo";
import { reels, reelTopics } from "@/content/social";
import { asset } from "@/lib/assets";

const topicLabel: Record<string, string> = { vastu: "Vastulogy", numerology: "Numerology", brainology: "Brainology", rashi: "Rashi" };

/** The reels row with topic filters: All, Trending (most viewed), Brainology, Numerology, Vastulogy and Rashi. */
export function ReelFilter() {
  const [topic, setTopic] = useState<(typeof reelTopics)[number]["id"]>("all");
  const shown =
    topic === "all" ? reels
    : topic === "trending" ? [...reels].sort((a, b) => b.count - a.count).slice(0, 8)
    : reels.filter((r) => r.topics.includes(topic));

  return (
    <>
      <div className="ig-filters" role="group" aria-label="Filter reels by topic">
        {reelTopics.map((t) => (
          <button key={t.id} type="button" aria-pressed={topic === t.id} onClick={() => setTopic(t.id)}>
            {t.id === "trending" && (
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8.6 1c.4 2.3-.6 3.6-1.6 4.8C6 7 5 8.2 5.4 10a2.6 2.6 0 0 0 1.3-1.6c.9 1 1.4 2.3 1.2 3.7A4.6 4.6 0 0 0 12.6 8c0-3.2-2.1-5.4-4-7Z" /></svg>
            )}
            {t.label}
          </button>
        ))}
      </div>
      <LoopRail key={topic} label={`Reels: ${reelTopics.find((t) => t.id === topic)?.label}`} className="ig-loop ig-loop-filtered" speed={0.03}>
        {shown.map((post) => (
          <a className="ig-card" key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
            <span className="ig-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(`/images/social/cover-${post.id}.webp`)} alt="" width={540} height={960} loading="lazy" decoding="async" />
              <span className="ig-platform" aria-hidden="true"><SocialLogo platform={post.platform} /></span>
              <span className="ig-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 5.5v13l10-6.5z" /></svg></span>
            </span>
            <span className="ig-meta">
              <span className="visually-hidden">{post.title}{post.topics[0] ? ` (${topicLabel[post.topics[0]]})` : ""}. </span>
              <span className="ig-meta-views"><svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3.5 2v8l6.5-4z" /></svg>{post.views} views</span>
              <span className="ig-meta-go">Watch <span aria-hidden="true">↗</span></span>
            </span>
            <span className="visually-hidden"> (opens {post.platform === "youtube" ? "YouTube" : "Instagram"})</span>
          </a>
        ))}
      </LoopRail>
    </>
  );
}
