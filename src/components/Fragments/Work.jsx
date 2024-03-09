import React from "react";
import WorkPictures from "../Elements/WorkPictures";
import dailydriven from "../../assets/images/dailydriven.webp";
import urbia from '../../assets/images/urbiaid.webp';


function Work (){
    return(
        <div id="work">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Work</h2>
            <p className="text-left text-white text-base pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg">As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.</p>
            <div id="all-works" className="flex gap-2 flex-col md:flex-row md:gap-8">
                <WorkPictures src={dailydriven} title="Dailydriven Garage" />
                <WorkPictures src={urbia} title="Urbia ID" />
            </div>
        </div>
    );



};

export default Work;