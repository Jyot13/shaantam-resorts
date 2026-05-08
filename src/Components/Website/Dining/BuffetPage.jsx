"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Eye, ChefHat, Sparkles, Mountain } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80";
const MULTICUISINE = "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80";
const LIVE_COOKING = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";
const VIEW_IMG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80";
const POOL_VIEW = "https://images.unsplash.com/photo-1540541338537-9a0aa4eaf290?auto=format&fit=crop&w=1200&q=80";

const featurePills = [
  { icon: Leaf, label: "Organic Cuisine" },
  { icon: Eye, label: "Infinity Views" },
  { icon: Sun, label: "Sunrise to Dusk" },
];

const highlights = [
  {
    icon: ChefHat,
    tag: "Live Stations",
    title: "Live Cooking Stations",
    desc: "Watch as our skilled chefs prepare fresh items right before your eyes. Dosas expertly spread, pasta tossed to perfection, and tandoor items with that distinctive smoky aroma — our live stations are the heart of the buffet.",
  },
  {
    icon: Sparkles,
    tag: "Premium Sourcing",
    title: "Premium Ingredients",
    desc: "We source the freshest local produce, aromatic spices, and premium ingredients. Seasonal vegetables from the hills, dairy from trusted local suppliers — every bite delivers on taste and quality.",
  },
  {
    icon: Mountain,
    tag: "The Backdrop",
    title: "Dining with a View",
    desc: "Large windows frame the majestic Himalayan landscape. Dine while taking in panoramic views of rolling hills and pristine surroundings — from sunrise breakfasts to starlit dinners.",
  },
];

export default function BuffetPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img src={HERO} alt="Buffet dining at Shaantam" className="absolute inset-0 object-cover w-full h-full" />
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
            Buffet Dining at<br />Shaantam Resorts
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
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1208] mb-5">Buffet Dining at Shaantam Resorts & Spa</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            At Shaantam Resorts & Spa, dining transcends mere sustenance to become a celebration of flavors,
            cultures, and the art of hospitality. Our signature buffet experience offers guests an extraordinary
            culinary journey that perfectly complements the serene mountain setting of Rishikesh.
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

      {/* Multi-Cuisine Excellence */}
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
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">Global Palates</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Multi-Cuisine<br />Excellence
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Our buffet showcases an impressive array of cuisines that cater to every palate and preference.
                From authentic North Indian delicacies that capture the essence of traditional cooking to
                Continental favorites that bring international flavors to your plate.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                South Indian specialties add a delightful regional touch, while Chinese cuisine offers the
                perfect fusion of flavors that guests love.
              </p>
              <p className="text-[#1E1208]/80 text-sm font-medium mt-2">Diverse Flavour Profiles</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                From the zest of the Mediterranean to the rich heritage of Awadhi cuisine, every plate tells a
                story of exploration and balance.
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } } }}
              className="w-full lg:w-[52%] h-80 sm:h-100 overflow-hidden rounded-sm shrink-0"
            >
              <img src={MULTICUISINE} alt="Multi-cuisine buffet" className="object-cover w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
              className="w-full lg:w-[52%] h-80 sm:h-100 overflow-hidden rounded-sm shrink-0"
            >
              <img src={LIVE_COOKING} alt="Live cooking stations" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">Interactive Dining</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-5">
                Live Cooking<br />Stations
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                The live cooking stations are a particular highlight, where our skilled chefs prepare fresh
                items right before your eyes. Watch as dosas are expertly spread, pasta is tossed to perfection,
                and tandoor items emerge with that distinctive smoky aroma that makes Indian cuisine so beloved.
              </p>
              <p className="text-[#1E1208]/80 text-sm font-medium mt-4 mb-1">Fresh Ingredients, Exceptional Quality</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our commitment starts at the source. We prioritize seasonal produce harvested from local
                Himalayan farms to ensure every bite is bursting with natural vitality.
              </p>
            </motion.div>
          </motion.div>

          {/* 3 highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
                className="bg-[#FAF7F2] border border-[#E8E4DC] p-7"
              >
                <div className="w-10 h-10 rounded-full border border-[#CCA665]/30 flex items-center justify-center mb-4">
                  <h.icon size={16} className="text-[#CCA665]" />
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#CCA665] mb-2">{h.tag}</p>
                <h3 className="font-serif text-xl text-[#1E1208] mb-3">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* View section */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
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
              <img src={VIEW_IMG} alt="Himalayan view from restaurant" className="object-cover w-full h-full" />
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
              className="w-full lg:w-[48%]"
            >
              <p className="text-[#CCA665] tracking-[0.28em] text-[10px] uppercase mb-3">The Backdrop</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] leading-tight mb-2">Dining with a View</h2>
              <p className="font-serif text-xl text-[#1E1208]/50 mb-5">Himalayan Panorama</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                What sets our buffet experience apart is not just the food, but the ambience in which it's enjoyed.
                Large windows frame the majestic Himalayan landscape, allowing guests to dine while taking in
                panoramic views of the rolling hills and pristine natural surroundings.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Whether you're enjoying your morning breakfast as the sun rises over the mountains or savouring
                dinner under the starlit sky, every meal becomes a memorable experience.
              </p>
              <p className="text-[#1E1208]/80 text-sm font-medium mb-2">Premium Value</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                At Shaantam Resorts, we believe in transparent hospitality. Our buffet dining comes with no hidden
                costs or extra charges. Order anything from our extensive menu, return for seconds, or try a bit
                of everything — it's all included.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All-Inclusive banner */}
      <section className="bg-[#FAF7F2] py-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] mb-5">All-Inclusive Dining Experience</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Understanding that guests have diverse dietary requirements, our buffet includes extensive vegetarian
              options, Jain-friendly preparations, and dishes that cater to various dietary restrictions.
            </p>
            <p className="text-[#1E1208]/60 text-xs tracking-widest uppercase mt-6 mb-2">Perfect Setting for Every Occasion</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you're celebrating a special occasion, enjoying a family gathering, or simply treating
              yourself to a memorable meal, our buffet dining area provides the perfect backdrop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Secure Your Table */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-72">
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img src={POOL_VIEW} alt="Restaurant setting" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-[#0d0704]/30" />
        </div>
        <div className="bg-[#4a3c28] flex flex-col justify-center px-10 py-14">
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Reserve Your Seat</p>
          <h2 className="font-serif text-3xl text-white leading-snug mb-4">Experience Culinary Bliss</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Come, indulge in the flavours of the Himalayas and discover why our buffet dining experience is
            considered one of the highlights of staying at Shaantam Resorts & Spa.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ backgroundColor: "#b38e45" }}
              className="bg-[#CCA665] text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Book a Table
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              className="border border-white/40 text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Explore More
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}
