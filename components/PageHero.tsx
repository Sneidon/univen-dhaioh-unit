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
    <section className={`relative text-white overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={assetUrl(src)}
          alt={alt}
          fill
          priority={priority}
          quality={80}
          sizes="100vw"
          className={imageClassName}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b35]/88 via-[#0d1b35]/52 to-[#0d1b35]/18" />
      <div className="relative max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
