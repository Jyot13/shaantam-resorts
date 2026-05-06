"use client";


import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";
import SectionHeader from "@/Components/Global/Heading";

import location from "@/../public/website/location.png";
import location2 from "@/../public/website/location2.png";
import location3 from "@/../public/website/location3.png";
import location4 from "@/../public/website/location4.png";

const rooms = [
  {
    img: location,
    title: "Deluxe Room",
    location: "Neelkanth Temple Road, Rishikesh",
    guests: 2,
    bedrooms: 1,
    baths: 1,
    rating: 4.9,
    reviews: 214,
    price: "₹8,500",
  },
  {
    img: location2,
    title: "Super Deluxe Room",
    location: "Neelkanth Temple Road, Rishikesh",
    guests: 3,
    bedrooms: 1,
    baths: 1,
    rating: 5.0,
    reviews: 187,
    price: "₹12,000",
  },
  {
    img: location3,
    title: "Valley View Suite",
    location: "Neelkanth Temple Road, Rishikesh",
    guests: 4,
    bedrooms: 2,
    baths: 2,
    rating: 5.0,
    reviews: 143,
    price: "₹18,500",
  },
  {
    img: location4,
    title: "Pool-Facing Cottage",
    location: "Neelkanth Temple Road, Rishikesh",
    guests: 4,
    bedrooms: 2,
    baths: 2,
    rating: 5.0,
    reviews: 98,
    price: "₹24,000",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function VillasSlider() {
  return (
    <section className="bg-[#FDFAF5] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title="Rooms & Cottages"
            subtitle="Thoughtfully designed spaces with valley views and mountain calm"
            align="left"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#CCA665] text-white px-6 py-2.5 text-sm font-medium tracking-wide shrink-0"
        >
          View all rooms
        </motion.button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {rooms.map((room, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.12)" }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <img src={room.img.src} alt={room.title} className="object-cover w-full h-full" />
              </motion.div>
            </div>

            <div className="p-4 space-y-2.5">
              <h3 className="font-serif text-[#1a1a1a] text-base">{room.title}</h3>

              <div className="flex items-center gap-1 text-[#888780] text-xs">
                <MapPin size={12} />
                <span className="truncate">{room.location}</span>
              </div>

              <p className="text-xs text-[#888780] border-t border-[#E8E7E0] pt-2">
                {room.guests} guests · {room.bedrooms} bedroom{room.bedrooms > 1 ? "s" : ""} · {room.baths} bath{room.baths > 1 ? "s" : ""}
              </p>

              <div className="flex items-center gap-1 text-[#CCA665] text-xs">
                {[...Array(5)].map((_, idx) => (
                  <IoStarSharp key={idx} size={11} />
                ))}
                <span className="text-[#888780] ml-1">
                  <span className="text-[#1a1a1a] font-medium">{room.rating}</span> ({room.reviews})
                </span>
              </div>

              <p className="text-[#1a1a1a] font-medium text-sm pt-1">
                {room.price}
                <span className="text-[#888780] font-normal text-xs"> / night</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
