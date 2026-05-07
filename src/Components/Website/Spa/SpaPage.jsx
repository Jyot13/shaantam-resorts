"use client";

import { motion } from "framer-motion";
import { Leaf, HandMetal } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const SPA_IMG =
  "https://images.unsplash.com/photo-1761470575018-135c213340eb?auto=format&fit=crop&w=1200&q=80";
const HIMALAYA_IMG =
  "https://images.unsplash.com/photo-1637846959991-18e54d6e2035?auto=format&fit=crop&w=1200&q=80";

const stats = [
  { value: "12+", label: "Healing Rituals" },
  { value: "5",   label: "Private Suites" },
];

// Single shared image for the massage group card
const MASSAGE_IMG =
  "https://images.unsplash.com/photo-1537128535997-13b690849da9?auto=format&fit=crop&w=1200&q=80";

const massages = [
  { name: "Abhyangam",         duration: "60 MINS", desc: "Full body Ayurvedic oil massage — nourishes, relieves fatigue, and promotes longevity." },
  { name: "Udvarthanam",       duration: "45 MINS", desc: "Herbal powder massage that aids in weight loss and improves skin texture." },
  { name: "Bandal Massage",    duration: "60 MINS", desc: "Deep tissue techniques targeting chronic muscle tension and knots." },
  { name: "Stone Massage",     duration: "90 MINS", desc: "Heated stones on key energy points to melt stress and induce deep relaxation." },
  { name: "Uzichil",           duration: "75 MINS", desc: "Traditional Kalari massage for physical flexibility and internal organ health." },
  { name: "Kativasti",         duration: "30 MINS", desc: "Warm medicated oil therapy specifically for lower back pain relief." },
  { name: "Head Neck Shoulder",duration: "40 MINS", desc: "Focused upper body relief — ideal for tension from modern digital lifestyles." },
  { name: "Swedish Massage",   duration: "60 MINS", desc: "Classic long gliding strokes to ease muscle tension and induce calm." },
];

const specialties = [
  {
    name: "Basil Sea Salt",
    duration: "45 MINS",
    img: "https://images.unsplash.com/photo-1767953829433-1e405b6889de?auto=format&fit=crop&w=800&q=80",
    desc: "An invigorating exfoliation using basil and sea salt to deeply refresh skin and mind.",
  },
  {
    name: "Aromatherapy",
    duration: "60 MINS",
    img: "https://images.unsplash.com/photo-1621554012188-c3f2280703c3?auto=format&fit=crop&w=800&q=80",
    desc: "Pure essential oils curated to promote psychological balance and physical well-being.",
  },
  {
    name: "Skin Care Treatment",
    duration: "VARIES",
    img: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?auto=format&fit=crop&w=800&q=80",
    desc: "Customised facials and treatments to nourish your skin and restore a natural, healthy glow.",
  },
];

