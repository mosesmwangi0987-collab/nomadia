import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "10+", label: "Years of Travel Expertise" },
    { number: "80+", label: "Countries Explored" },
    { number: "5K+", label: "Happy Travelers" },
    { number: "300+", label: "Unique Destinations" },
  ];

  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-600 text-white rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 text-center py-10 md:py-14">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-2">{item.number}</h2>
              <p className="text-sm opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
