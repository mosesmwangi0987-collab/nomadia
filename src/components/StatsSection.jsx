import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Travel Expertise" },
  { value: "80+", label: "Countries Explored" },
  { value: "5K+", label: "Happy Travelers" },
  { value: "300+", label: "Unique Destinations" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white flex justify-center">
      <motion.div
        className="bg-blue-600 text-white rounded-xl shadow-lg w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {stats.map((item, i) => (
          <div key={i} className="py-6 text-center px-6">
            <h3 className="text-3xl font-bold">{item.value}</h3>
            <p className="text-sm opacity-80 mt-1">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
