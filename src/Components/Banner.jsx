import image from "/src/image/banner.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full mt-12 mb-8 gap-6 px-4 sm:px-6 lg:px-0 text-left"
    >
      {/* Text Section */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left"
        data-aos="fade-right"
      >
        <ReactTyped
          className="text-4xl font-bold"
          strings={[t("banner.hello")]}
          typeSpeed={40}
        />
        <br />

        <ReactTyped
          className="text-4xl text-black font-bold text-left"
          strings={[t("banner.name")]}
          typeSpeed={60}
          backSpeed={60}
        >
          <input type="text" />
        </ReactTyped>

        <p
          className="my-3 sm:my-4 text-sm sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {t("banner.description")}
        </p>

        <p
          className="text-blue-600 text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a href="mailto:alimranbhuiya@gmail.com">
            {t("banner.gmail")}: alimranbhuiya@gmail.com
          </a>
        </p>

        <button
          className="btn bg-purple-600 text-white px-5 sm:px-6 py-2 sm:py-3 mt-2"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <a href="https://wa.me/8801740366889?text=Hello%20I%20want%20to%20contact%20you">
            {t("banner.sayHello")}
          </a>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={image}
          alt="Banner"
          className="w-96 h-[400px] object-contain rounded-3xl border-b-4 border-purple-600 border-t-4 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
