import Work from "@/components/section/Work";
import HeroBanner from "@/components/alt_page/HeroBanner";
import React from "react";
import AboutMeShort from "@/components/section/AboutMeShort";
import Contact from "@/components/section/Contact";
// import Blog from "@/components/section/Blog";

const page = () => {
  return(
      <div className='bg-[#F8F0E5] w-full h-full pb-40 gap-48 md:gap-32 flex flex-col px-8 md:px-20'>
      <HeroBanner />
      <AboutMeShort />
      <Work />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

export default page;
