"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  // Register plugins once
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Disable GSAP lag smoothing to sync perfectly with Lenis smooth scrolling
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, useGSAP };
