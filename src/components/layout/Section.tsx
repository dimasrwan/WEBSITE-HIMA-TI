import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className = "", ...props }: SectionProps) {
  // Memberikan vertical spacing (breathing room) yang konsisten 
  // tanpa memberikan background, border, atau komposisi kaku secara default.
  return (
    <section className={`py-16 md:py-24 lg:py-32 w-full ${className}`} {...props}>
      {children}
    </section>
  );
}
