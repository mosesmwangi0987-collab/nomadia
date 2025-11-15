import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 pt-16 pb-10 px-6">
      
      {/* Top: Brand + Socials */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        
        <h2 className="text-2xl font-bold text-white mb-6 md:mb-0">
          Nomadia
        </h2>

        <div className="flex space-x-4 text-white text-lg">
          <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400"><FaGithub /></a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-b border-gray-700 my-8"></div>

      {/* Footer Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Travel Planning</li>
            <li>Personalized Trips</li>
            <li>Smart Navigation</li>
            <li>Memory Vault</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Top Features</h4>
          <ul className="space-y-2 text-sm">
            <li>Offline Maps</li>
            <li>Fast Booking</li>
            <li>Local Insights</li>
            <li>City Guides</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Travel Blog</li>
            <li>Support</li>
            <li>Guides</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Destinations</li>
            <li>Experiences</li>
            <li>Top Deals</li>
            <li>Travel Tips</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Nomadia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
