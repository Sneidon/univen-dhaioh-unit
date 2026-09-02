import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { newsArticles } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <>
      <PageHero src="/gallery/women-in-mining-indaba-2026/dhaioh-plaque-group.jpg" alt="DHAIOH Unit plaque at Women in Mining Indaba" imageClassName="object-cover object-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-4">
          News &{" "}
          <span className="text-[#b8962e]">Highlights</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
          Updates from the DHAIOH Unit, UNIVEN scholars, and partners advancing occupational health in mining.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-[#b8962e]" />
            <h2 className="text-2xl font-bold text-[#0d1b35]">Latest Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <article key={article.slug} className="border border-gray-200 overflow-hidden group hover:border-[#b8962e] transition-colors">
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={article.cover}
                      alt={article.coverAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-4 left-4 bg-[#d22d20] text-white text-xs px-2 py-1 font-bold tracking-wider">
                      NEWS
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">
                      {article.dateLabel}
                    </p>
                    <h3 className="font-bold text-[#0d1b35] text-lg leading-snug mb-3 group-hover:text-[#b8962e] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                    <span className="text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5">
                      Read Story →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
