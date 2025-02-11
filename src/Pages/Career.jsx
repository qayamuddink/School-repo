import React from "react";

const Career = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Career Opportunities</h1>
      <p className="mt-3 text-lg text-gray-700">
        Explore job opportunities and career paths with Navy Children School.
      </p>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Current Openings</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Primary School Teacher (Mathematics, Science)</li>
          <li>Sports Instructor</li>
          <li>Administration Staff</li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
