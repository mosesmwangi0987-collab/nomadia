import React from "react";
import santorini from "../assets/images/santorini.jpg";
import kyoto from "../assets/images/kyoto.jpg";
import venice from "../assets/images/venice.jpg";
import bali from "../assets/images/bali.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Explore <span className="text-blue-600">Destinations</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[santorini, kyoto, venice, bali].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-500"
            >
              <img
                src={image}
                alt={`Destination ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
