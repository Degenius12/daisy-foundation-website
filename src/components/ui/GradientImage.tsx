import Image from "next/image";

interface GradientImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientOpacity?: number;
  priority?: boolean;
}

export function GradientImage({
  src,
  alt,
  width = 1920,
  height = 1080,
  className = "",
  gradientFrom = "vintage-cream-50",
  gradientTo = "vintage-beige-300",
  gradientOpacity = 0.35,
  priority = false,
}: GradientImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
      />
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}
        style={{ opacity: gradientOpacity }}
      ></div>
    </div>
  );
}
