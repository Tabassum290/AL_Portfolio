import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "./Service";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="btn btn-sm btn-primary">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const { title, image, details } = service;
  const { description, who, methodology, duration, benefits, notes } = details;

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <Link to="/" className="btn btn-sm btn-outline mb-6 bg-blue-600 text-white">
        ← Back
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">{title}</h1>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
      />

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-lg">{description}</p>
      </div>

      {/* Who is it for */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Who is it for?</h2>
        <p className="text-lg">{who}</p>
      </div>

      {/* Methodology */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Methodology</h2>
        <ul className="list-disc list-inside ml-4">
          {methodology.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Duration</h2>
        <p className="text-lg ">{duration}</p>
      </div>

      {/* Benefits */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
        <ul className="list-disc list-inside ml-4 ">
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Notes</h2>
        <p className="text-lg ">{notes}</p>
      </div>
    </section>
  );
};

export default ServiceDetails;
