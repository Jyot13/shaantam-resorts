"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PawPrint,
  Syringe,
  UtensilsCrossed,
  Waves,
  Bell,
  DoorClosed,
  Volume2,
  ShieldAlert,
  Sparkles,
  Baby,
  Leaf,
  Clock,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import TransparentNavbar from "@/Components/Global/TransNav";

const DOG = "https://images.unsplash.com/photo-1608138498965-54fc4f61d3ba?auto=format&fit=crop&w=1200&q=80";

const policies = [
  {
    icon: Bell,
    title: "Pre-Arrival Notification",
    desc: "Please inform us about your pet(s) at the time of booking so we can prepare the room and arrange welcome amenities.",
  },
  {
    icon: Syringe,
    title: "Vaccination Required",
    desc: "All pets must be fully vaccinated. We require proof of current vaccination records upon check-in for the safety of all guests.",
  },
  {
    icon: PawPrint,
    title: "Leash in Public Areas",
    desc: "Pets must be kept on a leash or in a carrier at all times in all public areas including lobbies, corridors, and gardens.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Area Restriction",
    desc: "Pets are not permitted inside any of our dining venues. Room service is available for guests dining with their pets.",
  },
  {
    icon: Waves,
    title: "Pool Area Restriction",
    desc: "For hygiene and safety, pets are not allowed in or around the swimming pool, including the poolside lounging areas.",
  },
  {
    icon: Clock,
    title: "Supervised at All Times",
    desc: "Pets should not be left unattended in guest rooms. Kindly arrange for a companion or contact our concierge for pet-sitting.",
  },
  {
    icon: DoorClosed,
    title: "Designated Rooms Only",
    desc: "Pets are only allowed in pre-assigned pet-friendly rooms. Please do not bring your pet to any other room category.",
  },
  {
    icon: Volume2,
    title: "Noise Consideration",
    desc: "We ask that all guests ensure their pets do not cause excessive noise that may disturb other guests, especially after 10 PM.",
  },
  {
    icon: Leaf,
    title: "Garden & Outdoor Access",
    desc: "Pets are welcome on designated garden walks. Please use the pet-friendly pathways marked on the resort map.",
  },
  {
    icon: Baby,
    title: "Kids' Zone Restriction",
    desc: "Pets are not permitted in the children's play area to ensure the safety and comfort of our youngest guests.",
  },
  {
    icon: Sparkles,
    title: "Keep Rooms Tidy",
    desc: "Please use the provided pet mat and bedding. Kindly ensure fur and pet waste are managed to maintain room hygiene.",
  },
  {
    icon: ShieldAlert,
    title: "Damage Responsibility",
    desc: "Guests are responsible for any damage caused by their pets. Charges may be applied at checkout for any damage to property.",
  },
  {
    icon: CreditCard,
    title: "Nominal Pet Fee",
    desc: "A nominal daily pet fee of ₹500 applies per pet per night. This covers welcome amenities, bedding, and cleaning services.",
  },
  {
    icon: PawPrint,
    title: "Maximum Two Pets",
    desc: "We welcome a maximum of two pets per room. Pets must be of manageable size — typically up to 25 kg per pet.",
  },
];

const faqs = [
  {
    q: "Are pets allowed in all types of rooms?",
    a: "No, pets are only permitted in our designated pet-friendly rooms. These include select Deluxe Rooms and Pool-Facing Cottages. Please mention your pet while booking so we can allocate the right room for you.",
  },
  {
    q: "Is there a pet fee?",
    a: "Yes, a nominal fee of ₹500 per pet per night applies. This covers a welcome treat basket, dedicated pet bedding, extra housekeeping, and a resort pet map.",
  },
  {
    q: "How many pets can I bring?",
    a: "We can accommodate a maximum of two pets per room. Each pet should weigh no more than 25 kg. For larger breeds, please contact our concierge team in advance so we can advise appropriately.",
  },
  {
    q: "Can I leave my pet alone in the room?",
    a: "We recommend that pets are not left unattended in guest rooms. If you need to step out, our concierge can connect you with trusted local pet-sitting services. Please call the front desk for assistance.",
  },
];

function FAQItem({ question, answer, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-[#E8E4DC]">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-[#1a1a1a] font-medium text-sm sm:text-base">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#CCA665]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
};

export default function PetFriendlyPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <TransparentNavbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } } }}
            className="w-full lg:w-1/2 z-10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="flex items-center gap-2 mb-4"
            >
              <PawPrint size={16} className="text-[#CCA665]" />
              <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase">Welcome Home</p>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] } } }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-6"
            >
              14 Friendly Pet Rules<br />
              <span className="text-[#CCA665]">for a Joyful Stay</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              At Shaantam Resorts, your beloved companions are part of the family. We've crafted
              thoughtful guidelines so every guest — two-legged and four — enjoys a peaceful,
              harmonious stay in our Rishikesh sanctuary.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            >
              <a href="#guidelines">
                <motion.button
                  whileHover={{ backgroundColor: "#b38e45", scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  className="bg-[#CCA665] text-white px-8 py-3.5 text-sm tracking-wider font-medium"
                >
                  READ GUIDELINES
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.25 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-80 sm:h-105 lg:h-130 rounded-2xl overflow-hidden shadow-2xl">
              <img src={DOG} alt="Happy dog at Shaantam Resorts" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-[#CCA665]/25 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── Policy Grid ──────────────────────────────────────── */}
      <section id="guidelines" className="py-16 md:py-24 px-6 lg:px-10 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-14"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Our Guidelines</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
              Pet Policy at Shaantam
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              These simple rules help us ensure every guest — and every pet — has a safe,
              comfortable, and memorable experience.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {policies.map((p, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#EDE9E0] flex gap-4 items-start"
              >
                <div className="shrink-0 mt-0.5 w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#CCA665]/30 flex items-center justify-center">
                  <p.icon size={18} className="text-[#CCA665]" />
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm mb-1.5">{p.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Quote Banner ─────────────────────────────────────── */}
      <section className="bg-[#1E1208] py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <PawPrint size={28} className="text-[#CCA665] mx-auto mb-6 opacity-70" />
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-5">A Shared Experience</p>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            "The mountains welcome everyone —<br className="hidden sm:block" />
            including those with wagging tails."
          </blockquote>
          <p className="mt-6 text-white/40 text-sm tracking-wide">— Shaantam Resorts, Rishikesh</p>
        </motion.div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 lg:px-10 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-12"
          >
            <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Got Questions?</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a]">Frequently Asked</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="bg-[#FDFAF5] py-16 px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">Ready to Visit?</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-6">
            Book a Pet-Friendly Room
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Contact our reservations team to check availability for pet-friendly rooms and
            plan the perfect Rishikesh getaway — for the whole family.
          </p>
          <motion.a
            href="/rooms/book"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.button
              whileHover={{ backgroundColor: "#b38e45" }}
              transition={{ duration: 0.22 }}
              className="bg-[#CCA665] text-white px-10 py-3.5 text-sm tracking-wider font-medium"
            >
              BOOK NOW
            </motion.button>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
