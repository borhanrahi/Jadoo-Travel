"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, PlayCircle, Apple } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Prevent navigation if the route doesn't exist yet
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || href.startsWith("http")) return; // Allow external links to work normally

    // Prevent navigation for internal routes that aren't built yet
    e.preventDefault();
    console.log(`Route ${href} clicked - will be implemented later`);
  };

  return (
    <footer className="relative px-4 py-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Update grid layout for mobile first */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* First 4 columns in 2x2 grid on mobile */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/Logo.png"
                alt="Jadoo"
                width={100}
                height={32}
                className="mb-4"
                priority
              />
            </Link>
            <p className="text-[#5E6282] text-sm">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#080809] font-semibold text-xl mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-[#080809] font-semibold text-xl mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/help"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliates"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Affilates
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-[#080809] font-semibold text-xl mb-6">More</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/airline-fees"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Airlinefees
                </Link>
              </li>
              <li>
                <Link
                  href="/airline"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Airline
                </Link>
              </li>
              <li>
                <Link
                  href="/low-fare-tips"
                  onClick={handleClick}
                  className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                >
                  Low fare tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section - Centered icons */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center">
            <h3 className="text-[#5E6282] mb-4">Discover our app</h3>
            <div className="flex flex-col items-center space-y-4">
              {/* App Store Buttons - Added hover effects */}
              <div className="flex space-x-4">
                <Link
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full 
                  hover:bg-gray-800 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span className="text-sm whitespace-nowrap">Google Play</span>
                </Link>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full 
                  hover:bg-gray-800 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Apple className="w-4 h-4" />
                  <span className="text-sm whitespace-nowrap">App Store</span>
                </Link>
              </div>

              {/* Social Icons - Added hover effects */}
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md 
                  hover:shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#1877F2] group"
                >
                  <Facebook className="w-5 h-5 text-[#080809] group-hover:text-white" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-md 
                  bg-gradient-to-tr from-[#B8D2F1] via-[#F289AA] to-[#C68BF0]
                  hover:shadow-lg hover:scale-110 transition-all duration-300 
                  hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md 
                  hover:shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#1DA1F2] group"
                >
                  <Twitter className="w-5 h-5 text-[#080809] group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Copyright */}
        <div className="text-center mt-12">
          <p className="text-[#5E6282] text-sm">
            © {currentYear} All rights reserved by{" "}
            <Link
              href="https://github.com/borhanrahi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#181E4B] hover:underline"
            >
              Borhan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
