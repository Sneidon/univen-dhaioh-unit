import Image from "next/image";
import { assetUrl } from "@/lib/asset-url";

type PageHeroProps = {
  /** When provided with alt, shows optional photo backdrop under the navy gradient. */
  src?: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** Compact institute header (default) vs taller home-style band */
  size?: "default" | "large";
};

export default function PageHero({
  src,
  alt = "",
  children,
  className,
  imageClassName = "object-cover object-center",
  priority = true,
  size = "default",
}: PageHeroProps) {
  const padding =
    className ??
    (size === "large" ? "py-20 md:py-28" : "py-14 md:py-20");

  return (
    <section
      className={`relative overflow-hidden text-white ${padding}`}
      style={{
        background: "linear-gradient(135deg, #0d1b35 0%, #164076 55%, #0d1b35 100%)",
      }}
    >
      {src ? (
        <>
          <Image
            src={assetUrl(src)}
            alt={alt}
            fill
            priority={priority}
            quality={80}
            sizes="100vw"
            className={`${imageClassName} opacity-35`}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,27,53,0.92) 0%, rgba(22,64,118,0.78) 50%, rgba(13,27,53,0.9) 100%)",
            }}
          />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-12">{children}</div>
    </section>
  );
}
