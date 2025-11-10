// src/components/Hero.jsx
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
        <div className="absolute inset-0 bg-black/50"></div>

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

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto -mt-10 px-6">
        <div className="bg-blue-600 text-white rounded-2xl py-8 px-6 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">80+</h2>
              <p className="text-sm mt-1">Countries Explored</p>
            </div>

            <div className="hidden md:block border-l border-white/30"></div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">10k+</h2>
              <p className="text-sm mt-1">Happy Travelers</p>
            </div>

            <div className="hidden md:block border-l border-white/30"></div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">500+</h2>
              <p className="text-sm mt-1">Unique Destinations</p>
            </div>

            <div className="hidden md:block border-l border-white/30"></div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">1200+</h2>
              <p className="text-sm mt-1">Community Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
              alt="travel adventure"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Why Choose <span className="text-blue-500">Nomadia?</span>
            </h3>
            <p className="text-gray-700 mb-6">
              We make travel effortless and meaningful. With Nomadia, you get
              personalized recommendations, connect with travelers, and find
              adventures that suit your unique style.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Global Reach</h4>
                  <p className="text-sm text-gray-600">
                    Discover destinations worldwide with exclusive local
                    insights and experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Smart Planning</h4>
                  <p className="text-sm text-gray-600">
                    Create custom itineraries with curated guides and tools to
                    make every journey smooth and memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
