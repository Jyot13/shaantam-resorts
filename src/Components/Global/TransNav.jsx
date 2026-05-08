"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Menu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/* ─── Nav structure ─────────────────────────────────────────── */
const NAV = [
  { label: "Rooms", href: "/rooms" },
  {
    label: "Dining",
    href: "/dining",
    children: [
      { label: "Dining Overview",     href: "/dining",                desc: "The best veg restaurant in Rishikesh" },
      { label: "Shaantam Restaurant", href: "/dining/restaurant",     desc: "All-day vegetarian dining with valley views" },
      { label: "Buffet",              href: "/dining/buffet",         desc: "Multi-cuisine spread & live cooking stations" },
      { label: "Private Dining",      href: "/dining/private-dining", desc: "Candlelit evenings under Himalayan skies" },
      { label: "Poolside Dining",     href: "/dining/poolside-dining",desc: "Alfresco dining by the infinity pool" },
    ],
  },
  {
    label: "Wellness",
    href: "/spa",
    children: [
      { label: "Spa & Wellness", href: "/spa",        desc: "Ayurvedic treatments & healing therapies" },
      { label: "Yoga Retreat",   href: "/yoga",       desc: "Sunrise flows in the Himalayan foothills" },
      { label: "Meditation",     href: "/meditation", desc: "Guided silence & inner peace practices" },
    ],
  },
  { label: "Experiences", href: "/experiences" },
  { label: "Weddings",    href: "/weddings" },
  { label: "Gallery",     href: "/gallery" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Pet Friendly", href: "/pet-friendly", desc: "14 thoughtful policies for your companions" },
      { label: "About Us",     href: "/about",        desc: "The story behind Shaantam Resorts" },
      { label: "Contact",      href: "/contact",      desc: "Reach out to our team" },
    ],
  },
];

/* ─── Desktop Dropdown ──────────────────────────────────────── */
function DropdownMenu({ item, scrolled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  const isActive = pathname === item.href || item.children?.some((c) => pathname === c.href);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-200 font-medium ${
          isActive
            ? "text-[#CCA665]"
            : scrolled
            ? "text-[#1E1208]/75 hover:text-[#CCA665]"
            : "text-white/90 hover:text-white"
        }`}
      >
        {item.label}
        <ChevronDown size={12} className={`transition-transform duration-200 mt-0.5 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-2xl border border-[#E8E4DC] z-50 min-w-56"
          >
            <div className="h-0.5 bg-[#CCA665]" />
            <ul className="py-1.5">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className={`flex flex-col px-5 py-3 transition-colors duration-150 group ${
                      pathname === child.href ? "bg-[#FAF7F2]" : "hover:bg-[#FAF7F2]"
                    }`}
                  >
                    <span className={`text-sm font-medium transition-colors ${
                      pathname === child.href ? "text-[#CCA665]" : "text-[#1E1208] group-hover:text-[#CCA665]"
                    }`}>
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="text-xs text-gray-400 mt-0.5 leading-snug">{child.desc}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Plain link ────────────────────────────────────────────── */
function NavLink({ item, scrolled }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`text-sm tracking-wide font-medium transition-colors duration-200 ${
        isActive
          ? "text-[#CCA665]"
          : scrolled
          ? "text-[#1E1208]/75 hover:text-[#CCA665]"
          : "text-white/90 hover:text-white"
      }`}
    >
      {item.label}
    </Link>
  );
}

/* ─── Mobile accordion item ─────────────────────────────────── */
function MobileItem({ item, close }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={close}
        className={`flex items-center justify-between py-3.5 border-b border-[#F0EBE3] text-sm font-medium ${
          pathname === item.href ? "text-[#CCA665]" : "text-[#1E1208]"
        }`}
      >
        {item.label}
        <ArrowRight size={12} className="text-[#CCA665]/40" />
      </Link>
    );
  }

  return (
    <div className="border-b border-[#F0EBE3]">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-[#1E1208]"
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`text-[#CCA665] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-2 pb-2 space-y-0.5"
          >
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={close}
                  className={`flex flex-col px-3 py-2.5 transition-colors ${
                    pathname === child.href
                      ? "bg-[#FAF7F2] text-[#CCA665]"
                      : "text-[#1E1208]/65 hover:bg-[#FAF7F2] hover:text-[#CCA665]"
                  }`}
                >
                  <span className="text-sm font-medium">{child.label}</span>
                  {child.desc && <span className="text-xs text-gray-400 mt-0.5">{child.desc}</span>}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────── */
export default function TransparentNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-350 ${
          scrolled
            ? "bg-white/96 backdrop-blur-sm shadow-sm border-b border-[#E8E4DC]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <img
              src="/website/logo.png"
              alt="Shaantam Resorts"
              className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {NAV.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item} scrolled={scrolled} />
              ) : (
                <NavLink key={item.label} item={item} scrolled={scrolled} />
              )
            )}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+919811120044"
              className={`text-xs tracking-wide transition-colors duration-200 ${
                scrolled ? "text-[#1E1208]/55 hover:text-[#CCA665]" : "text-white/60 hover:text-white"
              }`}
            >
              +91 98111 20044
            </a>
            <Link href="/rooms/book">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="bg-[#CCA665] text-white text-xs tracking-[0.18em] uppercase font-medium px-6 py-2.5"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className={`lg:hidden p-1 transition-colors ${scrolled ? "text-[#1E1208]" : "text-white"}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 right-0 h-full w-80 max-w-[88vw] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0EBE3] shrink-0">
              <Link href="/" onClick={close}>
                <img src="/website/logo.png" alt="Shaantam" className="h-9 w-auto object-contain" />
              </Link>
              <button onClick={close} className="text-[#1E1208]/50 hover:text-[#1E1208] transition-colors">
                <X size={21} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-2">
              {NAV.map((item) => (
                <MobileItem key={item.label} item={item} close={close} />
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-[#F0EBE3] space-y-3 shrink-0">
              <Link href="/rooms/book" onClick={close} className="block">
                <button className="w-full bg-[#CCA665] hover:bg-[#b38e45] text-white py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200">
                  Book Now
                </button>
              </Link>
              <a
                href="tel:+919811120044"
                className="flex items-center justify-center text-[#1E1208]/40 text-xs tracking-wide"
              >
                +91 98111 20044
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
