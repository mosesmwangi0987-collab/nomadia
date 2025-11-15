import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BRAND */}
        <h2 className="text-2xl font-bold text-white">Nomadia</h2>

        <div className="border-b border-gray-700 my-8"></div>

        {/* FOOTER GRID */}
        <div className="grid md:grid-cols-5 gap-10">

          <div>
            <h3 className="font-semibold text-white">Our Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Travel Planning</li>
              <li>Personalized Trips</li>
              <li>Smart Navigation</li>
              <li>Memory Vault</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Top Features</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Route Optimization</li>
              <li>Destination Finder</li>
              <li>Travel Insights</li>
              <li>Local Guides</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Travel Blog</li>
              <li>Support</li>
              <li>FAQs</li>
              <li>Community Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <FaInstagram className="text-gray-300 hover:text-blue-500 cursor-pointer" />
              <FaFacebookF className="text-gray-300 hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="text-gray-300 hover:text-blue-500 cursor-pointer" />
              <FaGithub className="text-gray-300 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

        </div>

        <div className="border-b border-gray-700 my-8"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-500">
          © 2025 Nomadia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
