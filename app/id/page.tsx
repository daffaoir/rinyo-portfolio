import type { Metadata } from "next";
import HomeView from "../views/home";

export const metadata: Metadata = {
  title: "Daffario Alexandra, IT / AI developer",
  description: "Daffario Alexandra membangun tools internal, integrasi, dan AI praktis untuk bisnis kecil di bidang pariwisata dan hospitality.",
  alternates: { canonical: "/id", languages: { en: "/", id: "/id" } },
};

export default function Page() {
  return <HomeView lang="id" />;
}
