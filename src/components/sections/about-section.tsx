"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-black">
      <div className="section-line" />
      <div className="max-w-6xl mx-auto px-6 pt-24 lg:pt-32">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — editorial paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              A developer who cares about{" "}
              <span className="text-emerald-400">craft, speed,</span>{" "}
              and results.
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p>
                I work across modern JavaScript frameworks — Next.js, React, TypeScript — and the WordPress/WooCommerce ecosystem. That dual fluency lets me pick the right tool for each project instead of forcing everything into one stack.
              </p>
              <p>
                At Futurecept, I've shipped custom e-commerce stores, built bespoke PHP plugins that replaced bloated third-party dependencies, wired up CRM webhooks for real-time lead routing, and architected Firebase-backed Next.js applications from the ground up.
              </p>
              <p>
                Every project ships with <span className="text-white font-medium">98+ PageSpeed scores</span>, clean semantic markup, and zero unnecessary dependencies.
              </p>
            </div>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Current role */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Current Role</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Junior Web Developer</h3>
              <p className="text-sm text-zinc-500 mt-1">Futurecept · Aug 2025 – Present · Remote</p>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Education</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Master of Computer Application</h3>
              <p className="text-sm text-zinc-500 mt-1">Chandigarh University · 2022 – 2024</p>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Certified</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ReactJS & NodeJS — Infosys Springboard</h3>
              <p className="text-sm text-zinc-500 mt-1">Issued Nov 2022</p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Location</span>
              </div>
              <h3 className="text-lg font-semibold text-white">India — Available Worldwide</h3>
              <p className="text-sm text-zinc-500 mt-1">Mohali, Punjab · Prayagraj, UP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
