// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Traveler",
    message:
      "Nomadia helped me plan the most unforgettable trip of my life. Everything was smooth, organized, and exciting!",
  },
  {
    name: "James Otieno",
    role: "Adventurer",
    message:
      "I discovered hidden destinations I never knew existed. Highly recommended for anyone who loves exploring.",
  },
  {
    name: "Aisha Karim",
    role: "Photographer",
    message:
      "The personalized recommendations were insanely accurate. Nomadia completely changed how I travel.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What <span className="text-blue-600">Our Travelers</span> Say
        </h2>
        <p className="text-gray-600 mb-12">
          Real stories from explorers who used Nomadia to make unforgettable journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-left"
            >
              <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />

              <p className="text-gray-700 leading-relaxed mb-6">“{t.message}”</p>

              <div>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
