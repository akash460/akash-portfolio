"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function WhatsAppFloat() {
  const whatsappNumber = (PERSONAL_INFO.whatsapp || "919580836060").replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hi Akash, I came across your portfolio and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-4 sm:bottom-6 right-3.5 sm:right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <div className="mr-3 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1410]/95 border border-emerald-500/30 backdrop-blur-md text-xs text-white shadow-xl shadow-black/50 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
        </span>
        <span className="font-medium text-emerald-300">Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.526.075-.802.376s-1.054 1.03-1.054 2.51 1.08 2.91 1.23 3.111c.15.2 2.125 3.245 5.15 4.55 .72.31 1.282.495 1.72.634.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.023 6.49 2.023 12.012c0 1.94.557 3.75 1.523 5.28L2 22l4.858-1.503c1.472.88 3.187 1.387 5.016 1.387 5.524 0 10.017-4.49 10.017-10.012C21.891 6.49 17.564 2 12.04 2zm0 18.3c-1.61 0-3.11-.47-4.38-1.29l-.31-.2-2.88.89.91-2.8-.2-.33c-.92-1.33-1.41-2.91-1.41-4.56 0-4.58 3.73-8.31 8.31-8.31 4.58 0 8.31 3.73 8.31 8.31 0 4.58-3.73 8.31-8.31 8.31z" />
        </svg>
      </a>
    </motion.div>
  );
}
