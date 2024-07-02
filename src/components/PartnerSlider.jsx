"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules"

const PartnerSlider = () => {

    const partnersImages = [
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
        {
            image: "https://edify.pk/_next/image?url=%2Fusa%2F13p.webp&w=640&q=75"
        },
    ]
    return (
        <>

            <Swiper
                spaceBetween={20}
                slidesPerView={7}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop
                speed="1000"
                autoplay={{
                    delay: "500"
                }}
                modules={[Autoplay]}
            >


                {

                    partnersImages.map((v, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="shadow h-20 flex items-center justify-center border p-4  object-cover">
                                    <img src={v.image} alt="" className='max-w-[100%]' />

                                </div>
                            </SwiperSlide>
                        )
                    })

                }
            </Swiper>
        </>
    )
}

export default PartnerSlider