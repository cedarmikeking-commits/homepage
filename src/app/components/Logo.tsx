import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LogoProps {
  /** Kept for API compatibility; the supplied logo image always includes the tagline. */
  showTagline?: boolean;
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <ImageWithFallback
      src="/images/logo.webp"
      alt="SZAA — International Alliance for the Mutual Recognition of TVET Learning Outcomes"
      className={`h-14 w-auto object-contain md:h-16 ${className}`}
    />
  );
}
