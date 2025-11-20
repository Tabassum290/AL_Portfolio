import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TrainingDetails = () => {
  const { t } = useTranslation();
 const { id } = useParams();
console.log(id);
  const trainings = t("trainings", { returnObjects: true }) || [];
  const training = trainings.find((t) => t.code === id);

  if (!training) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Training Not Found</h2>
        <Link to="/trainings" className="btn btn-sm btn-primary">
          ← Back to Trainings
        </Link>
      </div>
    );
  }

  const { fullForm, image, description, hours } = training;

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <Link
        to="/"
        className="btn btn-sm btn-outline mb-6 bg-purple-600 text-white"
      >
        ← Back
      </Link>

      {/* Card */}
      <div className="card bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image */}
        <figure className="h-64 w-full">
          <img src={image} alt={fullForm} className="w-full h-full object-cover" />
        </figure>

        {/* Content */}
        <div className="card-body p-6">
          <h1 className="text-3xl font-bold mb-4 text-purple-600">{fullForm}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-800 font-medium mb-4">
            {t("total_hours", "Total Hours")}: {hours}
          </p>

          {/* Optional: add topics, methodology, or details if available */}
          {training.topics && training.topics.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Topics Covered:</h2>
              <ul className="list-disc list-inside ml-4">
                {training.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrainingDetails;
