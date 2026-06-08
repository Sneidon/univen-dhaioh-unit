"use client";

import Image from "next/image";
import { useState } from "react";

const videos = [
  {
    id: "4jLevr_hxpo",
    title: "Professor Lindiwe Zungu's Visit to South Deep Gold Mine",
    desc: "A first-hand research visit to South Deep Gold Mine, exploring the frontlines of occupational health in one of the world's deepest gold mines.",
  },
  {
    id: "9agcYsFIDi8",
    title: "11th SAMRC Scientific Merit Awards — Research Capacity Development",
    desc: "Recognising excellence in research and celebrating the DHAIOH Unit's contribution to advancing occupational health science in South Africa.",
  },
];

const photos = [
  { src: "/gallery/mine-1.jpg",  caption: "Underground field visit — South Deep Gold Mine" },
  { src: "/gallery/mine-2.jpg",  caption: "Research team underground at South Deep" },
  { src: "/gallery/mine-3.jpg",  caption: "DHAIOH Unit team — underground tunnel" },
  { src: "/gallery/mine-4.jpg",  caption: "Team engagement during mine visit" },
  { src: "/gallery/mine-5.jpg",  caption: "Researchers at the underground rock face" },
  { src: "/gallery/mine-6.jpg",  caption: "Underground assessment — deep-level mine" },
  { src: "/gallery/mine-7.jpg",  caption: "Research team in the underground shaft" },
  { src: "/gallery/mine-8.jpg",  caption: "Mine visit field observation" },
  { src: "/gallery/mine-9.jpg",  caption: "Collaborative research — South Deep tunnels" },
  { src: "/gallery/mine-10.jpg", caption: "Occupational health field assessment" },
  { src: "/gallery/mine-11.jpg", caption: "Deep-level mine environment" },
  { src: "/gallery/mine-12.jpg", caption: "Worker health observation underground" },
  { src: "/gallery/mine-13.jpg", caption: "Underground operations site visit" },
  { src: "/gallery/mine-14.jpg", caption: "Surface facility walkthrough — mine visit" },
  { src: "/gallery/mine-15.jpg", caption: "Equipment assessment at the mine site" },
  { src: "/gallery/mine-16.jpg", caption: "Research team at the mine surface facility" },
  { src: "/gallery/mine-17.jpg", caption: "Technical briefing — mining equipment" },
];

type Tab = "all" | "videos" | "photos";

export default function GalleryPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }
  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length));
  }

  const showVideos = tab === "all" || tab === "videos";
  const showPhotos = tab === "all" || tab === "photos";

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "videos", label: "Videos" },
    { key: "photos", label: "Photos" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b35] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">
            Media Hub
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Gallery &{" "}
            <span className="text-[#b8962e]">Media</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Videos, presentations, and photographs documenting the DHAIOH Unit&apos;s research, field visits, and impact across the mining sector.
          </p>

          {/* Tabs */}
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
        </div>
      </section>

      {/* Videos section */}
      {showVideos && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-6 bg-[#b8962e]" />
              <h2 className="text-2xl font-bold text-[#0d1b35]">Videos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
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
                    <span className="inline-block bg-[#0d1b35] text-white text-xs px-2 py-0.5 font-bold tracking-wider mb-3">
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

      {/* Photos section */}
      {showPhotos && (
        <section className={`py-20 ${showVideos ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-6 bg-[#b8962e]" />
              <h2 className="text-2xl font-bold text-[#0d1b35]">Photos</h2>
              <span className="text-gray-400 text-sm ml-2">South Deep Gold Mine Field Visit</span>
            </div>

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
      )}

      {/* Lightbox */}
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
            onClick={(e) => { e.stopPropagation(); prev(); }}
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
            <p className="text-white/60 text-sm text-center mt-4">
              {photos[lightbox].caption}
            </p>
            <p className="text-white/30 text-xs text-center mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
          <button
            className="absolute right-4 text-white/70 hover:text-white text-4xl font-light z-10 px-4 py-8"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0d1b35] text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3">Follow Our Journey</h2>
          <p className="text-gray-300 text-sm mb-6">
            Stay connected for the latest field visits, research milestones, and innovation showcases from the DHAIOH Unit.
          </p>
          <a
            href="https://www.youtube.com/@DHAIOHUnit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b8962e] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
          >
            Visit Our Channel
          </a>
        </div>
      </section>
    </>
  );
}
