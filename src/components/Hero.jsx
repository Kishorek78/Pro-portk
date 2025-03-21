// eslint-disable-next-line no-unused-vars
import React from "react";
import profilepic from "../assets/profilepic.jpg";
import Resume from "../assets/Resume.pdf"
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
        <div className="max-w-[800px]">
          <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
            HEY,I AM <br />
            <span className="">KISHORE</span> <br />
            <TypeAnimation
              sequence={[
                "Mobile App Developer",
                1000,
                "UI/UX Designer",
                1000,
                "FullStack Web Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold italic"
            />
          </p>
          <h2 className="text-gray-300">
            
          </h2>
          <div className="flex flex-row gap-4 mb-4 md:mb-0">
            <button
              className="    transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer 
              font-bold text-gray-200 w-1/2 mt-6 p-2
    bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl"
                >
             <a href={Resume} download="resume" > Download CV </a>
            </button>
            <button
              className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer 
            font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl"
            >
              View Work
            </button>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden md:overflow-visible">
          <div className="hidden md:block">
            <ShinyEffect left={100} top={200} size={1400} />
          </div>

          <ShinyEffect left={-100} top={0} size={1200} />
        </div>

       

        <img src={profilepic} className="w-[150px ] md:w-[300px]" />
      </div>
    </div>
  );
};

export default Hero;
