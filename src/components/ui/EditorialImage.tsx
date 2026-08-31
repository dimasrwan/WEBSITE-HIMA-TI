import Image, { ImageProps } from 'next/image';

export interface EditorialImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  imageClassName?: string;
}

export function EditorialImage({
  src,
  alt,
  className,
  imageClassName,
  ...props
}: EditorialImageProps) {
  return (
    <div className={`relative overflow-hidden group ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        className={`object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out ${imageClassName || ''}`}
        {...props}
      />
    </div>
  );
}
