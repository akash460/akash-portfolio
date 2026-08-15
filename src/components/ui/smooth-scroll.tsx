"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Intercept in-page hash links for optimized, high-speed smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();

      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      history.pushState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
