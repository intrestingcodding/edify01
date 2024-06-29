"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules"

const PartnerSlider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop
            speed="1500"
            autoplay={{
                delay: "1000",
                disableOnInteraction: false,
                waitForTransition: true,
                pauseOnMouseEnter: true,

            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F26p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F44p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F55p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F58p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F26p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="shadow h-20 flex items-center justify-center border p-4 w-40 object-cover">
                    <img src="https://edify.pk/_next/image?url=%2Fusa%2F11p.webp&w=640&q=75" alt="" className='max-w-[100%]' />

                </div>
            </SwiperSlide>



        </Swiper>
    )
}

export default PartnerSlider