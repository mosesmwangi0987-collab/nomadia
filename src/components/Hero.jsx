import React from "react";
import heroImg from "../assets/images/venice.jpg"; // ← correct path

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroImg}
        alt="Beautiful Venice canal"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold drop-shadow-lg">Explore Nomadia</h1>
        <p className="mt-4 max-w-xl text-lg drop-shadow-md">
          Your journey begins with a single step into the unknown.
        </p>
      </div>
    </section>
  );
};

export default Hero;
