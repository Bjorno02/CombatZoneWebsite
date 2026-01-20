import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Placeholder shown while loading */
  placeholder?: "blur" | "skeleton" | "none";
  /** Blur data URL for blur placeholder (base64 or low-res image) */
  blurDataURL?: string;
  /** Aspect ratio for skeleton placeholder (e.g., "16/9", "1/1", "4/3") */
  aspectRatio?: string;
  /** Root margin for intersection observer (default: "200px") */
  rootMargin?: string;
}

/**
 * LazyImage - Image component with lazy loading and placeholder support
 * 
 * Features:
 * - Native lazy loading with IntersectionObserver fallback
 * - Skeleton or blur placeholder while loading
 * - Smooth fade-in transition when loaded
 * - Accessible with required alt text
 */
export function LazyImage({
  src,
  alt,
  placeholder = "skeleton",
  blurDataURL,
  aspectRatio = "16/9",
  rootMargin = "200px",
  className,
  style,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Check if browser supports IntersectionObserver
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(img);
            }
          });
        },
        { rootMargin }
      );

      observer.observe(img);
      return () => observer.disconnect();
    } else {
      // Fallback for older browsers
      setIsInView(true);
    }
  }, [rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio, ...style }}
    >
      {/* Skeleton placeholder */}
      {placeholder === "skeleton" && !isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}

      {/* Blur placeholder */}
      {placeholder === "blur" && blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
        />
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
}

/**
 * Utility to generate a tiny placeholder blur hash
 * For production, consider using plaiceholder or similar
 */
export function generatePlaceholder(color: string = "#e2e8f0"): string {
  return `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect fill="${color}" width="1" height="1"/></svg>`
  )}`;
}
