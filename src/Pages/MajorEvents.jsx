import React from "react";

const MajorEvents = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Major Events</h1>
      <p className="mt-3 text-lg text-gray-700">
        Check out the major events and celebrations at our school.
      </p>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Upcoming Events</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Annual Sports Day - March 15, 2025</li>
          <li>Independence Day Celebration - August 15, 2025</li>
          <li>Science Fair - November 20, 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default MajorEvents;
