import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 px-6">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Explore Our <span className="text-blue-500">Features</span>
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-4 gap-8">

        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h3 className="font-semibold">Travel Planning</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Book flights, tours, and activities with ease.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h3 className="font-semibold">Personalized Trips</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Get tailored travel recommendations.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h3 className="font-semibold">Smart Navigation</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Navigate cities smoothly with offline maps.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h3 className="font-semibold">Memory Vault</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Save and organize your travel moments.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
