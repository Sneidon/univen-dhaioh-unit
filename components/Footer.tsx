import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b35] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-4 bg-white inline-block p-2">
            <Image src="/logos/ohs-logo.png" alt="OHS in Mining Research Institute – University of Venda" width={180} height={40} className="object-contain" />
          </div>
          <p className="text-[#b8962e] text-xs mb-3">SAMRC Extramural Unit</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed italic">
            &ldquo;Transforming Worker Health Through Digital Intelligence&rdquo;
          </p>
          <p className="text-gray-500 text-xs mt-3">
            A strategic partnership of SAMRC, University of Venda, and Mintek.
          </p>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About the Unit</Link></li>
            <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership & Team</Link></li>
            <li><Link href="/research-themes" className="hover:text-white transition-colors">Research Themes</Link></li>
            <li><Link href="/research-impact" className="hover:text-white transition-colors">Research Impact & Policy</Link></li>
            <li><Link href="/human-capital" className="hover:text-white transition-colors">Human Capital Development</Link></li>
            <li><Link href="/innovation" className="hover:text-white transition-colors">Innovation</Link></li>
            <li><Link href="/impact-framework" className="hover:text-white transition-colors">Impact Framework</Link></li>
            <li><Link href="/strategic-partners" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery & Media</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/impact-framework" className="hover:text-white transition-colors">Impact Framework</Link></li>
            <li><Link href="/strategic-partners" className="hover:text-white transition-colors">Strategic Partners</Link></li>
            <li><Link href="/research-themes" className="hover:text-white transition-colors">Research Portal</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery & Media</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="https://www.univen.ac.za/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.univen.ac.za/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Connect</h4>
            <p className="text-gray-400 text-sm">info@dhaioh-univen.ac.za</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">
            © 2026 DHAIOH Unit. Transforming Worker Health Through Digital Intelligence.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <button aria-label="Share" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </button>
            <button aria-label="Email" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
