"use client";

import { motion } from "framer-motion";

const team = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    name: "Rajesh Sharma",
    role: "General Manager",
    desc: "15+ years of Himalayan hospitality, bringing warmth and excellence to every guest experience.",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    name: "Priya Nanda",
    role: "Head of Guest Relations",
    desc: "Dedicated to crafting personalised moments that turn visits into lifelong memories.",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    name: "Vikram Singh",
    role: "Executive Chef",
    desc: "Curating sattvic menus rooted in Ayurvedic tradition and Uttarakhand's seasonal harvest.",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    name: "Deepika Rawat",
    role: "Spa & Wellness Lead",
    desc: "A certified Ayurvedic practitioner guiding every healing journey with compassion and expertise.",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="bg-[#1E1208] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">The People Behind The Magic</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Meet Team<br />Shaantam
          </h2>
          <div className="w-12 h-px bg-[#CCA665] mx-auto mt-5" />
        </motion.div>

        {/* Team grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } } }}
              className="group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm aspect-3/4 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0704]/70 via-transparent to-transparent" />

                {/* Gold accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#CCA665]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-[#CCA665] text-[10px] tracking-[0.25em] uppercase mb-1">{member.role}</p>
                <h3 className="font-serif text-white text-lg leading-snug mb-2">{member.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
