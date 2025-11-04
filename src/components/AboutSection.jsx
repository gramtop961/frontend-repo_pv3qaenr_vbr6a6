import React from 'react';

function KakejikuDivider() {
  return (
    <div className="my-16 flex items-center justify-center">
      <div className="h-px w-24 bg-white/20" />
      <div className="mx-3 w-2 h-6 bg-white rounded" />
      <div className="h-px w-24 bg-white/20" />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">桜 — Philosophy</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              We design software the way a calligrapher draws ink: deliberate, balanced, and free of noise.
              Our palette is black and white—clarity over clutter—accented by motion that breathes.
            </p>
            <p className="mt-4 text-white/70">
              From brand sites to interactive products, we obsess over edge-to-edge detail, micro-interactions,
              and performance. The result is a feeling: calm power.
            </p>

            <KakejikuDivider />

            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm uppercase tracking-wider text-white/50">Focus</dt>
                <dd className="mt-1 text-white">Experience, Motion, Identity</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wider text-white/50">Stack</dt>
                <dd className="mt-1 text-white">React, Fast APIs, 3D Scenes</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wider text-white/50">Culture</dt>
                <dd className="mt-1 text-white">Zen, Precision, Integrity</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wider text-white/50">HQ</dt>
                <dd className="mt-1 text-white">Remote • Global</dd>
              </div>
            </dl>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%)',
            }} />
            <div className="relative">
              <blockquote className="text-xl md:text-2xl font-medium">
                “Elegance is achieved not when there is nothing more to add, but when there is nothing left to take away.”
              </blockquote>
              <p className="mt-4 text-white/60">— Inspired by Japanese minimalism</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60">Turnaround</p>
                  <p className="text-2xl font-semibold">2–6 weeks</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60">Satisfaction</p>
                  <p className="text-2xl font-semibold">100%</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60">Timezone</p>
                  <p className="text-2xl font-semibold">Worldwide</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60">Support</p>
                  <p className="text-2xl font-semibold">Priority</p>
                </div>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
