"use client";


import { motion } from "framer-motion";

// Verified Unsplash — outdoor wedding ceremony in lush forest garden
const WEDDING =
  "https://images.unsplash.com/photo-1762216444919-043cf813e4de?auto=format&fit=crop&w=1920&q=80";

const highlights = [
  "Scenic valley lawns & outdoor venues",
  "Pre-wedding photography packages",
  "Customised pure-vegetarian wedding menus",
  "Sacred proximity to Neelkanth Temple",
  "In-house event coordination team",
  "On-site accommodation for all guests",
];

export default function WeddingsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFAF5] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Celebrate Love</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a1a]">
            Destination Weddings
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-[55%] relative h-80 sm:h-105 lg:h-130 rounded-2xl overflow-hidden shadow-2xl shrink-0"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={WEDDING} alt="Destination Weddings at Shaantam" className="object-cover w-full h-full" />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
            <div className="absolute inset-0 rounded-2xl border border-[#CCA665]/20 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } } }}
            className="w-full lg:w-[45%]"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7"
            >
              Nestled in the foothills of the Himalayas and within sacred proximity to Neelkanth Temple,
              Shaantam Resorts offers an enchanting backdrop for destination weddings,
              pre-wedding shoots, and intimate celebrations.
            </motion.p>

            <motion.ul
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
              className="space-y-3 mb-9"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="text-[#CCA665] mt-0.5 shrink-0">✦</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="bg-[#CCA665] text-white px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-medium"
              >
                Plan Your Wedding
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#f0ebe3" }}
                transition={{ duration: 0.25 }}
                className="border border-[#CCA665] text-[#CCA665] px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-medium"
              >
                View Gallery
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
