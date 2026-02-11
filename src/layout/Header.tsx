import React, { useState } from "react";
import logo from "../assets/logo.png";
import { COLORS } from "../constants/constants";
import underlineIcon from "../assets/underline-icon.svg";
import zigzagIcon from "../assets/zigzag-icon.svg";
import cloudIcon from "../assets/cloud-icon.png";
import verticalLines from "../assets/vertlical-lines.svg";
import { useWindowSize } from "../hooks/useWindowScreen";
import logoSimplified from "../assets/logo-simplified.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { width } = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {width > 890 ? (
        <div className="py-3 z-20 fixed flex justify-between items-center w-full px-3">
          <div
            className="container rounded-full w-65 py-3 px-7 shadow-lg"
            style={{
              backgroundColor: COLORS.brown,
            }}
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-between relative bg-white text-black font-semibold w-1/2 text-xl px-10 py-4 rounded-full shadow-lg">
            <div className="flex flex-col group">
              <a href="/">Home</a>
              <div className="container font-bold absolute bottom-1 h-4 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={underlineIcon} className="w-full h-full " />
              </div>
            </div>
            <div className="flex flex-col group">
              <a href="/services">Services</a>
              <div className="container font-bold absolute bottom-1 h-4 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={zigzagIcon} className="w-full h-full " />
              </div>
              <div className="container font-bold absolute top-0 h-4 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={zigzagIcon} className="w-full h-full " />
              </div>
            </div>
            <div className="flex flex-col relative group">
              <a href="#faqs" className="z-10">
                FAQs
              </a>
              <div className="container font-bold absolute -top-4 -left-3  h-15 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={cloudIcon} className="w-full h-full " />
              </div>
            </div>
            <div className="flex relative px-2 group">
              <a href="/blog" className="relative z-10">
                Blog
              </a>
              <div className="container font-bold absolute -top-2 -left-4 h-12 w-22 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={verticalLines} className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="contact-us-container">
            <a href="/contact">
              <button
                style={{ color: COLORS.red }}
                className="text-xl font-semibold bg-white rounded-full px-7 py-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="relative w-full z-50">
          <div
            className="w-full fixed  justify-between items-center flex px-4 py-3"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <div
              className="logo-container p-3 rounded-full"
              style={{
                backgroundColor: COLORS.brown,
              }}
            >
              <img
                src={logoSimplified}
                className="w-10 h-10"
                alt="logo simplified"
              />
            </div>
            <button
              className="p-2 rounded-full"
              style={{
                backgroundColor: COLORS.brown,
              }}
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={32} className="text-white" />
            </button>
          </div>
          <div
            className={`side-bar fixed top-0 left-0 h-screen w-full bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X size={32} className="text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
              <div
                className="mb-8 p-6 rounded-full shadow-xl"
                style={{ backgroundColor: COLORS.brown }}
              >
                <img src={logo} alt="logo" className="w-40" />
              </div>
              <a
                href="/"
                className="text-3xl font-semibold hover:text-gray-300 transition-colors"
                style={{ color: COLORS.lightBrown }}
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </a>
              <a
                href="/services"
                className="text-3xl font-semibold hover:text-gray-300 transition-colors"
                style={{ color: COLORS.lightBrown }}
                onClick={() => setIsSidebarOpen(false)}
              >
                Services
              </a>
              <a
                href="#faqs"
                className="text-3xl font-semibold hover:text-gray-300 transition-colors"
                style={{ color: COLORS.lightBrown }}
                onClick={() => setIsSidebarOpen(false)}
              >
                FAQs
              </a>
              <a
                href="/blog"
                className="text-3xl font-semibold hover:text-gray-300 transition-colors"
                style={{ color: COLORS.lightBrown }}
                onClick={() => setIsSidebarOpen(false)}
              >
                Blog
              </a>
              <a href="/contact">
                <button
                  className="text-3xl font-semibold rounded-full px-8 py-3 transition-all hover:scale-105"
                  style={{ backgroundColor: COLORS.brown, color: "white" }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact Us
                </button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
