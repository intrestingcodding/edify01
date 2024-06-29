import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { ArrowRight, BookTextIcon, Clock, MapPinIcon, Star } from 'lucide-react'
import Slider from './Slider'
// import { motion } from 'framer-motion'
import VideoSlider from './VideoSlider'
import Quetions from './Quetions'
import PartnerSlider from './PartnerSlider'
import Footer from './Footer'

const About = () => {
    const image = [
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "United Kingdom"
        },
    ]
    return (
        <section className="">
            {/* About page */}
            <div className='grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-12'>

                <div className="bg-primary md:w-full  relative overflow-hidden rounded-2xl px-5 py-7">

                    <div className="sm:h-32 sm:w-32 h-24 w-24 bg-orange-400 rounded-full absolute right-[-9%] top-[-10%] "></div>

                    <div className="sm:h-32 sm:w-32 h-24 w-24 bg-orange-400 rounded-full absolute left-[-10%] bottom-[-9%] "></div>
                    <div className="sm:px-5 py-5 min-h-[400px] md:h-auto max-w-[350px] ">
                        <span className='text-[#ffa500] sm:text-xl text-lg mb-5'>Unmatched</span>
                        <h3 className='text-white sm:text-2xl text-xl font-semibold  md:mb-5 mb-2 '>Quality of Services</h3>
                        <p className='text-[#ffffffe8] sm:text-base text-sm mb-3 sm:mb-5'>Actively designing solutions for the worlds most ambitious change-makers who will define the future.</p>
                        <button className='border bg-white mb-3 sm:mb-5 py-1 px-5 rounded-[6px] hover:bg-primary hover:text-white sm:text-base text-sm transition-all duration-500'>Select Destination</button>
                    </div>
                    <div className="absolute right-[5%] bottom-0">
                        <img className='sm:w-48 w-40' src="https://edify.pk/images/price-thumb.png" alt="" />
                    </div>


                </div>
                <div className="grid sm:grid-rows-3 gap-2 ">
                    <div className="">
                        <h3 className='text-lg font-semibold mb-3 sm:mb-5 sm:text-2xl'>Why Choose Edify Group of Companies as study abroad Pakistan consultants?</h3>
                        <p className='text-gray-500 sm:text-base text-sm'>We are unique in the quality of our services and stand out from our competitors. Unlike other consultancy firms in Pakistan, we truly care  our students.</p>
                    </div>

                    <div className="grid sm:grid-cols-5 gap ">
                        <img className='col-span-1 w-[60px] p-[10px] mb-2 bg-[#f8f8f8]' src="expertise.png" alt="" />
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
                        <img className=' col-span-1 w-[60px] p-[10px] mb-2 bg-[#f8f8f8]' src="certificate.png" alt="" />
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
                <div className="max-w-6xl mx-auto px-4 py-12  ">
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

            <div className="max-w-6xl mx-auto px-4 py-12">

                <Banner span="FAVOURITE DESTINATION"
                    heading="Popular Destinations For International Students"
                    para="Are you ready to launch the next phase of your academic as well as professional growth? Is quality education in distinguished universities around the world your ultimate dream? If yes, sit back and let us take the wheel!" />

                <div className="relative grid md:grid-cols-2  lg:grid-cols-3 gap-5 ">
                    {
                        image.map((v, i) => {
                            return (
                                <li key={i} className='list-none'>
                                    <div className="absolute bottom-[15px] text-xl text-white left-[15px]">{v.heading}</div>
                                    <img src={v.pic} alt="" className='rounded-2xl w-full' />
                                </li>
                            )
                        })




                    }

                </div>

            </div>

            {/* Futured courses */}

            <div className="bg-gray-100 py-12">

                <div className=' flex flex-col py-5 justify-center px-4 items-center mb-5'>

                    <span className='text-primary font-semibold mb-2 block'>TOP COURSES</span>
                    <h3 className='md:text-2xl text-lg font-semibold mb-2'>Our Featured Courses</h3>
                    <p className='text-[#808080] md:text-base text-sm text-center '>Education empowers thinkers for a dynamic global existence.</p>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-4 ">

                    <div className="bg-white shadow p-5 rounded-xl">

                        <div className="mb-5">
                            <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1704883921%2FBlog-images%2Fjdwp1emi8hhfilmltclr.webp&w=384&q=75" alt="" className='rounded-2xl w-full' />
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <span className='block text-primary bg-blue-100 py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
                            <div className="flex">
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h3 className='font-semibold sm:text-lg text-base mb-2'>IELTS Academic Course</h3>
                            <p className='text-gray-400 sm:text-base text-sm'>Excel in IELTS Academic with...</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="py-[5px] px-[12px] text-white rounded-2xl sm:text-base text-sm bg-primary">Enroll Now</div>
                            <div className="flex border sm:py-[5px] rounded-xl border-blue-100 sm:px-3 px-2 py-[3px] gap-1">
                                <BookTextIcon color='#1247a1' />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow p-5 rounded-xl">

                        <div className="mb-5">
                            <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1704883921%2FBlog-images%2Fjdwp1emi8hhfilmltclr.webp&w=384&q=75" alt="" className='rounded-2xl w-full' />
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <span className='block text-primary bg-blue-100 py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
                            <div className="flex">
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h3 className='font-semibold sm:text-lg text-base mb-2'>IELTS Academic Course</h3>
                            <p className='text-gray-400 sm:text-base text-sm'>Excel in IELTS Academic with...</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="py-[5px] px-[12px] text-white rounded-2xl sm:text-base text-sm bg-primary">Enroll Now</div>
                            <div className="flex border sm:py-[5px] rounded-xl border-blue-100 sm:px-3 px-2 py-[3px] gap-1">
                                <BookTextIcon color='#1247a1' />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow p-5 rounded-xl">

                        <div className="mb-5">
                            <img src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1704883921%2FBlog-images%2Fjdwp1emi8hhfilmltclr.webp&w=384&q=75" alt="" className='rounded-2xl w-full' />
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <span className='block text-primary bg-blue-100 py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
                            <div className="flex">
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                                <Star color='#ffc107' size={15} fill='#ffc107' />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h3 className='font-semibold sm:text-lg text-base mb-2'>IELTS Academic Course</h3>
                            <p className='text-gray-400 sm:text-base text-sm'>Excel in IELTS Academic with...</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="py-[5px] px-[12px] text-white rounded-2xl sm:text-base text-sm bg-primary">Enroll Now</div>
                            <div className="flex border sm:py-[5px] rounded-xl border-blue-100 sm:px-3 px-2 py-[3px] gap-1">
                                <BookTextIcon color='#1247a1' />
                                <span>4</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


            {/* Slider */}
            <div className="max-w-6xl mx-auto px-4 my-12">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary ms:text-base text-sm mb-2 font-semibold">Top Blogs</div>
                    <h2 className='sm:text-2xl text-xl  font-semibold'>Our Recent Blogs</h2>
                </div>
                <Slider />
            </div>

            {/* News & Events */}
            <div className=" max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary ms:text-base text-sm mb-2 font-semibold">NEWS & EVENTS</div>
                    <h2 className='sm:text-2xl text-xl font-semibold'>Our Recent Blogs</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
                        <div className="w-full mb-4">
                            <img src="whatsapp.jpg" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text-gray-400'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-400 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='border border-gray-300 text-gray-400 p-2 text-xs rounded-[5px] '>View Events</p>
                            <div className="flex gap-1 bg-blue-100 border border-blue-300 p-2 items-center text-[#1247a1] rounded-[5px]">
                                <Clock size={16} />
                                <span className='text-xs'>
                                    12:00 - 14:00
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
                        <div className="w-full mb-4">
                            <img src="whatsapp.jpg" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text-gray-400'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-400 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='border border-gray-300 text-gray-400 p-2 text-xs rounded-[5px] '>View Events</p>
                            <div className="flex gap-1 bg-blue-100 border border-blue-300 p-2 items-center text-[#1247a1] rounded-[5px]">
                                <Clock size={16} />
                                <span className='text-xs'>
                                    12:00 - 14:00
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
                        <div className="w-full mb-4">
                            <img src="whatsapp.jpg" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text-gray-400'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-400 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='border border-gray-300 text-gray-400 p-2 text-xs rounded-[5px] '>View Events</p>
                            <div className="flex gap-1 bg-blue-100 border border-blue-300 p-2 items-center text-[#1247a1] rounded-[5px]">
                                <Clock size={16} />
                                <span className='text-xs'>
                                    12:00 - 14:00
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Ower Videos */}
            <div className=" max-w-6xl mx-auto py-12 px-4 ">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary mb-2 font-semibold">OUR VIDEOS</div>
                    <h2 className='sm:text-2xl text-xl text-center  font-semibold'>Letest from Youtube</h2>
                </div>
                <VideoSlider />
            </div>
            {/* how to start */}
            <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 py-12">
                <div className="">
                    <span className='text-primary font-semibold block mb-5'>LEARN HOW TO GET STARTED</span>
                    <h3 className='text-3xl mb-5'>Frequently Asked <br /> Questions</h3>
                    <p className='text-gray-400 mb-5'> Join our club member community now to get free updates and also a lot of freebies are waiting for you or Contact Us</p>
                    <div className="flex">
                        <div className="py-[8px] px-3 border border-gray-500 text-gray-500 text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-[5px] ">Read Our Full FAQ</div>
                    </div>

                </div>
                <div className="">
                    <div className="p-[14px] text-primary font-semibold bg-gray-100 inline-block rounded-full">

                        <Quetions />

                    </div>
                </div>

            </div>
            {/* Partners */}

            <div className="max-w-6xl mx-auto py-12 pb-32 px-4 grid  md:grid-cols-[1fr,2fr] gap-5">
                <div className="">
                    <span className='text-primary sm:text-base text-sm font-semibold block sm:mb-5 mb-2'>OUR PREMIUM PARTNERS</span>
                    <h3 className='sm:text-2xl text-xl mb-2 sm:mb-5'>Trusted By The World</h3>
                    <p className='text-gray-500 text-sm sm:text-base mb-2 sm:mb-5'> You can list your partners or instructors brands here to show off your sites reputation</p>
                    <div className="flex">
                        <div className="py-1 px-2 border border-gray-500 text-gray-500 text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-[5px] ">See All</div>
                    </div>
                </div>
                <PartnerSlider />
            </div>

            {/* Footer */}
            <div className="bg-gray-100 ">

                <Footer />

            </div>

        </section >
    )
}

export default About