import Work from "@/components/section/Work";
import HeroBanner from "@/components/alt_page/HeroBanner";
import React from "react";
import AboutMeShort from "@/components/section/AboutMeShort";
import Contact from "@/components/section/Contact";
// import Blog from "@/components/section/Blog";
import Entrance from "@/components/ui/Entrance";

const page = () => {
  return(
    <div className='bg-[#F8F0E5] w-full h-full gap-48 md:gap-32 flex flex-col px-8 md:px-20'>
      <Entrance>
        <HeroBanner />
      </Entrance>
      <Entrance>
        <AboutMeShort />
      </Entrance>
      <Entrance>
        <Work />
      </Entrance>
      {/* <Blog /> */}
      <div className="pb-48">
        <Entrance>
          <Contact />
        </Entrance>
      </div>
    </div>
  );
};

export default page;
