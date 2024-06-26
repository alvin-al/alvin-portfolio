import FooterSec from "../components/Fragments/Footer.jsx";
import Hero from "../components/Fragments/Hero.jsx";
import Playground from "../components/Fragments/Playground.jsx";
import Work from "../components/Fragments/Work.jsx";
import EmailSection from "../components/Fragments/EmailSection.jsx";
import LocomotiveScroll from 'locomotive-scroll';

const Homepage = () => {
    const locomotiveScroll = new LocomotiveScroll();


    return (
        <div className="flex flex-col gap-64" >
            <div>
                <Hero />
            </div>
            <div>
                <Work />
            </div>
            <div>
                <Playground />
            </div>
            <div>
                <EmailSection />
            </div>
            <div className="-p-64 -mt-32">
                <FooterSec />
            </div>
        </div>


    )
};

export default Homepage;

