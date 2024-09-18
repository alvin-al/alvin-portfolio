import React from "react";
import CovidInstaPost from "@/public/playground_image/Covid-insta-post.webp";
import DailydrivenBrosur from "@/public/playground_image/dailydriven-brosur.webp";
import ErenStreetwear from "@/public/playground_image/Eren-Streetwear.webp";
import Vlab from "@/public/playground_image/VLAB.webp";
import LaserPresisi from "@/public/playground_image/Laser-presisi-post.webp";
import FlightMenu from "@/public/playground_image/Flight-iron-menu.webp";
import PlaygroundImages from "@/components/templates/PlaygroundImages";
import SubHeader from "./ui/SubHeader";

const images = [
  { src: CovidInstaPost, alt: "Covid Instagram Post" },
  { src: FlightMenu, alt: "Flight Menu" },
  { src: DailydrivenBrosur, alt: "Dailydriven Brosur" },
  { src: ErenStreetwear, alt: "Eren Streetwear" },
  { src: Vlab, alt: "Vlab" },
  { src: LaserPresisi, alt: "Laser Presisi Insta Post" },
];

const playgroundDescription =
  "My journey as a web developer started from graphic design. I have a passion for creating beautiful and functional websites that communicate effectively with the target audience. I have learned UI design and web development skills to deliver high-quality websites.";

const Playground = () => {
  return (
    <div id='playground'>
      <SubHeader>Playground</SubHeader>
      <p className='pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg text-white'>
        {playgroundDescription}
      </p>

      <div className='w-full columns-2 space-y-4 lg:space-y-6 gap-4 lg:gap-6 lg:columns-4 '>
        {images.map((image, index) => (
          <PlaygroundImages
            src={image.src.src}
            alt={image.alt}
            ind={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Playground;
