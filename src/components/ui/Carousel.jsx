//Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css/bundle";
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
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

        <div className="swiper-pagination"/>
    </Swiper>
  )
}

export default Carousel;
