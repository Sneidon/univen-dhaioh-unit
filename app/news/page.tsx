import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { newsArticles } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <>
      <PageHero
        src="/gallery/women-in-mining-indaba-2026/dhaioh-plaque-group.jpg"
        alt="DHAIOH Unit plaque at Women in Mining Indaba"
        imageClassName="object-cover object-top"
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Updates
        </p>
        <h1 className="mb-3 max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          News &amp; <span className="text-[#b8962e]">Highlights</span>
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          Updates from the DHAIOH Unit, UNIVEN scholars, and partners advancing occupational health in mining.
        </p>
      </PageHero>

      <section className="sec bg-white">
        <div className="sec-in">
          <p className="slbl">Latest Stories</p>
          <h2 className="stit">From the Unit</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {newsArticles.map((article) => (
              <article key={article.slug} className="card-soft group overflow-hidden transition-colors hover:border-[#b8962e]">
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="relative aspect-[5/4] min-h-[260px] overflow-hidden">
                    <Image
                      src={article.cover}
                      alt={article.coverAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                      {article.dateLabel}
                    </p>
                    <h3 className="mb-3 text-lg font-bold leading-snug text-[#0d1b35] group-hover:text-[#164076]">
                      {article.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#5a7184]">
                      {article.summary}
                    </p>
                    <span className="text-sm font-bold text-[#b8962e]">Read Story →</span>
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
