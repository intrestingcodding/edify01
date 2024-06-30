import React from 'react'
import Banner from './Banner'

const StudyInSlider = () => {
    const image = [
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "Study in United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "Study in United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "Study in United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "Study in United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",

            heading: "Study in United Kingdom"
        },
        {
            pic: "https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsameer-13%2Fimage%2Fupload%2Fv1706775289%2Fdfbajibuctv4sebhkqzs.webp&w=640&q=75",
            heading: "Study in United Kingdom"
        },
    ]
    return (
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
    )
}

export default StudyInSlider