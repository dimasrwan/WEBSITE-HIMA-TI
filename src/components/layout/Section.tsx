import { forwardRef, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = "", ...props }, ref) => {
    // Memberikan vertical spacing (breathing room) yang konsisten 
    // tanpa memberikan background, border, atau komposisi kaku secara default.
    return (
      <section ref={ref} className={`py-16 md:py-24 lg:py-32 w-full ${className}`} {...props}>
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
