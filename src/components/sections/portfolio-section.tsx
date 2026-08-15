"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/portfolio-data";
import { Project, ProjectCategory } from "@/types/portfolio";
import { ArrowUpRight, Github } from "lucide-react";

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "landing", label: "Landing Pages" },
  { id: "apps", label: "Web Apps" },
];

export function PortfolioSection() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 bg-black relative">
      <div className="section-line mb-12 sm:mb-16" />
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Selected Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-8"
        >
          Projects I&apos;ve <span className="text-emerald-400">shipped.</span>
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                active === f.id
                  ? "bg-emerald-400 text-black shadow-[0_0_15px_rgba(74,222,128,0.25)]"
                  : "bg-transparent border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden hover:border-emerald-400/30 transition-colors duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Optimized Image */}
        <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            {project.metrics && project.metrics[0] && (
              <>
                <span className="text-zinc-700">·</span>
                <span className="text-[11px] text-zinc-500 font-mono">
                  {project.metrics[0].value}
                </span>
              </>
            )}
          </div>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[10px] font-medium text-zinc-400 border border-white/[0.06] bg-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links Footer */}
      <div className="px-6 pb-6 pt-4 border-t border-white/[0.04] flex items-center gap-4">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Live site <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-3 h-3" /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
