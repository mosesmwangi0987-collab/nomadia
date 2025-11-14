import React from "react";

const Features = () => {
  const features = [
    {
      title: "Seamless Travel Planning",
      desc: "Book flights, stays, and tours effortlessly with our tools.",
    },
    {
      title: "Personalized Destinations",
      desc: "Recommendations based on your travel history.",
    },
    {
      title: "Smart Navigation",
      desc: "Offline maps, route optimization, and detailed guides.",
    },
    {
      title: "Memories Vault",
      desc: "Save, organize, and share your adventures.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Explore Our Features</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div className="p-6 bg-white rounded-xl shadow-md text-center" key={i}>
              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
