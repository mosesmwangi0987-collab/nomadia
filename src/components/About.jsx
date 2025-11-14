import React from "react";
import AboutImage from "../assets/images/About.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <img
          src={AboutImage}
          alt="About Nomadia"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-blue-500">Nomadia</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Nomadia is your gateway to exploring the world. We help travelers
            find breathtaking destinations, connect with local cultures, and
            build lasting memories. From serene beaches to bustling cities,
            Nomadia turns every journey into a meaningful story.
          </p>
          <a
            href="#features"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
