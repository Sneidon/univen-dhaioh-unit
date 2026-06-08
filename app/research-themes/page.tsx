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
  {
    tag: "ACTIVE",
    subTag: "Inaugurated 2023",
    title: "Early Warning & Decision Support",
    desc: "Translating complex data streams into actionable alerts for mine managers and health officers to prevent incidents in real-time.",
    cta: "Read Framework →",
  },
  {
    tag: "STRATEGIC",
    subTag: "Multi-year Study",
    title: "Smart Medical Surveillance Systems",
    desc: "Digitising health records and medical screenings to track long-term health outcomes for thousands of mining employees across Africa.",
    cta: "View Methodology →",
  },
  {
    tag: "PILOT",
    subTag: "Regional Focus",
    title: "Digital Innovation for Sustainable Mining",
    desc: "Developing green digital tools that monitor environmental impact alongside worker health, fostering a holistic approach to zero-harm.",
    cta: "Explore Portal →",
  },
];

export default function ResearchThemesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b35] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* Hero Banner Image */}
      <div className="w-full h-72 md:h-96 bg-gray-200 flex flex-col items-center justify-center gap-3">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
        <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
      </div>

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-12">Flagship Research Programmes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div key={prog.title} className="bg-[#0d1b35] text-white">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center gap-2">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
                    <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#b8962e] text-white text-xs px-2 py-0.5 font-bold tracking-wider">
                      {prog.tag}
                    </span>
                    <span className="text-white/40 text-xs self-center">{prog.subTag}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{prog.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">{prog.desc}</p>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-[#b8962e] hover:text-white transition-colors"
                  >
                    {prog.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Research Institutions" },
            { value: "50k+", label: "Monitored Workers" },
            { value: "08", label: "Core Themes" },
            { value: "ZERO", label: "Harm Target" },
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
