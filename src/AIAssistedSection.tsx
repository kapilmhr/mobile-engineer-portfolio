import { motion } from 'motion/react';
import { Boxes, FlaskConical, Workflow, Sparkles } from 'lucide-react';

export function AIAssistedSection() {
  const items = [
    {
      type: 'Skills & Architecture',
      title: 'Agent skills for design systems',
      detail: 'Scope-based MVVM · DI · modular boundaries',
      tag: 'Skills',
      icon: Boxes,
      iconClass: 'text-cyan-400',
    },
    {
      type: 'Testing',
      title: 'AI-drafted unit & integration tests',
      detail: 'XCTest · JUnit · widget tests',
      tag: 'QA',
      icon: FlaskConical,
      iconClass: 'text-green-400',
    },
    {
      type: 'CI / CD',
      title: 'Pipelines & release automation',
      detail: 'Fastlane · GitHub Actions',
      tag: 'DevOps',
      icon: Workflow,
      iconClass: 'text-purple-400',
    },
    {
      type: 'Feature Delivery',
      title: 'Feature development at pace',
      detail: 'iOS · Android · Flutter · RN',
      tag: 'Velocity',
      icon: Sparkles,
      iconClass: 'text-amber-400',
    },
  ];

  return (
    <section id="ai-assisted" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] uppercase text-[#93c5fd] tracking-[0.1em] mb-3">
            // how i work — ai across the mobile stack
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">AI-Assisted Mobile Engineering</h2>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            I'm an AI-assisted mobile engineer: I build and use AI coding agents — Claude, Cursor and GitHub Copilot — to ship production iOS, Android, Flutter, KMP and React Native faster, without trading away architecture or quality.
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
                  {item.tag}
                </span>
              </div>

              <div className="font-mono text-[10px] text-zinc-400 mb-2 uppercase tracking-wider">{item.type}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 mt-auto pt-4">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
