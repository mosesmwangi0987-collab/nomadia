import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { value: "80+", label: "Countries Explored" },
    { value: "500+", label: "Unique Destinations" },
    { value: "10k+", label: "Happy Travelers" },
    { value: "1200+", label: "Community Events" },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl shadow-xl py-10 px-6 md:px-10 -mt-20 relative z-10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
