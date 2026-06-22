import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CardImageHeader from "@/components/CardImageHeader";
import { flagshipProgrammes } from "@/lib/flagship-programmes";
import { themeCards } from "@/lib/card-images";

const themes = [
  {
    title: "Digital Health & Occupational Health Intelligence",
    desc: "Developing integrated digital platforms that support real-time occupational health surveillance, worker monitoring, and evidence-based decision-making.",
    image: themeCards[0],
  },
  {
    title: "Artificial Intelligence & Predictive Analytics",
    desc: "Leveraging machine learning and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions.",
    dark: true,
    image: themeCards[1],
  },
  {
    title: "Occupational Disease Prevention & Early Detection",
    desc: "Creating digital tools and predictive models for the prevention and early detection of occupational diseases, including respiratory diseases, cancers, hearing loss, musculoskeletal disorders, and mental health conditions.",
    image: themeCards[2],
  },
  {
    title: "Medical Surveillance & Early Warning Systems",
    desc: "Designing intelligent surveillance systems that enable rapid identification of health trends, disease outbreaks, and emerging occupational risks.",
    dark: true,
    image: themeCards[3],
  },
  {
    title: "Women in Mining & Gender-Responsive Health Systems",
    desc: "Advancing innovative solutions that address the unique occupational health, safety, reproductive health, security, and wellbeing needs of women in mining.",
    image: themeCards[4],
  },
  {
    title: "Mental Health, Wellbeing & Psychosocial Risk Management",
    desc: "Developing evidence-based approaches for monitoring, preventing, and managing workplace mental health challenges through digital platforms and predictive systems.",
    dark: true,
    image: themeCards[5],
  },
  {
    title: "Climate Change, Environmental Health & Sustainable Mining",
    desc: "Investigating the intersection between environmental exposures, climate-related risks, worker health, and sustainable occupational health systems.",
    image: themeCards[6],
  },
  {
    title: "Innovation, Commercialisation & Technology Development",
    desc: "Transforming research outputs into patents, digital products, health technologies, decision-support systems, and scalable solutions with industry impact.",
    gold: true,
    image: themeCards[7],
  },
];

const programmes = flagshipProgrammes;

export default function ResearchThemesPage() {
  return (
    <>
      <PageHero src="/banners/hero-research-themes.jpg" alt="Open-pit mining operations with AI monitoring">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Transforming Worker Health Through Digital Intelligence.
        </h1>
      </PageHero>

      {/* Strategic Research Themes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Strategic Research Themes</h2>
            <p className="text-gray-500 max-w-2xl">
              Our multidisciplinary approach targets critical areas of occupational health through technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themes.map((theme) => (
              <div key={theme.title} className={`overflow-hidden flex flex-col ${theme.gold ? "bg-[#b8962e]" : "bg-[#164076]"} text-white`}>
                <CardImageHeader
                  src={theme.image.src}
                  alt={theme.image.alt}
                  overlay={theme.gold ? "gold" : "blue"}
                  className="h-36"
                />
                <div className="p-8">
                <div className="w-10 h-10 mb-5 flex items-center justify-center border border-white/30">
                  <svg className="w-5 h-5 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{theme.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">Active Research Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35]">Flagship Research Programmes</h2>
            <p className="text-gray-500 mt-3 max-w-2xl">
              The DHAIOH Unit&apos;s research portfolio spans nine flagship programmes that collectively define its
              scientific identity and real-world impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmes.map((prog, i) => (
              <div
                key={prog.title}
                className={`overflow-hidden flex flex-col ${
                  i === 8
                    ? "bg-[#b8962e] text-white"
                    : i % 3 === 1
                    ? "bg-[#164076] text-white border-t-4 border-[#d22d20]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="relative h-36 w-full flex-shrink-0">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    loading="lazy"
                    quality={70}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  />
                  <div
                    className={`absolute inset-0 ${
                      i === 8 ? "bg-[#b8962e]/35" : i % 3 === 1 ? "bg-[#164076]/40" : "bg-[#164076]/15"
                    }`}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex gap-2 items-center">
                  <span
                    className={`text-xs px-2 py-0.5 font-bold tracking-wider ${
                      i === 8
                        ? "bg-white/20 text-white"
                        : i % 3 === 1
                        ? "bg-[#b8962e] text-white"
                        : "bg-[#164076] text-white"
                    }`}
                  >
                    {prog.tag}
                  </span>
                  <span
                    className={`text-xs ${
                      i === 8 || i % 3 === 1 ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    {prog.subTag}
                  </span>
                </div>
                <h3
                  className={`font-bold text-base leading-snug ${
                    i === 8 || i % 3 === 1 ? "text-white" : "text-[#0d1b35]"
                  }`}
                >
                  {prog.title}
                </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
