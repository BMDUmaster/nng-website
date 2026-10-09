import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoneArticlePage } from "@/components/learning/StoneLibrary";
import { stoneArticles, stoneArticlePath } from "@/content/stone-articles";

export const dynamicParams = false;
export function generateStaticParams() {
  return stoneArticles.map(article => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = stoneArticles.find(item => item.slug === slug);
  if (!article) notFound();
  return { title: article.title, description: article.summary, alternates: { canonical: stoneArticlePath(slug) }, robots: { index: false, follow: false } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = stoneArticles.find(item => item.slug === slug);
  if (!article) notFound();
  return <StoneArticlePage article={article} />;
}
