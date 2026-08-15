"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Skills & Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-8 sm:mb-10"
        >
          Tech I <span className="text-emerald-400">use daily.</span>
        </motion.h2>

        <div className="space-y-7 sm:space-y-8">
          {SKILL_CATEGORIES.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: catIndex * 0.06 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-emerald-400 font-mono text-xs">
                  {String(catIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-zinc-300">
                  {cat.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                      skill.isPrimary
                        ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/25 hover:bg-emerald-400/20"
                        : "bg-[#0a0a0a] text-zinc-400 border border-white/[0.06] hover:border-white/[0.12] hover:text-zinc-200"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
