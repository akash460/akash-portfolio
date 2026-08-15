"use client";

import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left */}
          <div>
            <a href="#hero" className="inline-flex items-center">
              <Logo iconSize="md" />
            </a>
            <p className="text-xs text-zinc-400 mt-2 max-w-sm">
              Full-Stack & WordPress Developer crafting fast, clean, and profitable digital products.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-white hover:border-white/[0.12] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-white hover:border-white/[0.12] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-white hover:border-white/[0.12] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-emerald-400 hover:border-emerald-400/20 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] text-zinc-700">
            © {new Date().getFullYear()} Akash Agrahari. All rights reserved.
          </span>
          <span className="text-[11px] text-zinc-700">
            Designed & built with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
