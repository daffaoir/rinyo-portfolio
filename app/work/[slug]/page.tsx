import type { Metadata } from "next";
import { studies } from "@/lib/content";
import StudyView, { studyMeta } from "../../views/study";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { ...studyMeta(slug, "en"), alternates: { languages: { en: `/work/${slug}`, id: `/id/work/${slug}` } } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <StudyView slug={slug} lang="en" />;
}
