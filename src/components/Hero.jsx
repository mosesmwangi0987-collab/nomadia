import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-10 absolute top-0 left-0 w-full z-20">
        <h1 className="text-white text-2xl font-bold">Nomadia</h1>
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section (background image + overlay) */}
      <div
        className="relative flex flex-col justify-center items-center text-center text-white h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Discover the World <br className="hidden md:block" />
            with <span className="text-blue-400">Nomadia</span>
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto md:mx-0 mb-8">
            Explore breathtaking destinations, connect with global travelers,
            and make memories that last a lifetime. Wherever you go, Nomadia
            brings your world closer.
          </p>

          <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
