import React from "react";
import FooterSec from "@/components/Footer";
import Hero from "@/components/Hero";
import Playground from "@/components/Playground";
import Work from "@/components/Work";
import EmailSection from "@/components/EmailSection";

const Homepage: React.FC = () => {
  return (
    <div className='flex flex-col gap-64'>
      <div>
        <Hero />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Playground />
      </div>
      <div>
        <EmailSection />
      </div>
      <div className='-p-64 -mt-32'>
        <FooterSec />
      </div>
    </div>
  );
};

export default Homepage;
