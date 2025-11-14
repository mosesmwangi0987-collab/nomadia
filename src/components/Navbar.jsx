import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold">
          Nomadia<span className="text-blue-500">.</span>
        </h1>
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-sm font-medium hover:text-blue-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
