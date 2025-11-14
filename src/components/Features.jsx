import React from "react";

export default function Features() {
  const features = [
    {
      title: "Seamless Travel Planning",
      desc: "Book flights, stays, and tours effortlessly with our integrated planning tools.",
    },
    {
      title: "Personalized Destinations",
      desc: "Get recommendations based on your travel history and preferences — discover your next favorite place.",
    },
    {
      title: "Smart Navigation",
      desc: "Navigate cities with ease using offline maps, route optimization, and detailed guides.",
    },
    {
      title: "Memories Vault",
      desc: "Save, organize, and share your favorite travel moments in one secure place.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-12">Explore Our Features</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-500">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
