"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { galleryEvents, galleryVideos } from "@/lib/gallery-data";

type Tab = "all" | "videos" | "photos";

export default function GalleryPage() {
  const [tab, setTab] = useState<Tab>("all");

  const showVideos = tab === "all" || tab === "videos";
  const showPhotos = tab === "all" || tab === "photos";

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "videos", label: "Videos" },
    { key: "photos", label: "Photos" },
  ];

  return (
    <>
      <PageHero src="/banners/hero-gallery.jpg" alt="Mining health research laboratory">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
          Gallery &{" "}
          <span className="text-[#b8962e]">Media</span>
        </h1>

        <div className="flex gap-0 border-b border-white/20">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-6 py-3 text-sm font-bold tracking-wide transition-colors border-b-2 -mb-px ${
                tab === key
                  ? "text-white border-[#b8962e]"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </PageHero>

      {showVideos && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-6 bg-[#b8962e]" />
              <h2 className="text-2xl font-bold text-[#0d1b35]">Videos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {galleryVideos.map((video) => (
                <article key={video.id} className="bg-white border border-gray-200 overflow-hidden">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#d22d20] text-white text-xs px-2 py-0.5 font-bold tracking-wider mb-3">
                      VIDEO
                    </span>
                    <h3 className="font-bold text-[#0d1b35] text-base leading-snug mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showPhotos && (
        <section className={`py-20 ${showVideos ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-6 bg-[#b8962e]" />
              <h2 className="text-2xl font-bold text-[#0d1b35]">Photo Events</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/gallery/${event.slug}`}
                  className="group bg-white border border-gray-200 overflow-hidden hover:border-[#b8962e] transition-colors"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={event.photos[0].src}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#314c7a]/20 group-hover:bg-[#314c7a]/40 transition-colors" />
                    <span className="absolute top-4 left-4 bg-[#d22d20] text-white text-xs px-2 py-1 font-bold tracking-wider">
                      {event.photos.length} PHOTOS
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0d1b35] text-base leading-snug mb-2 group-hover:text-[#b8962e] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#314c7a] text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">Follow Our Journey</h2>
          <p className="text-gray-300 text-sm mb-6">
            Stay connected for the latest field visits, research milestones, and innovation showcases from the DHAIOH Unit. Subscribe to our channel to get notified whenever we share new videos and updates.
          </p>
          <a
            href="https://www.youtube.com/@goldfieldssouthdeep520"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Subscribe to Our Channel
          </a>
        </div>
      </section>
    </>
  );
}
