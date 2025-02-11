import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"

];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); 
  }, [currentImage]); 

  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white text-center px-6 overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

 
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Uvais Public School</h1>
        <p className="mt-3 text-lg md:text-xl">
          Empowering students with knowledge, skills, and values for a bright future.
        </p>
        <Link
          to="/admission"
          className="mt-5 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Enroll Now
        </Link>
      </div>

  
      <button
        onClick={prevSlide}
        className="absolute left-5 z-10 bg-white text-black p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-300 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 z-10 bg-white text-black p-2 rounded-full text-2xl cursor-pointer hover:bg-gray-300 transition"
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSection;
