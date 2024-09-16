import React from "react";
import WorkPictures from "./templates/WorkPictures";
import dailydriven from "@/public/works/dailydriven.webp";
import urbia from "@/public/works/urbiaid.jpeg";
import { syne } from "@/app/layout";

function Work() {
  const p =
    "As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.";

  return (
    <div id='work'>
      <h2
        className={`${syne.className} font-extrabold text-4xl text-left text-white xl:text-6xl`}
      >
        Work
      </h2>
      <p className='text-left text-white text-base pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg'>
        {p}
      </p>
      <div id='all-works' className='flex gap-2 flex-col md:flex-row md:gap-8'>
        <WorkPictures src={urbia} title='Urbia ID' link={"http://urbia.id"} />
        <WorkPictures src={dailydriven} title='Dailydriven Garage' link={""} />
      </div>
    </div>
  );
}

export default Work;
