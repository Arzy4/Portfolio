"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-b border-[#3562A2]/30 bg-[#0A1628]/95 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <Link
          href="/#home"
          className="text-3xl font-extrabold tracking-tighter text-white"
        >
          <Image src="/websiteLogo.png" alt="Website Logo" width="150" height="150"/>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 gap-9 lg:flex font-inter font-[500]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[#C6CDD5] transition-colors hover:text-[#4196CE]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact button */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm text-white transition-colors hover:border-[#4196CE] hover:text-[#4196CE] lg:flex font-inter font-[700]"
        >
          Let's Connect
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-6 rounded-2xl border border-white/10 bg-[#0C2D5A] p-6 shadow-2xl lg:hidden text-center"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-white hover:text-[#4196CE]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}