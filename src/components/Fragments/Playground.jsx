import React from "react";
import CovidInstaPost from '../../assets/images/Covid-insta-post.webp';
import DailydrivenBrosur from '../../assets/images/dailydriven-brosur.webp';
import ErenStreetwear from '../../assets/images/Eren-Streetwear.webp';
import Vlab from '../../assets/images/VLAB.webp';
import LaserPresisi from '../../assets/images/Laser-presisi-post.webp';
import FlightMenu from '../../assets/images/Flight-iron-menu.webp';

const images = [
    { src: CovidInstaPost, alt: "CovidInstaPost" },
    { src: FlightMenu, alt: "FlightMenu" },
    { src: DailydrivenBrosur, alt: "DailydrivenBrosur" },
    { src: ErenStreetwear, alt: "ErenStreetwear" },
    { src: Vlab, alt: "Vlab" },
    { src: LaserPresisi, alt: "LaserPresisi" },
    
];

const modalPopup = (image.src) => {
    
}


const Playground = () => {
    return (
        <div id="playground">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white xl:text-6xl">Playground</h2>
            <p className="text-left text-white text-base pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg">My journey as a web developer started from graphic design. I have a passion for creating beautiful and functional websites that communicate effectively with the target audience. I have learned UI design and web development skills to deliver high-quality websites.</p>
            <div className="w-full columns-2 space-y-4 lg:space-y-6 gap-4 lg:gap-6 lg:columns-4">
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img src={image.src} alt={image.alt} className="rounded-sm" onClick={image.src}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playground;
