"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { PhoneCall } from "lucide-react";

export function CallFloat() {
  const phoneNumber = (PERSONAL_INFO.phone || "+919580836060").replace(/[^0-9+]/g, "");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="fixed bottom-18 sm:bottom-24 right-3.5 sm:right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <div className="mr-3 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c120f]/95 border border-emerald-500/30 backdrop-blur-md text-xs text-white shadow-xl shadow-black/50 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-medium text-emerald-300">
          Call Now ({PERSONAL_INFO.phone || "+91 9580836060"})
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Akash Agrahari"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-black font-bold shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.55)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 animate-ping pointer-events-none" />

        {/* Phone Icon */}
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-black relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </motion.div>
  );
}
