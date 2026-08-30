import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className = "", ...props }: ContainerProps) {
  // Menggunakan class .container-global dari globals.css
  // (w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24)
  return (
    <div className={`container-global ${className}`} {...props}>
      {children}
    </div>
  );
}
