import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ImVk } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Even easier in the app</p>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 mr-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
            <FaApple size={25} />

              App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
             <FaGooglePlay size={25} />

              Play Store
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        {/* Middle Section */}
        <div className="md:flex md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-medium text-gray-800 mb-2">Company information</p>
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              {[
                "User agreement",
                "Contacts",
                "Delivery",
                "FAQ",
                "Become a partner",
                "Become a courier",
                "Eats for Business",
                "Plastic recycling",
                "Feedback",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        {/* Bottom Section */}
        <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-center text-gray-600 text-sm">
            &copy; 2018–2024 SnapEats LLC
          </p>
          <div className="mt-2 md:mt-0 text-center">
            <a href="#" className="text-gray-600 flex items-center gap-2 hover:text-gray-800">
              Project for SnapEats <ImVk className="text-blue-800" size={25} />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
