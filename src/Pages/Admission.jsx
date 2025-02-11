import React from "react";

const Admission = () => {
  return (
    <div className="p-6 text-center">
     
      <h1 className="text-3xl font-bold text-blue-900">Admission Process</h1>

    
      <p className="mt-3 text-lg text-gray-700">
        Join Navy Children School and be a part of an excellent learning environment.
      </p>

     
      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Eligibility Criteria</h2>
        <ul className="mt-2 text-gray-700 text-left list-disc list-inside">
          <li>Minimum age: 3 years for Nursery.</li>
          <li>For Class 1, child should be at least 5 years old.</li>
          <li>Documents required: Birth Certificate, Aadhar Card, Previous School Report Card.</li>
        </ul>
      </div>

 
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold text-blue-800">Admission Process</h2>
        <ol className="mt-2 text-gray-700 text-left list-decimal list-inside">
          <li>Fill out the online registration form.</li>
          <li>Submit required documents and pay the admission fee.</li>
          <li>Attend an interaction session or entrance test (for higher classes).</li>
          <li>Final confirmation will be communicated via email.</li>
        </ol>
      </div>

     
      <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800">Need Help?</h2>
        <p className="text-gray-700">Contact our admission office for any queries:</p>
        <p className="mt-2 font-semibold">📞 +91 98765 43210</p>
        <p className="font-semibold">✉️ admissions@navychildrenschool.com</p>
      </div>
    </div>
  );
};

export default Admission;
