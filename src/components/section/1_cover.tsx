"use client";

import SectionLayout from "@/components/section/section-layout";
import useCoverStore from "@/stores/cover-store";
import { useState } from "react";

const CoverSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isOpen = useCoverStore((state) => state.isOpen);
  const setCoverState = useCoverStore((state) => state.setCoverState);

  const handleOpen = () => {
    setIsVisible(false)
    setCoverState(isOpen);
  };

  return (
      isVisible && (
      <SectionLayout>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white w-full h-full flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-xl font-semibold mb-2">Dear, Maman</h2>
            <p className="text-gray-600 mb-4">{`You're invited to our wedding`}</p>
            <button
              onClick={handleOpen}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
              Open Invitation
            </button>
          </div>
        </div>
      </SectionLayout>
      )
  );
};

export default CoverSection;
