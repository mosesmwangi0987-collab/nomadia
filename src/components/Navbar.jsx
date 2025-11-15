import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-extrabold text-xl tracking-wide drop-shadow">
          NOMADIA
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-white font-medium drop-shadow">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Features</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

      </div>
    </header>
  );
};

export default Navbar;
