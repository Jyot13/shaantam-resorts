"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Utensils,
  MapPin,
  Users,
  CalendarDays,
  Star,
  PhoneCall,
} from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";
import SectionHeader from "@/Components/Global/Heading";

const HERO =
  "https://images.unsplash.com/photo-1762216444919-043cf813e4de?auto=format&fit=crop&w=1920&q=80";
const MANDAP =
  "https://images.unsplash.com/photo-1772127822552-ce9ef537bdcf?auto=format&fit=crop&w=1200&q=80";

const reasons = [
  { icon: MapPin, title: "Sacred Location", desc: "Nestled near the holy Neelkanth Temple in the foothills of the Himalayas — a divine setting for sacred ceremonies." },
  { icon: Utensils, title: "Bespoke Menus", desc: "Pure-vegetarian wedding feasts crafted by our chefs, from traditional Indian spreads to curated wellness banquets." },
  { icon: Camera, title: "Pre-wedding Shoots", desc: "Breathtaking backdrops including valley lawns, mountain vistas, and the sacred Ganges for your photography sessions." },
  { icon: Users, title: "In-House Coordination", desc: "A dedicated events team that takes care of every detail — décor, logistics, vendor coordination, and day-of support." },
  { icon: Heart, title: "Intimate to Grand", desc: "From a 30-person intimate celebration to a 300-guest dream wedding, our venues flex to accommodate your vision." },
  { icon: Star, title: "On-Site Accommodation", desc: "All your guests can stay with us — our rooms, suites, and cottages provide a seamless, luxurious base for the celebration." },
];

const venues = [
  {
    img: HERO,
    title: "Valley Garden Lawn",
    tag: "Outdoor",
    capacity: "Up to 300 guests",
    desc: "Our expansive garden lawn offers a lush open-air canvas framed by the Himalayan foothills. Ideal for grand ceremonies, Mehendi functions, and reception evenings under the stars.",
    features: ["Panoramic valley views", "Outdoor stage & altar space", "Full lighting setup", "Tented setup available"],
  },
  {
    img: MANDAP,
    title: "Sacred Mandap Venue",
    tag: "Ceremony",
    capacity: "Up to 150 guests",
    desc: "A dedicated mandap setting for the main wedding ceremony, adorned with floral arrangements and traditional décor. The sacred atmosphere is heightened by the proximity to Neelkanth Temple.",
    features: ["Traditional mandap structure", "Floral & décor package", "Pandit coordination available", "Sound system included"],
  },
];

const packages = [
  { label: "Venue & Décor", items: ["Garden lawn or banquet hall", "Floral centrepieces & table décor", "Stage and mandap setup", "Lighting and draping"] },
  { label: "Catering", items: ["Multi-cuisine pure-veg menus", "Welcome drinks & cocktail hour", "Gala dinner or buffet", "Dessert & mithai counter"] },
  { label: "Stay & Experiences", items: ["Accommodation for all guests", "Welcome amenities per room", "Yoga session for the wedding party", "Spa treatments for bride & groom"] },
  { label: "Coordination", items: ["Dedicated wedding planner", "Vendor coordination", "Day-of event management", "Photography backdrop setup"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={HERO}
          alt="Destination Weddings at Shaantam Resorts"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />

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
            Celebrate Love
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-5 max-w-3xl"
          >
            Your Dream Wedding<br />in the Himalayas
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed mb-8"
          >
            Nestled near the sacred Neelkanth Temple, Shaantam Resorts offers an enchanting
            backdrop for destination weddings — where love stories meet the divine serenity of Rishikesh.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#venues">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-8 py-3.5 text-sm tracking-wider font-medium w-full sm:w-auto"
              >
                EXPLORE VENUES
              </motion.button>
            </a>
            <a href="#enquire">
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.22 }}
                className="border border-white/40 text-white px-8 py-3.5 text-sm tracking-wider font-medium w-full sm:w-auto"
              >
                ENQUIRE NOW
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Why Shaantam ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FDFAF5] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <SectionHeader
              eyebrow="Why Shaantam"
              title="A Wedding Like No Other"
              subtitle="A sacred setting, impeccable service, and Himalayan beauty — the perfect ingredients for a wedding you'll cherish forever."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#EDE9E0]"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#CCA665]/30 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#CCA665]" />
                </div>
                <h3 className="font-medium text-[#1a1a1a] text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Venues ───────────────────────────────────────────── */}
      <section id="venues" className="py-16 md:py-24 bg-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <SectionHeader
              eyebrow="Wedding Venues"
              title="Choose Your Setting"
              subtitle="From sweeping outdoor lawns to intimate ceremony spaces — every corner of Shaantam is a backdrop worth remembering."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#CCA665] text-white text-[10px] px-3 py-1.5 tracking-[0.15em] uppercase">
                    {venue.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="w-full lg:w-[48%]">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-3">{venue.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
                    <Users size={14} className="text-[#CCA665]" />
                    <span>{venue.capacity}</span>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7">{venue.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {venue.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="text-[#CCA665] text-xs">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                    className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium"
                  >
                    Book This Venue
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <SectionHeader
              eyebrow="Everything Included"
              title="Our Wedding Packages"
              subtitle="We handle every detail so you can be fully present on your most special day."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#EDE9E0]"
              >
                <p className="text-[#CCA665] text-xs tracking-[0.2em] uppercase font-medium mb-4 pb-4 border-b border-[#EDE9E0]">
                  {pkg.label}
                </p>
                <ul className="space-y-3">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-gray-500 leading-relaxed">
                      <span className="text-[#CCA665] mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Quote Banner ─────────────────────────────────────── */}
      <section className="bg-[#1E1208] py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <Heart size={26} className="text-[#CCA665] mx-auto mb-6 opacity-70" />
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-5">Sacred Beginnings</p>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            "Where the sacred meets the sublime —<br className="hidden sm:block" />
            every love story deserves this setting."
          </blockquote>
          <p className="mt-6 text-white/40 text-sm tracking-wide">— Shaantam Resorts, Rishikesh</p>
        </motion.div>
      </section>

      {/* ── Enquiry CTA ──────────────────────────────────────── */}
      <section id="enquire" className="py-16 md:py-24 bg-[#FDFAF5] px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Start Planning</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-5">
            Let's Plan Your Wedding
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Share your vision with our weddings team. We'll get back to you with a customised
            proposal, availability, and package details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a href="/contact">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-medium flex items-center gap-2"
              >
                <CalendarDays size={14} />
                Request a Proposal
              </motion.button>
            </motion.a>
            <motion.a href="tel:+91-0000000000">
              <motion.button
                whileHover={{ backgroundColor: "#f0ebe3" }}
                transition={{ duration: 0.22 }}
                className="border border-[#CCA665] text-[#CCA665] px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-medium flex items-center gap-2"
              >
                <PhoneCall size={14} />
                Call Us
              </motion.button>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
