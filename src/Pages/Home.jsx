import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-blue-600">🏫 Welcome to Uvais Public School</h2>
      <p className="text-gray-600 mt-3">
        Empowering students with knowledge, skills, and values for a bright future.
      </p>
      <Link
        to="/admission"
        className="mt-5 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Enroll Now
      </Link>
    </section>
  );
};

export default Home;
