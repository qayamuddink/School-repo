
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Student Corner", path: "/student-corner" },
  { name: "CBSE Disclosure", path: "/cbse-disclosure" },
  { name: "Admission", path: "/admission" },
  { name: "Academics", path: "/academics" },
  { name: "Beyond Academics", path: "/beyond-academics" },
  { name: "Career", path: "/career" },
  { name: "Major Events", path: "/major-events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; 
  };

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        document.body.style.overflow = "auto"; 
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-blue-900 text-white relative">
      
      <div className="hidden md:block text-center py-2 text-xl font-bold">
        Uvais Public School
      </div>

      
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* School Name in Navbar (Only for Mobile) */}
          <h1 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap md:hidden">
            Uvais Public School
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-gray-300">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button className="absolute top-5 right-5" onClick={toggleMenu}>
          <X size={28} />
        </button>
        <ul className="mt-12 space-y-4 pl-6">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-gray-300 text-lg"
                onClick={toggleMenu}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
