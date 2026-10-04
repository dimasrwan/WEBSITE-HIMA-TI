"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface PageTransitionContextType {
  navigateTo: (href: string, title?: string) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(PageTransitionContext);

// Route title mapping for optional title overlay on the orange curtain
const ROUTE_TITLES: Record<string, string> = {
  "/": "Beranda",
  "/tentang": "Tentang HIMA-TI",
  "/kepengurusan": "Kepengurusan",
  "/program-kerja": "Program Kerja",
  "/berita": "Warta Berita",
  "/galeri": "Galeri Kegiatan",
  "/kontak": "Hubungi Kami",
};

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const curtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [destinationTitle, setDestinationTitle] = useState("");
  const pendingPathRef = useRef<string | null>(null);

  // Easing specified by requirement: cubic-bezier(.76, 0, .24, 1)
  const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";
  const DURATION = 450; // ms per phase (~450ms in, ~450ms out => < 1000ms total)

  // Clean curtain to initial hidden state
  const resetCurtain = useCallback(() => {
    if (curtainRef.current) {
      curtainRef.current.style.transform = "scaleX(0)";
      curtainRef.current.style.transformOrigin = "left center";
      curtainRef.current.style.visibility = "hidden";
    }
    if (textRef.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateY(16px)";
    }
    isTransitioningRef.current = false;
    setIsTransitioning(false);
    pendingPathRef.current = null;
    setDestinationTitle("");
  }, []);

  // When pathname changes after router.push, animate the curtain OUT to the right
  useEffect(() => {
    if (isTransitioningRef.current && pendingPathRef.current) {
      // Small tick to ensure new page DOM is painted
      const timer = setTimeout(() => {
        if (!curtainRef.current) {
          resetCurtain();
          return;
        }

        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          resetCurtain();
          return;
        }

        // Fade out text first or concurrently
        if (textRef.current) {
          textRef.current.animate(
            [
              { opacity: 1, transform: "translateY(0)" },
              { opacity: 0, transform: "translateY(-12px)" },
            ],
            {
              duration: 200,
              easing: "ease-in",
              fill: "forwards",
            }
          );
        }

        // Wipe curtain OUT to the right: scaleX 1 -> 0 with origin right
        curtainRef.current.style.transformOrigin = "right center";
        const animOut = curtainRef.current.animate(
          [
            { transform: "scaleX(1)" },
            { transform: "scaleX(0)" },
          ],
          {
            duration: DURATION,
            easing: EASING,
            fill: "forwards",
          }
        );

        animOut.onfinish = () => {
          resetCurtain();
        };
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname, resetCurtain]);

  // Handle browser back/forward buttons or unexpected route changes
  useEffect(() => {
    const handlePopState = () => {
      resetCurtain();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [resetCurtain]);

  const navigateTo = useCallback(
    (href: string, title?: string) => {
      // 1. If currently transitioning, ignore click (prevent double-clicking)
      if (isTransitioningRef.current) return;

      // 2. Parse target path (ignore hash-only jumps or same path)
      const targetUrl = new URL(href, window.location.href);
      const targetPath = targetUrl.pathname;
      const currentPath = window.location.pathname;

      // If linking to the exact same pathname (e.g. current page or just an in-page anchor)
      if (targetPath === currentPath && (!targetUrl.hash || targetUrl.hash === window.location.hash)) {
        return;
      }

      // Check prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      // Determine destination title
      const derivedTitle =
        title ||
        ROUTE_TITLES[targetPath] ||
        (targetPath.startsWith("/berita/") ? "Kabar Berita" : "HIMA-TI");

      setDestinationTitle(derivedTitle);
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      pendingPathRef.current = targetPath;

      if (!curtainRef.current) {
        router.push(href);
        return;
      }

      // Prepare curtain for wipe IN from the left
      curtainRef.current.style.visibility = "visible";
      curtainRef.current.style.transformOrigin = "left center";

      const animIn = curtainRef.current.animate(
        [
          { transform: "scaleX(0)" },
          { transform: "scaleX(1)" },
        ],
        {
          duration: DURATION,
          easing: EASING,
          fill: "forwards",
        }
      );

      // Animate destination title in the center of the curtain
      if (textRef.current) {
        textRef.current.animate(
          [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 250,
            delay: 150,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "forwards",
          }
        );
      }

      animIn.onfinish = () => {
        // Navigate to new route after curtain covers the screen fully
        router.push(href);
      };
    },
    [router]
  );

  return (
    <PageTransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      {/* Orange Curtain Overlay */}
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="fixed inset-0 z-[99999] pointer-events-none bg-[#F97316] flex items-center justify-center will-change-transform"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "left center",
          visibility: "hidden",
        }}
      >
        {/* Destination Title Indicator */}
        <div
          ref={textRef}
          className="flex flex-col items-center justify-center text-center px-6 select-none opacity-0"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-bold text-[#0A0A0A]/70 mb-2">
            HIMA-TI FST UINAR
          </span>
          <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-tight font-sans">
            {destinationTitle}
          </span>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}

// TransitionLink Component - Drop-in replacement for next/link with ref forwarding
export interface TransitionLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const TransitionLink = React.forwardRef<
  HTMLAnchorElement,
  TransitionLinkProps
>(function TransitionLink(
  { href, title, className, children, onClick, ...props },
  ref
) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided (e.g. close mobile menu)
    if (onClick) {
      onClick(e);
    }

    // Ignore if default was prevented or special key clicks (Ctrl/Cmd/Shift/Alt for new tab)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    ) {
      return;
    }

    // Ignore external links or protocols like mailto/tel
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    e.preventDefault();
    navigateTo(href, title);
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
});

TransitionLink.displayName = "TransitionLink";

// Default export for backward compatibility
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
