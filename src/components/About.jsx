import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { ArrowRight, BookTextIcon, Star } from 'lucide-react'
import Slider from './Slider'
// import { motion } from 'framer-motion'
import VideoSlider from './VideoSlider'
import Quetions from './Quetions'
import PartnerSlider from './PartnerSlider'
import Footer from './Footer'
import Events from './Events'
import StudyInSlider from './StudyInSlider'
import Courses from './Courses'

const About = () => {

    return (
        <section className="">
            {/* About page */}
            <div className='grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-16 mb-10'>

                <div className="bg-primary md:w-full  relative overflow-hidden rounded-2xl px-5 py-7">

                    <div className="sm:h-32 sm:w-32 h-24 w-24 bg-orange-400 rounded-full absolute right-[-9%] top-[-10%] "></div>

                    <div className="sm:h-32 sm:w-32 h-24 w-24 bg-orange-400 rounded-full absolute left-[-10%] bottom-[-9%] "></div>
                    <div className="sm:px-5 py-5 min-h-[400px] md:h-auto max-w-[350px] md:mt-5 ">
                        <span className='text-[#ffa500] sm:text-xl text-lg mb-5'>Unmatched</span>
                        <h3 className='text-white sm:text-2xl md:text-3xl text-xl font-semibold  md:mb-3 mb-2 '>Quality of Services</h3>
                        <p className='text-[#ffffffe8] sm:text-base text-sm mb-2 sm:mb-3'>Actively designing solutions for the worlds most ambitious change-makers who will define the future.</p>
                        <button className='border bg-white mb-3 sm:mb-5 py-1 px-5 rounded-[6px] hover:bg-primary hover:text-white sm:text-base text-sm transition-all duration-500'>Select Destination</button>
                    </div>
                    <div className="absolute right-[5%] bottom-0">
                        <img className='sm:w-48 md:w-56 w-40' src="https://edify.pk/images/price-thumb.png" alt="" />
                    </div>


                </div>
                <div className="grid sm:grid-rows-3 gap-5 ">
                    <div className="">
                        <h3 className='text-lg font-semibold mb-3 sm:mb-5 md:text-3xl sm:text-2xl'>Why Choose Edify Group of Companies as study abroad Pakistan consultants?</h3>
                        <p className='text-gray-500 sm:text-base text-sm'>We are unique in the quality of our services and stand out from our competitors. Unlike other consultancy firms in Pakistan, we truly care  our students.</p>
                    </div>

                    <div className="grid sm:grid-cols-5 gap ">
                        <img className='col-span-1 w-[60px] p-[10px] mb-2  rounded-2xl bg-[#f8f8f8]' src="expertise.png" alt="" />
                        <div className=" col-span-4">
                            <h4 className='mb-2 md:text-xl text-base font-semibold'>Unmatched Quality of Services and Genuine Care:</h4>
                            <p className='mb-2 md:text-base text-sm text-gray-400'>Edify stands out among other overseas education consultants in Pakistan due to our unique approach</p>
                            <div className="flex gap-1 items-center ">
                                <a href="/" className='hover:text-primary text-sm font-semibold'>Read More </a>
                                <ArrowRight size={20} className='text-primary' />
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-5   ">
                        <img className=' col-span-1 w-[60px] p-[10px] mb-2 rounded-2xl  bg-[#f8f8f8]' src="certificate.png" alt="" />
                        <div className=" col-span-4">
                            <h4 className='sm:text-xl text-base font-semibold mb-2'>Unmatched Quality of Services and Genuine Care:</h4>
                            <p className='text-gray-400 sm:text-base text-sm mb-2'>Edify stands out among other overseas education consultants in Pakistan due to our unique approach</p>
                            <div className="flex gap-1 items-center ">
                                <a href="/" className='hover:text-primary text-sm font-semibold'>Read More </a>
                                <ArrowRight size={20} className='text-primary' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            {/* Banner & blogs */}
            <div className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 py-16 mb-10  ">
                    <Banner
                        span="OUR SERVICES"
                        heading="We Strive to Provide the Finest Service Possible to Our Students" para="Edify consultant provides A to Z services for student visa in major universities and colleges of the countries around the globe, when student come with dream of studying abroad.

" />

                    <div className="  ">
                        <Card index="1" />

                    </div>
                </div>

            </div>

            {/* Blogs */}
            <div className="max-w-6xl mx-auto px-4 py-16">

                <Banner span="FAVOURITE DESTINATION"
                    heading="Popular Destinations For International Students"
                    para="Are you ready to launch the next phase of your academic as well as professional growth? Is quality education in distinguished universities around the world your ultimate dream? If yes, sit back and let us take the wheel!" />


                <StudyInSlider />
            </div>


            {/* Futured courses */}

            <div className="bg-gray-100 py-16">

                <div className=' flex flex-col py-5 justify-center px-4 items-center mb-5'>
                    <span className='text-primary font-semibold mb-1 block'>TOP COURSES</span>
                    <h3 className='md:text-3xl text-xl font-semibold mb-1'>Our Featured Courses</h3>
                    <p className='text-[#808080] md:text-base text-sm text-center '>Education empowers thinkers for a dynamic global existence.</p>
                </div>
                <Courses />
            </div>


            {/* Slider */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary md:text-base  mb-1 font-semibold">Top Blogs</div>
                    <h3 className='sm:text-2xl md:text-3xl text-xl  font-semibold'>Our Recent Blogs</h3>
                </div>
                <Slider />
            </div>

            {/* News & Events */}
            <div className="bg-gray-100">
                <Events />

            </div>

            {/* Ower Videos */}
            <div className=" max-w-6xl mx-auto py-16 px-4 ">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary mb-2 font-semibold">OUR VIDEOS</div>
                    <h3 className='sm:text-2xl md:text-3xl text-xl text-center  font-semibold'>Letest from Youtube</h3>
                </div>
                <VideoSlider />
            </div>
            {/* how to start */}
            <div className="bg-gray-100">
                <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 py-16 ">
                    <div className="">
                        <span className='text-primary font-semibold block mb-5'>LEARN HOW TO GET STARTED</span>
                        <h3 className='md:text-3xl sm:text-2xl text-xl font-semibold mb-5'>Frequently Asked <br /> Questions</h3>
                        <p className='text-gray-400 mb-5'> Join our club member community now to get free updates and also a lot of freebies are waiting for you or Contact Us</p>
                        <div className="flex">
                            <div className="py-[8px] px-3 border border-gray-500 text-gray-500 text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-[5px] ">Read Our Full FAQ</div>
                        </div>

                    </div>
                    <div className="">
                        <div className="">

                            {/* <Quetions /> */}

                        </div>
                    </div>

                </div>
            </div>
            {/* Partners */}
            <div className="max-w-6xl mx-auto py-16 pb-32 px-4">
                <div className="">
                    <div className="">
                        <span className='text-primary sm:text-base text-sm font-semibold block  mb-1'>OUR PREMIUM PARTNERS</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semibold text-xl mb-1'>Trusted By The World</h3>
                        <p className='text-gray-500 text-sm sm:text-base mb-2 sm:mb-5'> You can list your partners or instructors brands here to show off your sites reputation</p>

                    </div>
                    <div className="">
                        <PartnerSlider />
                    </div>
                </div>
            </div>




        </section >
    )
}

export default About