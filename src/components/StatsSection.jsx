import React from "react";

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center px-4 mt-[-4rem] relative z-20">
      <div className="w-full max-w-6xl bg-teal-700 text-white rounded-2xl shadow-xl py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* STAT 1 */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="text-sm opacity-90 mt-2">Years of Expertise</p>
        </div>

        {/* STAT 2 */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">80+</h2>
          <p className="text-sm opacity-90 mt-2">Countries Explored</p>
        </div>

        {/* STAT 3 */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">5K+</h2>
          <p className="text-sm opacity-90 mt-2">Happy Travelers</p>
        </div>

        {/* STAT 4 */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">300+</h2>
          <p className="text-sm opacity-90 mt-2">Unique Destinations</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
