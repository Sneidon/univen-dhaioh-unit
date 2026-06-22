import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const corePartners = [
  {
    category: "Primary Funder",
    name: "South African Medical Research Council (SAMRC)",
    role: "Strategic Funder",
    desc: "Providing strategic and catalytic investment to support scientific excellence, digital innovation, research capacity development, and the generation of high-impact evidence that advances worker health, strengthens occupational health systems, and drives sustainable societal transformation.",
    dark: true,
    logo: "/logos/samrc.svg",
  },
  {
    category: "Host Institution",
    name: "University of Venda (UNIVEN)",
    role: "Academic Home",
    desc: "Serving as the academic home of the DHAIOH Unit by providing visionary leadership, robust governance, advanced research infrastructure, postgraduate and postdoctoral development opportunities, and an enabling ecosystem that supports scientific excellence, innovation, collaboration, and societal impact.",
    dark: false,
    logo: "/logos/univen.png",
  },
  {
    category: "Strategic Research Partner",
    name: "Mintek",
    role: "Innovation Partner",
    desc: "Leveraging its national leadership in mining research, technology development, and innovation to provide scientific expertise, technical capabilities, industry intelligence, and collaborative platforms that advance digital transformation, occupational health innovation, and sustainable mining practices.",
    gold: true,
    logo: "/logos/mintek.png",
  },
];

const nationalPartners = [
  "Mine Health and Safety Council (MHSC)",
  "National Research Foundation (NRF)",
  "Technology Innovation Agency (TIA)",
  "Council for Scientific and Industrial Research (CSIR)",
  "Human Sciences Research Council (HSRC)",
  "Department of Health",
  "Department of Mineral and Petroleum Resources",
  "Compensation Fund",
  "Rand Mutual Assurance (RMA)",
  "Mining Industry Stakeholders and Industry Associations",
  "Universities and Research Institutions",
  "Professional Councils and Regulatory Bodies",
];

const innovationPartners = [
  "Technology Innovation Agency (TIA)",
  "Technology Transfer Offices (TTOs)",
  "Innovation and Commercialisation Centres",
  "Science Councils",
  "Digital Health and Artificial Intelligence Companies",
  "Technology Developers and Start-Ups",
  "Innovation Accelerators and Incubators",
  "Venture Capital and Impact Investment Partners",
  "Intellectual Property and Patent Development Partners",
  "Industry Innovation Networks",
];

const internationalPartners = [
  "International Universities and Research Centres",
  "Global Occupational Health Networks",
  "Digital Health and Artificial Intelligence Research Consortia",
  "International Development Agencies",
  "Global Health Organisations",
  "International Funding Agencies and Foundations",
  "International Mining and Technology Partners",
];

const univenInternal = [
  "Faculty of Health Sciences",
  "Faculty of Science, Engineering and Agriculture",
  "Faculty of Management, Commerce and Law",
  "Faculty of Humanities, Social Sciences and Education",
  "Other Research Institutes and Chairs",
  "Technology Transfer Office (TTO)",
  "University Innovation and Commercialisation Centre (UICG)",
  "University ICT Services and Digital Transformation Platforms",
  "Marketing, Branding and Communications (BMC)",
  "Postgraduate and Research Administration",
  "Community Engagement Directorate",
  "International Relations and Partnerships Office",
  "Institutional Planning, Monitoring and Evaluation Units",
  "University Leadership and Governance Structures",
];

const collaborationTypes = [
  { title: "Research Collaboration", desc: "Joint research projects, co-authorship, and shared datasets across disciplines and institutions." },
  { title: "Strategic Partnerships", desc: "Long-term alliances that combine expertise, infrastructure, and networks for sustained impact." },
  { title: "Innovation & Commercialisation", desc: "Co-developing technologies, filing joint patents, and scaling solutions to market." },
  { title: "Technology Development", desc: "Building next-generation occupational health tools in partnership with technology partners." },
  { title: "Postgraduate & Postdoctoral Training", desc: "Hosting students and fellows through collaborative supervision and research programmes." },
  { title: "Capacity Development Initiatives", desc: "Supporting skills development, research training, and capacity building across the occupational health ecosystem." },
  { title: "Policy & Advisory Support", desc: "Contributing expert guidance to government, regulators, and industry bodies." },
  { title: "National & International Collaboration", desc: "Engaging with national and global partners to advance occupational health research, innovation, and impact." },
];

