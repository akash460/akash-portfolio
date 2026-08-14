"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/portfolio-data";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-black">
      <div className="section-line" />
      <div className="max-w-6xl mx-auto px-6 pt-24 lg:pt-32">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Process</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-16"
        >
          How I <span className="text-emerald-400">work.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-[#0a0a0a] p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-emerald-400 font-mono">{step.number}</span>
                  {step.duration && (
                    <span className="text-[10px] text-zinc-600 font-mono">{step.duration}</span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-white mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                  {step.subtitle}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] space-y-1.5">
                {step.deliverables.map((d, i) => (
                  <div key={i} className="text-[11px] text-zinc-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
