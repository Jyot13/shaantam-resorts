"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react"; // ✅ FIXED

export default function TransparentNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-100" : "bg-transparent/30 backdrop-blur-xl"
      }`}
    >
      <div className="w-full px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/website/logo.png"
            alt="Aureva Hotels"
            className="object-contain w-24 sm:w-32 h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <nav
            className={`flex items-center gap-8 text-sm transition
            ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            <Link href="/rooms" className="hover:text-[#CCA665] transition">
              Rooms
            </Link>
            <Link href="/dining" className="hover:text-[#CCA665] transition">
              Dining
            </Link>
            <Link href="/spa" className="hover:text-[#CCA665] transition">
              Spa
            </Link>
            <Link href="/experiences" className="hover:text-[#CCA665] transition">
              Experiences
            </Link>
            <Link href="/weddings" className="hover:text-[#CCA665] transition">
              Weddings
            </Link>
            <Link href="/contact" className="hover:text-[#CCA665] transition">
              Contact
            </Link>
          </nav>

          <Link href="/rooms/book">
            <button className="bg-[#CCA665] hover:bg-[#b38e45] text-white px-5 py-2 rounded-md font-medium transition text-sm">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={`text-2xl ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={26} /> : "☰"}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          
          {/* Close */}
          <div className="flex justify-end mb-6">
            <button onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4 text-gray-700 font-medium text-sm">
            <Link href="/rooms" onClick={toggleMobileMenu}>
              Rooms
            </Link>
            <Link href="/dining" onClick={toggleMobileMenu}>
              Dining
            </Link>
            <Link href="/spa" onClick={toggleMobileMenu}>
              Spa
            </Link>
            <Link href="/experiences" onClick={toggleMobileMenu}>
              Experiences
            </Link>
            <Link href="/weddings" onClick={toggleMobileMenu}>
              Weddings
            </Link>
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="mt-auto pt-6">
            <Link href="/rooms/book" onClick={toggleMobileMenu}>
              <button className="bg-[#CCA665] hover:bg-[#b38e45] text-white w-full py-3 rounded-md font-medium">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}