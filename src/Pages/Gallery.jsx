import React from "react";

const Gallery = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Gallery</h1>
      <p className="mt-3 text-lg text-gray-700">
        A glimpse into our school life through pictures.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob2x8ZW58MHx8MHx8fDA%3D" alt="Event 1" className="rounded-lg shadow-md" />
        <img src="https://plus.unsplash.com/premium_photo-1719986264258-dee891e0714d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9sfGVufDB8fDB8fHww" alt="Event 2" className="rounded-lg shadow-md" />
        <img src="https://media.istockphoto.com/id/2075583750/photo/group-of-indian-village-students-in-school-uniform-sitting-in-classroom-doing-homework.webp?a=1&b=1&s=612x612&w=0&k=20&c=K1e9EsZQzb_-GPbYjMVMX1Sqnr8Uj9Az-PfD2gEFN8s=" alt="Event 3" className="rounded-lg shadow-md" />
       
      </div>
    </div>
  );
};

export default Gallery;
