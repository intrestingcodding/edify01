import { BookTextIcon, Star } from 'lucide-react'
import React from 'react'

const Courses = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-4 ">

            <div className="bg-white shadow p-5 rounded-2xl">

                <div className="mb-5">
                    <img src="https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740" alt="" className='rounded-2xl w-full' />
                </div>
                <div className="flex justify-between items-center mb-5">
                    <span className='block text-primary  py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
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
                    <div className="py-[5px] px-2  text-gray-500 rounded-2xl sm:text-sm text-sm border  hover:text-white hover:bg-primary cursor-default transition-all duration-300">Enroll Now</div>
                    <div className="flex py-[5px] cursor-default rounded-xl items-center px-2  gap-1">
                        <BookTextIcon size={20} color='gray' />
                        <span className='text-gray-500'> 4</span>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow p-5 rounded-2xl">

                <div className="mb-5">
                    <img src="https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740" alt="" className='rounded-2xl w-full' />
                </div>
                <div className="flex justify-between items-center mb-5">
                    <span className='block text-primary  py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
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
                    <div className="py-[5px] px-2  text-gray-500 rounded-2xl sm:text-sm text-sm border  hover:text-white hover:bg-primary cursor-default transition-all duration-300">Enroll Now</div>
                    <div className="flex py-[5px] cursor-default rounded-xl items-center px-2  gap-1">
                        <BookTextIcon size={20} color='gray' />
                        <span className='text-gray-500'> 4</span>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow p-5 rounded-2xl">

                <div className="mb-5">
                    <img src="https://img.freepik.com/free-photo/group-students-doing-project_23-2148166343.jpg?t=st=1719885490~exp=1719889090~hmac=5629b664766b603e39beecc122112b157e183c9efb84394939e31f0005835225&w=740" alt="" className='rounded-2xl w-full' />
                </div>
                <div className="flex justify-between items-center mb-5">
                    <span className='block text-primary  py-[4px] px-3 rounded-xl sm:text-sm text-xs'>English Proficiency</span>
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
                    <div className="py-[5px] px-2  text-gray-500 rounded-2xl sm:text-sm text-sm border  hover:text-white hover:bg-primary cursor-default transition-all duration-300">Enroll Now</div>
                    <div className="flex py-[5px] cursor-default rounded-xl items-center px-2  gap-1">
                        <BookTextIcon size={20} color='gray' />
                        <span className='text-gray-500'> 4</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Courses