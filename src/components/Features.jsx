import React from "react";
import { Plane, Map, Compass, Camera } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Plane className="w-10 h-10 text-blue-600" />,
      title: "Seamless Travel Planning",
      description:
        "Book flights, stays, and tours easily with our integrated travel planning tools.",
    },
    {
      icon: <Map className="w-10 h-10 text-blue-600" />,
      title: "Personalized Destinations",
      description:
        "Get suggestions based on your travel history and interests — discover your next favorite place.",
    },
    {
      icon: <Compass className="w-10 h-10 text-blue-600" />,
      title: "Smart Navigation",
      description:
        "Navigate your trips effortlessly with offline maps and route recommendations.",
    },
    {
      icon: <Camera className="w-10 h-10 text-blue-600" />,
      title: "Memories Vault",
      description:
        "Save and share your favorite travel moments in one secure and accessible place.",
    },
  ];

  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Explore Our Features
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
