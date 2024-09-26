import React from "react";
import img from "../assets/hi.jpg";

const About = () => {
  return (
    <section className=" my-12 ">
      <div className=" text-center">
        <p className="tracking-[.8rem] text-gray-400 font-bold uppercase">
          About Us
        </p>
        <h1 className="text-6xl sm:text-7xl font-Playfair uppercase mt-5 mb-10 leading-tight">
          A best place to enjoy <br /> your life
        </h1>
        <p className="leading-loose w-[70%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec maurisac orci tincidunt faucibus nec nec est. Etiam dapibus
          ultrices accumsan. Vestibulum et dignissim diam,vel vestibulumnisi.
          Nullam elementum tellus eu fermentum pharetra. In hac habitasse
        </p>
      </div>
      <div className="shadow-2xl w-[90%] md:w-[70%] lg:w-[60%]  h-[30rem] mx-auto  p-6 bg-slate-300 rounded-lg mt-16">
        <img src={img} alt="aboutImage" className=' h-full w-full object-cover '  />       
      </div>
    </section>
  );
};

export default About;
