import React from "react";
import AboutImg from "../assets/images/About.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src={AboutImg}
          className="rounded-xl shadow-lg"
          alt="About Nomadia"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            About <span className="text-blue-500">Nomadia</span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Nomadia is your gateway to exploring the world. We help travelers find unforgettable
            moments, explore cultures, and build lifelong memories.
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
