"use client";


import { motion } from "framer-motion";

const HERO =
  "https://images.unsplash.com/photo-1749191880983-dcc1afd1ad1e?auto=format&fit=crop&w=1920&q=80";

const tags = ["Pet Friendly", "Private Pool", "Valley Views", "Pure Vegetarian"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

export default function Banner() {
  return (
    <div className="relative h-screen">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={HERO}
          alt="Shaantam Resorts Rishikesh"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
        >
          Neelkanth Temple Road, Rishikesh
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-serif mb-5 leading-tight max-w-3xl"
        >
          Luxury Pet-Friendly<br className="hidden sm:block" /> Resort in Rishikesh
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10"
        >
          {tags.map((tag, i) => (
            <span key={i} className="text-white/80 tracking-widest text-xs md:text-sm">
              • {tag}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ backgroundColor: "#b38e45", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-[#CCA665] text-white px-9 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Book Your Stay
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            transition={{ duration: 0.25 }}
            className="border border-white/70 text-white px-9 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            Explore Resort
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
