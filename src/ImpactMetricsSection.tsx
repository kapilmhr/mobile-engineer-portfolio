import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function ImpactMetricsSection() {
  const [counts, setCounts] = useState({ users: 0, perf: 0, eng: 0, mig: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const techPillClassByLabel: Record<string, string> = {
    'React Native': 'text-[#fbbf24] bg-[#f59e0b]/14 border-[#f59e0b]/35',
    'Native iOS + Android': 'text-[#c4b5fd] bg-[#a78bfa]/14 border-[#a78bfa]/35',
    'Flutter': 'text-[#67e8f9] bg-[#22d3ee]/14 border-[#22d3ee]/35',
    'Legacy iOS (ObjC/UIKit)': 'text-[#cbd5e1] bg-[#94a3b8]/14 border-[#94a3b8]/35',
    'SwiftUI': 'text-[#f9a8d4] bg-[#f472b6]/14 border-[#f472b6]/35',
    'Legacy Android (Java)': 'text-[#cbd5e1] bg-[#94a3b8]/14 border-[#94a3b8]/35',
    'Jetpack Compose': 'text-[#86efac] bg-[#4ade80]/14 border-[#4ade80]/35',
    'KMP shared logic': 'text-[#93c5fd] bg-[#60a5fa]/14 border-[#60a5fa]/35'
  };

  const getTechPillClass = (label: string) =>
    techPillClassByLabel[label] ?? 'text-[#cbd5e1] bg-[#334155]/20 border-[#475569]/40';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const start = Date.now();
          const timer = setInterval(() => {
            const now = Date.now();
            const elapsed = now - start;

            setCounts({
              users: Math.min(1000, Math.round((elapsed / 1200) * 1000)),
              perf: Math.min(55, Math.round((elapsed / 1000) * 55)),
              eng: Math.min(7, Math.round((elapsed / 900) * 7)),
              mig: Math.min(7, Math.round((elapsed / 900) * 7))
            });

            if (elapsed >= 1200) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const migrations = [
    { from: 'React Native', to: 'Flutter', note: 'cross-platform consolidation' },
    { from: 'React Native', to: 'Native iOS + Android', note: 'performance-critical rewrite' },
    { from: 'Native iOS + Android', to: 'Flutter', note: 'single codebase, full parity' },
    { from: 'Legacy iOS (ObjC/UIKit)', to: 'SwiftUI', note: 'incremental, zero downtime' },
    { from: 'Legacy Android (Java)', to: 'Jetpack Compose', note: 'module-by-module migration' },
    { from: 'Native iOS + Android', to: 'KMP shared logic', note: 'business layer extraction' },
    { from: 'Native iOS + Android', to: 'React Native', note: 'team velocity optimisation' }
  ];

  return (
    <section id="stats" ref={sectionRef} className="pt-16 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-[960px] mx-auto">
        <div className="font-mono text-[11px] uppercase text-[#93c5fd] tracking-[0.1em] mb-3">
          Impact metrics
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">
          Results That Scaled In Production
        </h2>
        <div className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          12+ years shipping native iOS, Android, and cross-platform products, with measurable gains in performance, reliability, and delivery speed, including 7 end-to-end platform migrations.
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 mb-8">
          {[
            { value: counts.users >= 1000 ? `${(counts.users / 1000).toFixed(1)}M+` : String(counts.users), label: 'Users Served', desc: 'Largest production app shipped across iOS & Android', color: '#4ade80', delay: 0.05 },
            { value: `${counts.perf}%`, label: 'Perf Improvement', desc: 'TTI, crash rate, ANR & app size across multiple apps', color: '#f59e0b', delay: 0.15 },
            { value: String(counts.eng), label: 'Engineers Mentored', desc: 'iOS, Android & Flutter engineers across cross-functional teams', color: '#a78bfa', delay: 0.25 },
            { value: `${counts.mig}+`, label: 'Migrations Led', desc: 'End-to-end platform rewrites across every major mobile stack', color: '#f472b6', delay: 0.35 },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative overflow-hidden glass-2 rounded-2xl p-6 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}10, transparent 65%)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ background: card.color }} />
              <div className="text-[40px] font-black leading-none mb-2" style={{ color: card.color }}>{card.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] mb-3" style={{ color: `${card.color}99` }}>{card.label}</div>
              <div className="text-[12px] text-zinc-300 leading-relaxed">{card.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#111827] border border-[#334155] rounded-xl p-5 mb-4">
          <div className="flex justify-between items-center mb-6">
            <div className="font-mono text-[11px] uppercase text-[#cbd5e1] tracking-[0.08em]">Migration track record</div>
            <div className="font-mono text-[11px] text-[#86efac] bg-[#4ade80]/15 border border-[#4ade80]/35 px-3 py-1 rounded-full">
              7 end-to-end rewrites
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {migrations.map((mig, i) => (
              <div key={i} className="flex items-center gap-2.5 overflow-hidden">
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${getTechPillClass(mig.from)}`}>
                  {mig.from}
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${getTechPillClass(mig.to)}`}>
                  {mig.to}
                </div>
                <div className="font-mono text-[11px] text-[#94a3b8] ml-auto hidden sm:block truncate mig-note">
                  {mig.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center font-mono text-[11px] text-[#94a3b8] pt-1">
          iOS · Android · Flutter · KMP · React Native · SwiftUI · Jetpack Compose → shipped across all
        </div>
      </div>
    </section>
  );
}
