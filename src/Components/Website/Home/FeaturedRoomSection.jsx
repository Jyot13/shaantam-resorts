"use client";

import { motion } from "framer-motion";
import { Maximize2, BedDouble, Mountain, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
    alt: "Premium Room — bedroom view",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
    alt: "Premium Room — interior",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
    alt: "Premium Room — bathroom",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1585474063396-f7aa5debc45d?auto=format&fit=crop&w=900&q=80",
    alt: "Private lawn garden",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    alt: "Private lawn outdoor seating",
    span: "col-span-1",
  },
];

const specs = [
  { icon: Maximize2, label: "280 sq.ft." },
  { icon: BedDouble,  label: "King Bed" },
  { icon: Mountain,  label: "Garden View" },
];

const amenities = [
  "Tea & coffee kit",
  "Electric kettle",
  "32\" LED TV",
  "Intercom",
  "Soft bath linen",
  "Quality toiletries",
  "Private lawn access",
  "In-room dining",
];

export default function FeaturedRoomSection() {
  return (
    <section className="bg-[#F5F1EA] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Featured Accommodation</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#271900] leading-tight">
            Premium Room with Private Lawn
          </h2>
          <div className="w-12 h-px bg-[#CCA665] mx-auto mt-5" />
        </motion.div>

        {/* Photo grid — row 1: 3 cols, row 2: 2 cols left-aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-3 gap-2.5 mb-2.5"
        >
          {PHOTOS.slice(0, 3).map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } } }}
              className="relative overflow-hidden aspect-4/3 group"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
          className="grid grid-cols-3 gap-2.5 mb-10"
        >
          {PHOTOS.slice(3).map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } } }}
              className="relative overflow-hidden aspect-4/3 group"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
          {/* empty slot so row stays left-aligned */}
          <div />
        </motion.div>

        {/* Info row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20"
        >
          {/* Left — description */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <p className="text-[#271900]/70 text-sm sm:text-base leading-relaxed mb-4">
              Enjoy a premium stay with your private lawn, spacious rooms, stylish interiors, and large
              bathrooms. We offer all essential amenities like a tea-coffee kit, electric kettle, TV,
              intercom, soft bath linen, and quality toiletries. Comfort and quality are never compromised.
            </p>

            {/* Vegetarian note */}
            <div className="flex items-start gap-2.5 bg-white border border-[#E8E4DC] px-4 py-3 mb-8">
              <Leaf size={15} className="text-[#CCA665] mt-0.5 shrink-0" />
              <p className="text-[#271900] text-sm">
                <span className="font-semibold">Note:</span> We proudly serve only pure vegetarian meals.
              </p>
            </div>

            {/* Specs row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {specs.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-[#271900]/70">
                  <Icon size={17} className="text-[#CCA665]" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/rooms">
                <motion.button
                  whileHover={{ backgroundColor: "#b38e45" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.18em] uppercase font-medium"
                >
                  Book This Room
                </motion.button>
              </Link>
              <Link href="/rooms">
                <motion.button
                  whileHover={{ borderColor: "#CCA665", color: "#CCA665" }}
                  transition={{ duration: 0.18 }}
                  className="border border-[#271900]/25 text-[#271900]/60 px-8 py-3 text-xs tracking-[0.18em] uppercase font-medium inline-flex items-center gap-2"
                >
                  View All Rooms <ArrowRight size={12} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right — amenities grid */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
          >
            <p className="text-[#CCA665] tracking-[0.25em] text-[10px] uppercase mb-4">Room Amenities</p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {amenities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-center gap-2.5 text-sm text-[#271900]/65"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCA665] shrink-0" />
                  {a}
                </motion.div>
              ))}
            </div>

            {/* Price strip */}
            <div className="mt-10 border-t border-[#E8E4DC] pt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#271900]/40 mb-1">Starting from</p>
                <p className="font-serif text-3xl text-[#271900]">
                  ₹12,500
                  <span className="text-sm font-sans text-[#271900]/40 ml-1">/ night</span>
                </p>
              </div>
              <Link href="/rooms">
                <motion.button
                  whileHover={{ backgroundColor: "#271900" }}
                  className="bg-[#271900] text-white px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium"
                >
                  Check Availability
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
