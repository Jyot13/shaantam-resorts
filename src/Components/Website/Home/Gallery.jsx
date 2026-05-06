"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import SectionHeader from "@/Components/Global/Heading";

import img1 from "@/../public/website/gallery/gallery1.jpg";
import img2 from "@/../public/website/gallery/gallery2.png";
import img3 from "@/../public/website/gallery/gallery3.jpg";
import img4 from "@/../public/website/gallery/gallery4.png";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

export default function GallerySlider() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-[#FAF7F2] py-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          eyebrow="Visual Journey"
          title="Our Gallery"
          subtitle="A glimpse into your perfect Rishikesh escape"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full overflow-hidden mt-2"
      >
        <div className="absolute top-0 left-0 w-full h-16 bg-[#FAF7F2] rounded-b-[100%] z-10" />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-8 sm:px-10 py-14 no-scrollbar snap-x snap-mandatory"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="min-w-56 sm:min-w-72 h-72 sm:h-80 overflow-hidden rounded-xl shrink-0 snap-center relative shadow-md cursor-pointer"
            >
              <img
                src={src.src}
                alt={`gallery-${i}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#FAF7F2] rounded-t-[90%] z-10" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ backgroundColor: "#1a1a1a" }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#271900] text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold mt-2"
      >
        View Gallery
      </motion.button>
    </div>
  );
}
