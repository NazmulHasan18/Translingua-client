import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <div>
         <Swiper
            pagination={true}
            modules={[Pagination]}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="relative">
                  <img
                     src="https://i.ibb.co/T8NXYby/Cream-Orange-Fresh-Neutrals-Coming-Soon-Website-Coming-Soon-Page.png"
                     alt=""
                     className="w-[1550px]"
                  />
                  <Link to="/classes">
                     <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold absolute bottom-8 left-8 md:bottom-[20%] md:left-24">
                        Enroll Now!
                     </button>
                  </Link>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="relative">
                  <img
                     src="https://i.ibb.co/2vdkP0n/Cream-Orange-Fresh-Neutrals-Coming-Soon-Website-Coming-Soon-Page-1.png"
                     alt=""
                     className="w-[1550px]"
                  />
                  <Link to="/classes">
                     <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold absolute bottom-8 left-8 md:bottom-[20%] md:left-24">
                        Enroll Now!
                     </button>
                  </Link>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="relative">
                  <img
                     src="https://i.ibb.co/Fh93Rcj/Cream-Orange-Fresh-Neutrals-Coming-Soon-Website-Coming-Soon-Page-3.png"
                     alt=""
                     className="w-[1550px]"
                  />
                  <Link to="/classes">
                     <button className="btn btn-outline text-orange-600 btn-xs text-base md:text-xl sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold absolute bottom-8 left-8 md:bottom-[20%] md:left-24">
                        Enroll Now!
                     </button>
                  </Link>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
