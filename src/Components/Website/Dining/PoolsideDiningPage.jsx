"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Eye, Instagram } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO = "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?auto=format&fit=crop&w=1920&q=80";
const POOL_DINING = "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=80";
const FOOD_IMG = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80";
const EVENING_IMG = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80";
const TABLE_IMG = "https://images.unsplash.com/photo-1540541338537-9a0aa4eaf290?auto=format&fit=crop&w=1200&q=80";

const featurePills = [
  { icon: Leaf, label: "Organic Cuisine" },
  { icon: Eye, label: "Infinity Views" },
  { icon: Sun, label: "Sunrise to Dusk" },
];

const signatureDishes = [
  "Detox Green Juice — cucumber, mint, and aloe vera",
  "Himalayan Herbal Soup — packed with seasonal vegetables",
  "Tandoori Platters — the perfect blend of smoke and spice",
  "Grilled Paneer Skewers — served with fresh chutneys",
  "Sattvik Thali — inspired by traditional yogic diet",
];

const occasions = [
  "Romantic dinners for honeymooners or anniversary couples",
  "Birthday celebrations in a serene setting",
  "Family brunches with activities for kids nearby",
  "Solo moments of mindfulness after a yoga session",
  "Private poolside bookings for small groups",
  "Pre-wedding meals and wellness events",
];

export default function PoolsideDiningPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img src={HERO} alt="Poolside Dining at Shaantam" className="absolute inset-0 object-cover w-full h-full" />
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
            Poolside<br />Dining
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
          <h2 className="font-serif text-xl sm:text-2xl text-[#1E1208]/60 uppercase tracking-widest mb-3">Poolside Dining in Rishikesh</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
            Sip a fresh juice under clear Himalayan skies and enjoy a healthy sun bath as you lounge by an
            alfresco swimming pool, one of its kind in Rishikesh. There's something magical about dining under
            the open sky, surrounded by the serene Himalayan landscape.
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            Whether you're sipping fresh juice in the afternoon sun or enjoying a candle-lit dinner under
            the stars, our alfresco poolside setting is perfect for guests seeking both indulgence and tranquility.
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

      {/* Calm Escape by the Pool */}
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
              <img src={POOL_DINING} alt="Poolside dining" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">01 / Experience</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                A Calm Escape<br />by the Pool
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Our poolside area is more than just a place to eat — it's a sanctuary of stillness and beauty.
                With panoramic views of the surrounding hills and the gentle sounds of nature, this spot lets
                you unwind and reconnect with yourself.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Start your day with a revitalizing breakfast or enjoy a lazy lunch with your feet dipped in water.
                The poolside lounge area is designed for comfort, allowing you to soak in the resort's peaceful
                energy while enjoying top-notch hospitality.
              </p>
              <a href="#book" className="inline-flex items-center gap-2 text-[#CCA665] text-xs tracking-[0.2em] uppercase font-medium border-b border-[#CCA665]/40 pb-0.5 hover:border-[#CCA665] transition-colors duration-200">
                View Breakfast Menu →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Farm-Fresh Food */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
              className="w-full lg:w-[52%] h-80 sm:h-100 overflow-hidden rounded-sm shrink-0"
            >
              <img src={FOOD_IMG} alt="Farm-fresh food" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Farm-Fresh Food &<br />Himalayan Flavor
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our restaurant menu is crafted to reflect a healthy, holistic lifestyle inspired by Ayurvedic
                principles and the spiritual essence of Rishikesh. From refreshing mocktails and cold-pressed
                juices to nourishing salads and warm soul foods, everything is made fresh.
              </p>
              <p className="text-[#1E1208]/80 text-sm font-medium mb-4">Signature dishes you can enjoy poolside:</p>
              <ul className="space-y-2.5">
                {signatureDishes.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-[#CCA665] text-xs mt-0.5">✦</span>
                    {dish}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Unique */}
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
              <img src={EVENING_IMG} alt="Evening poolside dining" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Why Poolside Dining<br />in Rishikesh Is Unique
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Rishikesh is known as the Yoga Capital of the World — a destination where people come to heal,
                meditate, and experience spiritual bliss. Our poolside dining area reflects this energy — free
                of noise, surrounded by greenery, and rooted in wellness.
              </p>
              <h3 className="font-serif text-xl text-[#1E1208] mb-4">Perfect for Every Occasion</h3>
              <ul className="space-y-2.5 mb-6">
                {occasions.map((occ, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-[#CCA665] text-xs mt-0.5">✦</span>
                    {occ}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-[#FAF7F2] py-12 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Instagram size={28} className="text-[#CCA665] mx-auto mb-4" />
            <h2 className="font-serif text-2xl text-[#1E1208] mb-3">Instagram-Worthy Backdrop</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The alfresco area is not only a treat to your taste buds but also to your camera. With charming
              wooden décor, fresh flowers, and natural lighting, it's a perfect spot for your Instagram posts.
            </p>
            <p className="text-[#CCA665] text-sm mt-3 tracking-wider">#ShaantamMoments</p>
          </motion.div>
        </div>
      </section>

      {/* Secure Your Table */}
      <section id="book" className="grid grid-cols-1 lg:grid-cols-2 min-h-72">
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img src={TABLE_IMG} alt="Poolside table setting" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-[#0d0704]/30" />
        </div>
        <div className="bg-[#4a3c28] flex flex-col justify-center px-10 py-14">
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Reserve Your Spot</p>
          <h2 className="font-serif text-3xl text-white leading-snug mb-4">Secure Your Table</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Poolside seating is limited to preserve the intimate atmosphere. We recommend booking 24 hours in
            advance to ensure your preferred time.
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
