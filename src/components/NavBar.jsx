import React from 'react';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-inner">
            <span className="text-black font-extrabold tracking-tight">C</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide uppercase">Citrin Corps</p>
            <p className="text-xs text-white/60 -mt-1">桜と革新 — Sakura & Innovation</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
