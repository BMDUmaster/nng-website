"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

type Topic = { path: string; title: string; card: string; icon: string; group: string };
export function TopicDirectory({ topics, groups }: { topics: Topic[]; groups: { id: string; label: string }[] }) {
  const [group, setGroup] = useState("");
  const [query, setQuery] = useState("");
  const rows = topics.filter(topic => (!group || topic.group === group) && `${topic.title} ${topic.card}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <div className="topic-directory">
    <div className="directory-controls">
      <label>Choose an area<select value={group} onChange={event => setGroup(event.target.value)}><option value="">All topics</option>{groups.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
      <label>Find a topic<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search these topics" /></label>
    </div>
    <p className="directory-count" role="status">{rows.length} {rows.length === 1 ? "topic" : "topics"}{group || query ? " found" : " available"}</p>
    <ul className="topic-directory-list">{rows.map(topic => <li key={topic.path}><Link prefetch={false} href={topic.path}><Icon id={topic.icon} /><span><strong>{topic.title}</strong><span>{topic.card}</span></span><span aria-hidden="true">↗</span></Link></li>)}</ul>
    {!rows.length && <p>No matching topic. Try another word or clear the filters.</p>}
    {(group || query) && <button type="button" className="text-link" onClick={() => { setGroup(""); setQuery(""); }}>Show all topics</button>}
  </div>;
}
