"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Eye } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80";
const DINING_IMG = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80";
const POOL_VIEW = "https://images.unsplash.com/photo-1540541338537-9a0aa4eaf290?auto=format&fit=crop&w=1200&q=80";

const featurePills = [
  { icon: Leaf, label: "Organic Cuisine" },
  { icon: Eye, label: "Infinity Views" },
  { icon: Sun, label: "Sunrise to Dusk" },
];

export default function PrivateDiningPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img src={HERO} alt="Private Dining at Shaantam" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3"
          >
            An Uninterrupted Feast
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-4"
          >
            Private<br />Dining
          </motion.h1>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6 } } }}
            style={{ originX: 0 }}
            className="h-px w-20 bg-[#CCA665]"
          />
        </motion.div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1208] mb-5">Private Dining</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
            Enjoy private dining under starlit skies. Private dinners are always special. You can enjoy a private
            dinner with the family, a loved one or a few friends. We offer it in mesmeric poolside settings,
            with tailored menus and flawless service.
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            Celebrate romantic occasions, toast your marriage, or plan a memorable birthday in the
            breathtakingly stunning settings of Himalayan foothills in Rishikesh. Shaantam Resort offers
            various private dining settings at secluded locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {featurePills.map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 border border-[#E8E4DC] px-4 py-2 rounded-full">
                <Icon size={14} className="text-[#CCA665]" />
                <span className="text-xs tracking-widest uppercase text-[#1E1208]/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
              className="w-full lg:w-[52%] h-80 sm:h-100 overflow-hidden rounded-sm shrink-0"
            >
              <img src={DINING_IMG} alt="Private dining setting" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">Curated Experiences</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Private Dining
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Our superbly curated dining experiences make your special occasions even more unique. You can
                also celebrate your special occasion at the private terrace of your luxury cottage with a
                candlelit dinner specially fashioned by the chef.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We also arrange for a private barbeque and bon fires on special request and make your special
                occasion a night to remember for a long time to come.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                From intimate dinners to family celebrations or business gatherings, we offer various private
                dining options, offers and experiences. Our impressive indoor and outdoor settings feature
                unique locations for any occasion — all with the finest standards of hospitality, warmth and
                capability.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-3">
                {["Candlelit terrace setup", "Tailored menus by chef", "Private barbeque & bonfire", "Poolside starlit settings", "Floral decoration", "Dedicated butler service"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#CCA665] text-xs">✦</span>
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Secure Your Table */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-72">
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img src={POOL_VIEW} alt="Private dining setting" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-[#0d0704]/30" />
        </div>
        <div className="bg-[#4a3c28] flex flex-col justify-center px-10 py-14">
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Reserve Your Moment</p>
          <h2 className="font-serif text-3xl text-white leading-snug mb-4">Secure Your Table</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Poolside seating is limited to preserve the intimate atmosphere. We recommend booking 24 hours in
            advance to ensure your preferred time and setting.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ backgroundColor: "#b38e45" }}
              className="bg-[#CCA665] text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Book Table
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              className="border border-white/40 text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Contact Concierge
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}
