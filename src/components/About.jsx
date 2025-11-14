import React from "react";
import { motion } from "framer-motion";
import venice from "../assets/images/venice.jpg"; // you said this is available

const About = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <motion.img
          src={venice}
          alt="About Nomadia"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[320px] md:h-[380px] object-cover rounded-xl shadow-lg"
        />

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Nomadia</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            Nomadia is your gateway to exploring the world with ease.  
            We help travelers discover breathtaking destinations, connect  
            with local cultures, and turn every journey into a story worth telling.
            Whether you're chasing sunsets, exploring ancient cities, or  
            seeking hidden gems — Nomadia guides your adventure.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl w-fit font-medium shadow-md">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
