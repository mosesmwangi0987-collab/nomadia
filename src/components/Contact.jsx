import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Contact <span className="text-blue-500">Us</span>
      </h2>

      <form className="max-w-xl mx-auto mt-10 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border rounded-md"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md w-full font-semibold">
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;
