import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero src="/banners/hero-contact.jpg" alt="Connected mining site at sunset">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Contact Us
        </h1>
      </PageHero>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Left: Director + Form */}
          <div className="space-y-6">
            {/* Director card */}
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Unit Director</p>
              <div className="flex gap-5 items-start">
                <div className="w-28 h-36 rounded-sm flex-shrink-0 overflow-hidden">
                  <Image src="/prof-zungu.jpg" alt="Prof Lindiwe Zungu" width={112} height={144} className="object-cover object-top w-full h-full" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0d1b35]">Prof Lindiwe Zungu</h2>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Leading transformative research in Digital Health and Artificial Intelligence for occupational health.
                  </p>
                  <a
                    href="mailto:lindiwe.zungu@univen.ac.za"
                    className="flex items-center gap-2 mt-3 text-sm text-[#0d1b35] hover:text-[#b8962e] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    lindiwe.zungu@univen.ac.za
                  </a>
                </div>
              </div>
            </div>

            {/* General inquiries card */}
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">General Inquiries</p>
              <div className="flex gap-5 items-start">
                <div className="w-28 h-36 rounded-sm flex-shrink-0 bg-[#0d1b35] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#b8962e]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0d1b35]">DHAIOH Unit</h2>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    For research collaboration, partnerships, postgraduate opportunities, media requests, and all other general enquiries.
                  </p>
                  <a
                    href="mailto:info@dhaioh-univen.ac.za"
                    className="flex items-center gap-2 mt-3 text-sm text-[#0d1b35] hover:text-[#b8962e] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    info@dhaioh-univen.ac.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Offices + map */}
          <div className="space-y-6">
            {/* Offices */}
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-[#0d1b35]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <h3 className="font-bold text-[#0d1b35] text-lg">Our Strategic Offices</h3>
              </div>

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
