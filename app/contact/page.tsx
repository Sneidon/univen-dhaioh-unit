"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Research Collaboration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b35] mb-4">
            Connect With the DHAIOH Unit
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Advancing occupational health through digital intelligence and strategic partnerships. Our team is ready to discuss collaboration, research inquiries, and innovation solutions.
          </p>
        </div>
      </section>

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
                    Leading transformative research in Digital Health and Artificial Intelligence for occupational safety.
                  </p>
                  <a
                    href="mailto:lindiwe.zungu@univen.ac.za"
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

            {/* Inquiry form */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-bold text-[#0d1b35] text-lg mb-6">Send an Inquiry</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-[#b8962e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[#0d1b35] mb-2">Thank you for your inquiry</h4>
                  <p className="text-gray-600 text-sm">We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                        Full Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#0d1b35] transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@organization.com"
                        required
                        className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#0d1b35] transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#0d1b35] transition-colors bg-transparent"
                    >
                      <option>Research Collaboration</option>
                      <option>Strategic Partnership</option>
                      <option>Innovation & Commercialisation</option>
                      <option>Postgraduate Opportunities</option>
                      <option>Media Inquiry</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we assist you?"
                      rows={4}
                      required
                      className="w-full border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#0d1b35] transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0d1b35] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#162548] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
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
                  <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">INNOVATION HUB</p>
                  <h4 className="font-bold text-[#0d1b35]">MINTEK Research Center</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ERF 181, 56 Florence Street<br />
                    Colbyn, Pretoria, South Africa
                  </p>
                  <a href="https://maps.google.com/?q=56+Florence+Street,+Colbyn,+Pretoria,+South+Africa" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0d1b35] font-semibold mt-2 inline-block hover:text-[#b8962e] transition-colors">
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-56 bg-gray-200 flex flex-col items-center justify-center gap-2">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
            </div>

            {/* Phone & Social */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0d1b35]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <p className="text-xs font-bold tracking-wider text-[#b8962e] uppercase">Phone</p>
                  <p className="text-sm font-semibold text-[#0d1b35]">+27 15 962 8000</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0d1b35]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
                <div>
                  <p className="text-xs font-bold tracking-wider text-[#b8962e] uppercase">Social</p>
                  <p className="text-sm font-semibold text-[#0d1b35]">Connect</p>
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
              <Image src="/logos/samrc.svg" alt="SAMRC" width={140} height={60} className="object-contain mx-auto mb-3" />
              <p className="text-xs font-bold tracking-widest text-[#0d1b35]">SAMRC</p>
            </div>
            <div className="text-center">
              <Image src="/logos/univen.png" alt="University of Venda" width={80} height={80} className="object-contain mx-auto mb-3" />
              <p className="text-xs font-bold tracking-widest text-[#0d1b35]">UNIVEN</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border border-gray-200 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-[#0d1b35]">Mintek</span>
              </div>
              <p className="text-xs font-bold tracking-widest text-[#0d1b35]">MINTEK</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
