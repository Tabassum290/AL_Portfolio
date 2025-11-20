import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "/src/image/banner.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="w-full about py-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div
          className="w-full flex flex-col items-center lg:items-start"
          data-aos="fade-right"
        >
          <img
            src={image}
            alt="Psychologist"
            className="w-80 h-auto object-contain items-center my-16 rounded-2xl shadow-lg mb-6"
          />
          <div
            className="flex justify-center lg:justify-start gap-6 bg-gray-200 -mt-10 lg:ml-24 p-4 rounded-md w-36"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.facebook.com/share/1CvchLAs9a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded-md transition">
                Facebook
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/al-imran-bhuiya-a634a0272"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded-md transition">
                LinkedIn
              </span>
            </a>
            <a
              href="https://wa.me/8801740366889?text=Hello%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">
            {t("about.title")}
          </h2>

          {/* Who I Am */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{t("about.who.title")}</h3>

            <ul className="list-disc ml-6 space-y-1">
              <li>{t("about.who.point1")}</li>
              <li>{t("about.who.point2")}</li>
              <li>{t("about.who.point3")}</li>
              <li>{t("about.who.point4")}</li>
              <li>
                <a href="mailto:alimranbhuiya@gmail.com">
                  {t("about.who.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* What I Do */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{t("about.what.title")}</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>{t("about.what.point1")}</li>
              <li>{t("about.what.point2")}</li>
              <li>{t("about.what.point3")}</li>
              <li>{t("about.what.point4")}</li>
              <li>{t("about.what.point5")}</li>
            </ul>
          </div>

          {/* My Approach */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{t("about.approach.title")}</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>{t("about.approach.point1")}</li>
              <li>{t("about.approach.point2")}</li>
              <li>{t("about.approach.point3")}</li>
              <li>{t("about.approach.point4")}</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
