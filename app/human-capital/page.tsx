import Link from "next/link";
import PageHero from "@/components/PageHero";
import CardImageHeader from "@/components/CardImageHeader";
import { hcdCards } from "@/lib/card-images";

const opportunities = [
  {
    category: "Postdoctoral Fellows",
    tag: "POSTDOC",
    desc: "Postdoctoral research fellowships in digital health, AI, occupational health surveillance, and related fields within the Unit's multidisciplinary research environment.",
    areas: ["Digital Health & AI", "Occupational Epidemiology", "Sensor & Wearable Technologies", "Health Systems Research"],
    image: hcdCards[0],
  },
  {
    category: "Doctoral Candidates (PhD)",
    tag: "PHD",
    desc: "Full doctoral research programmes addressing the Unit's strategic research themes under joint academic–industry supervision by Prof Lindiwe Zungu, Dr James Aluha, and the broader team.",
    areas: ["AI & Predictive Analytics", "Women in Mining Health", "Mental Health in Mining", "Climate Change & Worker Health"],
    dark: true,
    image: hcdCards[1],
  },
  {
    category: "Master's Students",
    tag: "MASTERS",
    desc: "Research Master's opportunities across eight strategic themes, combining research mentorship, experiential learning, and collaborative projects.",
    areas: ["Digital Surveillance Systems", "Occupational Disease Prevention", "Medical Surveillance", "Environmental Health"],
    image: hcdCards[2],
  },
  {
    category: "Emerging & Early-Career Researchers",
    tag: "EARLY-CAREER",
    desc: "Structured development pathways for emerging researchers and occupational health practitioners and professionals seeking to build expertise in digital health, AI, and mining health.",
    areas: ["Occupational Health Practice", "Digital Health", "Research Methodology", "Leadership Development"],
    image: hcdCards[3],
  },
  {
    category: "Research Interns & Assistants",
    tag: "INTERN",
    desc: "Structured research internship placements providing exposure to digital health research, occupational health practice, and innovation within the DHAIOH Unit.",
    areas: ["Data Analysis", "Field Research", "Technology Development", "Policy Analysis"],
    dark: true,
    image: hcdCards[4],
  },
  {
    category: "Occupational Health Practitioners & Professionals",
    tag: "PRACTITIONER",
    desc: "Development opportunities for occupational health practitioners and professionals seeking to build expertise in digital health, artificial intelligence, and advanced occupational health systems.",
    areas: ["Occupational Health Practice", "Digital Health", "Medical Surveillance", "Health Systems"],
    image: hcdCards[5],
  },
  {
    category: "Future Leaders in Digital Health & AI",
    tag: "LEADERSHIP",
    desc: "Nurturing future leaders equipped to drive scientific discovery, digital transformation, policy influence, and sustainable impact in occupational health.",
    areas: ["Research Leadership", "Digital Innovation", "Policy Influence", "Capacity Development"],
    dark: true,
    image: hcdCards[6],
  },
];

const programmes = [
  {
    title: "Research Capacity Development Programmes",
    desc: "Structured programmes designed to build research capacity in digital health, AI, and occupational health — targeting emerging researchers, healthcare professionals, and mining industry practitioners.",
    icon: "C",
  },
  {
    title: "Advanced Research Methodology Training",
    desc: "Training in research design, epidemiological methods, data analytics and health intelligence, and scientific writing and research publication support.",
    icon: "R",
  },
  {
    title: "Digital Health & AI Training",
    desc: "Specialised training in digital health technologies, AI methods, occupational health surveillance, medical surveillance, and innovation and commercialisation.",
    icon: "D",
  },
  {
    title: "Mentorship & Leadership Development",
    desc: "Dedicated mentorship by experienced researchers, academics, and industry experts — with particular emphasis on supporting women researchers, emerging scholars, and historically underrepresented groups.",
    icon: "M",
  },
  {
    title: "Grant Writing & Funding Development",
    desc: "Support for grant writing, research funding development, and accessing national and international research collaboration opportunities.",
    icon: "G",
  },
  {
    title: "Occupational Health & Medical Surveillance Training",
    desc: "Specialised training in occupational health practice, medical surveillance, data analytics, health intelligence, and innovation and commercialisation.",
    icon: "O",
  },
];

