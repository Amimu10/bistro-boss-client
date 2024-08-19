import img from "../../../assets/icon/comma.png";
import { useEffect, useState} from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
        const [reviews, setReviews] = useState([]);
        const [rating, setRating] = useState(0)
        
        useEffect(() => {
             fetch("reviews.json")
             .then(res => res.json())
             .then(data => {
                 setReviews(data);
             })
        }, [])

    return (
        <div className="container mx-auto lg:px-6 px-4 my-14">
        <SectionTitle
        subHeading="What Our Clients Say"
        heading="TESTIMONIALS"
        >

        </SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <div className="">
                {
                    reviews.map(review =><SwiperSlide key={review._id}
                    
                    >
                    <div className="text-center px-28">
                    <Rating className="mx-auto"
                      style={{ maxWidth: 150 }}
                      value={review.rating}
                      onChange={setRating}
                                   />
                        <img className="mx-auto my-5" src={img} alt="" />
                        <p className="text-primary md:text-[20px] text-base">{review.details}</p>
                        <h3 className="text-secondary lg:text-[32px] md:text-[24px]">{review.name}</h3>
                    </div>
                    </SwiperSlide>)
                }
            </div>
        
      </Swiper>
        </div>
    );
};

export default Testimonial;