"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Eye, ArrowRight } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80";
const FOOD = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80";
const POOL_VIEW = "https://images.unsplash.com/photo-1540541338537-9a0aa4eaf290?auto=format&fit=crop&w=1200&q=80";

const featurePills = [
  { icon: Leaf, label: "Organic Cuisine" },
  { icon: Eye, label: "Infinity Views" },
  { icon: Sun, label: "Sunrise to Dusk" },
];

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img src={HERO} alt="Shaantam Restaurant" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3"
          >
            An Uninterrupted Feast
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-4"
          >
            Shaantam<br />Restaurant
          </motion.h1>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6 } } }}
            style={{ originX: 0 }}
            className="h-px w-20 bg-[#CCA665] mb-5"
          />
        </motion.div>
      </section>

      {/* Intro + feature pills */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1208] mb-5">shantam restaurant</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
            Shaantam's main restaurant features all vegetarian yet the finest Indian and International cuisine.
            Guests can enjoy a luxury dining experience in our brightly lit, elegantly decorated indoor dining space
            with huge glass windows and comfortable seating arrangements.
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            The restaurant offers magnificent views of the Himalayan ranges and valleys. The menu features
            mainly pan-Indian (including local delicacies), Asian and Continental cuisine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {featurePills.map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 border border-[#E8E4DC] px-4 py-2 rounded-full">
                <Icon size={14} className="text-[#CCA665]" />
                <span className="text-xs tracking-widest uppercase text-[#1E1208]/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content — alternating layout */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Block 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } } }}
              className="w-full lg:w-[52%] h-80 sm:h-100 overflow-hidden rounded-sm shrink-0"
            >
              <img src={FOOD} alt="Restaurant food" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">Our Restaurant</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Fresh Food &<br />Himalayan Flavours
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                The restaurant has a menu of fresh food and juices sourced locally. The chef emphasizes on light,
                healthy vegetarian food that is tasty and varied. The preparations are renowned and promise
                satisfied, happy and healthy tummies.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Settle into our comfortable and cozy dining area and let our specialist cooks bring you delicious
                appetizing food. We also make vegan and gluten-free food on request. We use fresh herbs, spices
                and fresh produce which contribute to distinctive tastes and flavors.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                With comfortable sofas and cozy décor, enjoy the mesmeric Himalayan hills and lush green forests
                views from huge bay windows. In the evenings enjoy soothing music to match your mood. Our
                restaurant also serves Barbecue delicacies in the open air during the summer season.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-[#CCA665] text-xs tracking-[0.2em] uppercase font-medium border-b border-[#CCA665]/40 pb-0.5 hover:border-[#CCA665] transition-colors duration-200"
              >
                View Breakfast Menu <ArrowRight size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Secure Your Table */}
      <section id="book" className="grid grid-cols-1 lg:grid-cols-2 min-h-72">
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img src={POOL_VIEW} alt="Dining ambiance" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-[#0d0704]/30" />
        </div>
        <div className="bg-[#4a3c28] flex flex-col justify-center px-10 py-14">
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Reserve Your Seat</p>
          <h2 className="font-serif text-3xl text-white leading-snug mb-4">Secure Your Table</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Poolside seating is limited to preserve the intimate atmosphere. We recommend booking 24 hours in
            advance to ensure your preferred time.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ backgroundColor: "#b38e45" }}
              className="bg-[#CCA665] text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Book Table
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              className="border border-white/40 text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Contact Concierge
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}
