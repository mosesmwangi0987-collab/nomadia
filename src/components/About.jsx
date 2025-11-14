import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/About.jpg";

const About = () => {
  return (
    <section className="py-20 bg-white flex justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* Image */}
        <motion.img
          src={aboutImg}
          alt="About Nomadia"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-blue-600">Nomadia</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Nomadia is your gateway to exploring the world. We help travelers find
            breathtaking destinations, connect with local cultures, and build
            lasting memories.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            From serene beaches to bustling cities, Nomadia turns every journey
            into a meaningful story.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
