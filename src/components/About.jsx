import React from "react";

const About = () => {
  return (
    <section className="w-full py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8 md:px-20">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Nomadia travelers exploring"
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            About <span className="text-blue-600">Nomadia</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Nomadia is your gateway to exploring the world. We help travelers
            find breathtaking destinations, connect with local cultures, and
            build lasting memories. From serene beaches to bustling cities,
            Nomadia turns every journey into a meaningful story.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to inspire adventure through simplicity and
            connection. Wherever your heart wants to go, we’re here to make it
            happen—seamlessly and beautifully.
          </p>

          <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
