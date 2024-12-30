import React from "react";
import { FaDiscord, FaInstagram, FaTelegram, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="h-0.5 w-full bg-slate-200" />
      <div className="flex flex-col gap-10 p-4 md:flex-row md:justify-between md:items-center">
        <div><img src="logo.jpg" alt="logo" className="w-10 rounded-full"/></div>
        <div className="flex items-center gap-5">
          Contact us on:
          <FaDiscord className="w-8 hover:text-blue-600 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="w-8 hover:text-blue-600 transition-all duration-300 cursor-pointer" />
          <FaX className="w-8 hover:text-blue-600 transition-all duration-300 cursor-pointer" />
          <FaTelegram className="w-8 hover:text-blue-600 transition-all duration-300 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <p className="text-gray-600 underline cursor-pointer">
            Terms and Conditions
          </p>
          <p className="text-gray-600 underline cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
