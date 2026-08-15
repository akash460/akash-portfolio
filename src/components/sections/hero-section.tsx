"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Single soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-12 sm:pt-32 sm:pb-16">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase font-mono">
            Available for freelance & contract · Full-Stack & WordPress Dev
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.3rem,6.2vw,4.8rem)] font-bold text-white leading-[1.08] tracking-tight max-w-5xl"
        >
          Full-Stack & WordPress Developer
          <br />
          crafting <span className="text-emerald-400">high-performance</span>
          <br />
          websites & web applications.
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
        >
          I build bespoke WordPress solutions (custom plugins, WooCommerce, Elementor & Gutenberg) 
          and scalable full-stack web applications with Next.js, React & TypeScript. 
          Currently at Futurecept.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 text-zinc-300 font-medium text-sm hover:border-white/20 hover:text-white transition-all duration-300"
          >
            View work
          </a>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {PERSONAL_INFO.metrics.map((m, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                {m.value}
              </div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