const himalayanFeatures = [
  {
    icon: Leaf,
    title: "Organic Essence",
    desc: "Hand-picked mountain herbs and cold-pressed organic oils.",
  },
  {
    icon: HandMetal,
    title: "Expert Hands",
    desc: "Certified therapists specialised in ancient Vedic massage techniques.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
};

export default function SpaPage() {
  return (
    <main className="min-h-screen bg-white">
      <TransparentNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
            className="w-full lg:w-[52%]"
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] mb-6 uppercase"
            >
              A Luxury Spa Resort<br />in the Himalayas.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg"
            >
              Reconnect and uncover the real meaning of pampering, indulgence and rejuvenation with our
              relaxing spa treatments. Inspired by the ancient ethics of Ayurveda and modern beauty needs,
              the Shaantam Spa in Rishikesh offers you matchless pampering — to rejuvenate, unwind and
              renew yourself.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="flex items-center divide-x divide-[#E0DBD3]"
            >
              {stats.map((s, i) => (
                <div key={i} className={i === 0 ? "pr-10" : "pl-10"}>
                  <p className="font-serif text-3xl text-[#1a1a1a] mb-0.5">{s.value}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="w-full lg:w-[48%] h-72 sm:h-90 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={SPA_IMG} alt="Spa at Shaantam Resorts" className="object-cover w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* ── About the Spa ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl text-[#1a1a1a] mb-3">Spa</h2>
          <div className="w-10 h-0.5 bg-[#CCA665] mb-7" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          className="space-y-5 max-w-4xl"
        >
          {[
            "Our rejuvenating spa resort in Rishikesh is located close to nature, away from the hustle and bustle of the town. Come and enjoy our luxury spa treatments using exotic oils, natural herbs and ancient Ayurvedic knowledge. A few days spent at our spa resort will have a calming effect on you and restore and relax your body from maladies related to stress and tension. Our special body treatments and spa massages help in maintaining a healthy radiance, tone muscles, strengthen the system, and de-stress the body. This Luxury Spa Resort offers you various soothing therapies and personalised programmes under the expert guidance of skilled therapists.",
            "Situated in the calming environs of the Himalayas, Shaantam strives to achieve the perfect harmony of mind, body and spirit. With focus on the traditional Indian sciences of Ayurveda, Yoga and Meditation, Shaantam creates a skilful balance between ancient Indian therapies and modern spa technology. You can enjoy various personalized programmes to de-stress, detoxify and feel rejuvenated.",
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp} className="text-sm text-gray-600 leading-relaxed">
              {para}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* ── Spa Menu ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FDFAF5] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Healing Rituals</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1a1a]">Our Curated Spa Menu</h2>
          </motion.div>

          {/* ── Massage group card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EDE9E0] flex flex-col lg:flex-row mb-6"
          >
            {/* Left image */}
            <div className="w-full lg:w-[38%] h-64 lg:h-auto min-h-80 relative overflow-hidden shrink-0">
              <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img src={MASSAGE_IMG} alt="Massage Therapies" className="object-cover w-full h-full" />
              </motion.div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/10" />
              {/* Floating label */}
              <div className="absolute top-5 left-5">
                <span className="bg-[#CCA665] text-white text-[10px] px-3 py-1.5 tracking-[0.15em] uppercase">
                  Massage Therapies
                </span>
              </div>
            </div>

            {/* Right treatment list */}
            <div className="flex-1 p-7 lg:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] mb-2">Our Massages</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-lg">
                Each massage is adapted to your body's needs — from Ayurvedic oil rituals rooted in
                ancient science to targeted muscle relief and deep relaxation therapies.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0"
              >
                {massages.map((m, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start justify-between gap-4 py-4 border-b border-[#F0ECE4] last:border-0"
                  >
                    <div className="min-w-0">
                      <h4 className="font-serif text-[#1a1a1a] text-base mb-1">{m.name}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                    <span className="text-[10px] tracking-[0.16em] text-[#CCA665] uppercase font-medium shrink-0 mt-0.5">
                      {m.duration}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── Specialty treatment cards ───────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {specialties.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.28 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#EDE9E0] cursor-pointer group"
              >
                <div className="relative h-52 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <img src={t.img} alt={t.name} className="object-cover w-full h-full" />
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl text-[#1a1a1a]">{t.name}</h3>
                    <span className="text-[10px] tracking-[0.16em] text-[#CCA665] uppercase shrink-0 font-medium">
                      {t.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── The Himalayan Touch ───────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-[44%] h-72 sm:h-90 rounded-2xl overflow-hidden shadow-xl shrink-0"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img src={HIMALAYA_IMG} alt="The Himalayan Touch" className="object-cover w-full h-full" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
            className="w-full lg:w-[56%]"
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6"
            >
              The Himalayan Touch
            </motion.h2>

            <motion.p variants={fadeUp} className="text-sm sm:text-base text-gray-500 leading-relaxed mb-10">
              Our practitioners are masters of ancient Himalayan healing arts, bringing generations of
              knowledge to every session. We source our herbs and oils from local organic gardens,
              ensuring that the essence of Rishikesh is infused into every ritual.
            </motion.p>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {himalayanFeatures.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#CCA665]/30 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#CCA665]" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Booking CTA ───────────────────────────────────────── */}
      <section className="bg-[#1E1208] py-20 px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-4">Book a Treatment</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">
            Reserve Your Spa Experience
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Contact our spa concierge to schedule a treatment or enquire about our wellness
            packages and private suite availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/contact">
              <motion.button
                whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="bg-[#CCA665] text-white px-9 py-3.5 text-xs tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
              >
                Book a Treatment
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
