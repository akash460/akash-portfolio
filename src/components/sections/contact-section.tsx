"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
          honeypot: "",
        });
        setTimeout(() => {
          setStatus("idle");
        }, 8000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email directly at akashagrahari460@gmail.com");
    }
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
          Let&apos;s build something <span className="text-emerald-400">together.</span>
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
              Have a project in mind or looking for a reliable developer? Drop me a message and I&apos;ll get back to you within 24 hours with a clear scope and proposal.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-emerald-400/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
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
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-500 hover:text-white hover:border-white/[0.12] transition-colors"
                aria-label="LinkedIn"
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
            {/* Honeypot for spam protection */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400/50 transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400/50 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400/50 transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-zinc-300 focus:outline-none focus:border-emerald-400/50 transition-colors disabled:opacity-50"
                >
                  <option value="">Select a budget range (Optional)</option>
                  <option value="< $500">&lt; $500</option>
                  <option value="$500 – $1,000">$500 – $1,000</option>
                  <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                  <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-zinc-300 focus:outline-none focus:border-emerald-400/50 transition-colors disabled:opacity-50"
              >
                <option value="">Select a service (Optional)</option>
                <option value="WordPress Development">WordPress Development</option>
                <option value="Custom WordPress Plugin">Custom WordPress Plugin</option>
                <option value="WooCommerce Store">WooCommerce Store</option>
                <option value="n8n & Skyvern Automation">n8n &amp; Skyvern Automation</option>
                <option value="Next.js / React Application">Next.js / React Application</option>
                <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                <option value="Other">Other Custom Web Solution</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider block mb-2">
                Message *
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Tell me about your project goals, scope, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400/50 transition-colors resize-none disabled:opacity-50"
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Message sent successfully!</div>
                    <div className="text-emerald-300/80 mt-0.5">
                      Thank you! Your inquiry has been delivered directly to akashagrahari460@gmail.com. I will reply within 24 hours.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending message...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent successfully
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send message
                  </>
                )}
              </button>

              <span className="text-xs text-zinc-500 font-mono">
                Direct to: akashagrahari460@gmail.com
              </span>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
