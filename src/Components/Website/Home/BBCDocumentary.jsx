"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const BBC_VIDEO_ID = "7fEXyATb-Nc";
const BBC_URL = `https://www.youtube.com/watch?v=${BBC_VIDEO_ID}`;
const THUMBNAIL = `https://img.youtube.com/vi/${BBC_VIDEO_ID}/maxresdefault.jpg`;

export default function BBCDocumentary() {
  return (
    <section className="bg-[#0d0704] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text side */}
          <div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 bg-[#CC0000] px-3 py-1.5 rounded-sm">
                <span className="text-white text-[10px] font-bold tracking-widest">BBC</span>
              </div>
              <span className="text-white/40 text-xs tracking-widest uppercase">Documentary Feature</span>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-4"
            >
              As Seen On
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
            >
              Featured in the<br />
              <span className="text-[#CCA665]">BBC London</span><br />
              Rishikesh Documentary
            </motion.h2>

            <motion.div
              variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7 } } }}
              style={{ originX: 0 }}
              className="h-px w-16 bg-[#CCA665] mb-6"
            />

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              Shaantam Resorts was proudly featured as part of the BBC London documentary exploring
              the spiritual and natural wonders of Rishikesh — a testament to our place at the heart
              of this sacred valley.
            </motion.p>

            <motion.a
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              href={BBC_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: "#CCA665", color: "#1E1208", borderColor: "#CCA665" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2.5 border border-[#CCA665] text-[#CCA665] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
            >
              <Play size={13} className="fill-current" />
              Watch the Clipping
              <ExternalLink size={12} className="opacity-60" />
            </motion.a>
          </div>

          {/* YouTube thumbnail — click to open video */}
          <motion.a
            href={BBC_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } } }}
            className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer block"
          >
            <img
              src={THUMBNAIL}
              alt="BBC London Documentary — Rishikesh feature"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0d0704]/40 group-hover:bg-[#0d0704]/20 transition-colors duration-300" />

            <div className="absolute top-4 left-4 bg-[#CC0000] px-2.5 py-1 rounded-sm">
              <span className="text-white text-xs font-bold tracking-widest">BBC LONDON</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#CCA665]/80 group-hover:border-[#CCA665] transition-colors duration-300"
              >
                <Play size={28} className="text-white fill-white ml-1" />
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-[#0d0704]/90 to-transparent">
              <p className="text-white/90 text-sm font-serif leading-snug">
                "Shaantam Resort — Proudly featured in BBC London's Rishikesh Documentary"
              </p>
              <p className="text-white/40 text-xs mt-1 tracking-wide">Click to watch on YouTube</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
