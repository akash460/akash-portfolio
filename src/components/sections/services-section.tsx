"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-black relative">
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
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-10 sm:mb-12"
        >
          What I can do for <span className="text-emerald-400">your business.</span>
        </motion.h2>

        {/* Services — numbered list, editorial style */}
        <div className="space-y-0">
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group block py-6 sm:py-7 border-t border-white/[0.06] hover:border-emerald-400/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Number */}
                  <span className="text-xs sm:text-sm text-zinc-500 font-mono tabular-nums mt-1 shrink-0 w-7">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="text-[10px] font-mono text-emerald-400/80 px-2 py-0.5 rounded bg-emerald-400/5 border border-emerald-400/20">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 md:ml-4">
                  <div className="w-9 h-9 rounded-full border border-emerald-400/40 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

      </div>
    </section>
  );
}
