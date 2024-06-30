import React from 'react'
import { Clock, MapPinIcon } from "lucide-react"
const Events = () => {
    return (
        <div>
            <div className=" max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary ms:text-base text-sm mb-2 font-semibold">NEWS & EVENTS</div>
                    <h3 className='sm:text-2xl md:text-3xl text-xl font-semibold'>Our Recent Blogs</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary shadow-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
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


                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary shadow-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
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
                    <div className="border p-4 mb-2 border-t-8 border-b-8 border-primary shadow-primary rounded-t-2xl rounded-b-2xl shadow hover:scale-105 transition-all duration-500 border-r-0 border-l-0">
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
        </div>
    )
}

export default Events