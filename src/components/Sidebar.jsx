import { Clock, Search } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    const resentBlogs = [
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
        {
            heading: "Navigating QS Best Student Cities in London",
            time: "friday jul 05 2024"
        },
    ]
    return (
        <div>
            <div className="py-10 top-0 sticky px-4 ">
                <div className="mb-5">
                    <input type="search" placeholder='Search for blogs...' className=' border-2 p-2 w-full outline-none focus:border-primary focus:border-2 transition-all duration-300  text-black rounded-[5px] bg-gray-200 ' />
                </div>

                <div className="">
                    <span className='text-primary block py-2 font-semibold mb-5 border-b'>Resent Posts</span>
                    <div className="grid gap-6">

                        {
                            resentBlogs.map((v, i) => {
                                return (
                                    <div key={i} className="grid gap-2 py-1">
                                        <h3 className=' text-lg line-clamp-1 cursor-pointer hover:text-primary'>{v.heading}</h3>
                                        <div className="flex gap-2 items-center text-gray-500">
                                            <Clock size={16} />
                                            <span className='text-sm'>
                                                {v.time}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar