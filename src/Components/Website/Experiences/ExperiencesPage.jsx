"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Mountain,
  Leaf,
  Navigation,
  Plane,
  TreePine,
  Waves,
  Baby,
  Landmark,
  Camera,
  Bird,
  Dumbbell,
  Car,
  MapPin,
} from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";
import SectionHeader from "@/Components/Global/Heading";

const HERO =
  "https://images.unsplash.com/photo-1683318528827-9577068cebeb?auto=format&fit=crop&w=1920&q=80";

// ── 5-Day Itinerary ───────────────────────────────────────────
const days = [
  {
    icon: Compass,
    day: "Day 1",
    title: "Arrival & Heritage",
    activities: [
      {
        time: "3:00 PM",
        title: "Arrival & Check-In",
        desc: "Arrive in Rishikesh and settle into the quiet luxury of Shaantam Resort, nestled along the sacred Neelkanth Temple Road.",
      },
      {
        time: "6:30 PM",
        title: "Heritage Walk",
        desc: "Evening guided stroll and local sightseeing along the sacred Ganges river at Laxman Jhula.",
      },
    ],
  },
  {
    icon: Leaf,
    day: "Day 2",
    title: "Yoga & Wellness",
    activities: [
      {
        time: "Morning",
        title: "Yoga & Leisure",
        desc: "Start the day centring with sunrise yoga by the Ganges and peaceful leisure time in the resort gardens.",
      },
      {
        time: "2:00 PM",
        title: "Ayurvedic Spa",
        desc: "Embark on a restorative journey with a traditional shirodhara and Ayurvedic body treatment at our wellness centre.",
      },
    ],
  },
  {
    icon: Mountain,
    day: "Day 3",
    title: "Himalayan Excursion",
    activities: [
      {
        time: "Full Day",
        title: "Neelkanth Temple & High-Altitude Vistas",
        desc: "A sacred excursion to the ancient Neelkanth Mahadev Temple through forested Himalayan trails. Experience the grandeur of nature from morning till evening.",
      },
    ],
  },
  {
    icon: Navigation,
    day: "Day 4",
    title: "Local Sanctuaries",
    activities: [
      {
        time: "Day Trip",
        title: "Exploring Serenity",
        desc: "A peaceful day visiting local serene spots including Neer Garh Waterfall, the historic Beatles Ashram, the iconic Laxman Jhula, and Ram Jhula.",
      },
    ],
  },
  {
    icon: Plane,
    day: "Day 5",
    title: "Departure",
    activities: [
      {
        time: "Morning",
        title: "Spiritual Conclusion",
        desc: "Final morning of spiritual activities and deep meditation in Rishikesh to ground your experience.",
      },
      {
        time: "Mid-Day",
        title: "Onward Journey",
        desc: "Departure to the regional capital, Dehradun, carrying the serenity of the Himalayas with you.",
      },
    ],
  },
];

// ── Activities at the resort ──────────────────────────────────
const activities = [
  { icon: Landmark, title: "Neelkanth Temple",    desc: "A sacred pilgrimage to the revered abode of Lord Shiva — a short drive through dense Himalayan forest." },
  { icon: Waves,    title: "River Rafting",        desc: "Experience the thrilling rapids of the sacred Ganges, guided by certified river experts." },
  { icon: Baby,     title: "Kids Play Zone",       desc: "A dedicated, safe play area where young guests can explore, play, and create lasting memories." },
  { icon: Camera,   title: "Pre-Wedding Shoots",   desc: "Stunning Himalayan forest and valley backdrops for your most cherished photographs." },
  { icon: TreePine, title: "Nature Walks",         desc: "Guided trails through the Himalayan foothills — spot local flora, fauna, and breathtaking vistas." },
  { icon: Bird,     title: "Birdwatching",         desc: "Spot Himalayan eagles, kingfishers, and rich avian diversity on guided sunrise sessions." },
  { icon: Dumbbell, title: "Games Room",           desc: "Indoor games, board games, and recreational activities for guests of all ages." },
  { icon: Car,      title: "Local Sightseeing",    desc: "Resort-arranged transfers to Ram Jhula, Haridwar, and Uttarakhand's most iconic landmarks." },
];

// ── Nearby restaurants ────────────────────────────────────────
const restaurants = [
  {
    name: "Choti Wala",
    type: "Traditional North Indian",
    desc: "A legendary landmark in Rishikesh since 1958, famous for its authentic thalis and vibrant spiritual atmosphere.",
    location: "Swarg Ashram",
  },
  {
    name: "The 60's Cafe",
    type: "Beatles Inspired",
    desc: "Also known as Cafe Delmar, this spot offers a nostalgic journey with organic food and stunning Ganges views.",
    location: "Tapasya Garden",
  },
  {
    name: "Little Buddha Cafe",
    type: "International Fusion",
    desc: "One of the busiest cafes in Rishikesh, offering a tree-house style ambiance with diverse healthy options.",
    location: "Laxman Jhula",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
};

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white">
      <TransparentNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={HERO}
          alt="Rishikesh experiences"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4"
          >
            Beyond the Room
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-5 max-w-3xl"
          >
            Experiences &<br />Activities
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed mb-8"
          >
            From sunrise yoga on the Ganges to a pilgrimage up to Neelkanth Temple — every day at
            Shaantam is an invitation to explore, heal, and be still.
          </motion.p>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            href="#itinerary"
          >
            <motion.button
              whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="bg-[#CCA665] text-white px-8 py-3.5 text-sm tracking-wider font-medium"
            >
              VIEW ITINERARY
            </motion.button>
          </motion.a>
        </motion.div>
      </section>

      {/* ── Activities Grid ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <SectionHeader
              eyebrow="At the Resort"
              title="What to Do"
              subtitle="Adventures, sacred journeys, and peaceful moments — all within reach of your room."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {activities.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] rounded-xl p-5 flex gap-4 items-start border-l-2 border-[#CCA665]/25 hover:border-[#CCA665] transition-colors duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#CCA665]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <a.icon className="w-4 h-4 text-[#CCA665]" />
                </div>
                <div>
                  <h3 className="font-serif text-[#1a1a1a] text-base mb-1">{a.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5-Day Itinerary ──────────────────────────────────── */}
      <section id="itinerary" className="py-16 md:py-24 bg-[#FDFAF5] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-16"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Your Itinerary</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1a1a]">5 Days of Serenity</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-5 top-2 bottom-0 w-px bg-[#E8E4DC]" />

            <div className="space-y-12">
              {days.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="relative flex gap-8"
                >
                  {/* Day icon */}
                  <div className="shrink-0 w-10 h-10 bg-white border border-[#E8E4DC] rounded-xl flex items-center justify-center z-10 shadow-sm mt-0.5">
                    <day.icon size={17} className="text-[#CCA665]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-1">
                      {day.day}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] mb-5">
                      {day.title}
                    </h3>

                    <div className="space-y-3">
                      {day.activities.map((act, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: j * 0.1 }}
                          className="bg-white rounded-xl p-5 flex gap-5 border border-[#F0ECE4]"
                        >
                          <div className="w-20 shrink-0 pt-0.5">
                            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400 leading-tight">
                              {act.time}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-[#1a1a1a] text-sm mb-1.5">{act.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{act.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Flavors ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Curated Dining</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1a1a]">Local Flavors</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {restaurants.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.25 }}
                className="border border-[#EDEBE5] rounded-xl p-7 bg-white"
              >
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-1">{r.name}</h3>
                <p className="text-[#CCA665] text-[10px] tracking-[0.22em] uppercase font-medium mb-4">
                  {r.type}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{r.desc}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <MapPin size={12} />
                  <span>{r.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-[#1E1208] py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4">Plan Your Visit</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
            Ready to Begin<br />Your Rishikesh Journey?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Our concierge team can help you customise your itinerary, arrange excursions,
            and ensure every moment of your stay is exactly as you imagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/rooms/book">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-9 py-3.5 text-xs tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
              >
                Book Your Stay
              </motion.button>
            </motion.a>
            <motion.a href="/contact">
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.22 }}
                className="border border-white/30 text-white px-9 py-3.5 text-xs tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
              >
                Talk to Concierge
              </motion.button>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
