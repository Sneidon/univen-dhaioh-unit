import Image from "next/image";

/** Soft gray UNIVEN mark across all pages (non-interactive). */
export default function PageWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/logos/univen-watermark.png"
        alt=""
        width={1247}
        height={1361}
        priority={false}
        className="h-[min(72vh,640px)] w-auto max-w-[min(90vw,560px)] object-contain opacity-[0.045] grayscale"
      />
    </div>
  );
}
