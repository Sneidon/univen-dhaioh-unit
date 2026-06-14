import Image from "next/image";
import { assetUrl } from "@/lib/asset-url";

type CardImageHeaderProps = {
  src: string;
  alt: string;
  overlay?: "gold" | "blue" | "light";
  className?: string;
};

export default function CardImageHeader({
  src,
  alt,
  overlay = "light",
  className = "h-32",
}: CardImageHeaderProps) {
  const overlayClass =
    overlay === "gold"
      ? "bg-[#b8962e]/35"
      : overlay === "blue"
      ? "bg-[#314c7a]/40"
      : "bg-[#314c7a]/15";

  return (
    <div className={`relative w-full flex-shrink-0 ${className}`}>
      <Image
        src={assetUrl(src)}
        alt={alt}
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
}
