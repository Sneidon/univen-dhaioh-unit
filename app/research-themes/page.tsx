import Image from "next/image";
import PageHero from "@/components/PageHero";
import { flagshipProgrammes } from "@/lib/flagship-programmes";
import { researchThemes } from "@/lib/research-themes";
import { themeCards } from "@/lib/card-images";

export default function ResearchThemesPage() {
  return (
    <>
      <PageHero>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Research Portfolio
        </p>
        <h1 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          Research <span className="text-[#b8962e]">Themes</span>
        </h1>
      </PageHero>

      <section className="sec bg-white">
        <div className="sec-in">
          <p className="slbl">Strategic Agenda</p>
          <h2 className="stit">Strategic Research Themes</h2>
          <p className="ssub">
            Our multidisciplinary approach targets critical areas of occupational health through technological
            innovation.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {researchThemes.map((theme, i) => (
              <div key={theme.title} className="card-soft overflow-hidden">
                <div className="relative aspect-[5/4] min-h-[280px] w-full">
                  <Image
                    src={themeCards[i].src}
                    alt={themeCards[i].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-[#0d1b35]">{theme.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5a7184]">{theme.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in">
          <p className="slbl">Active Research Portfolio</p>
          <h2 className="stit">Flagship Research Programmes</h2>
          <p className="ssub">
            Nine programmes that collectively define the Unit&apos;s scientific identity and real-world impact.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flagshipProgrammes.map((prog) => (
              <div key={prog.title} className="card-soft overflow-hidden">
                <div className="relative aspect-[5/4] min-h-[260px] w-full">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-[#164076] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {prog.tag}
                    </span>
                    <span className="text-xs text-[#5a7184]">{prog.subTag}</span>
                  </div>
                  <h3 className="font-bold leading-snug text-[#0d1b35]">{prog.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
