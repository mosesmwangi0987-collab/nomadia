import React from "react";

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-5xl font-bold text-primary">+50</h3>
          <p className="text-gray-600 mt-2">Destinations</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-primary">10k+</h3>
          <p className="text-gray-600 mt-2">Happy Travelers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-primary">98%</h3>
          <p className="text-gray-600 mt-2">Satisfaction Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
