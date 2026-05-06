"use client";

import { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionHeader from "@/Components/Global/Heading";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Beautiful escape and delicious food — awesome family experience.",
    name: "Phoenix Phonebook",
  },
  {
    text: "SPA experience was up to the mark. Room sizes are humongous and well maintained.",
    name: "Pankuj Dudeja",
  },
  {
    text: "The location is perfect — close enough to the city, yet peaceful enough to enjoy the nature surrounding. The staff went above and beyond to ensure every guest felt comfortable and cared for.",
    name: "Pankaj Pal",
  },
  {
    text: "The food in the restaurant and room service is amazing. Very delicious and authentic. I would highly recommend visiting the resort's restaurant.",
    name: "Mohit Garg",
  },
  {
    text: "Location is far from the city crowd, but as the word describes Shaantam — you get the peace you look for in the mountains. Rooms are spacious, food is good, and hospitality is at its best.",
    name: "Vijendra Pathak",
  },
  {
    text: "We loved our stay! The staff were incredibly friendly and accommodating. The room was spacious, stylish, and clean. Truly a 5-star experience.",
    name: "Sahil Morwal",
  },
  {
    text: "Beautiful resort and restaurant. Best service. All staff very excellent and the food was wonderful.",
    name: "Paramjeet Choudhary",
  },
  {
    text: "G.M. Mr. Anand Guptaji and hotel staff are very cooperative. Nice stay — location and ambience are very good.",
    name: "Vipul Gaur",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const getVisibleItems = () => {
    const prevIndex = active === 0 ? testimonials.length - 1 : active - 1;
    const nextIndex = active === testimonials.length - 1 ? 0 : active + 1;
    return [
      { index: prevIndex, position: "prev" },
      { index: active, position: "active" },
      { index: nextIndex, position: "next" },
    ];
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <SectionHeader
          eyebrow="Guest Stories"
          title="What Our Guests Say"
          subtitle="Real experiences from those who found peace at Shaantam"
        />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-center min-h-96 w-full">
          <div className="relative flex justify-center items-center w-full">
            {getVisibleItems().map((item) => {
              const testimonial = testimonials[item.index];
              const isActive = item.position === "active";
              const isPrev = item.position === "prev";
              const isNext = item.position === "next";

              return (
                <div
                  key={item.index}
                  className={`
                    absolute transition-all duration-500 ease-in-out rounded-2xl p-7 md:p-10 shadow-xl
                    ${isActive
                      ? "w-[90%] sm:w-[440px] md:w-[520px] bg-[#271900] text-white z-30 opacity-100 scale-100"
                      : "w-[80%] sm:w-[340px] md:w-[380px] bg-white text-gray-400 z-20 opacity-40 scale-90 cursor-pointer"
                    }
                  `}
                  style={{
                    transform: isActive
                      ? "translateX(0) scale(1)"
                      : isPrev
                      ? "translateX(calc(-100% - 24px)) scale(0.9)"
                      : "translateX(calc(100% + 24px)) scale(0.9)",
                    filter: isActive ? "blur(0)" : "blur(1.5px)",
                  }}
                  onClick={() => {
                    if (isPrev) prev();
                    else if (isNext) next();
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-5 text-[#CCA665] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <IoStarSharp key={i} size={16} />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className={`text-sm md:text-base leading-relaxed text-center mb-7 ${isActive ? "text-white/85" : ""}`}>
                    "{testimonial.text}"
                  </p>
                  {/* Name */}
                  <div className="text-center">
                    <div className={`w-8 h-px mx-auto mb-3 ${isActive ? "bg-[#CCA665]" : "bg-gray-300"}`} />
                    <h4 className={`font-serif text-base ${isActive ? "text-white" : "text-gray-500"}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs mt-1 ${isActive ? "text-[#CCA665]" : "text-gray-400"}`}>
                      Verified Guest
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          <motion.button
            onClick={prev}
            disabled={isAnimating}
            whileHover={{ backgroundColor: "#CCA665", color: "#fff", borderColor: "#CCA665" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-11 h-11 rounded-full border border-[#CCA665] text-[#CCA665] flex items-center justify-center transition-colors duration-200"
          >
            <FiArrowLeft size={18} />
          </motion.button>
          <motion.button
            onClick={next}
            disabled={isAnimating}
            whileHover={{ backgroundColor: "#b38e45" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-11 h-11 rounded-full bg-[#CCA665] text-white flex items-center justify-center"
          >
            <FiArrowRight size={18} />
          </motion.button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!isAnimating) { setIsAnimating(true); setActive(i); setTimeout(() => setIsAnimating(false), 500); } }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#CCA665]" : "w-1.5 bg-[#CCA665]/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
