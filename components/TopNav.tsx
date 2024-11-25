"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
}

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems: NavItem[] = [
    { name: "Destinations", href: "/destinations" },
    { name: "Hotels", href: "/hotels" },
    { name: "Flights", href: "/flights" },
    { name: "Bookings", href: "/bookings" },
    { name: "Login", href: "/login" },
  ];

  if (!mounted) {
    return (
      <nav className="relative px-4 py-3 lg:px-36 lg:py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Jadoo"
                width={115}
                height={34}
                priority
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="relative px-4 py-3 lg:px-36 lg:py-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Jadoo"
              width={115}
              height={34}
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-14">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[#212832] transition-colors duration-300 hover:text-[#F1A501] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#F1A501] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* Desktop Sign Up Button */}
          <Link href="/signup">
            <button
              type="button"
              className="rounded-[5px] border border-[#212832] px-6 py-2.5 text-[#212832] hover:bg-[#212832] hover:text-white"
            >
              Sign up
            </button>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-2 text-[#212832]"
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
            >
              <span>{language === "EN" ? "EN" : "FR"}</span>
              <svg
                className="h-1.5 w-2.5"
                viewBox="0 0 9 5"
                fill="none"
                stroke="#212832"
              >
                <path d="M1 1L4.5 4L8 1" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-20 bg-white px-4 py-2 shadow-lg lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-[#212832] transition-colors duration-300 hover:text-[#F1A501]"
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Sign Up Button */}
          <Link href="/signup">
            <button
              type="button"
              className="my-2 w-full rounded-[5px] border border-[#212832] px-6 py-2.5 text-[#212832]"
            >
              Sign up
            </button>
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-center space-x-2 py-2 text-[#212832]"
            onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
          >
            <span>{language === "EN" ? "EN" : "FR"}</span>
            <svg
              className="h-1.5 w-2.5"
              viewBox="0 0 9 5"
              fill="none"
              stroke="#212832"
            >
              <path d="M1 1L4.5 4L8 1" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
