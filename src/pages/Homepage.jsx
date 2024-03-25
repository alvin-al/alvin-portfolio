import FooterSec from "../components/Fragments/Footer.jsx";
import Hero from "../components/Fragments/Hero.jsx";
import Playground from "../components/Fragments/Playground.jsx";
import Work from "../components/Fragments/Work.jsx";
import EmailSection from "../components/Fragments/EmailSection.jsx";

const Homepage = () => {
    return (
        <div className="">
            <div className="mb-48">
                <Hero />
            </div>
            <div className="mb-48">
                <Work />
            </div>
            <div className="mb-48">
                <Playground />
            </div>
            <div className="mb-48">
                <EmailSection />
            </div>
            <div className="">
                <FooterSec />
            </div>
        </div>


    )
};

export default Homepage;

