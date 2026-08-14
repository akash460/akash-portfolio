"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-black">
      <div className="section-line" />
      <div className="max-w-6xl mx-auto px-6 pt-24 lg:pt-32">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-16"
        >
          Where I've <span className="text-emerald-400">worked.</span>
        </motion.h2>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="py-10 border-t border-white/[0.06] group"
            >
              <div className="grid md:grid-cols-12 gap-6">
                {/* Left meta */}
                <div className="md:col-span-4">
                  <span className="text-xs text-zinc-600 font-mono block mb-1">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    {exp.company} · {exp.location}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/5">
                    {exp.type}
                  </span>
                </div>

                {/* Right content */}
                <div className="md:col-span-8">
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0 mt-2" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-[10px] font-medium text-zinc-500 border border-white/[0.06]"
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
