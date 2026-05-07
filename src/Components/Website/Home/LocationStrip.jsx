"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Plane, Train } from "lucide-react";

const locations = [
  { icon: MapPin, label: "Located on",     title: "Neelkanth Temple Road", sub: "Rishikesh, Uttarakhand" },
  { icon: Plane,  label: "From Dehradun",  title: "~1 Hour",               sub: "Jolly Grant Airport" },
  { icon: Car,    label: "From Rishikesh", title: "~40 Minutes",           sub: "Ram Jhula & Laxman Jhula" },
  { icon: Train,  label: "From Station",   title: "~45 Minutes",           sub: "Rishikesh Railway Station" },
];

export default function LocationStrip() {
  return (
    <section className="bg-[#1E1208] py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-8"
        >
          How to Reach Us
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10"
        >
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col items-center text-center gap-2.5 lg:px-8"
            >
              <div className="w-10 h-10 rounded-full border border-[#CCA665]/30 flex items-center justify-center">
                <loc.icon size={16} className="text-[#CCA665]" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">{loc.label}</p>
                <p className="font-serif text-white text-base">{loc.title}</p>
                <p className="text-xs text-white/40 mt-0.5">{loc.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
