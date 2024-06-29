"use client"
import React from 'react'
import { Swiper as SwiperComponent } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css/effect-coverflow"


const VideoSlider = () => {
    return (
        <div>
            <SwiperComponent
                spaceBetween={20}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop
                speed="3000"
                autoplay={{
                    delay: "2000",
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true,

                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 45,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    1120: {
                        slidesPerView: "3"
                    },
                    768: {
                        slidesPerView: "2"
                    },
                    0: {
                        slidesPerView: "1"
                    }
                }}

                modules={[Autoplay, EffectCoverflow]}


            >


                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72039.jpg?t=st=1716367759~exp=1716371359~hmac=2054b9b1678dfa949c28d035be8fc8919d32cfb4c67a9cab372f2122fa62e161&w=900" alt="" className='w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72039.jpg?t=st=1716367759~exp=1716371359~hmac=2054b9b1678dfa949c28d035be8fc8919d32cfb4c67a9cab372f2122fa62e161&w=900" alt="" className='w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72039.jpg?t=st=1716367759~exp=1716371359~hmac=2054b9b1678dfa949c28d035be8fc8919d32cfb4c67a9cab372f2122fa62e161&w=900" alt="" className='w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72039.jpg?t=st=1716367759~exp=1716371359~hmac=2054b9b1678dfa949c28d035be8fc8919d32cfb4c67a9cab372f2122fa62e161&w=900" alt="" className='w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl w-full">
                        <img src="https://img.freepik.com/free-photo/expressive-young-lady-posing-studio_176474-72039.jpg?t=st=1716367759~exp=1716371359~hmac=2054b9b1678dfa949c28d035be8fc8919d32cfb4c67a9cab372f2122fa62e161&w=900" alt="" className='w-full rounded-2xl' />
                    </div>

                </SwiperSlide>






            </SwiperComponent>
        </div >
    )
}

export default VideoSlider