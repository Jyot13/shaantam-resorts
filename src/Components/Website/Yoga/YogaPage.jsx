"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Brain, Wind, Clock } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO_IMG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";
const HERO_PERSON = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80";
const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=600&q=80",
];

const sessions = [
  {
    icon: Sun,
    tag: "Morning Ritual",
    title: "Sunrise Yoga",
    desc: "A traditional Hatha flow to awaken the senses and align the spine as the first light touches the mountain peaks.",
  },
  {
    icon: Brain,
    tag: "Mental Clarity",
    title: "Guided Meditation",
    desc: "Deeply restorative sessions focusing on mindfulness, visualization, and inner silence to reduce cognitive load.",
  },
  {
    icon: Wind,
    tag: "Life Force",
    title: "Pranayama",
    desc: "Ancient breathing techniques designed to harness Prana (life force) and purify the nervous system.",
  },
];

const schedule = [
  { time: "06:00 AM", activity: "Sunrise Hatha Flow", duration: "90 Mins" },
  { time: "10:30 AM", activity: "Vedic Chanting & Pranayama", duration: "60 Mins" },
  { time: "02:00 PM", activity: "Satsang & Spiritual Discussion", duration: "45 Mins" },
  { time: "05:30 PM", activity: "Trataka (Gazing Meditation)", duration: "60 Mins" },
];

const spaces = [
  { abbr: "AA", label: "Mountain Deck" },
  { abbr: "PP", label: "Himalayan Studio" },
  { abbr: "HA", label: "Open Air Practice" },
  { abbr: "AH", label: "Pranayama Pavilion" },
];

export default function YogaPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* Hero — split layout */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-32 lg:py-0 bg-[#FAF7F2]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3"
            >
              The Luxury of Peace
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1208] leading-tight mb-5"
            >
              Yoga Retreat in<br />Rishikesh, India
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              Surrounded by the mesmeric beauty of meditative mountains, brilliant skies and mystic atmosphere,
              Shaantam offers the opportunity for physical, spiritual, and mental rejuvenation through yoga
              and meditation.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ backgroundColor: "#b38e45" }}
                className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Check Timings
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#1E1208", color: "white" }}
                className="border border-[#1E1208]/30 text-[#1E1208] px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium"
              >
                View Gallery →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative h-64 lg:h-auto"
        >
          <img src={HERO_PERSON} alt="Yoga at Shaantam" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#FAF7F2]/10" />
        </motion.div>
      </section>

      {/* About Yoga */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-4">Yoga</p>
            <div className="w-10 h-px bg-[#CCA665] mb-6" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              Yoga is not a simple fitness process. Yoga, derived from the Sanskrit word "yuj" which means
              "to unite or integrate" — is a 5000 year old Indian form of knowledge. Yoga is about harmony
              of mind and body, use of various breathing techniques to attain calmness, yoga postures (asanas)
              and reflection.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              The Yoga and Meditation session at Rishikesh offers a holistic health system that blends the
              ancient teachings with contemporary perspectives in mind-body treatment. Learning the nuances
              of Yoga in this ancient land of yogis will offer you inner peace, balance and vitality.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              At Shaantam, trained yoga gurus guide and teach you Yoga. Our Yoga program is for everyone
              and works primarily with the inherent energy of the body — teaching strength and stamina,
              flexibility and balance, concentration and meditation.
            </p>
            <motion.button
              whileHover={{ backgroundColor: "#b38e45" }}
              className="bg-transparent border border-[#1E1208]/30 text-[#1E1208] px-7 py-2.5 text-xs tracking-[0.2em] uppercase font-medium"
            >
              Explore Our Philosophy
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Yoga Sessions */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208]">Yoga Sessions</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
              We offer learning the art of Yoga and its deep Philosophy as well as traditional yoga.
              The classes are customized as per individual requirement — Beginner to Advanced Sessions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {sessions.map((s, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
                className="bg-white border border-[#E8E4DC] p-8"
              >
                <div className="w-10 h-10 rounded-full border border-[#CCA665]/30 flex items-center justify-center mb-5">
                  <s.icon size={16} className="text-[#CCA665]" />
                </div>
                <h3 className="font-serif text-xl text-[#1E1208] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-block bg-[#CCA665]/10 text-[#CCA665] text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208]">The Daily Rhythm</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="border border-[#E8E4DC] divide-y divide-[#E8E4DC]"
          >
            <div className="grid grid-cols-3 bg-[#FAF7F2] px-6 py-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Time</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Activity</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 text-right">Duration</span>
            </div>
            {schedule.map((row, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="grid grid-cols-3 px-6 py-4"
              >
                <span className="text-[#CCA665] text-sm font-medium">{row.time}</span>
                <span className="text-[#1E1208] text-sm">{row.activity}</span>
                <span className="text-gray-400 text-sm text-right">{row.duration}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] mb-3">Yoga gallery</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Set in the foothills of Himalayas, encircled by lush green forests and mountain ranges, our
              Yoga retreat center exudes healing powers of Mother Nature and complete tranquility.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {GALLERY_IMGS.map((img, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img src={img} alt={`Yoga space ${i + 1}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Spaces strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {spaces.map((s, i) => (
              <div key={i} className="bg-[#1E1208] flex flex-col items-center justify-center py-8 gap-2">
                <span className="font-serif text-2xl text-[#CCA665]/40">{s.abbr}</span>
                <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form */}
      <section className="bg-[#1E1208] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Let's connect</h2>
            <div className="space-y-3">
              <div>
                <p className="text-[#CCA665] text-xs tracking-widest uppercase mb-1">Phone</p>
                <p className="text-white text-sm">+91 98111 20044</p>
              </div>
              <div>
                <p className="text-[#CCA665] text-xs tracking-widest uppercase mb-1">Email</p>
                <p className="text-white text-sm">connect@aurevahotels.com</p>
              </div>
              <div>
                <p className="text-[#CCA665] text-xs tracking-widest uppercase mb-1">Address</p>
                <p className="text-white text-sm">Neelkanth Temple Road, Rishikesh, Uttarakhand</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-white mb-6">We'd love to hear from you</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Your Name" className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm w-full focus:outline-none focus:border-[#CCA665]" />
                <input placeholder="Email" className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm w-full focus:outline-none focus:border-[#CCA665]" />
              </div>
              <textarea placeholder="Your Message" rows={4} className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm w-full focus:outline-none focus:border-[#CCA665] resize-none" />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="accent-[#CCA665]" />
                <label htmlFor="terms" className="text-white/40 text-xs">I accept the Terms and conditions</label>
              </div>
              <motion.button
                whileHover={{ backgroundColor: "#b38e45" }}
                className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Send
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
