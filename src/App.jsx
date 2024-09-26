import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import image from './assets/resort.jpg'
import Navbar from './components/Navbar'
import About from './pages/About'
import OurRooms from './pages/ourRooms'
import Priceing from './pages/Priceing'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <section className="bg-[url('./assets/resort.jpg')]  bg-cover bg-center">
    <div className='bg-blackOverlay w-full h-[85vh] flex items-center justify-center'>
      <div className='text-white text-center'>
        <h1 className='mb-12 text-white text-5xl sm:text-7xl md:text-8xl  uppercase font-thin'><span className='text-blue-400'>Hotel</span> & Resort</h1>
        <p className='  w-[70%] mx-auto text-sm md:text-lg text-center text-gray-300 '>TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER
        DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS</p>
        <button type="button" className='p-4 mt-8  bg-blue-600 rounded-lg'>Buy Now At 54 $</button>
      </div>
    </div>
    </section>
    <About/>
    <OurRooms/>
    <Priceing/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
