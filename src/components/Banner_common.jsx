import React from 'react'

const Banner_common = (props) => {
    return (
        <div>
            <div className="relative">
                <div className="absolute text-white flex items-center justify-center flex-col inset-0 bg-black h-full w-full bg-opacity-40 px-4">
                    <h2 className='text-5xl mb-2 font-semibold'>{props.heading}</h2>
                    <span className='font-semibold'>{props.path} </span>
                </div>
                <img src="https://img.freepik.com/free-photo/new-york-city-lower-manhattan-skyline_649448-3357.jpg?t=st=1719995990~exp=1719999590~hmac=f0f2b7ddf266bcccafd21d5c762224645d36a04507829697a21e2997d3456d2b&w=740" alt="" className='w-full h-[50vh] object-cover' />
            </div>
        </div>
    )
}

export default Banner_common