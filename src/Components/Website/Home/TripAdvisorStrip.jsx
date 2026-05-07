"use client";

import { motion } from "framer-motion";
import { Star, Award, Users } from "lucide-react";

const items = [
  {
    icon: (
      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
           style={{ backgroundColor: "#00AF87" }}>
        <span className="text-white font-bold text-xl leading-none">T</span>
      </div>
    ),
    label: "Recognised by",
    title: "TripAdvisor",
    sub: "Green Hotel Certification · 2024",
  },
  {
    icon: (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-[#CCA665] fill-[#CCA665]" />
        ))}
      </div>
    ),
    label: "Guest Rating",
    title: "Certificate of Excellence",
    sub: "Consistently top-rated on TripAdvisor",
  },
  {
    icon: <Users size={28} className="text-[#CCA665]" />,
    label: "And counting",
    title: "145,481+ Guests",
    sub: "Have chosen Shaantam Resorts",
  },
  {
    icon: <Award size={28} className="text-[#CCA665]" />,
    label: "Est. property",
    title: "Sustainable Luxury",
    sub: "Eco-conscious hospitality since inception",
  },
];

export default function TripAdvisorStrip() {
  return (
    <section className="bg-[#FAF7F2] border-y border-[#E8E4DC] py-10 px-6 lg:px-10 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8E4DC]"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="flex flex-col items-center text-center gap-3 lg:px-8"
          >
            <div className="flex items-center justify-center h-12">{item.icon}</div>
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-gray-400 mb-0.5">{item.label}</p>
              <p className="font-serif text-[#1a1a1a] text-base leading-tight">{item.title}</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
