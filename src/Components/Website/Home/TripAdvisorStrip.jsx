"use client";

import { motion } from "framer-motion";
import { Star, Users, Award } from "lucide-react";

const items = [
  {
    icon: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-16 h-16 rounded-full border-4 border-[#00AF87] flex items-center justify-center bg-white shadow-md">
          <svg viewBox="0 0 60 60" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#00AF87" />
            <text x="30" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill="white" fontFamily="serif">T</text>
          </svg>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="text-[#00AF87] fill-[#00AF87]" />
          ))}
        </div>
      </div>
    ),
    label: "Travellers' Choice",
    title: "Awards 2024",
    sub: "TripAdvisor · Top 10% worldwide",
    highlight: true,
  },
  {
    icon: (
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-12 h-12 rounded-full border-2 border-[#34D399] flex items-center justify-center bg-[#34D399]/10">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#00AF87" strokeWidth="2.5">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="text-[#CCA665] fill-[#CCA665]" />
          ))}
        </div>
      </div>
    ),
    label: "Certificate of Excellence",
    title: "Consistently 5-Star",
    sub: "Rated by verified travellers",
    highlight: false,
  },
  {
    icon: <Users size={28} className="text-[#CCA665]" />,
    label: "And counting",
    title: "145,481+ Guests",
    sub: "Have chosen Shaantam Resorts",
    highlight: false,
  },
  {
    icon: <Award size={28} className="text-[#CCA665]" />,
    label: "Green Certified Hotel",
    title: "Sustainable Luxury",
    sub: "Eco-conscious hospitality since inception",
    highlight: false,
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
            <div className="flex items-center justify-center h-14">{item.icon}</div>
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-gray-400 mb-0.5">{item.label}</p>
              <p className={`font-serif text-base leading-tight ${item.highlight ? "text-[#00AF87] font-semibold" : "text-[#1a1a1a]"}`}>{item.title}</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
