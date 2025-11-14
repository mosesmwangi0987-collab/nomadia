import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import StatsSection from "./components/StatsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />

      <Hero />
      <About />
      <Features />
      <StatsSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
