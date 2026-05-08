"use client";

import { motion } from "framer-motion";
import { PawPrint, Leaf, ChevronRight } from "lucide-react";
import Link from "next/link";

const PET_IMG =
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=80";
const VEG_IMG =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80";

const cards = [
  {
    img: PET_IMG,
    icon: PawPrint,
    eyebrow: "Pet-Friendly Resort",
    title: "Your Pets\nAre Family Too",
    highlights: ["Dedicated pet amenities", "Private garden access", "14 thoughtful guidelines", "Welcome kit on arrival"],
    cta: "View Pet Policy",
    href: "/pet-friendly",
    accent: "#CCA665",
  },
  {
    img: VEG_IMG,
    icon: Leaf,
    eyebrow: "100% Pure Vegetarian",
    title: "Sattvic Dining,\nPurely Nourishing",
    highlights: ["Ayurvedic sattvic cooking", "Local Uttarakhand farms", "No onion / no garlic options", "Seasonal farm-to-table"],
    cta: "Explore Dining",
    href: "/dining",
    accent: "#86EFAC",
  },
];

export default function PetVegSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {cards.map((card, i) => (
        <div key={i} className="relative h-120 overflow-hidden group">
          {/* Background */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
          </motion.div>

          {/* Layered gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0d0704]/95 via-[#0d0704]/60 to-[#0d0704]/10" />

          {/* Hover zoom on group hover */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          />

          {/* Content */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 + i * 0.1 } } }}
          >
            {/* Icon badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } } }}
              className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center mb-5"
              style={{ backgroundColor: `${card.accent}20`, borderColor: `${card.accent}50` }}
            >
              <card.icon size={20} style={{ color: card.accent }} />
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="tracking-[0.3em] text-[10px] uppercase mb-2.5"
              style={{ color: card.accent }}
            >
              {card.eyebrow}
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-5 whitespace-pre-line"
            >
              {card.title}
            </motion.h2>

            {/* Highlight bullets */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
              className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-7"
            >
              {card.highlights.map((h, j) => (
                <motion.span
                  key={j}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                  className="flex items-center gap-1.5 text-white/60 text-xs"
                >
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: card.accent }} />
                  {h}
                </motion.span>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6 } } }}
              style={{ originX: 0, backgroundColor: `${card.accent}40` }}
              className="h-px w-full mb-6"
            />

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 group/link"
                style={{ color: card.accent }}
              >
                {card.cta}
                <ChevronRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
