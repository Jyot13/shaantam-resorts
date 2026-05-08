"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, ThumbsUp } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/shaantam-resorts/review";

const reviews = [
  {
    avatar: "AK",
    name: "Arjun Kapoor",
    date: "April 2025",
    stars: 5,
    text: "An absolutely divine experience. The infinity pool overlooking the Himalayan valley is something I will never forget. The pure vegetarian food was incredibly delicious and nourishing. Highly recommend!",
    helpful: 14,
  },
  {
    avatar: "SM",
    name: "Sheetal Madan",
    date: "March 2025",
    stars: 5,
    text: "We came as a family with our dog and Shaantam welcomed us with open arms. The pet amenities were thoughtful, rooms were pristine, and the team went above and beyond. A perfect Himalayan retreat.",
    helpful: 22,
  },
  {
    avatar: "RG",
    name: "Ravi Gupta",
    date: "February 2025",
    stars: 4,
    text: "Stayed for a wellness retreat. The spa was exceptional — deeply relaxing Ayurvedic treatments. The ambiance, the mountain air, and the sattvic meals made for a truly transformative stay.",
    helpful: 9,
  },
];

function StarRow({ count, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? "text-[#FBBC04] fill-[#FBBC04]" : "text-gray-300 fill-gray-300"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div>
            <p className="text-[#CCA665] tracking-[0.3em] text-[10px] uppercase mb-3">What Travellers Say</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1208] leading-tight">
              Google Reviews
            </h2>
          </div>

          {/* Google rating summary */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              {/* Google G logo */}
              <div className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase">Google</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-5xl text-[#1E1208] leading-none">4.3</span>
                <div>
                  <StarRow count={4} size={14} />
                  <p className="text-xs text-gray-400 mt-1">1,342 reviews</p>
                </div>
              </div>
              {/* Rating bar distribution */}
              <div className="space-y-0.5 mt-2">
                {[
                  { label: "5", pct: 68 },
                  { label: "4", pct: 18 },
                  { label: "3", pct: 8 },
                  { label: "2", pct: 3 },
                  { label: "1", pct: 3 },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400 w-2">{bar.label}</span>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FBBC04] rounded-full"
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } } }}
              className="bg-[#FAF7F2] border border-[#E8E4DC] rounded-sm p-6"
            >
              {/* Reviewer header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#CCA665] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{r.avatar}</span>
                </div>
                <div>
                  <p className="font-medium text-[#1E1208] text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
                {/* Google icon small */}
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              <StarRow count={r.stars} size={13} />

              <p className="text-[#1E1208]/65 text-sm leading-relaxed mt-3 mb-5">"{r.text}"</p>

              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <ThumbsUp size={11} />
                <span>{r.helpful} found this helpful</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1E1208] text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#CCA665] transition-colors duration-250"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
            </svg>
            Leave a Review
            <ExternalLink size={11} className="opacity-60" />
          </a>
          <a
            href="https://www.google.com/maps/search/shaantam+resorts+rishikesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#1E1208]/50 hover:text-[#CCA665] transition-colors duration-200"
          >
            View All 1,342 Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}
