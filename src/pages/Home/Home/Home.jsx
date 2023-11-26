import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedTests from "../Featured Tests/FeaturedTests";
import Services from "../Services/Services";
import Recommendation from "../Slider/Recommendation";



const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <FeaturedTests />
            <Recommendation />
            <About />
        </div>
    );
};

export default Home;