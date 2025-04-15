'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add animations on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative transition-all duration-700">
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#0047CC] to-[#00CC47] bg-clip-text text-transparent">
            <span className="block mb-4">Engineering</span>
            <span className="block">Digital Excellence</span>
          </h1>
          
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              We architect mission-critical systems for enterprises pushing technological boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="group relative px-8 py-4 bg-[#0047CC] hover:bg-[#0047CC]/90 rounded-lg transition-all duration-300">
                <span className="relative z-10 text-white text-lg font-medium">Start Your Project</span>
                <div className="absolute inset-0 rounded-lg bg-[#00CC47] opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {['ISO-27001', 'AWS-Partner', 'GDPR-Compliant', 'SOC2-Type2'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 border border-[#0047CC]/30 rounded-full">
                <div className="w-2 h-2 bg-[#0047CC] rounded-full" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0047CC]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00CC47]/05 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4 relative transition-all duration-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Engineered Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({length: 3}).map((_, i) => (
              <div key={i} className="group relative h-96 bg-[#111] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-4">Fintech Platform</h3>
                  <p className="text-gray-400 mb-6">Built a high-frequency trading system processing $1B+ daily</p>
                  <div className="flex flex-wrap gap-2">
                    {['Go', 'Kubernetes', 'React', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-[#0047CC]/10 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
