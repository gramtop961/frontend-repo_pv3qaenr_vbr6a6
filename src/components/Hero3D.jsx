import React from 'react';
import Spline from '@splinetool/react-spline';

function SakuraPetals() {
  const petals = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => {
        const delay = (i % 12) * 0.8;
        const size = 6 + (i % 5) * 2;
        const left = (i * 37) % 100; // pseudo-random spread
        return (
          <span
            key={i}
            className="absolute inline-block rounded-full bg-white/80 shadow-sm"
            style={{
              left: `${left}%`,
              top: '-5%',
              width: `${size}px`,
              height: `${size - 2}px`,
              filter: 'blur(0.3px)',
              animation: `fall ${14 + (i % 6)}s linear ${delay}s infinite`,
              transform: 'rotate(12deg)'
            }}
          />
        );
      })}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translateY(50vh) translateX(-10vw) rotate(120deg); }
          100% { transform: translateY(105vh) translateX(10vw) rotate(240deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-[100vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6Y0yG1L6Nq35p3xT/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black pointer-events-none" />
      <SakuraPetals />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            CITRIN CORPS
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80">
            Minimalist technology with a Japanese soul. We craft monochrome experiences
            that feel like a quiet snowfall of sakura—serene, precise, unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-white text-black font-medium shadow hover:bg-white/90 transition"
            >
              Explore our work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
