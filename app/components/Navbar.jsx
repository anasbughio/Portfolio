"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card rounded-none border-l-0 border-r-0 border-t-0 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">

        <a href="#hero" className="flex items-center gap-2 group" aria-label="Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center transition-all duration-300">
            <Code2 size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-slate-200 text-lg tracking-tight" style={{ fontFamily: "Sora, sans-serif" }}>
            Fahad<span className="text-teal-400">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#contact"
            className="btn-primary ml-4 text-sm py-2.5 px-5"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-teal-400 hover:bg-white/5 transition-all duration-200"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-container pb-4 pt-2 flex flex-col gap-1 border-t border-white/10 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-teal-400 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn-primary mt-2 justify-center text-sm"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}