"use client";

import { motion } from "framer-motion";
import { Leaf, Clock, Users, Star, UtensilsCrossed, Flame } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";
import SectionHeader from "@/Components/Global/Heading";

const HERO =
  "https://images.unsplash.com/photo-1776993298456-98c71c0e177e?auto=format&fit=crop&w=1920&q=80";
const SATTVIC =
  "https://images.unsplash.com/photo-1701540747569-46bf364bbbb0?auto=format&fit=crop&w=1200&q=80";
const POOLSIDE =
  "https://images.unsplash.com/photo-1759156241324-6343c446a27c?auto=format&fit=crop&w=1200&q=80";
const PRIVATE =
  "https://images.unsplash.com/photo-1777370439895-0bc929e08408?auto=format&fit=crop&w=1200&q=80";
const RESTAURANT =
  "https://images.unsplash.com/photo-1776993298456-98c71c0e177e?auto=format&fit=crop&w=1200&q=80";

const venues = [
  {
    img: RESTAURANT,
    tag: "All-Day Dining",
    title: "Shaantam Restaurant",
    desc: "Our signature restaurant serves freshly prepared sattvic cuisine in a serene, valley-facing dining hall. From wholesome breakfasts to elaborate dinners, every dish is crafted with seasonal, locally sourced ingredients.",
    timings: "7:00 AM – 10:00 PM",
    seating: "Up to 60 guests",
    highlights: ["Sattvic pure-veg menu", "Valley views from every table", "Seasonal ingredients", "Ayurvedic-inspired specials"],
  },
  {
    img: POOLSIDE,
    tag: "Alfresco",
    title: "Poolside Dining",
    desc: "Savour light bites, fresh salads, and handcrafted beverages beside our infinity pool. The open-air setting offers sweeping views of the Rishikesh valley — perfect for a leisurely lunch or an evening sundowner.",
    timings: "10:00 AM – 8:00 PM",
    seating: "Up to 30 guests",
    highlights: ["Infinity pool views", "Curated light menus", "Evening mocktail bar", "Sunset seating priority"],
  },
  {
    img: PRIVATE,
    tag: "Intimate",
    title: "Private Dining",
    desc: "Celebrate anniversaries, honeymoons, or intimate milestones in a candlelit private setting. Our team crafts a personalised menu and ambiance — florals, lighting, and a bespoke dining experience just for you.",
    timings: "By reservation only",
    seating: "2–10 guests",
    highlights: ["Personalised menu", "Candlelit setup", "Floral decoration", "Dedicated butler service"],
  },
];

const philosophy = [
  { icon: Leaf, text: "100% Pure Vegetarian" },
  { icon: Flame, text: "Sattvic Cooking Methods" },
  { icon: Star, text: "Seasonal Local Produce" },
  { icon: UtensilsCrossed, text: "Ayurvedic Meal Plans" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } },
};

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={HERO}
          alt="Dining at Shaantam Resorts"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
          >
            Flavours of Shaantam
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-5 max-w-3xl"
          >
            Dining at<br />Shaantam
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed mb-8"
          >
            Sattvic flavours, mindful cuisine, and unforgettable settings — every meal is a moment
            of nourishment, calm, and connection in the heart of the Himalayas.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
          >
            <a href="#venues">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-8 py-3.5 text-sm tracking-wider font-medium"
              >
                EXPLORE VENUES
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Venue Sections ───────────────────────────────────── */}
      <section id="venues" className="bg-[#FDFAF5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <SectionHeader
              eyebrow="Where to Dine"
              title="Our Dining Venues"
              subtitle="Three distinct settings, one shared philosophy — mindful, nourishing, and deeply satisfying."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
            className="space-y-16 md:space-y-24"
          >
            {venues.map((venue, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-[52%] relative h-72 sm:h-90 lg:h-110 rounded-2xl overflow-hidden shadow-2xl shrink-0">
                  <motion.div
                    initial={{ scale: 1.06 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img src={venue.img} alt={venue.title} className="object-cover w-full h-full" />
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#CCA665] text-white text-[10px] px-3 py-1.5 tracking-[0.15em] uppercase">
                    {venue.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="w-full lg:w-[48%]">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-4">{venue.title}</h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">{venue.desc}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} className="text-[#CCA665]" />
                      <span>{venue.timings}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={14} className="text-[#CCA665]" />
                      <span>{venue.seating}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {venue.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="text-[#CCA665] text-xs">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                    className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium"
                  >
                    View Menu
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy Section ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-[45%] relative h-80 sm:h-100 rounded-2xl overflow-hidden shadow-2xl shrink-0"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={SATTVIC} alt="Sattvic cuisine at Shaantam" className="object-cover w-full h-full" />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#CCA665]/25 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            className="w-full lg:w-[55%]"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
            >
              Our Culinary Philosophy
            </motion.p>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6"
            >
              Sattvic Cuisine —<br />Food as Medicine
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4"
            >
              At Shaantam, our kitchen follows the ancient principles of sattvic cooking — pure,
              light, and nourishing foods that promote clarity of mind and balance of body.
              Every dish is prepared without onion, garlic, or tamasic ingredients.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8"
            >
              Our chefs source seasonal produce from local farmers in Uttarakhand, blending
              traditional Himalayan recipes with Ayurvedic nutrition science.
            </motion.p>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-4"
            >
              {philosophy.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  className="flex items-center gap-3 bg-[#FAF7F2] rounded-xl px-4 py-3"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-[#CCA665]/30 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#CCA665]" />
                  </div>
                  <span className="text-xs text-[#1a1a1a] font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Reservation Banner ───────────────────────────────── */}
      <section className="bg-[#1E1208] py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4">Reserve a Table</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
            Ready to Experience<br />Mindful Dining?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Contact our dining team to make a reservation for the restaurant or private dining experience.
            Our team will curate the perfect setting for your occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/contact">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-9 py-3.5 text-xs tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
              >
                Make a Reservation
              </motion.button>
            </motion.a>
            <motion.a href="/rooms/book">
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.22 }}
                className="border border-white/30 text-white px-9 py-3.5 text-xs tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
              >
                Book a Stay
              </motion.button>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
