import Work from "@/components/section/Work";
import HeroBanner from "@/components/alt_page/HeroBanner";
import Navigation from "@/components/element/Navigation";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F8F0E5] w-full h-full pb-40 text-2xl px-8 md:px-20">
      <Navigation />
      <HeroBanner />
      <Work />
    </div>
  );
};

export default page;
