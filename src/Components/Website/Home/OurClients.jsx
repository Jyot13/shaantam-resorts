"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Apollo Tyres", abbr: "Apollo", color: "#1A5BA6" },
  { name: "American Express", abbr: "AmEx", color: "#016FD0" },
  { name: "UltraTech Cement", abbr: "UltraTech", color: "#E05A00" },
  { name: "Mahindra", abbr: "Mahindra", color: "#C01A27" },
  { name: "Kotak Bank", abbr: "Kotak", color: "#ED1C24" },
  { name: "TEHRI", abbr: "TEHRI", color: "#2B7A4B" },
  { name: "Synergy Group", abbr: "Synergy", color: "#003366" },
  { name: "MakeMyTrip", abbr: "MMT", color: "#D4375B" },
  { name: "A.G. Industries", abbr: "A.G. Ind.", color: "#444444" },
  { name: "Embassy of Indonesia", abbr: "Indonesia", color: "#CE1126" },
  { name: "BBC London", abbr: "BBC", color: "#CC0000" },
  { name: "Manmeet Kumar", abbr: "Manmeet", color: "#7B4F2E" },
];

export default function OurClients() {
  return (
    <section className="bg-[#FAF7F2] border-t border-[#E8E4DC] py-16 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Trusted By</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1208]">Our Clients</h2>
          <div className="w-10 h-px bg-[#CCA665] mx-auto mt-4" />
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } }}
              whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E8E4DC] rounded-sm flex flex-col items-center justify-center py-5 px-3 gap-2.5 cursor-default"
            >
              {/* Placeholder logo block */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${client.color}15` }}
              >
                <span
                  className="text-xs font-bold leading-none text-center"
                  style={{ color: client.color }}
                >
                  {client.abbr.split(" ")[0].slice(0, 3).toUpperCase()}
                </span>
              </div>
              <p className="text-[10px] text-[#1E1208]/60 tracking-wide text-center leading-tight">{client.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          Corporate retreats · Team off-sites · Leadership conclaves · MICE events
        </motion.p>
      </div>
    </section>
  );
}
