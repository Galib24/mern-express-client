import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import featuredImg from '../../../assets/featured.avif'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading='We welcome you here!'
                heading='If Customer Happy, We feel Proud'
            >

            </SectionTitle>
            <div className="md:flex justify-items-center bg-slate-500 bg-opacity-50 items-center py-72 px-20 pt-12">
                <div className="w-1/2">
                    <img className="w-full" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10" >
                    <p>Aug 20, 2030</p>
                    <p className="uppercase">This is Featured Part</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore officia, ex omnis pariatur minima repellat cum iure dicta sapiente quos vitae nemo non maiores, quae ipsa voluptas itaque fuga vero?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 btn-primary text-black">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;