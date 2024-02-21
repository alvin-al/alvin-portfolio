import React from "react";
import CovidInstaPost from '../assets/images/Covid-insta-post.jpg';
import DailydrivenBrosur from '../assets/images/dailydriven-brosur.jpg';
import ErenStreetwear from '../assets/images/Eren-Streetwear.jpg';
import Vlab from '../assets/images/VLAB.webp';
import LaserPresisi from '../assets/images/Laser-presisi-post.webp';



function PlaygroundSection (){
    return(
        <div id="playground">
            <h2 className="font-syne font-extrabold text-4xl text-left text-white border-b-2 pb-4">Playground</h2>
            <p className="text-left text-white text-base pt-4 mb-12">My journey as a web developer started from graphic design. I have a passion for creating beautiful and functional websites that communicate effectively with the target audience. I have learned UI design and web development skills to deliver high-quality websites.</p>
            <div id="all-playground" className="grid box-border gap-4">
                <img src={Vlab} alt="" className="rounded-sm" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-4">
                        <img src={CovidInstaPost} alt="" className="rounded-sm "/>
                        <img src={DailydrivenBrosur} alt="" className="rounded-sm"/>
                    </div>
                    <div className="grid h-fit gap-4">
                        <img src={ErenStreetwear} alt="" className="rounded-sm "/>
                        <img src={LaserPresisi} alt="" className="rounded-sm "/>        
                    </div>
                </div>
            </div>
        </div>
    );



};

export default PlaygroundSection;
