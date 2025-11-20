import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import servicesData from "../Publics/en.json"; // i18n automatically switches language

const Service = () => {
  const { t } = useTranslation();
  const services = t("services", { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="py-20 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          {t("our_services", "Our Services")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-black">
          {services.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`}>
              <div className="card card-side bg-base-100 shadow-lg hover:shadow-2xl transition cursor-pointer w-96 h-64">
                 <figure className="w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full rounded-l-xl"
                  />
                </figure> 
                <div className="card-body w-1/2">
                  <h2 className="card-title">{service.title}</h2>
                  <p>
                    {service.short}{" "}
                    <span className="text-blue-600"> {t("more", "More....")}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
