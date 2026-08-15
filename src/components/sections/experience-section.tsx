"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-10 sm:mb-12"
        >
          Where I&apos;ve <span className="text-emerald-400">worked.</span>
        </motion.h2>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="py-7 sm:py-8 border-t border-white/[0.06] group hover:border-emerald-400/20 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-12 gap-6">
                {/* Left meta */}
                <div className="md:col-span-4">
                  <span className="text-xs text-zinc-500 font-mono block mb-1">{exp.period}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {exp.company} · {exp.location}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/5">
                    {exp.type}
                  </span>
                </div>

                {/* Right content */}
                <div className="md:col-span-8">
                  <ul className="space-y-2.5 mb-5">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0 mt-1.5" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-[10px] font-medium text-zinc-400 border border-white/[0.06] bg-[#0a0a0a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

      </div>
    </section>
  );
}
