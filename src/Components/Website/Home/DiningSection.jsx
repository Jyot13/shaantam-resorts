"use client";


import { motion } from "framer-motion";
import SectionHeader from "@/Components/Global/Heading";
// Verified Unsplash images
const RESTAURANT =
  "https://images.unsplash.com/photo-1776993298456-98c71c0e177e?auto=format&fit=crop&w=1200&q=80";
const POOLSIDE_DINING =
  "https://images.unsplash.com/photo-1759156241324-6343c446a27c?auto=format&fit=crop&w=1200&q=80";
const PRIVATE_DINING =
  "https://images.unsplash.com/photo-1777370439895-0bc929e08408?auto=format&fit=crop&w=1200&q=80";

const venues = [
  {
    title: "Shaantam Restaurant",
    desc: "Pure vegetarian, sattvic cuisine crafted with seasonal ingredients — served in a serene dining hall overlooking the valley.",
    tag: "All-Day Dining",
    img: RESTAURANT,
  },
  {
    title: "Poolside Dining",
    desc: "Alfresco dining beside the infinity pool with sweeping valley views. Light bites, curated menus, and evening sundowners.",
    tag: "Alfresco",
    img: POOLSIDE_DINING,
  },
  {
    title: "Private Dining",
    desc: "Curated intimate dining for anniversaries, honeymoons, and celebrations — with personalised menus and candlelit settings.",
    tag: "Intimate",
    img: PRIVATE_DINING,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } },
};

export default function DiningSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionHeader
            eyebrow="Flavours of Shaantam"
            title="Dining Experiences"
            subtitle="Sattvic flavours, mindful cuisine, and unforgettable settings — every meal is an experience."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 28px 56px rgba(0,0,0,0.13)" }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                >
                  <img
                    src={venue.img}
                    alt={venue.title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#CCA665] text-white text-[10px] px-3 py-1.5 tracking-[0.15em] uppercase z-10">
                  {venue.tag}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-lg sm:text-xl font-serif text-[#1a1a1a] mb-2">{venue.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{venue.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-[#CCA665] text-sm font-medium">
                  <span>View Menu</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-[#CCA665] text-white px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-medium"
          >
            Explore All Dining
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
