import React from "react";
const Education = () => {
  // Example educational data
  const educationList = [
    {
      year: "2021 - 2025",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of London",
      description:
        "Focused on software development, UI/UX design, and web technologies. Graduated with honors.",
    },
    {
      year: "2019 - 2021",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Mary’s College",
      description:
        "Major in Science with emphasis on Mathematics and Computer Studies.",
    },
    {
      year: "2017 - 2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "Greenwood High School",
      description:
        "Completed secondary education with distinction in science subjects.",
    },
  ];

  return (
    <div id="education" className="w-full mt-20 mb-20 px-4 lg:px-0 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        My Education
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
              <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-purple-600 font-medium">{edu.institution}</p>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
