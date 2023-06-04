import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonial/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Mern Express || Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Blog></Blog>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;