import { motion } from 'motion/react';
import { ExternalLink, Layers, Play, ShieldCheck } from 'lucide-react';

export function ThoughtLeadershipSection() {
  const items = [
    {
      type: 'Conference Talk',
      title: 'Navigating the KMP Migration Minefield',
      event: 'Droidcon / iOS Conf',
      year: '2024',
      link: '#',
      icon: Play,
      iconClass: 'text-cyan-400',
    },
    {
      type: 'Article',
      title: 'Why We Chose Flutter for the Enterprise Rewrite',
      event: 'External Engineering Blog',
      year: '2023',
      link: '#',
      icon: ExternalLink,
      iconClass: 'text-green-400',
    },
    {
      type: 'Architecture Decision (ADR)',
      title: 'ADR-014: Unified State Management across iOS & Android',
      event: 'Internal Engineering Wiki',
      year: '2023',
      link: '#',
      icon: ShieldCheck,
      iconClass: 'text-purple-400',
    },
    {
      type: 'RFC',
      title: 'RFC-089: Modularizing the Monolith for 50+ Engineers',
      event: 'Internal RFC Process',
      year: '2022',
      link: '#',
      icon: Layers,
      iconClass: 'text-amber-400',
    },
  ];

  return (
    <section id="thought-leadership" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] uppercase text-[#93c5fd] tracking-[0.1em] mb-3">
            // publications, talks, and architecture notes
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">Technical Notes</h2>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            Conference talks, engineering articles, and key ADR/RFC artifacts that document how complex mobile platform decisions were made and shipped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group relative flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  <item.icon size={18} className={item.iconClass} />
                </div>
                <span className="font-mono text-[10px] text-zinc-500 px-2 py-1 rounded-full border border-white/10 bg-black/50">
                  {item.year}
                </span>
              </div>

              <div className="font-mono text-[10px] text-zinc-400 mb-2 uppercase tracking-wider">{item.type}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 mt-auto pt-4">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
