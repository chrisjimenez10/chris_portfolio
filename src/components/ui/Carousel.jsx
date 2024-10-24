//Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css/bundle";
//UI
import QuiverWordEffect from "./QuiverWordEffect";

const Carousel = ({slides, mediumScreenSize, style, colorVariants, bgGradient, singleBorder}) => {

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
        {slides.map(({id, topTitle, botTitle })=>(
            <SwiperSlide key={id}>
                <div className={`w-full h-full flex flex-col items-center justify-center gap-y-10 bg-black/75 rounded-lg border-[2px] ${singleBorder}`}>
                    <div className="flex flex-col gap-y-3">
                        <h1 className={`text-2xl md:text-4xl ${colorVariants[style].bg} text-white font-black p-2 rounded-lg border border-gray-300/45`}>{topTitle}</h1>
                        <div className={`h-[.15rem] w-full ${bgGradient}`}/>
                    </div>
                    <QuiverWordEffect phrase={botTitle} classNames="text-2xl md:text-3xl text-white font-semibold" style={style} colorVariants={colorVariants}/>
                </div>
            </SwiperSlide>
        ))}
  
        <div className="swiper-pagination"/>
    </Swiper>
  )
}

export default Carousel;
