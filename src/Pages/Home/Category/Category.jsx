import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// picture
import slide1 from '../../../assets/category1up.png'
import slide2 from '../../../assets/category2new.png'
import slide3 from '../../../assets/category3new.png'
import slide4 from '../../../assets/category4new.png'
import slide5 from '../../../assets/category5new.png'

import { Pagination } from "swiper";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={'order online'}
                
            >

            </SectionTitle>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,

                }}
                modules={[Pagination]}
                className="mySwiper mb-24 mt-14"

            >
                <SwiperSlide className="bg-opacity-20  bg-green-300">
                    <img className="w-1/2 rounded-3xl" src={slide1} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-20 -ml-72">Smart Watch</h3>
                </SwiperSlide>
                <SwiperSlide className="bg-opacity-20  bg-green-300">
                    <img className="w-1/2 rounded-3xl" src={slide2} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-20 -ml-72 text-white">Phone</h3>
                </SwiperSlide>
                <SwiperSlide className="bg-opacity-20  bg-green-300">
                    <img className="w-1/2 rounded-3xl" src={slide3} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-20 -ml-72 text-white">I phone</h3>
                </SwiperSlide>
                <SwiperSlide className="bg-opacity-20  bg-green-300">
                    <img className="w-1/2 rounded-3xl" src={slide4} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-20 -ml-72 ">Air Pod</h3>
                </SwiperSlide>
                <SwiperSlide className="bg-opacity-20  bg-green-300">
                    <img className="w-1/2 rounded-3xl" src={slide5} alt="" />
                    <h3 className="text-2xl uppercase text-center -mt-20 -ml-72 text-white">Head Phone</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;