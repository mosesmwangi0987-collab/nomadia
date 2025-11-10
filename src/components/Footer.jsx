import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center mt-20">
      <p className="text-sm">
        © {new Date().getFullYear()} Nomadia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
