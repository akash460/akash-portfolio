import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between px-6 py-8 relative overflow-hidden selection:bg-emerald-400 selection:text-black">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Logo iconSize="sm" />
        </Link>
        <Link
          href="/"
          className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
        >
          <Home className="w-3.5 h-3.5" />
          <span>akashagrahari.vercel.app</span>
        </Link>
      </header>

      {/* Main 404 content */}
      <main className="relative z-10 max-w-xl mx-auto text-center my-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono mb-6">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          <span>Error 404 · Page Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tight mb-4 font-mono">
          4<span className="text-emerald-400">0</span>4
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-3">
          Lost in cyberspace?
        </p>

        <p className="text-sm text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-zinc-300 font-medium text-sm hover:border-white/20 hover:text-white transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full text-center text-xs text-zinc-600 font-mono">
        © {new Date().getFullYear()} Akash Agrahari · All rights reserved.
      </footer>
    </div>
  );
}
