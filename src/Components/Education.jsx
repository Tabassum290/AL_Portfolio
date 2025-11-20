import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const educationList = t("educationList", { returnObjects: true });

  return (
    <div id="education" className="w-full mt-20 mb-20 px-4 lg:px-0 max-w-7xl mx-auto" data-aos="fade-left">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-purple-600 font-bold text-center mb-12">
        {t("my_education", "My Education")}
      </h2>

      <div className="flex flex-col gap-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 bg-white rounded-3xl shadow-lg relative"
          >
            {/* Year */}
            <div className="flex-shrink-0 text-purple-600 font-bold text-lg md:text-xl w-32 text-left">
              {edu.year}
            </div>

            {/* Divider line for timeline effect */}
            <div className="hidden md:block w-1 bg-purple-300 h-full absolute left-40 top-0"></div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-black">{edu.degree}</h3>
              <p className="text-purple-600 font-medium">{edu.institution}</p>
              {edu.group && <p className="text-gray-800 font-semibold mt-2">{edu.group}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
