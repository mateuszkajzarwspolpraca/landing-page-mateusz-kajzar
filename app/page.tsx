import { Hero } from "@/components/hero";
import { Omnie } from "@/components/Omnie";
import { PageScroller } from "@/components/PageScroller";
import { SiteNavbar } from "@/components/navbar";
import { Oferta } from "@/components/Oferta";
import { FAQCarousel } from "@/components/FAQCarousel";

export default function Home() {
  return (
    <>
      <SiteNavbar />

      <PageScroller>
        <Hero />
        <Omnie />
        <Oferta />
        <FAQCarousel />
      </PageScroller>
    </>
  );
}