import { Box, Facebook, Instagram, Linkedin, Mail, MailIcon, MapPinned, PhoneCall, Send, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className="relative  pt-8 ">


            <div className="rounded-2xl border grid w-full md:py-16 shadow-lg py-5 px-4 items-center bg-primary max-w-6xl mx-auto translate-y-[80px] ">
                <div className="absolute bottom-[10%] right-[55%] opacity-20 -rotate-45">
                    <MailIcon size={60} color='white' strokeWidth={1} />
                </div>
                <div className="absolute top-[3%] right-[10%] opacity-25 -rotate-45">
                    <Box size={60} strokeWidth={1} color='white' />
                </div>

                <div className=" grid md:grid-cols-2">
                    <div className="grid items-center">
                        <h2 className='md:text-3xl sm:text-2xl text-xl text-white '>Get in touch! Email updates?</h2>
                    </div>
                    <div className="flex items-center relative">
                        <input className='w-full  border  border-r-0 sm:py-[14px] rounded-[5px] focus:outline-none px-3 ' type="text" name="" id="" placeholder='Your Email' />
                        <button className='border sm:py-[10px]   text-white  px-[10px] rounded-[5px] absolute top-1/2 right-[1%] -translate-y-1/2 bg-primary'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="pt-[100px] bg-gray-100 ">
                <div className='grid sm:grid-cols-2 items-center   md:grid-cols-4 gap-5  max-w-6xl mx-auto px-4 py-5  '>
                    <div className="">
                        <img src="https://edify.pk/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt="" className='w-[150px] mb-4' />
                        <p className='text-gray-500 mb-4'>Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!</p>
                        <div className="flex gap-4">
                            <div className="bg-white hover:text-white p-2 transition-all duration-300 flex justify-center items-center shadow text-gray-500 bor3er rounded-full hover:bg-red-500 ">
                                <Youtube size={20} />
                            </div>
                            <div className="bg-white hover:text-white p-2 transition-all duration-300 flex justify-center items-center shadow border text-gray-500 rounded-full hover:bg-gradient-to-b from-orange-500">
                                <Instagram size={20} />
                            </div>
                            <div className="bg-white hover:text-white p-2 transition-all duration-300 flex justify-center items-center shadow border text-gray-500 rounded-full hover:bg-[#316ff6]">
                                <Facebook size={20} />
                            </div>
                            <div className="bg-white hover:text-white p-2 transition-all duration-300 flex justify-center items-center  shadow border text-gray-500 rounded-full hover:bg-[#0076b5]  ">
                                <Linkedin size={20} />
                            </div>
                            <div className="bg-white hover:text-white p-2 transition-all duration-300 flex justify-center items-center shadow border text-gray-500 rounded-full hover:bg-[#1da1f2]">
                                <Twitter size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="md:pl-14">
                        <span className='text-xl mb-2 block'>Links</span>
                        <ul className='grid gap-2'>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Blogs</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Teams</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Career</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Course</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>About us</li>
                        </ul>
                    </div>
                    <div className="md:pl-14">
                        <span className='text-xl mb-2 block'>Explore</span>
                        <ul className='grid gap-2'>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Service</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Partners</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Apply Now</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>Contact us</li>
                            <li className='text-gray-500 text-sm hover:text-primary cursor-pointer'>News & Events</li>
                        </ul>
                    </div>
                    <div className="">
                        <span className='text-xl mb-2 block'>Information</span>
                        <ul className='grid gap-2'>
                            <li className='flex gap-2 items-center text-gray-500 text-sm hover:text-primary cursor-pointer'><PhoneCall className='hover:text-primary' size={14} color='gray' />041 8501893</li>
                            <li className='flex gap-2 items-center text-gray-500 text-sm hover:text-primary cursor-pointer'><Mail className='hover:text-primary' size={14} color='gray' /> info@edify.pk</li>
                            <li className='flex gap-2 items-center text-gray-500 text-sm hover:text-primary cursor-pointer'><MapPinned className='hover:text-primary' size={22} color='gray' />Edify Building, 3rd Floor, Madina Town Faisalabad</li>

                        </ul>
                    </div>
                </div>

                <div className="flex justify-center items-center border-t py-5 px-4">
                    <p className='text-xs text-gray-500'>.© 2023 Edify Group of Companies. All Rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer