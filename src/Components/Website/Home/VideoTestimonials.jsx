"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "f-RXcuuxhzY" },
  { id: "YX_N8OXsPqA" },
  { id: "RljMrUPK4Lk" },
  { id: "eGzO0yW0jDo" },
  { id: "DVXYOPvwOeI" },
  { id: "Ci6HbStksAI" },
];

function ytThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function ytUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function VideoTestimonials() {
  return (
    <section className="bg-[#FAF7F2] py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">Guest Stories</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1208] leading-tight">
            What Our Guests<br />Are Saying
          </h2>
          <div className="w-12 h-px bg-[#CCA665] mx-auto mt-5" />
        </motion.div>

        {/* Video grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {videos.map((v, i) => (
            <motion.a
              key={v.id}
              href={ytUrl(v.id)}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } } }}
              className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer block"
            >
              <img
                src={ytThumb(v.id)}
                alt={`Guest video testimonial ${i + 1}`}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1E1208]/40 group-hover:bg-[#1E1208]/20 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="w-14 h-14 rounded-full bg-white/15 border border-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#CCA665]/90 group-hover:border-[#CCA665] transition-colors duration-300"
                >
                  <Play size={18} className="text-white fill-white ml-0.5" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
