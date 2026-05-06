"use client";


import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 bg-white shadow-lg border-b border-gray-100 z-[80]">
      <div className="w-full px-10 sm:px-6 lg:px-8 h-30 sm:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/website/logo.png" alt="Aureva Hotels" className="object-contain w-20 sm:w-32 lg:w-25 h-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <nav className="flex items-center gap-6 lg:gap-10 text-gray-700 font-medium text-lg lg:text-base">
            <div
              className="relative"
              onMouseEnter={() => setIsCitiesOpen(true)}
              onMouseLeave={() => setIsCitiesOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                <span>Cities</span>
                <ChevronDown size={16} className={`transition-transform ${isCitiesOpen ? "rotate-180" : "rotate-360"
                    }`} />
              </div>

              {isCitiesOpen && (
                <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-100 py-2">
                  <Link
                    href="/city"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Jaipur
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="hover:text-black transition">
              About Us
            </Link>
            <Link href="/weddings" className="hover:text-black transition">
              Vivaah
            </Link>
            <Link href="/restaurant" className="hover:text-black transition">
              Restaurants
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact Us
            </Link>
          </nav>
          <Link href="/login">
            <button className="bg-[#CCA665] hover:bg-[#b38e45] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium text-lg lg:text-base transition">Login</button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 text-2xl leading-none focus:outline-none" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileMenu} />}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-6">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <div className="border-b pb-2">
              <button
                onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Cities</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isCitiesOpen ? "rotate-360" : "rotate-360"
                    }`}
                />
              </button>

              {isCitiesOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-3">
                  <Link
                    href="/city"
                    onClick={toggleMobileMenu}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    Jaipur
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="hover:text-black transition border-b pb-2" onClick={toggleMobileMenu}>
              About Us
            </Link>
            <Link href="/weddings" className="hover:text-black transition border-b pb-2" onClick={toggleMobileMenu}>
              Vivaah
            </Link>
            <Link href="/restaurant" className="hover:text-black transition border-b pb-2" onClick={toggleMobileMenu}>
              Restaurants
            </Link>
            <Link href="/contact" className="hover:text-black transition border-b pb-2" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </nav>
          <div className="mt-auto pt-6">
            <Link href="/login" onClick={toggleMobileMenu}>
              <button className="bg-[#CCA665] hover:bg-[#b38e45] text-white w-full py-3 rounded-md font-medium transition">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
