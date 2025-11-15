import React from "react";
import santorini from "../assets/images/santorini.jpg";
import kyoto from "../assets/images/kyoto.jpg";
import bali from "../assets/images/bali.jpg";
import venice from "../assets/images/venice.jpg";

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800">
        Explore <span className="text-blue-500">Destinations</span>
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-4 gap-6">

        <img src={santorini} className="rounded-xl shadow" alt="Santorini" />
        <img src={kyoto} className="rounded-xl shadow" alt="Kyoto" />
        <img src={venice} className="rounded-xl shadow" alt="Venice" />
        <img src={bali} className="rounded-xl shadow" alt="Bali" />

      </div>
    </section>
  );
};

export default Gallery;
