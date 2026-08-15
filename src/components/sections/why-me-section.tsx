"use client";

import { motion } from "framer-motion";
import { WHY_ME_FEATURES } from "@/data/portfolio-data";
import { ArrowRight } from "lucide-react";

export function WhyMeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Why Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-10 sm:mb-12"
        >
          Built different, <span className="text-emerald-400">delivers better.</span>
        </motion.h2>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] mb-10 sm:mb-12">
          {WHY_ME_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-[#0a0a0a] p-6 sm:p-7 group hover:bg-[#0e0e0e] transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono block mb-1">
                {feature.stat}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mb-3">
                {feature.statLabel}
              </span>
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400" />
          <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight max-w-lg">
                Ready to build something fast, clean & profitable?
              </h3>
              <p className="text-xs sm:text-sm text-black/70 mt-2 max-w-md">
                Get a free technical consultation and fixed-cost proposal within 24 hours.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-900 transition-colors shrink-0 shadow-lg"
            >
              Start a project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
