import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "80+", label: "Countries Explored" },
    { value: "500+", label: "Unique Destinations" },
    { value: "10k+", label: "Happy Travelers" },
    { value: "1200+", label: "Community Events" },
  ];

  return (
    <section className="bg-blue-600 py-10 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
