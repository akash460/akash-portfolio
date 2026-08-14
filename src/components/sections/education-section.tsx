"use client";

import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-black">
      <div className="section-line" />
      <div className="max-w-6xl mx-auto px-6 pt-24 lg:pt-32">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Education</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-16"
        >
          Academic <span className="text-emerald-400">background.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.06] bg-[#0a0a0a] group hover:border-emerald-400/20 transition-colors duration-500"
            >
              <span className="text-xs text-zinc-600 font-mono">{edu.period}</span>
              <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-emerald-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-emerald-400/80 mt-1 font-medium">{edu.institution}</p>
              <p className="text-xs text-zinc-600 mt-1">{edu.location}</p>
              {edu.details && (
                <p className="text-xs text-zinc-500 mt-4 leading-relaxed">{edu.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications row */}
        <div className="flex flex-wrap gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/[0.06] bg-[#0a0a0a] hover:border-emerald-400/20 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-zinc-300">{cert.title}</span>
              <span className="text-[10px] text-zinc-600">— {cert.issuer}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
