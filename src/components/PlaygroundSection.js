import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import CovidInstaPost from '../assets/images/Covid-insta-post.jpg';
import DailydrivenBrosur from '../assets/images/dailydriven-brosur.jpg';
import ErenStreetwear from '../assets/images/Eren-Streetwear.jpg';
import Vlab from '../assets/images/VLAB.webp';
import LaserPresisi from '../assets/images/Laser-presisi-post.webp';
import FlightMenu from '../assets/images/Flight-iron-menu.webp';

const images = [
    "CovidInstaPost",
    "DailydrivenBrosur"
]


function PlaygroundSection (){
    return(
        <div id="playground">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Playground</h2>
            <p className="text-left text-white text-base py-8 xl:pl-[60%] lg:text-base">My journey as a web developer started from graphic design. I have a passion for creating beautiful and functional websites that communicate effectively with the target audience. I have learned UI design and web development skills to deliver high-quality websites.</p>
                <div className="">
                    <div className="w-full columns-2 space-y-6 gap-6 lg:columns-4">
                        <div>
                            <img src={Vlab} alt="" className="rounded-sm"/>
                        </div>
                        <div className="p-0">
                            <img src={CovidInstaPost} alt="" className="rounded-sm"/>
                        </div>
                        <div className="">
                            <img src={ErenStreetwear} alt="" className="rounded-sm  " />
                        </div>
                        <div className="">
                            <img src={LaserPresisi} alt="" className="rounded-sm"/>
                        </div>
                        <div>
                            <img src={FlightMenu} alt="" className="rounded-sm"/>
                        </div>
                        <div className="">
                            <img src={DailydrivenBrosur} alt="" className="rounded-sm"/> 
                        </div>

                    </div>
                
                </div>
            </div>

    );



};

export default PlaygroundSection;
