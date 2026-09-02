import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsArticle, newsArticles } from "@/lib/news-data";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="relative text-white py-28 md:py-40 overflow-hidden bg-[#0d1b35]">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
          <Image
            src={article.cover}
            alt={article.coverAlt}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0d1b35]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">
            UNIVEN News · {article.dateLabel}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            <a
              href={article.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-sm"
            >
              Download PDF
            </a>
            <Link
              href={`/gallery/${article.gallerySlug}`}
              className="border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              View Gallery
            </Link>
            <a
              href={`https://www.youtube.com/watch?v=${article.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#b8962e]/60 text-[#b8962e] text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#b8962e]/10 transition-colors"
            >
              Watch Video
            </a>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-10 border-l-4 border-[#b8962e] pl-5">
            {article.summary}
          </p>

          <div className="relative w-full mb-10 overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <Image
              src={article.cover}
              alt={article.coverAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="space-y-6">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <a
              href={article.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
            >
              Download full UNIVEN News PDF →
            </a>
            <Link
              href="/news"
              className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-[#0d1b35] transition-colors"
            >
              ← All News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
