"use client";


import { motion } from "framer-motion";
import gallery1 from "@/../public/website/gallery/gallery1.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFAF5] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[45%] relative shrink-0"
        >
          <div className="relative h-85 sm:h-105 lg:h-130 rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={gallery1.src} alt="Shaantam Resorts" className="object-cover w-full h-full" />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
          {/* Decorative gold border accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#CCA665]/30 -z-10" />
        </motion.div>

        {/* Text block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } } }}
          className="w-full lg:w-[55%]"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-6"
          >
            A Sanctuary Born<br />from Stillness
          </motion.h2>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8"
          >
            {[
              "Shaantam is a serene and luxurious wellness retreat in Rishikesh, thoughtfully designed to offer a peaceful escape amidst nature. Rooted in the philosophy of holistic healing and mindful living, Shaantam provides the perfect setting for inner balance and rejuvenation.",
              "Located on the sacred Neelkanth Temple Road, our boutique resort blends modern comfort with the timeless charm of spiritual India — whether you seek sunrise yoga by the Ganges, a restorative spa experience, or simply a quiet moment of reflection.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="flex items-center gap-6"
          >
            <motion.button
              whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="bg-[#CCA665] text-white px-7 py-3 text-sm tracking-wider font-medium"
            >
              OUR STORY
            </motion.button>
            <span className="text-sm text-gray-400 tracking-wide">Rishikesh, Uttarakhand</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
