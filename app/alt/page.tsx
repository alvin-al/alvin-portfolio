import Homepage from "@/components/alt_page/Homepage";
import Navigation from "@/components/alt_page/navigation";
import React from "react";

const page = () => {
  return (
    <div className='bg-[#F8F0E5] w-full h-full pb-40 text-2xl px-8 md:px-20'>
      <Navigation />
      <Homepage />
    </div>
  );
};

export default page;
