import { HTMLAttributes } from "react";

interface EditorialGridProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function EditorialGrid({ children, className = "", ...props }: EditorialGridProps) {
  // Menggunakan class .grid-editorial dari globals.css
  // (grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6)
  // Section child yang akan menentukan komposisi spesifiknya (col-span).
  return (
    <div className={`grid-editorial ${className}`} {...props}>
      {children}
    </div>
  );
}
