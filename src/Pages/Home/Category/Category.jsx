
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="container mx-auto lg:px-8 px-4 mb-16">
            <SectionTitle
            subHeading="From 11:00am to 10:00pm"
            heading="ORDER ONLINE"
            >

            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
                slidesPerView: 2, // 2 slides per view for small screens (up to 640px)
            },
            768: {
                slidesPerView: 2, // 2 slides per view for medium screens (up to 768px)
            },
            1024: {
                slidesPerView: 4, // 4 slides per view for large screens (above 1024px)
            },
        }}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="" src={slide1} alt="" />
            <h3 className=" -mt-12 uppercase text-center z-10 text-white font-cinzel md:ext-[32px] text-[20px]">salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className=" -mt-12 uppercase text-center z-10 text-white font-cinzel md:ext-[32px] text-[20px]">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className=" -mt-12 uppercase text-center z-10 text-white font-cinzel md:ext-[32px] text-[20px]">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className=" -mt-12 uppercase text-center z-10 text-white font-cinzel md:ext-[32px] text-[20px]">dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className=" -mt-12 uppercase text-center z-10 text-white font-cinzel md:ext-[32px] text-[20px]">soups</h3>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;