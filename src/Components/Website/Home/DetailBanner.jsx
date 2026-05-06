"use client";


import { motion } from "framer-motion";

// Yoga in Rishikesh on the Ganga — verified Unsplash
const YOGA =
  "https://images.unsplash.com/photo-1714892530388-7d0106430647?auto=format&fit=crop&w=1200&q=80";

export default function DetailBanner() {
  return (
    <section className="bg-[#1E1208] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-2xl md:h-90">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full h-72 md:h-auto md:w-[55%] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={YOGA} alt="Yoga in Rishikesh" className="object-cover w-full h-full" />
            </motion.div>
            <div className="hidden md:block absolute top-0 right-0 h-full w-28 bg-linear-to-r from-transparent to-[#1E1208]" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
            className="w-full md:w-[50%] px-8 sm:px-10 py-10 flex flex-col justify-center"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
            >
              Yoga & Meditation
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-snug mb-4"
            >
              Reconnect With<br />Yourself
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="text-white/55 text-sm leading-relaxed mb-8 max-w-sm"
            >
              Begin your day with calming yoga by the Ganges or unwind with evening meditation sessions. Whether you are a beginner or experienced practitioner, our sessions restore balance, clarity, and inner peace.
            </motion.p>

            <motion.button
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="bg-[#CCA665] text-white text-xs font-medium px-8 py-3.5 w-fit tracking-[0.15em] uppercase"
            >
              View Schedule
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
