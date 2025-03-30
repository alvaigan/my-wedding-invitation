import CoverSection from "@/components/section/1_cover";
import MainSection from "@/components/section/2_main";

export default function Home() {
  return (
    <div>
      <CoverSection />

      <MainSection imageSrc="/images/main.jpg" coupleNames="Alvaigan & Ridzka Nur Fajrie" />

    </div>
  );
}
