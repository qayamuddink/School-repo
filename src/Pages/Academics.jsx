import React from "react";

const Academics = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Academics</h1>
      <p className="mt-3 text-lg text-gray-700">
        Explore the academic curriculum and learning methodology at our school.
      </p>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Subjects Offered</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Mathematics, Science, English, Social Studies</li>
          <li>Languages: Hindi, Sanskrit, French</li>
          <li>Computer Science, Physical Education</li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;
