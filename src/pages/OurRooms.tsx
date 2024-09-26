import React from 'react'
import serviceImage from "../assets/hi.jpg"
import serviceImage2 from "../assets/resort.jpg"
import serviceImage3 from "../assets/serviceImage.jpg"
import serviceImage4 from "../assets/serviceImage2.jpg"
import serviceImage5 from "../assets/serviceImage3.jpg"
import serviceImage6 from "../assets/resort.jpg"

const OurRooms = () => {
return (
    <section className='text-center  my-20 '>
        <p className='heading '>Our Resort</p>
        <h1 className='text-6xl sm:text-7xl font-Playfair uppercase mt-5 mb-10 leading-tight'>What You Will Get</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto w-[90vw] lg:w-[80vw] mt-10'>
            <img src={serviceImage} alt="" />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <img className='h-full w-fulls' src={serviceImage3} alt="" />
                <img src={serviceImage3} alt="" />
                <img src={serviceImage4} alt="" />
                <img src={serviceImage5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default OurRooms