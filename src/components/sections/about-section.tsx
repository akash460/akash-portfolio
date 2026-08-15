"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — editorial paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              A <span className="text-emerald-400">Full-Stack & WordPress</span> developer obsessed with speed and results.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p>
                I bridge the gap between modern full-stack web engineering — Next.js, React, TypeScript, PostgreSQL (Neon DB), Supabase, n8n automations — and high-conversion WordPress & WooCommerce development.
              </p>
              <p>
                At Futurecept, I engineer custom WordPress themes, bespoke PHP plugins that eliminate third-party bloat, automated workflow pipelines using n8n and Skyvern AI, and responsive Next.js web applications with scalable database architectures.
              </p>
              <p>
                Every project is crafted with <span className="text-white font-medium">98+ PageSpeed scores</span>, semantic HTML5, pixel-perfect responsive layouts, and zero unnecessary dependencies.
              </p>
            </div>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3.5"
          >
            {/* Current role */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Current Role</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Full-Stack & WordPress Developer</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">Futurecept · Aug 2025 – Present · Remote</p>
            </div>

            {/* Education */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Education</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Master of Computer Application (MCA)</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">Chandigarh University · 2022 – 2024</p>
            </div>

            {/* Certifications */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Certified</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">ReactJS & NodeJS — Infosys Springboard</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">Issued Nov 2022</p>
            </div>

            {/* Location */}
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Location</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Fatehpur, Uttar Pradesh, India</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">Available for Worldwide Remote Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
