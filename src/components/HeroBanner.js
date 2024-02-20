function HeroBanner() {
    return(
        <div id="heroBanner" className="">
            <div id="heroBanner-caption">
                <p className="text-right pl-24 text-white text-base">Hi, I am Alvin a web developer based in Bogor, Indonesia. Currently pursuing a degree in information systems at the Open University. I love to learn any field like design, tech, and web development. Feel free to explore my works and my thought</p>
            </div>
            <div id="heroBanner-name">
                <h1 className="font-syne font-extrabold text-6xl text-left my-56 text-white text-center">Alvin Al</h1>
            </div>
            <div id="navbar" className="pr-48">
                <ul className="flex text-left gap-2 flex-col text-white">
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer">Work</li>
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer">Playground</li>
                    <li className="border-b-2 border-gray-100 pb-1 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )

};

export default HeroBanner;