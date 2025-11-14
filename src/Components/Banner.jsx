import image from "/src/image/banner.jpg"
import React from "react";
const Banner = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full mt-12 mb-8 gap-6 px-4 sm:px-6 lg:px-0"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-snug">
          Hello, I’m <br /> Brooklyn Gilbert
        </h2>
        <p className="my-3 sm:my-4 text-sm sm:text-base md:text-lg text-gray-700">
          I'm a Freelance UI/UX Designer and Developer based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
        </p>
        <button className="btn bg-purple-600 text-white px-5 sm:px-6 py-2 sm:py-3 mt-2">
          <a href="mailto:example@gmail.com">Say Hello!</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={image}
          alt="Banner"
          className="w-full max-w-full h-[400px] object-contain
           rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
