import React from "react";
import aboutImg from "../assets/images/About.jpg";

const About = () => {
  return (
    <section className="w-full py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <img
          src={aboutImg}
          alt="Nomadia travelers"
          className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Nomadia</h2>
          <p className="text-gray-700 leading-relaxed">
            Nomadia is your gateway to breathtaking destinations. We help modern
            explorers find new cultures, landscapes, and unforgettable adventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
