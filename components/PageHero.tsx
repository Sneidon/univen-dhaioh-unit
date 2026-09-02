import Image from "next/image";
import { assetUrl } from "@/lib/asset-url";

type PageHeroProps = {
  /** Photo banner; when omitted, falls back to navy gradient only. */
  src?: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

/**
 * Tall photo banner with side vignettes for title legibility —
 * matches the earlier long banner treatment.
 */
export default function PageHero({
  src,
  alt = "",
  children,
  className = "py-28 md:py-40",
  imageClassName = "object-cover object-center",
  priority = true,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-[#0d1b35] text-white ${className}`}>
      {src ? (
        <div className="absolute inset-y-0 left-1/2 w-full max-w-7xl -translate-x-1/2">
          <Image
            src={assetUrl(src)}
            alt={alt}
            fill
            priority={priority}
            quality={90}
            sizes="100vw"
            className={imageClassName}
          />
          {/* Edge fade into navy */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0d1b35 0%, transparent 45%, #0d1b35 100%)",
            }}
          />
          {/* Left overlay for title readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(13,27,53,0.72) 0%, rgba(13,27,53,0.35) 40%, transparent 70%)",
            }}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0d1b35 0%, #164076 55%, #0d1b35 100%)",
          }}
        />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  );
}
