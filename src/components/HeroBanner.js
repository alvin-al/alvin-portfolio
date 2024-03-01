function HeroBanner() {
    return(
        <div id="heroBanner" className="">
            <div id="heroBanner-caption">
                <p className="text-right pl-24 text-white text-base md:pl-96 lg:pl-[60%] xl:text-lg">Hi, I am Alvin a web developer based in Bogor, Indonesia. Currently pursuing a degree in information systems at the Open University. I love to learn any field like design, tech, and web development. Feel free to explore my works and my thought</p>
            </div>
            <div id="heroBanner-name" className="flex flex-col my-52">
                <h1 className="font-syne font-extrabold text-6xl text-white text-center md:text-8xl md:text-left xl:text-[256px]">Alvin Al</h1>
                <p className="text-center md:text-left text-white text-xl uppercase">Web Developer</p>
            </div>
            <div id="navbar" className="pr-48 md:pr-[500px] lg:pr-[75%]">
                <ul className="flex text-left gap-2 flex-col text-white">
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg"><a href="#work">Work</a></li>
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg"><a href="#playground">Playground</a></li>
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer xl:text-lg"><a href="#getintouch">Contact</a></li>
                </ul>
            </div>
        </div>
    )

};

export default HeroBanner;