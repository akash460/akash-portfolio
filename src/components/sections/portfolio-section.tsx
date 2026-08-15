"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { PROJECTS } from "@/data/portfolio-data";
import { Project, ProjectCategory } from "@/types/portfolio";
import {
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  CheckCircle2,
  X,
  MoveHorizontal,
} from "lucide-react";

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "apps", label: "Web Apps" },
  { id: "landing", label: "Landing Pages" },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(2); // 2 on desktop, 1 on mobile
  const isDraggingRef = useRef(false);

  // Filter projects
  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Responsive visible card calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  // Reset index when category changes
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Swipe / Drag handler
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 40;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -300) {
      handleNext();
    } else if (offset > threshold || velocity > 300) {
      handlePrev();
    }

    // Delay drag state release to prevent click triggers
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || isHovered || selectedProject || maxIndex === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, selectedProject, maxIndex, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === "Escape") setSelectedProject(null);
        return;
      }
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, selectedProject]);

  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden select-none"
    >
      <div className="section-line mb-12 sm:mb-16" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-emerald-400" />
              <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl"
            >
              Projects I&apos;ve <span className="text-emerald-400">shipped.</span>
            </motion.h2>
          </div>

          {/* Top-Right Carousel Action Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Slide Index Counter */}
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="text-emerald-400 font-semibold">
                {String(Math.min(currentIndex + 1, filteredProjects.length)).padStart(2, "0")}
              </span>
              <span className="text-zinc-600">/</span>
              <span>{String(filteredProjects.length).padStart(2, "0")}</span>
            </div>

            {/* Autoplay Play/Pause */}
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause carousel autoplay" : "Start carousel autoplay"}
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                isPlaying
                  ? "bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20"
                  : "bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Navigation Arrow Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={filteredProjects.length <= visibleCount}
                aria-label="Previous project slide"
                className="p-2.5 rounded-full border border-white/[0.08] bg-[#0a0a0a] text-zinc-300 hover:text-white hover:border-emerald-400/40 hover:bg-emerald-500/10 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={filteredProjects.length <= visibleCount}
                aria-label="Next project slide"
                className="p-2.5 rounded-full border border-white/[0.08] bg-[#0a0a0a] text-zinc-300 hover:text-white hover:border-emerald-400/40 hover:bg-emerald-500/10 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {FILTERS.map((f) => {
            const count =
              f.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === f.id).length;

            if (count === 0) return null;

            return (
              <button
                key={f.id}
                onClick={() => handleCategoryChange(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === f.id
                    ? "bg-emerald-400 text-black shadow-[0_0_20px_rgba(74,222,128,0.25)] font-semibold"
                    : "bg-[#0a0a0a] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeCategory === f.id
                      ? "bg-black/20 text-black"
                      : "bg-white/[0.06] text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Carousel Viewport with Drag + Slide */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Draggable & Swipable Sliding Track */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => {
              isDraggingRef.current = true;
            }}
            onDragEnd={handleDragEnd}
            className="flex cursor-grab active:cursor-grabbing transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCount)
              }%)`,
            }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="w-full lg:w-1/2 flex-shrink-0 px-2.5 py-2"
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onOpenDetails={() => {
                    if (!isDraggingRef.current) {
                      setSelectedProject(project);
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Bottom Pagination, Drag Tip & Indicators */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
          {/* Progress bar */}
          <div className="w-full sm:w-48 h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400 rounded-full"
              animate={{
                width: `${
                  ((currentIndex + 1) /
                    Math.max(1, filteredProjects.length - (visibleCount - 1))) *
                  100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {Array.from({
              length: Math.max(
                1,
                filteredProjects.length - (visibleCount - 1)
              ),
            }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Jump to project slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? "w-7 bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          {/* Swipe / Drag tip */}
          <span className="text-[11px] text-zinc-500 font-mono inline-flex items-center gap-1.5">
            <MoveHorizontal className="w-3.5 h-3.5 text-emerald-400/80" /> Swipe / Drag to slide or use arrows
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: () => void;
}

function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden hover:border-emerald-400/40 hover:shadow-[0_8px_30px_rgba(74,222,128,0.06)] transition-all duration-500 flex flex-col justify-between h-full">
      <div>
        {/* Optimized Image with overlay */}
        <div
          className="relative h-56 sm:h-60 w-full overflow-hidden bg-zinc-900 cursor-pointer"
          onClick={onOpenDetails}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

          {/* Category Badge overlay */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] text-emerald-400 font-mono tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-3.5 right-3.5 z-10">
              <span className="px-2.5 py-1 rounded-full bg-emerald-400/90 text-black text-[10px] font-bold uppercase tracking-wider shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {project.metrics && project.metrics[0] && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-[11px] text-emerald-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.metrics[0].label}: {project.metrics[0].value}
              </div>
            )}
          </div>

          <h3
            onClick={onOpenDetails}
            className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors duration-300 cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[10px] font-medium text-zinc-400 border border-white/[0.06] bg-black/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[10px] font-mono text-zinc-500 border border-white/[0.04]">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-white/[0.04] flex items-center justify-between gap-3">
        <button
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-3">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Live <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code"
              className="p-1.5 rounded-lg border border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-y-auto shadow-2xl z-10"
      >
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-black/90 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category Pill */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-400 text-black text-xs font-semibold uppercase tracking-wider font-mono">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                Key Highlights & Deliverables
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold text-xs hover:bg-emerald-300 transition-all duration-200"
              >
                Visit live project <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-medium text-xs hover:bg-white/[0.05] transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" /> View repository
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
