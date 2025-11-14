import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have questions or need help planning your next adventure? Reach out anytime.
        </p>

        <form className="grid gap-6">
          <input className="p-4 rounded-lg border" placeholder="Your Name" />
          <input className="p-4 rounded-lg border" placeholder="Your Email" />
          <textarea className="p-4 rounded-lg border h-32" placeholder="Your Message" />

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
