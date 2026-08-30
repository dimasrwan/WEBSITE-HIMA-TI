"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap-setup";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // 1. Sync Lenis's raf with GSAP's ticker to avoid duplicate RAF loops
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // 2. Synchronize ScrollTrigger when Lenis scrolls
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    return () => {
      gsap.ticker.remove(update);
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
