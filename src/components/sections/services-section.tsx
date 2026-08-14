"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-black">
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
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-16"
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
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group block py-8 border-t border-white/[0.06] hover:border-emerald-400/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <span className="text-sm text-zinc-600 font-mono tabular-nums mt-1 shrink-0 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-2 max-w-xl leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 md:ml-4">
                  <div className="w-10 h-10 rounded-full border border-emerald-400/40 flex items-center justify-center">
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
