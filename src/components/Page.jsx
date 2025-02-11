import React from "react";

const Page = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default Page;
