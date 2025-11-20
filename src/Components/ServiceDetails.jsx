import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // get services array from i18n json
  const services = t("services", { returnObjects: true });
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">{t("service_not_found", "Service Not Found")}</h2>
        <Link to="/" className="btn btn-sm btn-primary">
          ← {t("back_to_home", "Back to Home")}
        </Link>
      </div>
    );
  }

  const { title, details } = service;
  const { description, who, methodology, duration, benefits, notes } = details;

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <Link to="/" className="btn btn-sm btn-outline mb-6 bg-blue-600 text-white">
        ← {t("back", "Back")}
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">{title}</h1>
<img
                    src={service.image}
                    alt={service.title}
                    className="h-96 object-cover w-full rounded-xl"
                  />
      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("description", "Description")}</h2>
        <p className="text-lg">{description}</p>
      </div>

      {/* Who */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("who_for", "Who is it for?")}</h2>
        <p className="text-lg">{who}</p>
      </div>

      {/* Methodology */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("methodology", "Methodology")}</h2>
        <ul className="list-disc list-inside ml-4">
          {methodology.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("duration", "Duration")}</h2>
        <p className="text-lg">{duration}</p>
      </div>

      {/* Benefits */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("benefits", "Benefits")}</h2>
        <ul className="list-disc list-inside ml-4">
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("notes", "Notes")}</h2>
        <p className="text-lg">{notes}</p>
      </div>
    </section>
  );
};

export default ServiceDetails;
