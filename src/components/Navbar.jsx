import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          Nomadia
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition-all">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all">Services</li>
          <li className="hover:text-blue-600 cursor-pointer transition-all">Contact</li>
        </ul>

        {/* Call-to-action */}
        <button className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
