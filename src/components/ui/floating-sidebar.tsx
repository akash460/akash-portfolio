"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export function FloatingSidebar() {
  const whatsappNumber = (PERSONAL_INFO.whatsapp || "919580836060").replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hi Akash, I came across your portfolio and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const SOCIAL_LINKS = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: PERSONAL_INFO.linkedin,
      icon: (
        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110" />
      ),
      hoverClass: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40 hover:shadow-[0_0_15px_rgba(10,102,194,0.35)]",
      tooltipColor: "border-[#0A66C2]/40 text-[#0A66C2] shadow-[#0A66C2]/10",
      activeGlow: "bg-[#0A66C2]",
    },
    {
      id: "instagram",
      name: "Instagram",
      href: PERSONAL_INFO.instagram || "https://www.instagram.com/akashagrahari460",
      icon: (
        <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110" />
      ),
      hoverClass: "hover:text-[#E4405F] hover:bg-[#E4405F]/15 hover:border-[#E4405F]/40 hover:shadow-[0_0_15px_rgba(228,64,95,0.35)]",
      tooltipColor: "border-[#E4405F]/40 text-[#E4405F] shadow-[#E4405F]/10",
      activeGlow: "bg-[#E4405F]",
    },
    {
      id: "github",
      name: "GitHub",
      href: PERSONAL_INFO.github,
      icon: (
        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110" />
      ),
      hoverClass: "hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      tooltipColor: "border-white/30 text-white shadow-white/5",
      activeGlow: "bg-white",
    },
    {
      id: "email",
      name: "Email Me",
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:scale-110" />
      ),
      hoverClass: "hover:text-emerald-400 hover:bg-emerald-400/15 hover:border-emerald-400/40 hover:shadow-[0_0_15px_rgba(74,222,128,0.35)]",
      tooltipColor: "border-emerald-500/40 text-emerald-400 shadow-emerald-500/10",
      activeGlow: "bg-emerald-400",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: whatsappUrl,
      icon: (
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-200 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.526.075-.802.376s-1.054 1.03-1.054 2.51 1.08 2.91 1.23 3.111c.15.2 2.125 3.245 5.15 4.55 .72.31 1.282.495 1.72.634.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.023 6.49 2.023 12.012c0 1.94.557 3.75 1.523 5.28L2 22l4.858-1.503c1.472.88 3.187 1.387 5.016 1.387 5.524 0 10.017-4.49 10.017-10.012C21.891 6.49 17.564 2 12.04 2zm0 18.3c-1.61 0-3.11-.47-4.38-1.29l-.31-.2-2.88.89.91-2.8-.2-.33c-.92-1.33-1.41-2.91-1.41-4.56 0-4.58 3.73-8.31 8.31-8.31 4.58 0 8.31 3.73 8.31 8.31 0 4.58-3.73 8.31-8.31 8.31z" />
        </svg>
      ),
      hoverClass: "hover:text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366]/40 hover:shadow-[0_0_15px_rgba(37,211,102,0.35)]",
      tooltipColor: "border-[#25D366]/40 text-[#25D366] shadow-[#25D366]/10",
      activeGlow: "bg-[#25D366]",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      className="left-1.5 sm:left-3 lg:left-5 z-50 flex flex-col pointer-events-auto"
    >
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        aria-label="Social links floating sidebar"
        className="flex flex-col items-center justify-center w-10 sm:w-13 py-2.5 sm:py-3.5 px-1 sm:px-1.5 rounded-2xl bg-[#090909]/95 backdrop-blur-2xl border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.85)] gap-2 sm:gap-2.5"
      >
        {/* Pulsing online bead */}
        <div className="relative flex h-2 w-2 mb-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </div>

        {SOCIAL_LINKS.map((item) => (
          <div key={item.id} className="relative group flex items-center justify-center">
            <a
              href={item.href}
              target={item.id === "email" ? undefined : "_blank"}
              rel={item.id === "email" ? undefined : "noopener noreferrer"}
              aria-label={item.name}
              className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-zinc-400 border border-transparent transition-all duration-300 ${item.hoverClass}`}
            >
              {item.icon}
            </a>

            {/* Floating Tooltip to right */}
            <div
              className={`hidden sm:flex items-center gap-1.5 absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e0e0e] border text-[11px] font-mono tracking-wide whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 pointer-events-none transition-all duration-200 z-50 ${item.tooltipColor}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${item.activeGlow}`} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}

        {/* Subtle bottom indicator */}
        <div className="w-3 sm:w-4 h-0.5 rounded-full bg-white/10 mt-0.5" />
      </motion.aside>
    </div>
  );
}
