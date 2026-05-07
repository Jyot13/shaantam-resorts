"use client";

import { motion } from "framer-motion";
import { PawPrint, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

const PET_IMG =
  "https://images.unsplash.com/photo-1608138498965-54fc4f61d3ba?auto=format&fit=crop&w=1200&q=80";
const VEG_IMG =
  "https://images.unsplash.com/photo-1701540747569-46bf364bbbb0?auto=format&fit=crop&w=1200&q=80";

const cards = [
  {
    img: PET_IMG,
    icon: PawPrint,
    eyebrow: "Pet-Friendly Resort",
    title: "Your Pets Are Family Too",
    desc: "Shaantam welcomes your beloved companions with open arms. Private gardens, dedicated pet amenities, and 14 thoughtful guidelines to ensure every guest — two-legged and four — enjoys a joyful, peaceful stay.",
    cta: "View Pet Policy",
    href: "/pet-friendly",
    gradient: "from-[#0d0704]/80 via-[#1E1208]/50 to-transparent",
  },
  {
    img: VEG_IMG,
    icon: Leaf,
    eyebrow: "Pure Vegetarian",
    title: "Sattvic Dining, Purely Nourishing",
    desc: "Every meal at Shaantam is a mindful ritual. Our kitchens are 100% pure vegetarian, rooted in the Ayurvedic philosophy of sattvic cooking — with seasonal produce from local Uttarakhand farms.",
    cta: "Explore Dining",
    href: "/dining",
    gradient: "from-[#0d0704]/80 via-[#1a1a1a]/50 to-transparent",
  },
];

export default function PetVegSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: i * 0.15 }}
          className="relative h-96 sm:h-110 overflow-hidden group"
        >
          {/* Background image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
          </motion.div>

          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-linear-to-t ${card.gradient}`} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 + i * 0.15 } } }}
            >
              {/* Icon ring */}
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                className="w-11 h-11 rounded-full border border-[#CCA665]/60 bg-[#CCA665]/10 flex items-center justify-center mb-4"
              >
                <card.icon size={18} className="text-[#CCA665]" />
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-2"
              >
                {card.eyebrow}
              </motion.p>

              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } } }}
                className="font-serif text-2xl sm:text-3xl text-white leading-tight mb-3"
              >
                {card.title}
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm"
              >
                {card.desc}
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-[#CCA665] text-xs tracking-[0.18em] uppercase font-medium border-b border-[#CCA665]/40 pb-0.5 hover:border-[#CCA665] transition-colors duration-200 group/link"
                >
                  {card.cta}
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
