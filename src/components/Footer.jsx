import React from "react";
import logo from "../assets/images/Logo.png";
import links from "../assets/images/Links.png";
import vector from "../assets/images/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-start">
        {/* Logo and company name */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-16">
          <div className="flex items-center mb-2 gap-4">
            <img src={logo} alt="Company Logo" className="w-12 h-auto mr-2" />
            <h2 className="text-xl md:text-4xl font-bold">Nexcent</h2>
          </div>
          <p className="text-sm md:text-lg mx-5 pt-4 md:pt-8">
            Copyright @ 2020 Nexcent ltd
          </p>
          <br />
          <img src={links} alt="" className="w-40 md:w-56" />
        </div>

        {/* Company links */}
        <div className="mb-8 md:mb-0 md:mr-16">
          <h2 className="text-base md:text-2xl font-semibold mb-2">Company</h2>
          <ul className="text-sm md:text-lg">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact-us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support links */}
        <div className="mb-8 md:mb-0 md:mr-16">
          <h2 className="text-base md:text-2xl font-semibold mb-2">Support</h2>
          <ul className="text-sm md:text-lg">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Stay up to date input */}
        <div className="mb-8">
          <h2 className="text-base md:text-2xl font-semibold mb-2">
            Stay up to date
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-gray-600 w-full md:w-80 px-4 md:px-6 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-gray-400 text-sm md:text-lg"
            />
            <img
              src={vector}
              alt=""
              className="absolute pl-60 top-4 left-1/2 transform -translate-y-1/5 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
