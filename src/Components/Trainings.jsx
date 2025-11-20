import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Trainings = () => {
  const { t } = useTranslation();
  const trainings = t("trainings", { returnObjects: true }) || [];
  const title = t("training", "My Trainings");
const { id } = useParams();
console.log(id);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="training" className="py-20 px-4 lg:px-0 ">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <Link key={training.id} to={`/trainings/${training.code}`}>
              <div className="card bg-white shadow-lg hover:shadow-2xl transition cursor-pointer rounded-xl overflow-hidden">
                {/* Image on top */}
                <figure className="h-48 w-full">
                  <img
                    src={training.image}
                    alt={training.fullForm}
                    className="w-full h-full object-cover"
                  />
                </figure>

                {/* Text content */}
                <div className="card-body p-4">
                  <h3 className="card-title text-xl font-semibold mb-2">
                    {training.fullForm}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {training.description.length > 100
                      ? training.description.slice(0, 100) + "..."
                      : training.description}{" "}
                    <span className="text-blue-600 font-medium">
                      {t("more", "More...")}
                    </span>
                  </p>
                  <p className="text-gray-800 font-medium">
                    {t("total_hours", "Total Hours")}: {training.hours}
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

export default Trainings;
