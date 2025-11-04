import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-lg font-semibold">Citrin Corps</p>
          <p className="mt-2 text-white/60">Black & White digital craftsmanship with a Japanese soul.</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-white/50">Contact</p>
          <p className="mt-2 text-white/80">hello@citrincorps.studio</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-white/50">Social</p>
          <div className="mt-2 flex gap-4 text-white/70">
            <a className="hover:text-white transition" href="#">Dribbble</a>
            <a className="hover:text-white transition" href="#">Behance</a>
            <a className="hover:text-white transition" href="#">X</a>
          </div>
        </div>
      </div>
      <div className="px-6 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Citrin Corps. All rights reserved.
      </div>
    </footer>
  );
}
