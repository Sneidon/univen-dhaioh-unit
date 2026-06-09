import Link from "next/link";
import Image from "next/image";

const themes = [
  {
    title: "Digital Health & Occupational Health Intelligence",
    desc: "Developing integrated digital platforms that support real-time occupational health surveillance, worker monitoring, and evidence-based decision-making.",
  },
  {
    title: "Artificial Intelligence & Predictive Analytics",
    desc: "Leveraging machine learning and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions.",
    dark: true,
  },
  {
    title: "Occupational Disease Prevention & Early Detection",
    desc: "Creating digital tools and predictive models for the prevention and early detection of occupational diseases, including respiratory diseases, cancers, hearing loss, musculoskeletal disorders, and mental health conditions.",
  },
  {
    title: "Medical Surveillance & Early Warning Systems",
    desc: "Designing intelligent surveillance systems that enable rapid identification of health trends, disease outbreaks, and emerging occupational risks.",
    dark: true,
  },
  {
    title: "Women in Mining & Gender-Responsive Health Systems",
    desc: "Advancing innovative solutions that address the unique occupational health, safety, reproductive health, security, and wellbeing needs of women in mining.",
  },
  {
    title: "Mental Health, Wellbeing & Psychosocial Risk Management",
    desc: "Developing evidence-based approaches for monitoring, preventing, and managing workplace mental health challenges through digital platforms and predictive systems.",
    dark: true,
  },
  {
    title: "Climate Change, Environmental Health & Sustainable Mining",
    desc: "Investigating the intersection between environmental exposures, climate-related risks, worker health, and sustainable occupational health systems.",
  },
  {
    title: "Innovation, Commercialisation & Technology Development",
    desc: "Transforming research outputs into patents, digital products, health technologies, decision-support systems, and scalable solutions with industry impact.",
    gold: true,
  },
];

const programmes = [
  { tag: "ACTIVE",     subTag: "Flagship Programme",    title: "Occupational Disease Early Warning Systems" },
  { tag: "STRATEGIC",  subTag: "Multi-year Study",       title: "AI-Powered Worker Health Surveillance" },
  { tag: "ACTIVE",     subTag: "Gender-Responsive",      title: "Women in Mining Health & Safety" },
  { tag: "STRATEGIC",  subTag: "Psychosocial Research",  title: "Mental Health in Mining" },
  { tag: "ACTIVE",     subTag: "Hazard Research",        title: "Biological Hazards in Mining" },
  { tag: "STRATEGIC",  subTag: "Prevention Focus",       title: "Occupational Cancer Prevention" },
  { tag: "ACTIVE",     subTag: "Environmental Health",   title: "Climate Change & Worker Health" },
  { tag: "ACTIVE",     subTag: "Water-Food-Health",      title: "Water-Food-Health Nexus Research" },
  { tag: "INNOVATION", subTag: "Technology Development", title: "Digital Health Innovation Projects" },
];

export default function ResearchThemesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/pexels-deyler-rivera-segura-1300296248-29506757.jpg" alt="Open-pit mining operations with dramatic sky" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">Strategic Framework</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Transforming Worker Health Through Digital Intelligence.
          </h1>
          <div className="max-w-2xl border-l-4 border-[#b8962e] pl-6 mt-8">
            <p className="text-gray-200 text-lg leading-relaxed font-medium">
              Bridging the gap from research to healthy and safe mining workplaces.
            </p>
          </div>
        </div>
      </section>

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
              <div key={theme.title} className={`p-8 ${theme.gold ? "bg-[#b8962e]" : "bg-[#0d1b35]"} text-white`}>
                <div className="w-10 h-10 mb-5 flex items-center justify-center border border-white/30">
                  <svg className="w-5 h-5 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{theme.desc}</p>
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
                className={`p-6 flex flex-col gap-3 ${
                  i === 8
                    ? "bg-[#b8962e] text-white"
                    : i % 3 === 1
                    ? "bg-[#0d1b35] text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex gap-2 items-center">
                  <span
                    className={`text-xs px-2 py-0.5 font-bold tracking-wider ${
                      i === 8
                        ? "bg-white/20 text-white"
                        : i % 3 === 1
                        ? "bg-[#b8962e] text-white"
                        : "bg-[#0d1b35] text-white"
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "08", label: "Core Research Themes" },
            { value: "20+", label: "Years of Research Experience" },
            { value: "45+", label: "Graduates Supervised" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-2 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
