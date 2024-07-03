import React from 'react'
import { Clock, MapPinIcon } from "lucide-react"
const Events = () => {
    return (
        <div>
            <div className=" max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <div className="text-primary ms:text-base  mb-1 font-semibold">NEWS & EVENTS</div>
                    <h3 className='sm:text-2xl md:text-3xl text-xl font-semibold'>Our Recent Blogs</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                    <div className="border p-4 mb-2  bg-white rounded-2xl ">
                        <div className="w-full mb-4">
                            <img src="https://img.freepik.com/free-photo/group-business-people-sitting-conference-table_23-2148073305.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center text-primary gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-500 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='  hover:text-white hover:bg-primary cursor-default border transition-all duration-300 text-gray-500 p-2 text-xs rounded-2xl '>View Events</p>
                            <div className="flex gap-1  border-gray p-2 items-center text-gray-500  rounded-[5px]">
                                <Clock size={16} />
                                <span className='text-xs'>
                                    12:00 - 14:00
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="border p-4 mb-2 bg-white rounded-t-2xl rounded-b-2xl ">
                        <div className="w-full mb-4">
                            <img src="https://img.freepik.com/free-photo/portrait-happy-male-female-businesspeople-looking-camera_23-2147826613.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center text-primary gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-500 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='  hover:text-white hover:bg-primary cursor-default border transition-all duration-300 text-gray-500 p-2 text-xs rounded-2xl '>View Events</p>
                            <div className="flex gap-1  border-gray p-2 items-center text-gray-500  rounded-[5px]">
                                <Clock size={16} />
                                <span className='text-xs'>
                                    12:00 - 14:00
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="border p-4 mb-2 bg-white rounded-t-2xl rounded-b-2xl ">
                        <div className="w-full mb-4">
                            <img src="https://img.freepik.com/free-photo/elevated-view-businessman-businesswoman-stacking-each-other-s-hand-project_23-2148073310.jpg?ga=GA1.1.633191682.1717133773&semt=ais_user" alt="" className='w-full rounded-2xl' />
                        </div>
                        <div className="flex items-center text-primary gap-2 mb-2 ">
                            <MapPinIcon fill='#1247a1' color='white' size={16} />
                            <p className='text-xs text'>Edify Group Faisalabad Head office</p>
                        </div>
                        <div className="flex flex-col justify-center mb-2 ">
                            <h3 className='line-clamp-1 text-xl mb-2'>Mahum Shahid, Representative of OIEG Visited Edify Group</h3>
                            <p className='text-gray-500 text-sm mb-2'>08 may, 2024</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='  hover:text-white hover:bg-primary cursor-default border transition-all duration-300 text-gray-500 p-2 text-xs rounded-2xl '>View Events</p>
                            <div className="flex gap-1  border-gray p-2 items-center text-gray-500  rounded-[5px]">
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