import type { Metadata } from "next";
import CvView from "../views/cv";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Daffario Alexandra Agung Pradana, IT / AI developer.",
  alternates: { languages: { en: "/cv", id: "/id/cv" } },
};

export default function Page() {
  return <CvView lang="en" />;
}
