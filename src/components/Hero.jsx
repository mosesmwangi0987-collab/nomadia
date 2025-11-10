import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-20 mt-20">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Discover the World with <span className="text-blue-600">Nomadia</span>
        </h1>
        <p className="text-gray-600 text-lg md:w-3/4">
          Explore beautiful destinations, connect with travelers, and make memories that last a lifetime.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60"
          alt="Travel the world"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
