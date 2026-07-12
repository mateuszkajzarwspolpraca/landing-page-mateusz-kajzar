import { Hero } from "@/components/hero";
import { Omnie } from "@/components/Omnie";
import { PageScroller } from "@/components/PageScroller";
import { SiteNavbar } from "@/components/navbar";
import { Oferta } from "@/components/Oferta";
import { FAQCarousel } from "@/components/FAQCarousel";
import { Kontakt } from "@/components/Kontakt";
import { Opinie } from "@/components/Opinie";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <SiteNavbar />

      <PageScroller>
        <Hero />
        <Omnie />
        <Oferta />
        <FAQCarousel />
        <Opinie />
        <Kontakt />
      </PageScroller>
    </>
  );
}