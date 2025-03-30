"use client";

import SectionLayout from "@/components/section/section-layout";
import useCoverStore from "@/stores/cover-store";
import { useEffect } from "react";

interface Props {
  imageSrc: string;
  coupleNames: string;
}

const MainSection = ({ imageSrc, coupleNames }: Props) => {
  const isOpenedCover = useCoverStore((state) => state.isOpen);

  useEffect(() => {
    console.info("isOpenedCover", isOpenedCover)
  }, [isOpenedCover])

  return (
    <SectionLayout>
      <div className="relative flex flex-col items-center text-center py-10 bg-[#FAF3E0]">
          <div className={`w-80 h-96 relative opacity-0 ${ isOpenedCover ? "animate-fadeIn" : "" }`}>
            <div
              className="absolute inset-0 bg-cover bg-center rounded-t-full border-4 border-gold"
              style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
          </div>
        <h2 className="mt-6 text-2xl font-semibold text-gold">{coupleNames}</h2>
      </div>
    </SectionLayout>
  );
};

export default MainSection;
