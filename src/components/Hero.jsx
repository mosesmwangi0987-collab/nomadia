import React from "react";
import { motion } from "framer-motion";
import venice from "../assets/images/venice.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={venice}
        alt="Venice"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg"
        >
          Discover The World With Nomadia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-200 max-w-2xl mt-4 text-lg md:text-xl drop-shadow-md"
        >
          Your journey starts here — explore breathtaking destinations and unforgettable adventures.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
        >
          Explore Destinations
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
