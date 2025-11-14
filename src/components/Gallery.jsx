import React from "react";
import bali from "../assets/images/bali.jpg";
import kyoto from "../assets/images/kyoto.jpg";
import santorini from "../assets/images/santorini.jpg";

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Destinations</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src={bali} alt="Bali" className="rounded-xl object-cover h-80 w-full" />
          <img src={kyoto} alt="Kyoto" className="rounded-xl object-cover h-80 w-full" />
          <img src={santorini} alt="Santorini" className="rounded-xl object-cover h-80 w-full" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
