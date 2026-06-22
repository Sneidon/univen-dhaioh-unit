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
  className = "h-44",
}: CardImageHeaderProps) {
  const overlayClass =
    overlay === "gold"
      ? "bg-[#b8962e]/35"
      : overlay === "blue"
      ? "bg-[#164076]/40"
      : "bg-[#164076]/15";

  return (
    <div className={`relative w-full flex-shrink-0 ${className}`}>
      <Image
        src={assetUrl(src)}
        alt={alt}
        fill
        loading="lazy"
        quality={70}
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
}
