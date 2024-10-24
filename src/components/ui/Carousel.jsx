//Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { motion } from "framer-motion";
//UI

const Carousel = ({slides, mediumScreenSize}) => {


  return (
    <Swiper
    modules={[EffectCube, Pagination]}
    effect={"cube"}
    grabCursor={true}
    cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }}
    pagination={{
        el: ".swiper-pagination",
        bulletClass: "swiper-pagination-bullet",
    }}
    id={mediumScreenSize ? "mediumScreenSize" : ""}
    >
        
        <SwiperSlide>

        </SwiperSlide>
        
        <div className="swiper-pagination"/>
    </Swiper>
  )
}

export default Carousel;
