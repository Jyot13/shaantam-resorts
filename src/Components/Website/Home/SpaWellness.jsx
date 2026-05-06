"use client";


import { motion } from "framer-motion";
import SectionHeader from "@/Components/Global/Heading";
import { Droplets, Wind, Sparkles, Heart } from "lucide-react";

// Ayurvedic shirodhara treatment at AyurVAID Kalmatia, Uttarakhand, India
const SPA =
  "https://images.unsplash.com/photo-1775133263714-848c8fe09e73?auto=format&fit=crop&w=1200&q=80";

const treatments = [
  {
    icon: Droplets,
    title: "Ayurvedic Massages",
    desc: "Ancient healing therapies using warm herbal oils crafted to restore the body's natural balance and release deep-seated tension.",
  },
  {
    icon: Wind,
    title: "Sauna & Steam",
    desc: "Rejuvenate in our eucalyptus steam room and mineral salt sauna — a complete detox ritual for body and mind.",
  },
  {
    icon: Sparkles,
    title: "Signature Facials",
    desc: "Botanically-derived skin treatments using locally sourced Himalayan herbs for a radiant, deeply nourished complexion.",
  },
  {
    icon: Heart,
    title: "Body Therapies",
    desc: "Full-body rituals — from exfoliating scrubs to nourishing wraps — designed to detox, restore, and renew your skin.",
  },
];

export default function SpaWellness() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFAF5] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <SectionHeader
          eyebrow="Restore & Rejuvenate"
          title="Spa & Wellness"
          subtitle="Rediscover yourself at Shaantam Spa — a sanctuary for mind, body and soul."
        />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[48%] relative h-85 sm:h-105 lg:h-130 rounded-2xl overflow-hidden shadow-2xl shrink-0"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={SPA} alt="Shaantam Spa & Wellness" className="object-cover w-full h-full" />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#CCA665] mb-1">Shaantam Spa</p>
            <p className="text-sm text-white/75">A sanctuary for mind, body &amp; soul</p>
          </div>
          <div className="absolute inset-0 rounded-2xl border border-[#CCA665]/20 pointer-events-none" />
        </motion.div>

        {/* Treatments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          className="w-full lg:w-[52%] space-y-7"
        >
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
                }}
                className="flex gap-5 items-start group"
              >
                <div className="w-12 h-12 bg-[#CCA665]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#CCA665]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#CCA665]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif text-[#1a1a1a] mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-[#CCA665] text-white px-9 py-3.5 text-xs tracking-[0.2em] uppercase font-medium mt-2"
          >
            Book a Spa Treatment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
