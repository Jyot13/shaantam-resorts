"use client";

import { motion } from "framer-motion";

const strips = [
  { src: "/website/7e2ede1a1143.png", alt: "Clients — Apollo Tyres, American Express, UltraTech Cement, Mahindra" },
  { src: "/website/a16f38b9c1fd.png", alt: "Clients — Kotak Mahindra Bank, Tehri, Synergy Group, MakeMyTrip" },
  { src: "/website/7b748f3bd021.png", alt: "Clients — A.G. Industries, Embassy of Indonesia, BBC London, Manmeet Kumar" },
];

export default function OurClients() {
  return (
    <section className="bg-white border-t border-[#E8E4DC] py-16 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Trusted By</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1208]">Our Clients</h2>
          <div className="w-10 h-px bg-[#CCA665] mx-auto mt-4" />
        </motion.div>

        {/* Logo strips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          className="flex flex-col gap-2"
        >
          {strips.map((strip, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
              className="border border-[#E8E4DC] rounded-sm overflow-hidden"
            >
              <img
                src={strip.src}
                alt={strip.alt}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          Corporate retreats · Team off-sites · Leadership conclaves · MICE events
        </motion.p>
      </div>
    </section>
  );
}
