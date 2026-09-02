import Image from "next/image";
import { assetUrl } from "@/lib/asset-url";

type CardImageHeaderProps = {
  src: string;
  alt: string;
  overlay?: "gold" | "blue" | "light";
  className?: string;
};

/** Default image band for info cards — tall enough for readable crop on desktop grids. */
export default function CardImageHeader({
  src,
  alt,
  className = "aspect-[5/4] min-h-[260px]",
}: CardImageHeaderProps) {
  return (
    <div className={`relative w-full flex-shrink-0 overflow-hidden ${className}`}>
      <Image
        src={assetUrl(src)}
        alt={alt}
        fill
        loading="lazy"
        quality={100}
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 960px"
      />
    </div>
  );
}
