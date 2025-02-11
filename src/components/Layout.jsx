
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-4 p-4">{children}</div>
    </div>
  );
};

export default Layout;