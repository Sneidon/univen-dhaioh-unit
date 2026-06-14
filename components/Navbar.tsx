"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type NavItem =
  | { href: string; label: string; children?: never }
  | { href?: never; label: string; children: { href: string; label: string }[] };

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About the Unit" },
      { href: "/leadership", label: "Leadership" },
      { href: "/strategic-partners", label: "Partners" },
    ],
  },
  {
    label: "Research",
    children: [
      { href: "/research-themes", label: "Research Themes" },
      { href: "/research-impact", label: "Research Impact" },
      { href: "/human-capital", label: "Human Capital" },
    ],
  },
  { href: "/innovation", label: "Innovation" },
  { href: "/impact-framework", label: "Impact Framework" },
  { href: "/gallery", label: "Gallery & Media" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-0 min-w-44 bg-white border border-gray-200 shadow-lg z-50 py-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0d1b35] transition-colors"
        >
          {item.label}
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

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const linkClass = (active: boolean) =>
    `text-sm transition-colors relative pb-1 whitespace-nowrap ${
      active
        ? "text-[#0d1b35] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#b8962e]"
        : "text-gray-600 hover:text-[#0d1b35]"
    }`;

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center py-2 flex-shrink-0">
          <Image
            src="/logos/ohs-logo.png"
            alt="OHS in Mining Research Institute – University of Venda"
            width={1376}
            height={618}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.children) {
              const isActive = link.children.some((c) => pathname === c.href);
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 ${linkClass(isActive)}`}
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

            return (
              <Link key={link.href} href={link.href!} className={linkClass(pathname === link.href)}>
                {link.label}
              </Link>
            );
          })}
        </div>

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
                    <svg
                      className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
