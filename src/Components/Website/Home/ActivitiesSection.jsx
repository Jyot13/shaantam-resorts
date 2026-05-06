"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/Components/Global/Heading";
import { TreePine, Waves, Baby, Landmark, Camera, Bird, Dumbbell, Car } from "lucide-react";

const activities = [
  {
    icon: Landmark,
    title: "Neelkanth Temple",
    desc: "A sacred pilgrimage to the revered abode of Lord Shiva — just a short drive on the lush forest road.",
  },
  {
    icon: Waves,
    title: "River Rafting",
    desc: "Experience the thrilling rapids of the sacred Ganges, guided by certified river experts.",
  },
  {
    icon: Baby,
    title: "Kids Play Zone",
    desc: "A dedicated, safe play area where young guests can explore, play, and create lasting memories.",
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    desc: "Stunning Himalayan forest and valley backdrops for your most cherished photographs.",
  },
  {
    icon: TreePine,
    title: "Nature Walks",
    desc: "Guided trails through the Himalayan foothills — spot local flora, fauna, and breathtaking vistas.",
  },
  {
    icon: Bird,
    title: "Birdwatching",
    desc: "Spot Himalayan eagles, kingfishers, and rich avian diversity on guided sunrise sessions.",
  },
  {
    icon: Dumbbell,
    title: "Games Room",
    desc: "Indoor games, board games, and recreational activities for guests of all ages.",
  },
  {
    icon: Car,
    title: "Local Sightseeing",
    desc: "Resort-arranged taxis to Ram Jhula, Haridwar, and Uttarakhand's most iconic landmarks.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function ActivitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionHeader
            eyebrow="Beyond the Room"
            title="Experiences & Activities"
            subtitle="Adventures and memories that stay with you long after checkout."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] rounded-xl p-5 sm:p-6 flex gap-4 items-start border-l-2 border-[#CCA665]/25 hover:border-[#CCA665] transition-colors duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#CCA665]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#CCA665]" />
                </div>
                <div>
                  <h3 className="font-serif text-[#1a1a1a] text-base mb-1">{a.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ backgroundColor: "#271900", color: "#fff", borderColor: "#271900" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
          >
            View All Experiences
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
