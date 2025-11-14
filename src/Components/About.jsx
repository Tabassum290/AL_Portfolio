import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import image from "/src/image/banner.jpg"
const About = () => {
  return (
    <div id="about" className="relative w-full mt-20 mb-20 px-4 lg:px-0">
      {/* Subtle Background Accent on Right */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-100 rounded-l-3xl z-0"></div>

      {/* Main Content with Shadow */}
      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between w-full gap-8 bg-white shadow-2xl rounded-3xl p-6 lg:p-12 z-10">
        {/* Image + Social Icons */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center">
          <div className="w-full rounded-3xl overflow-hidden">
            <img
              src={image}
              alt="About"
              className="w-full h-[400px] object-contain rounded-3xl shadow-md"
            />
          </div>
          <div className="absolute -bottom-6 bg-white shadow-2xl rounded-xl py-4 px-6 flex justify-center gap-6">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition" />
            <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition" />
            <SiGmail className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col z-10">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug">
            I am Professional User <br /> Experience Designer
          </h2>
          <p className="my-4 sm:my-6 text-base sm:text-lg md:text-[18px] text-gray-700">
            I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="btn bg-purple-600 text-white px-6 sm:px-8 py-2">
              <a href="mailto:example@gmail.com">Certificates</a>
            </button>
            <button className="btn btn-outline px-6 sm:px-8 py-2">
              <a href="mailto:example@gmail.com">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
