import Image from "next/image";
import { assetUrl } from "@/lib/asset-url";

type PageHeroProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function PageHero({
  src,
  alt,
  children,
  className = "py-28 md:py-40",
  imageClassName = "object-cover object-center",
  priority = true,
}: PageHeroProps) {
  return (
    <section className={`relative text-white overflow-hidden bg-[#0d1b35] ${className}`}>
      {/* image constrained to max-w-7xl, centered */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <Image
          src={assetUrl(src)}
          alt={alt}
          fill
          priority={priority}
          quality={80}
          sizes="100vw"
          className={imageClassName}
        />
        {/* gradient: transparent at center, darkens toward both edges */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0d1b35 0%, transparent 50%, #0d1b35 100%)" }} />
        {/* extra left overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,27,53,0.65) 0%, transparent 55%)" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
