import React from "react";
import WorkBlock from "./WorkBlock";
import dailydriven from '../assets/images/dailydriven.webp';
import urbia from '../assets/images/urbiaid.webp';


function WorkSection (){
    return(
        <div id="work">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Work</h2>
            <p className="text-left text-white text-base py-8 xl:pl-[60%] lg:text-base">As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.</p>
            <div id="all-works" className="flex gap-2 flex-col md:flex-row md:gap-8">
                <WorkBlock src={dailydriven} title="Dailydriven Garage" />
                <WorkBlock src={urbia} title="Urbia ID" />
            </div>
        </div>
    );



};

export default WorkSection;