"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const GUEST_IMGS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
];

const SCENERY_IMGS = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80",
];

const testimonials = [
  {
    name: "Aarav & Priya Mehta",
    location: "Delhi",
    quote: "The most peaceful escape we've ever had. The infinity pool, the mountains, the food — everything was absolutely magical.",
    duration: "3 Night Stay · Anniversary",
  },
  {
    name: "Sunita Krishnamurthy",
    location: "Bengaluru",
    quote: "As a solo traveller, Shaantam gave me exactly what I needed — solitude, safety, and a deep sense of calm. I'll be back.",
    duration: "5 Night Stay · Solo Wellness",
  },
  {
    name: "Rohan & Family",
    location: "Mumbai",
    quote: "Our pets loved it as much as we did! The staff was incredibly warm and the sattvic meals were a revelation. Simply unforgettable.",
    duration: "4 Night Stay · Family Retreat",
  },
  {
    name: "Kavya Nair",
    location: "Kochi",
    quote: "The spa treatment left me completely rejuvenated. Surrounded by the Himalayas, this is what true luxury feels like.",
    duration: "2 Night Stay · Spa Weekend",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="bg-[#FAF7F2] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Guest Stories</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1208] leading-tight">
            What Our Guests<br />Are Saying
          </h2>
          <div className="w-12 h-px bg-[#CCA665] mx-auto mt-5" />
        </motion.div>

        {/* Video thumbnails row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } } }}
              className="relative aspect-9/16 sm:aspect-3/4 rounded-sm overflow-hidden group cursor-pointer"
            >
              {/* Scenery backdrop */}
              <img
                src={SCENERY_IMGS[i]}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#1E1208]/50 group-hover:bg-[#1E1208]/30 transition-colors duration-300" />

              {/* Guest avatar */}
              <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-2 border-[#CCA665]/60 overflow-hidden">
                <img src={GUEST_IMGS[i]} alt={t.name} className="object-cover w-full h-full" />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/15 border border-white/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#CCA665]/80 group-hover:border-[#CCA665] transition-colors duration-300"
                >
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-[#0d0704]/90 to-transparent">
                <p className="text-white text-xs font-medium leading-snug">{t.name}</p>
                <p className="text-white/50 text-[10px] mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="bg-white border border-[#E8E4DC] p-6 rounded-sm"
            >
              <Quote size={20} className="text-[#CCA665]/60 mb-3" />
              <p className="text-[#1E1208]/70 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="border-t border-[#E8E4DC] pt-4">
                <p className="font-serif text-[#1E1208] text-sm">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.duration}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
