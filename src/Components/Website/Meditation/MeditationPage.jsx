"use client";

import { motion } from "framer-motion";
import { Moon, Wind, Sparkles } from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const HERO_PERSON = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80";
const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=600&q=80",
];

const offerings = [
  {
    icon: Moon,
    tag: "Morning Ritual",
    title: "Deep Silence",
    desc: "A profound journey into the quiet mind, utilizing ancient techniques to silence external noise and find the still point within.",
  },
  {
    icon: Wind,
    tag: "Mental Clarity",
    title: "Vedic Breathing",
    desc: "Master the vital life force through Pranayama techniques designed to energize the body and calm the nervous system.",
  },
  {
    icon: Sparkles,
    tag: "Life Force",
    title: "Pranayama",
    desc: "Advanced awareness practices for long-term practitioners seeking to integrate meditation into every aspect of daily life.",
  },
];

const schedule = [
  { time: "05:00 AM", activity: "Silent Meditation", location: "Sunrise Hall" },
  { time: "08:00 AM", activity: "Guided Breathwork", location: "Forest Pavilion" },
  { time: "11:00 AM", activity: "Contemplative Walk", location: "Himalayan Trails" },
  { time: "04:00 PM", activity: "Satsang & Wisdom", location: "The Sanctuary" },
  { time: "07:00 PM", activity: "Trataka (Candle Gazing)", location: "Inner Sanctum" },
];

const spaces = [
  { abbr: "SIT", label: "Sanctuary" },
  { abbr: "MTN", label: "Mountain Deck" },
  { abbr: "OAP", label: "Open Air Practice" },
  { abbr: "PAV", label: "Pranayama Pavilion" },
];

export default function MeditationPage() {
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
              Meditation —<br />the path to<br />inner peace
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              Imagine real harmony. Take a break from the hectic daily schedule and indulge in inner peace.
              Everyone needs some time and space to get away from all the frenzied activity of day to day life
              to reconnect and reflect.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ backgroundColor: "#b38e45" }}
                className="bg-[#CCA665] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Book Class
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#1E1208", color: "white" }}
                className="border border-[#1E1208]/30 text-[#1E1208] px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium"
              >
                View Offers →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative h-64 lg:h-auto"
        >
          <img src={HERO_PERSON} alt="Meditation at Shaantam" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#FAF7F2]/10" />
        </motion.div>
      </section>

      {/* About Meditation */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-4">Meditation</p>
            <div className="w-10 h-px bg-[#CCA665] mb-6" />
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              At Shaantam we offer you "Silence". Dive deep and experience lasting calmness, tranquility and
              get immersed in total relaxation. Our Meditation retreat in Rishikesh will bring you all this
              and more. We offer meditation courses for newcomers as well as for people who have already
              experienced the bliss of meditation and want to explore the path in depth.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              Meditation is the highest state of soul. It cannot really be taught — you need to practice and
              master it yourself. All a teacher can do is guide you and help you to learn the process of
              concentration, relaxation and breathing. Our practices take you on a journey of self-discovery.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              In ancient India meditation and yoga were a way of life. Meditation helps you to connect with your
              inner self and recognize your true potential; it makes you completely aware of your surroundings
              and offers an immense sense of peace and tranquility.
            </p>
            <motion.button
              whileHover={{ borderColor: "#CCA665", color: "#CCA665" }}
              className="border border-[#1E1208]/30 text-[#1E1208] px-7 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200"
            >
              Explore Our Philosophy
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sanctuary Sessions */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Our Offerings</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208]">Sanctuary Sessions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {offerings.map((o, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
                className="bg-white border border-[#E8E4DC] p-8"
              >
                <div className="w-10 h-10 rounded-full border border-[#CCA665]/30 flex items-center justify-center mb-5">
                  <o.icon size={16} className="text-[#CCA665]" />
                </div>
                <h3 className="font-serif text-xl text-[#1E1208] mb-2">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{o.desc}</p>
                <span className="inline-block bg-[#CCA665]/10 text-[#CCA665] text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                  {o.tag}
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
            <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">The Schedule</p>
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
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 text-right">Location</span>
            </div>
            {schedule.map((row, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="grid grid-cols-3 px-6 py-4"
              >
                <span className="text-[#CCA665] text-sm font-medium">{row.time}</span>
                <span className="text-[#1E1208] text-sm">{row.activity}</span>
                <span className="text-gray-400 text-sm text-right">{row.location}</span>
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
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1208] mb-3">Meditation gallery</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Come and immerse yourself in an authentic practice and experience of meditation at our meditation
              ashram in Rishikesh. Feel at peace amid the lush green Himalayan foothills.
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
                <img src={img} alt={`Meditation space ${i + 1}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>

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
                <input type="checkbox" id="terms-med" className="accent-[#CCA665]" />
                <label htmlFor="terms-med" className="text-white/40 text-xs">I accept the Terms and conditions</label>
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
