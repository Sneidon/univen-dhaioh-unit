"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { getGalleryEvent } from "@/lib/gallery-data";

export default function GalleryEventPage() {
  const params = useParams<{ slug: string }>();
  const event = getGalleryEvent(params.slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!event) {
    notFound();
  }

  const { photos } = event;

  function prev() {
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }

  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length));
  }

  return (
    <>
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={photos[0].src}
            alt={event.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-6"
          >
            <span>←</span>
            <span>Back to Gallery & Media</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-4">
            {event.title}
          </h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">{event.description}</p>
          <p className="text-[#b8962e] text-sm font-bold tracking-widest uppercase mt-6">
            {photos.length} Photos
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setLightbox(i)}
                className="relative overflow-hidden group cursor-zoom-in"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0d1b35]/0 group-hover:bg-[#0d1b35]/50 transition-all duration-300 flex items-end">
                  <p className="text-white text-xs font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light z-10"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white/70 hover:text-white text-4xl font-light z-10 px-4 py-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              width={1200}
              height={900}
              className="object-contain max-h-[80vh] w-full"
            />
            <p className="text-white/60 text-sm text-center mt-4">{photos[lightbox].caption}</p>
            <p className="text-white/30 text-xs text-center mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
          <button
            className="absolute right-4 text-white/70 hover:text-white text-4xl font-light z-10 px-4 py-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
