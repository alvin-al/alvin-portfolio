import React from "react";
import WorkBlock from "./WorkBlock";
import dailydriven from '../assets/images/dailydriven.webp';
import urbia from '../assets/images/urbiaid.webp';


function WorkSection (){
    return(
        <div id="work">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white border-b-2 pb-4">Work</h2>
            <p className="text-left text-white text-base pt-4 mb-12">As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.</p>
            <div id="all-works">
                <WorkBlock src={dailydriven} title="Dailydriven Garage" />
                <WorkBlock src={urbia} title="Urbia ID" />
            </div>
        </div>
    );



};

export default WorkSection;