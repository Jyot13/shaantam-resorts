"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

// ─────────────────────────────────────────────────────────────
// Replace `src` values with real image paths or URLs.
// All images are optional — null renders a warm placeholder.
// ─────────────────────────────────────────────────────────────
const FEATURED_SRC = null; // Hero right-side arch image

const gallery = [
  { id: 1,  src: null, alt: "Gallery 1" },
  { id: 2,  src: null, alt: "Gallery 2" },
  { id: 3,  src: null, alt: "Gallery 3" },
  { id: 4,  src: null, alt: "Gallery 4" },
  { id: 5,  src: null, alt: "Gallery 5" },
  { id: 6,  src: null, alt: "Gallery 6" },
  { id: 7,  src: null, alt: "Gallery 7" },
  { id: 8,  src: null, alt: "Gallery 8" },
  { id: 9,  src: null, alt: "Gallery 9" },
];

// ─── Shared placeholder ───────────────────────────────────────
function Placeholder({ label }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#DDD8CF]">
      <Camera size={22} className="text-[#9E9285]" />
      <span className="text-[9px] tracking-[0.2em] uppercase text-[#9E9285]">{label}</span>
    </div>
  );
}

// ─── Single gallery cell ──────────────────────────────────────
function Cell({ item, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden cursor-pointer group rounded-xl ${className}`}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.06]"
        />
      ) : (
        <Placeholder label={item.alt} />
      )}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [g1, g2, g3, g4, g5, g6, g7, g8, g9] = gallery;

  return (
    <main className="min-h-screen bg-white">
      <TransparentNavbar />

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            className="w-full lg:w-[42%]"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-[#CCA665] tracking-[0.28em] text-xs uppercase mb-5"
            >
              Our Gallery
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.12] mb-6"
            >
              Moments<br />Captured on<br />Our Property
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm"
            >
              Explore beautifully captured moments that reflect the peaceful atmosphere,
              elegant interiors, and unforgettable experiences that make every stay truly special.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <a href="#grid" className="inline-flex items-center gap-2 border border-[#CCA665] text-[#CCA665] px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#faf4eb] transition-colors duration-200 group">
                View Gallery
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Arch featured image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="w-full lg:w-[58%] flex justify-center"
          >
            <div
              className="w-full max-w-md lg:max-w-none h-96 sm:h-110 lg:h-120 overflow-hidden shadow-xl"
              style={{ borderRadius: "50% 50% 12px 12px / 28% 28% 12px 12px" }}
            >
              {FEATURED_SRC ? (
                <img src={FEATURED_SRC} alt="Shaantam Resorts" className="object-cover w-full h-full" />
              ) : (
                <Placeholder label="Featured Photo" />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bento Grid ───────────────────────────────────────── */}
      <section id="grid" className="px-6 lg:px-16 pb-20 md:pb-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-3">

          {/* Row 1 — 2 equal */}
          <Cell item={g1} className="col-span-3 h-52 sm:h-60" />
          <Cell item={g2} className="col-span-3 h-52 sm:h-60" />

          {/* Row 2 — narrow + wide */}
          <Cell item={g3} className="col-span-2 h-52 sm:h-60" />
          <Cell item={g4} className="col-span-4 h-52 sm:h-60" />

          {/* Row 3 — wide + narrow */}
          <Cell item={g5} className="col-span-4 h-64 sm:h-72" />
          <Cell item={g6} className="col-span-2 h-64 sm:h-72" />

          {/* Row 4 — 3 equal */}
          <Cell item={g7} className="col-span-2 h-52 sm:h-60" />
          <Cell item={g8} className="col-span-2 h-52 sm:h-60" />
          <Cell item={g9} className="col-span-2 h-52 sm:h-60" />
        </div>
      </section>
    </main>
  );
}