const stats = [
  { value: "45+", label: "Graduates Supervised", sub: "By Prof Zungu alone" },
  { value: "PhD", label: "Highest Degree Supported", sub: "Doctoral training" },
  { value: "3", label: "Partner Institutions", sub: "SAMRC · UNIVEN · Mintek" },
  { value: "8", label: "Research Themes", sub: "Multidisciplinary" },
];

export default function HumanCapitalPage() {
  return (
    <>
      <PageHero src="/banners/hero-human-capital.jpg" alt="Mine health doctor with holographic dashboard">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Human Capital <span className="text-[#b8962e]">Development</span>
        </h1>
      </PageHero>

      {/* Stats */}
      <section className="py-12 bg-[#b8962e] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="font-semibold text-sm mt-1">{s.label}</p>
              <p className="text-white/70 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Training Opportunities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">
              Postgraduate &amp; Research Opportunities
            </h2>
            <p className="text-gray-500 max-w-2xl">
              The DHAIOH Unit offers a range of postgraduate, postdoctoral, and research development opportunities
              across its eight strategic research themes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {opportunities.map((opp) => (
              <div
                key={opp.category}
                className={`overflow-hidden flex flex-col ${opp.dark ? "bg-[#164076] text-white border-t-4 border-[#d22d20]" : "bg-gray-50 border border-gray-200"}`}
              >
                <CardImageHeader
                  src={opp.image.src}
                  alt={opp.image.alt}
                  overlay={opp.dark ? "blue" : "light"}
                  className="h-44"
                />
                <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 ${opp.dark ? "bg-[#b8962e] text-white" : "bg-[#d22d20] text-white"}`}>
                    {opp.tag}
                  </span>
                </div>
                <h3 className={`font-bold text-xl mb-3 ${opp.dark ? "text-white" : "text-[#0d1b35]"}`}>
                  {opp.category}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${opp.dark ? "text-gray-300" : "text-gray-600"}`}>
                  {opp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {opp.areas.map((area) => (
                    <span
                      key={area}
                      className={`text-xs px-3 py-1 border ${opp.dark ? "border-white/20 text-white/70" : "border-gray-300 text-gray-600"}`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Capacity Building</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35]">Development Programmes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmes.map((prog, i) => (
              <div
                key={prog.title}
                className={`p-8 ${i === 1 ? "bg-[#164076] text-white border-t-4 border-[#d22d20]" : i === 4 ? "bg-[#b8962e] text-white" : "bg-white border border-gray-200"}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center font-bold text-lg mb-5 ${i === 1 || i === 4 ? "bg-white/20 text-white" : "bg-[#164076] text-[#b8962e]"}`}>
                  {prog.icon}
                </div>
                <h3 className={`font-bold text-base mb-3 ${i === 1 || i === 4 ? "text-white" : "text-[#0d1b35]"}`}>
                  {prog.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-gray-300" : i === 4 ? "text-white/80" : "text-gray-600"}`}>
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research themes link */}
      <section className="py-20 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Research Themes</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pursue Research That Matters</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Postgraduate students and fellows work within the Unit&apos;s eight strategic research themes,
              contributing to cutting-edge projects that generate real-world impact for workers, workplaces,
              and communities across the mining sector and beyond.
            </p>
            <div className="space-y-2 mb-8">
              {[
                "Digital Health & Occupational Health Intelligence",
                "AI & Predictive Analytics",
                "Occupational Disease Prevention & Early Detection",
                "Medical Surveillance & Early Warning Systems",
                "Women in Mining & Gender-Responsive Health Systems",
                "Mental Health, Wellbeing & Psychosocial Risk Management",
                "Climate Change, Environmental Health & Sustainable Mining",
                "Innovation, Commercialisation & Technology Development",
              ].map((theme) => (
                <div key={theme} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{theme}</span>
                </div>
              ))}
            </div>
            <Link href="/research-themes" className="inline-block btn-cta">
              Explore Research Themes
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 p-10">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-6">Apply or Enquire</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Interested in joining the DHAIOH Unit as a postgraduate student, postdoctoral fellow, or
              research intern? Contact us to learn more about available opportunities and application
              requirements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#b8962e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">info@dhaioh-univen.ac.za</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#b8962e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">University of Venda, Thohoyandou, Limpopo</span>
              </div>
            </div>
            <Link href="/contact" className="mt-8 inline-block border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
