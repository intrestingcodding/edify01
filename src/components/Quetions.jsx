"use client"
import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const Quetions = () => {
    const [h, setH] = useState(false)
    return (
        <div className="">
            <div className='flex gap-12 border overflow-hidden'>
                <Plus strokeWidth={2.5} onClick={() => setH(!h)} />
                <div className={` bg-green-600  w-full`}>
                    <h2>Ap Kon Ho ? </h2>
                    <p className={`${h ? "translate-y-0" : " translate-y-full"}   `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos, quibusdam natus magni perspiciatis maxime veritatis vel, exercitationem tenetur iusto optio aliquid. Similique tempora architecto accusantium doloribus eum exercitationem incidunt.</p>
                </div>
            </div>
        </div >
    )
}

export default Quetions;