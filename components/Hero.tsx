"use client";
import { Syne } from "next/font/google";
import Navbar from "./templates/Navbar";
import SplitTextUp from "./ui/SplitTextUp";
import SplitTextLine from "./ui/SplitTextLine";

const syne = Syne({
  subsets: ["latin"],
});

const helloText = [
  "Hi, I’m Alvin, a passionate web developer from Bogor, Indonesia.",
  "I’m currently pursuing a degree in Information Systems at the Open",
  "University. My interests span across design, technology, and web ",
  "development, and I’m always eager to learn and explore new things.",
  "Feel free to check out my works and thoughts below!",
];

const Hero = () => {
  return (
    <div
      className='flex flex-col justify-between h-[90vh] md:h-[96vh]'
      id='heroBanner'
    >
      <div id='heroBanner-caption' className='flex items-end flex-col '>
        {helloText.map((text, index) => (
          <SplitTextLine
            key={index}
            className='self-end text-white text-base xl:text-lg'
            index={index + 20}
          >
            <span>{text}</span>
          </SplitTextLine>
        ))}
      </div>
      <div id='heroBanner-name' className='flex flex-col '>
        <SplitTextUp
          className={`${syne.className} font-extrabold text-6xl text-white text-center md:text-8xl md:text-left 2xl:text-[196px] flex`}
        >
          Alvin Al
        </SplitTextUp>
        {/* <p className='text-center md:text-left text-white text-xl uppercase'>
          Web Developer
        </p> */}
        <SplitTextLine
          className='text-center md:text-left text-white text-xl uppercase'
          index={5}
        >
          Web Developer
        </SplitTextLine>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
