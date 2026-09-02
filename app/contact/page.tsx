import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Get in Touch
        </p>
        <h1 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          Contact <span className="text-[#b8962e]">Us</span>
        </h1>
      </PageHero>

      {/* Main content */}
      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in grid gap-6 md:grid-cols-2">
          {/* Left: Director + Form */}
          <div className="space-y-6">
            {/* Director card */}
            <div className="info-card hover:border-[#d8e3ec] hover:translate-y-0">
              <p className="info-card-tag">Unit Director</p>
              <div className="flex gap-5 items-start">
                <div className="w-28 h-36 rounded-[10px] flex-shrink-0 overflow-hidden">
                  <Image src="/prof-zungu.jpg" alt="Prof Lindiwe Zungu" width={112} height={144} className="object-cover object-top w-full h-full" />
                </div>
                <div>
                  <h2 className="info-card-title !text-2xl">Prof Lindiwe Zungu</h2>
                  <p className="info-card-desc mt-1">
                    Leading transformative research in Digital Health and Artificial Intelligence for occupational health.
                  </p>
                  <a
                    href="mailto:lindiwe.zungu@univen.ac.za"
                    className="info-card-link inline-flex items-center gap-2"
                  >
                    lindiwe.zungu@univen.ac.za
                  </a>
                </div>
              </div>
            </div>

            {/* General inquiries card */}
            <div className="info-card hover:border-[#d8e3ec] hover:translate-y-0">
              <p className="info-card-tag">General Inquiries</p>
              <div className="flex gap-5 items-start">
                <div className="w-28 h-36 rounded-[10px] flex-shrink-0 bg-[#164076] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#b8962e]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="info-card-title !text-2xl">DHAIOH Unit</h2>
                  <p className="info-card-desc mt-1">
                    For research collaboration, partnerships, postgraduate opportunities, media requests, and all other general enquiries.
                  </p>
                  <a
                    href="mailto:info@dhaioh-univen.ac.za"
                    className="info-card-link inline-flex items-center gap-2"
                  >
                    info@dhaioh-univen.ac.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Offices + map */}
          <div className="space-y-6">
            {/* Offices */}
            <div className="info-card hover:border-[#d8e3ec] hover:translate-y-0">
              <p className="info-card-tag">Our Strategic Offices</p>

              <div className="space-y-6">
                <div>
                  <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">HOST INSTITUTION</p>
                  <h4 className="font-bold text-[#0d1b35]">University of Venda (UNIVEN)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Faculty of Health Sciences<br />
                    University Road, Thohoyandou, 0950<br />
                    Limpopo, South Africa
                  </p>
                  <a href="https://maps.google.com/?q=University+of+Venda,+University+Road,+Thohoyandou,+0950,+Limpopo,+South+Africa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0d1b35] font-semibold mt-2 inline-block hover:text-[#b8962e] transition-colors">
                    View Campus Map ↗
                  </a>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">PRETORIA ENGAGEMENT OFFICE</p>
                  <h4 className="font-bold text-[#0d1b35]">University of Venda — Pretoria Office</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ERF 181, 56 Florence Street<br />
                    Colbyn, Pretoria<br />
                    South Africa
                  </p>
                  <a href="https://maps.google.com/?q=56+Florence+Street,+Colbyn,+Pretoria,+South+Africa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0d1b35] font-semibold mt-2 inline-block hover:text-[#b8962e] transition-colors">
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Strategic Alliance for Impact</p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <div className="text-center">
              <Image src="/logos/samrc.svg" alt="SAMRC" width={140} height={60} className="object-contain mx-auto" />
            </div>
            <div className="text-center">
              <Image src="/logos/univen.png" alt="University of Venda" width={100} height={100} className="object-contain mx-auto" />
            </div>
            <div className="text-center">
              <Image src="/logos/mintek.png" alt="Mintek" width={100} height={100} className="object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
