import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
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
      <PageHero src={article.cover} alt={article.coverAlt} className="py-28 md:py-40">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          UNIVEN News · {article.dateLabel}
        </p>
        <h1 className="mb-6 max-w-4xl text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-3">
          <a href={article.pdfHref} target="_blank" rel="noopener noreferrer" className="bt">
            Download PDF
          </a>
          <Link href={`/gallery/${article.gallerySlug}`} className="bot !border-white/40 !text-white hover:!bg-white/10">
            View Gallery
          </Link>
          <a
            href={`https://www.youtube.com/watch?v=${article.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bot !border-[#b8962e]/60 !text-[#b8962e] hover:!bg-[#b8962e]/10"
          >
            Watch Video
          </a>
        </div>
      </PageHero>

      <article className="sec bg-white">
        <div className="sec-in max-w-3xl">
          <p className="mb-10 border-l-4 border-[#b8962e] pl-5 text-lg leading-relaxed text-[#2c3e50]">
            {article.summary}
          </p>

          <div className="relative mb-10 w-full overflow-hidden rounded-[10px]" style={{ aspectRatio: "16/10" }}>
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
              <p key={paragraph.slice(0, 48)} className="leading-relaxed text-[#5a7184]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-[#d8e3ec] pt-8">
            <a
              href={article.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#0d1b35] underline decoration-[#b8962e] decoration-2 underline-offset-4 hover:text-[#b8962e]"
            >
              Download full UNIVEN News PDF →
            </a>
            <Link href="/news" className="text-sm font-bold text-[#5a7184] hover:text-[#0d1b35]">
              ← All News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
