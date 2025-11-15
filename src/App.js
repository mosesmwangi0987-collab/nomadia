import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials"; // ⭐ ADD THIS
import StatsSection from "./components/StatsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white">

      <Navbar />

      <Hero />

      <div className="mt-32"></div>

      <About />

      <Features />

      <Testimonials />   {/* ⭐ ADD THIS */}

      <StatsSection />

      <Gallery />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
