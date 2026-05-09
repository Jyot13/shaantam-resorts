"use client";

import { motion } from "framer-motion";

const team = [
  {
    img: "/website/namastey.jpg",
    role: "Guest Relations",
    name: "Our Host",
    desc: "With a warm Namaste, our front desk team ensures every guest feels at home from the moment they arrive.",
  },
  {
    img: "/website/kitchen.jpg",
    role: "Culinary Team",
    name: "Our Kitchen",
    desc: "Our chef and F&B team craft sattvic menus rooted in Ayurvedic tradition, using fresh produce from Uttarakhand's seasonal harvest.",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="bg-[#1E1208] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
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

        {/* Team — 2 column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.16 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
              className="group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm aspect-square mb-5">
                <img
                  src={member.img}
                  alt={member.role}
                  className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0704]/60 via-transparent to-transparent" />

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#CCA665]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.15 }}
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-[#CCA665] text-[10px] tracking-[0.25em] uppercase mb-1">{member.role}</p>
                <h3 className="font-serif text-white text-xl leading-snug mb-2">{member.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
