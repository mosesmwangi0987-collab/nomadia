import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
      </main>

      {/* About Section */}
      <section>
        <About />
      </section>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
