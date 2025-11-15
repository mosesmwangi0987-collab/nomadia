import React from "react";
import heroImg from "../assets/images/venice.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Nomadia Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover the World <br /> with{" "}
          <span className="text-blue-400">Nomadia</span>
        </h1>

        <p className="mt-4 text-lg max-w-xl">
          Explore breathtaking destinations, uncover hidden gems, and travel effortlessly.
        </p>

        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-medium shadow-lg transition">
          Start Your Journey
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 
                      bg-white shadow-lg rounded-xl w-[90%] md:w-[70%] p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div>
          <h3 className="text-2xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-700">Years of Expertise</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-600">80+</h3>
          <p className="text-gray-700">Countries Explored</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
          <p className="text-gray-700">Happy Travelers</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-600">300+</h3>
          <p className="text-gray-700">Unique Trips</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
