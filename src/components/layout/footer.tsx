"use client";

import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
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
            {PERSONAL_INFO.instagram && (
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            <a
              href={`https://wa.me/${(PERSONAL_INFO.whatsapp || "919580836060").replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Akash, I would like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-600 hover:text-[#25D366] hover:border-[#25D366]/30 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.492-.51-.678-.52l-.578-.01c-.2 0-.526.075-.802.376s-1.054 1.03-1.054 2.51 1.08 2.91 1.23 3.111c.15.2 2.125 3.245 5.15 4.55 .72.31 1.282.495 1.72.634.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.023 6.49 2.023 12.012c0 1.94.557 3.75 1.523 5.28L2 22l4.858-1.503c1.472.88 3.187 1.387 5.016 1.387 5.524 0 10.017-4.49 10.017-10.012C21.891 6.49 17.564 2 12.04 2zm0 18.3c-1.61 0-3.11-.47-4.38-1.29l-.31-.2-2.88.89.91-2.8-.2-.33c-.92-1.33-1.41-2.91-1.41-4.56 0-4.58 3.73-8.31 8.31-8.31 4.58 0 8.31 3.73 8.31 8.31 0 4.58-3.73 8.31-8.31 8.31z" />
              </svg>
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
