"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Clock10Icon, LucideEye, User2Icon } from 'lucide-react';

import { Autoplay } from "swiper/modules"

const Slider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={2}
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

            breakpoints={{

                768: {
                    slidesPerView: "2"
                },
                0: {
                    slidesPerView: "1"
                }
            }}

            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="relative rounded-2xl">
                    <div className=" bg-gradient-to-t from-[#2b2727] bg-opacity-30 absolute  w-full bottom-0 flex items-end left-0 px-4 text-white py-5 rounded-2xl  ">
                        <div className="">
                            <div className="sm:flex hidden mb-2">
                                <p className='py-[5px] px-3 sm:text-sm text-xs bg-primary rounded-2xl '>Student Life</p>
                            </div>
                            <h3 className='sm:text-lg text-base mb-2'>Unlocking the best London for Student form Pakistan</h3>
                            <div className="flex gap-5 ">
                                <div className=" flex gap-2 items-center justify-center">
                                    <User2Icon size={15} />
                                    <span className='sm:text-sm text-xs'>Mubashar Aslam</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Clock10Icon size={15} />
                                    <span className='sm:text-sm text-xs'>5 hour ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img className='rounded-2xl' src="https://res.cloudinary.com/dfv6whrlr/image/upload/v1718972698/Edify%20Group/ckdoumcsa9jgtkqvfazn.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative rounded-2xl">
                    <div className=" bg-gradient-to-t from-[#2b2727] bg-opacity-30 absolute  w-full bottom-0 flex items-end left-0 px-4 text-white py-5 rounded-2xl  ">
                        <div className="">
                            <div className="sm:flex hidden mb-2">
                                <p className='py-[5px] px-3 sm:text-sm text-xs bg-primary rounded-2xl '>Student Life</p>
                            </div>
                            <h3 className='sm:text-lg text-base mb-2'>Unlocking the best London for Student form Pakistan</h3>
                            <div className="flex gap-5 ">
                                <div className=" flex gap-2 items-center justify-center">
                                    <User2Icon size={15} />
                                    <span className='sm:text-sm text-xs'>Mubashar Aslam</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Clock10Icon size={15} />
                                    <span className='sm:text-sm text-xs'>5 hour ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img className='rounded-2xl' src="https://res.cloudinary.com/dfv6whrlr/image/upload/v1718972698/Edify%20Group/ckdoumcsa9jgtkqvfazn.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative rounded-2xl">
                    <div className=" bg-gradient-to-t from-[#2b2727] bg-opacity-30 absolute  w-full bottom-0 flex items-end left-0 px-4 text-white py-5 rounded-2xl  ">
                        <div className="">
                            <div className="sm:flex hidden mb-2">
                                <p className='py-[5px] px-3 sm:text-sm text-xs bg-primary rounded-2xl '>Student Life</p>
                            </div>
                            <h3 className='sm:text-lg text-base mb-2'>Unlocking the best London for Student form Pakistan</h3>
                            <div className="flex gap-5 ">
                                <div className=" flex gap-2 items-center justify-center">
                                    <User2Icon size={15} />
                                    <span className='sm:text-sm text-xs'>Mubashar Aslam</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Clock10Icon size={15} />
                                    <span className='sm:text-sm text-xs'>5 hour ago</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img className='rounded-2xl' src="https://res.cloudinary.com/dfv6whrlr/image/upload/v1718972698/Edify%20Group/ckdoumcsa9jgtkqvfazn.jpg" alt="" />
                </div>
            </SwiperSlide>


        </Swiper>
    )
}

export default Slider