import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 lg:px-32 xl:px-44 py-20 md:py-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.97), rgba(245,247,250,0.97)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="relative z-10 max-w-lg text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Discover the World <br />
          with <span className="text-blue-600">Nomadia</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Explore beautiful destinations, connect with travelers, and make
          memories that last a lifetime. Wherever you go, Nomadia brings your
          world closer.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Travel destination"
          className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
};

export default Hero;
