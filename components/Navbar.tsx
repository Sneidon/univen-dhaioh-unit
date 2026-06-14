"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type NavItem =
  | { href: string; label: string; children?: never }
  | { href?: never; label: string; children: { href: string; label: string; desc?: string }[] };

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About the Unit", desc: "Mission, vision & strategic framework" },
      { href: "/leadership", label: "Leadership & Team", desc: "Prof Lindiwe Zungu & Dr James Aluha" },
      { href: "/strategic-partners", label: "Partners & Alliances", desc: "SAMRC · UNIVEN · Mintek & more" },
    ],
  },
  {
    label: "Research",
    children: [
      { href: "/research-themes", label: "Research Themes", desc: "8 strategic multidisciplinary themes" },
      { href: "/research-impact", label: "Research Impact & Policy", desc: "Evidence to policy & practice" },
      { href: "/human-capital", label: "Human Capital Development", desc: "Postgrad, postdoc & training" },
    ],
  },
  { href: "/innovation", label: "Innovation" },
  { href: "/impact-framework", label: "Impact Framework" },
  { href: "/gallery", label: "Gallery & Media" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({ items }: { items: { href: string; label: string; desc?: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 shadow-lg z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group"
        >
          <p className="text-sm font-semibold text-[#0d1b35] group-hover:text-[#b8962e] transition-colors">
            {item.label}
          </p>
          {item.desc && <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center py-2">
          <Image
            src="/logos/ohs-logo.png"
            alt="OHS in Mining Research Institute – University of Venda"
            width={1376}
            height={618}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.children) {
              const isActive = link.children.some((c) => pathname === c.href);
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 text-sm transition-colors relative pb-1 ${
                      isActive
                        ? "text-[#0d1b35] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#b8962e]"
                        : "text-gray-600 hover:text-[#0d1b35]"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && <DropdownMenu items={link.children} />}
                </div>
              );
            }

            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href!}
                className={`text-sm transition-colors relative pb-1 ${
                  active
                    ? "text-[#0d1b35] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#b8962e]"
                    : "text-gray-600 hover:text-[#0d1b35]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0d1b35] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b35] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b35] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.children) {
              const isExpanded = mobileExpanded === link.label;
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`text-sm py-1.5 ${pathname === child.href ? "text-[#0d1b35] font-semibold" : "text-gray-600"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-2 ${pathname === link.href ? "text-[#0d1b35] font-semibold" : "text-gray-600"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