export default function StrategicPartnersPage() {
  return (
    <>
      <PageHero src="/banners/hero-partners.jpg" alt="Futuristic open-pit mining operations">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          Partners & <span className="text-[#b8962e]">Collaborators</span>
        </h1>
      </PageHero>

      {/* Core Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Core Institutional Partners</h2>
            <p className="text-gray-500 max-w-2xl">
              Together, these three institutions form the strategic foundation of the DHAIOH Unit — combining scientific excellence, technological innovation, and academic leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {corePartners.map((partner) => (
              <div
                key={partner.name}
                className={`p-8 flex flex-col ${
                  partner.dark ? "bg-[#164076] text-white border-t-4 border-[#d22d20]" : partner.gold ? "bg-[#b8962e] text-white" : "border border-gray-200"
                }`}
              >
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${partner.dark || partner.gold ? "text-white/60" : "text-[#b8962e]"}`}>
                  {partner.category}
                </p>
                {partner.logo && (
                  <div className="mb-4">
                    <Image src={partner.logo} alt={partner.name} width={120} height={50} className={`object-contain ${partner.dark ? "brightness-0 invert" : ""}`} />
                  </div>
                )}
                <h3 className={`font-bold text-lg mb-1 ${partner.dark || partner.gold ? "text-white" : "text-[#0d1b35]"}`}>
                  {partner.name}
                </h3>
                <span className={`inline-block text-xs font-bold tracking-wider px-2 py-0.5 mb-5 self-start ${
                  partner.dark ? "bg-[#b8962e] text-white" : partner.gold ? "bg-white/20 text-white" : "bg-[#d22d20] text-white"
                }`}>
                  {partner.role}
                </span>
                <p className={`text-sm leading-relaxed flex-1 ${partner.dark ? "text-gray-300" : partner.gold ? "text-white/80" : "text-gray-600"}`}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal UNIVEN Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1b35] mb-4">Internal University of Venda Partners</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                As an interdisciplinary and innovation-driven initiative hosted by the University of Venda, the DHAIOH Unit collaborates closely with a range of institutional structures that support research excellence, digital transformation, innovation, and societal impact.
              </p>
              <div className="bg-[#164076] text-white border-t-4 border-[#d22d20] p-6">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">Partnership Vision</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These institutional partnerships provide the academic, technological, innovation, governance, and commercialisation support required to advance the DHAIOH Unit&apos;s research, innovation, and human capital development agenda.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {univenInternal.map((name) => (
                <div key={name} className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-3">
                  <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0d1b35] mb-3">National Partners</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            The DHAIOH Unit actively collaborates with national stakeholders that contribute to research excellence, innovation, policy influence, occupational health advancement, and sustainable mining.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nationalPartners.map((name) => (
              <div key={name} className="border border-gray-200 bg-gray-50 px-5 py-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                <span className="text-sm text-[#0d1b35]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Partners */}
      <section className="py-20 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Innovation & Technology Partners</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              To accelerate the translation of research into practical solutions, the DHAIOH Unit actively seeks collaboration with innovation ecosystem partners who can help develop, protect, validate, scale, and commercialise our innovations.
            </p>
            <div className="space-y-2">
              {innovationPartners.map((name) => (
                <div key={name} className="flex items-center gap-3 border border-white/10 px-4 py-3 bg-white/5">
                  <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">International Collaborators</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              The DHAIOH Unit engages with a growing network of international partners to position South Africa at the forefront of global digital occupational health innovation.
            </p>
            <div className="space-y-2 mb-10">
              {internationalPartners.map((name) => (
                <div key={name} className="flex items-center gap-3 border border-white/10 px-4 py-3 bg-white/5">
                  <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Collaborate With Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We welcome visionary partnerships that combine scientific excellence, technological innovation, and strategic investment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationTypes.map((item, i) => (
              <div
                key={item.title}
                className={`p-8 ${i === 0 ? "bg-[#164076] text-white border-t-4 border-[#d22d20]" : i === 3 ? "bg-[#b8962e] text-white" : "bg-white border border-gray-200"}`}
              >
                <h3 className={`font-bold text-base mb-3 ${i === 0 || i === 3 ? "text-white" : "text-[#0d1b35]"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-gray-300" : i === 3 ? "text-white/80" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="btn-cta px-10 py-4"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
