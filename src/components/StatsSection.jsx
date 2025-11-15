import React from "react";

const StatsSection = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-2xl shadow-lg py-10 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-sm opacity-90">Years of Expertise</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">80+</h3>
          <p className="text-sm opacity-90">Countries Explored</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">5K+</h3>
          <p className="text-sm opacity-90">Happy Travelers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-sm opacity-90">Unique Trips</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
