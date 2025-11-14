import React from "react";
import venice from "../assets/images/venice.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${venice})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Discover the World with Nomadia
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 drop-shadow-lg">
          Explore breathtaking destinations, uncover hidden gems, and travel effortlessly.
        </p>

        <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white rounded-xl text-white font-semibold hover:bg-white/40 transition">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
