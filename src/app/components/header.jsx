"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-6 sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#c9ccc6'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Pantas Bookkeepers Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="text-2xl font-bold uppercase tracking-wide" style={{color: '#535466'}}>
            PANTAS BOOKKEEPERS
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="transition-colors" style={{color: '#535466'}} onMouseEnter={(e) => e.target.style.color = '#716d73'} onMouseLeave={(e) => e.target.style.color = '#535466'}>
            Home
          </a>
          <a href="#" className="transition-colors" style={{color: '#535466'}} onMouseEnter={(e) => e.target.style.color = '#716d73'} onMouseLeave={(e) => e.target.style.color = '#535466'}>
            About
          </a>
          <a href="#" className="transition-colors" style={{color: '#535466'}} onMouseEnter={(e) => e.target.style.color = '#716d73'} onMouseLeave={(e) => e.target.style.color = '#535466'}>
            Services
          </a>
        </nav>

        {/* Contact Me Button */}
        <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#716d73'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" style={{color: '#535466'}}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
