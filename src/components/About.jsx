import React from "react";
import { Globe2, Users, MapPinned } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-8 md:px-20 lg:px-40 bg-white text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <div className="space-y-6 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose <span className="text-blue-600">Nomadia?</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We make travel effortless and meaningful. With Nomadia, you get
            real-time recommendations, connect with other travelers, and find
            experiences that fit your style.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Globe2 className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Global Reach</h3>
              <p className="text-gray-500 text-sm">
                Discover destinations worldwide with local insights.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Traveler Community</h3>
              <p className="text-gray-500 text-sm">
                Meet people who share your passion for exploration.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <MapPinned className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Smart Planning</h3>
              <p className="text-gray-500 text-sm">
                Plan trips easily with curated guides and route tools.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Adventure travel"
            className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
