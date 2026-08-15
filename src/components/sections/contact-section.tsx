"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-10 sm:mb-12"
        >
          Let's build something <span className="text-emerald-400">together.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-sm text-zinc-400 leading-relaxed">
              Have a project in mind or looking for a reliable developer? Drop me a message and I'll get back to you within 24 hours with a clear scope and proposal.
            </p>

            <div className="space-y-5">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-emerald-400/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-emerald-400/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                {PERSONAL_INFO.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <MapPin className="w-4 h-4" />
                </div>
                Fatehpur, UP, India — Remote Worldwide
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-500 hover:text-white hover:border-white/[0.12] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-500 hover:text-white hover:border-white/[0.12] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider block mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-400/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider block mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-400/40 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider block mb-2">Project Type</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-sm text-zinc-400 focus:outline-none focus:border-emerald-400/40 transition-colors appearance-none"
              >
                <option value="">Select a service</option>
                <option>WordPress Development</option>
                <option>Custom WordPress Plugin</option>
                <option>WooCommerce Store</option>
                <option>CRM & API Integration</option>
                <option>Next.js / React Application</option>
                <option>Landing Page Design</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider block mb-2">Budget Range</label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-sm text-zinc-400 focus:outline-none focus:border-emerald-400/40 transition-colors appearance-none"
              >
                <option value="">Select a range</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider block mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-400/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Sent — I'll reply within 24h
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
            </button>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
