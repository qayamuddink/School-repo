import React from "react";

const BeyondAcademics = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Beyond Academics</h1>
      <p className="mt-3 text-lg text-gray-700">
        We believe in holistic education that goes beyond books and classrooms.
      </p>

      
      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Extracurricular Activities</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Debate and Public Speaking</li>
          <li>Music, Dance, and Theatre</li>
          <li>Art & Craft Workshops</li>
          <li>Robotics and STEM Clubs</li>
        </ul>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Sports & Fitness</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Football, Basketball, and Cricket</li>
          <li>Swimming and Athletics</li>
          <li>Martial Arts & Yoga</li>
          <li>Inter-school Sports Competitions</li>
        </ul>
      </div>


      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Student Leadership</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Student Council</li>
          <li>Prefect and House System</li>
          <li>Social Responsibility Programs</li>
          <li>Entrepreneurship & Business Clubs</li>
        </ul>
      </div>
    </div>
  );
};

export default BeyondAcademics;
