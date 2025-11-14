import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-white">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have questions or need help planning your next adventure? Reach out to
        us anytime.
      </p>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
