"use client";


import { motion } from "framer-motion";

// The Leela Kovalam — Indian infinity pool, Kerala
const POOL =
  "https://images.unsplash.com/photo-1713843841925-6af6ed0df472?auto=format&fit=crop&w=1920&q=80";

const usps = [
  "Infinity pool with Himalayan valley views",
  "Temperature-controlled water year-round",
  "Poolside dining & sundowner beverages",
  "Private loungers & shaded cabanas",
];

export default function PoolSection() {
  return (
    <section className="relative h-screen max-h-160 min-h-120 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={POOL}
          alt="Infinity Pool at Shaantam Resorts"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-r from-[#0d0704]/90 via-[#1E1208]/60 to-[#1E1208]/10" />

      <div className="absolute inset-0 flex items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.35 } } }}
          className="px-6 sm:px-10 md:px-20 text-white max-w-2xl w-full"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
          >
            Aqua Serenity
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } } }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-6"
          >
            Where Heaven<br />Meets Water
          </motion.h2>

          <motion.div
            variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.7 } } }}
            style={{ originX: 0 }}
            className="h-px w-16 bg-[#CCA665] mb-6"
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base max-w-md"
          >
            Our temperature-controlled infinity pool gazes over lush Himalayan valleys.
            Take a refreshing dip, lounge under open skies, or dine poolside —
            where resort life truly comes alive.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-white/55 text-sm mb-10"
          >
            {usps.map((usp, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="flex items-center gap-2"
              >
                <span className="text-[#CCA665]">✦</span> {usp}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ backgroundColor: "#CCA665", color: "#fff", borderColor: "#CCA665", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="border border-[#CCA665] text-[#CCA665] px-9 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Explore the Pool
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
