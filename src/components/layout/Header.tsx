"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Story", href: "#story" },
  { name: "Programs", href: "#programs" },
  { name: "Board", href: "#board" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-vintage-beige-200 bg-vintage-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-vintage-cream-100/80 shadow-vintage-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 py-3" aria-label="Global">
        <div className="flex lg:flex-1">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="Daisy's Foundation - Return to top"
          >
            <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
              <title>Daisy&apos;s Foundation - In Her Name</title>

              {/* Small daisy icon on left */}
              <g transform="translate(25, 40)">
                <ellipse cx="0" cy="-10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95"/>
                <ellipse cx="0" cy="10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95"/>
                <ellipse cx="-10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95"/>
                <ellipse cx="10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95"/>
                <ellipse cx="-7" cy="-7" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95" transform="rotate(-45 -7 -7)"/>
                <ellipse cx="7" cy="-7" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95" transform="rotate(45 7 -7)"/>
                <ellipse cx="-7" cy="7" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95" transform="rotate(45 -7 7)"/>
                <ellipse cx="7" cy="7" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.2" opacity="0.95" transform="rotate(-45 7 7)"/>
                <circle r="5" fill="#C9A961" stroke="#A68952" strokeWidth="1.2"/>
                <circle r="3.5" fill="#D9B978" opacity="0.7"/>
              </g>

              {/* "Daisy's" text in script font */}
              <text x="55" y="45" fontFamily="var(--font-allura), Allura, cursive" fontSize="36" fill="#6B5744" fontWeight="400">
                Daisy&apos;s
              </text>

              {/* "In Her Name" tagline below */}
              <text x="58" y="58" fontFamily="var(--font-playfair), Playfair Display, serif" fontSize="10" fill="#A68952" fontWeight="500" letterSpacing="2">
                IN HER NAME
              </text>

              {/* Small decorative leaf accent on right */}
              <ellipse cx="155" cy="38" rx="4" ry="8" fill="#D4DED0" stroke="#B8C9B0" strokeWidth="1" opacity="0.6" transform="rotate(-30 155 38)"/>

              {/* Foundation text */}
              <text x="145" y="45" fontFamily="var(--font-montserrat), Montserrat, sans-serif" fontSize="18" fill="#8B6F47" fontWeight="400">
                Foundation
              </text>
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-vintage-brown-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-sm font-semibold font-heading leading-6 text-vintage-brown-500 hover:text-vintage-gold-400 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vintage-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#donate"
            onClick={(e) => handleNavClick(e, "#donate")}
            className="vintage-button text-sm px-5 py-2"
          >
            Donate Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-vintage-beige-200 bg-vintage-cream-50">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-md px-3 py-2 text-base font-semibold font-heading text-vintage-brown-600 hover:bg-vintage-beige-100"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, "#donate")}
                className="vintage-button w-full block text-center"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
