import React from "react";
import WorkPictures from "./templates/WorkPictures";
import dailydriven from "@/public/works/dailydriven.webp";
import urbia from "@/public/works/urbiaid.jpeg";
import SubHeader from "./ui/SubHeader";

function Work() {
  const p =
    "As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.";

  return (
    <div id='work'>
      <SubHeader>Work</SubHeader>
      <p className='text-left text-white text-base pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg'>
        {p}
      </p>
      <div id='all-works' className=''>
        <div>
          <WorkPictures
            src={urbia.src}
            title='Urbia ID'
            link={"http://urbia.id"}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
