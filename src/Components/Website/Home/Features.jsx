"use client";

import { motion } from "framer-motion";
import { PawPrint, Leaf, Mountain, Waves } from "lucide-react";

const features = [
  {
    icon: PawPrint,
    title: "Pet-Friendly",
    desc: "Your cherished companions are welcomed with dedicated sanctuary amenities.",
  },
  {
    icon: Leaf,
    title: "Pure Vegetarian",
    desc: "Sattvic cuisine prepared with organic harvest from our mountain gardens.",
  },
  {
    icon: Mountain,
    title: "Valley Views",
    desc: "Uninterrupted vistas of the Ganges valley from every terrace and suite.",
  },
  {
    icon: Waves,
    title: "Private Pools",
    desc: "Temperature-controlled infinity pools overlooking the sacred river flow.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#1E1208] py-14 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
              }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full border border-[#CCA665]/40 flex items-center justify-center group-hover:border-[#CCA665] transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#CCA665]" />
              </div>
              <h3 className="text-base font-serif text-white tracking-wide">{item.title}</h3>
              <p className="text-sm text-white/50 max-w-45 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
