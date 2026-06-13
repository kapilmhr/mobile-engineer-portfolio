import { motion } from 'motion/react';
import { ExternalLink, Github, GitFork, Star } from 'lucide-react';

export function OpenSourceSection() {
  const projects = [
    {
      name: 'Hatch',
      description: 'A comprehensive developer tool aimed at improving mobile workflow and productivity. Resolves the architectural bottleneck of inconsistent local development environments across teams.',
      url: 'https://github.com/kapilmhr/hatch',
      language: 'Flutter'
    },
    {
      name: 'Easy Folder Picker',
      description: 'A seamless and highly customizable folder picker utility. Solves the real-world problem of fragmented file system access and permissions across different mobile OS versions.',
      url: 'https://github.com/kapilmhr/Easy-Folder-Picker',
      language: 'Flutter'
    },
    {
      name: 'iOS SwiftUI Skills',
      description: 'Claude, Cursor and Copilot skills that teach AI assistants iOS development best practices across Swift, SwiftUI, scope-based MVVM architecture, @Observable, async/await, NavigationStack and production app patterns.',
      url: 'https://github.com/kapilmhr/ios26-swiftui-skills',
      language: 'Skills'
    }
  ];

  return (
    <section id="oss" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="font-mono text-[11px] uppercase text-[#93c5fd] tracking-[0.1em] mb-3">
            Open source work
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">
                Open Source Publication
              </h2>
              <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed max-w-2xl">
                Tools built from real engineering pain points to improve developer workflow, reliability, and cross-platform delivery.
              </p>
            </div>
            <a href="https://github.com/kapilmhr" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-[#93c5fd] hover:text-[#bfdbfe] transition-colors font-mono text-xs shrink-0">
              View GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900/40 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#93c5fd]/5 rounded-full blur-2xl group-hover:bg-[#93c5fd]/10 transition-colors" />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Github className="text-white/70 transition-colors" size={20} />
                </div>
                <div className="flex gap-3 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1"><Star size={13} /></div>
                  <div className="flex items-center gap-1"><GitFork size={13} /></div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-[var(--primary)] transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 relative z-10 flex-1">
                {project.description}
              </p>

              <div className="flex items-center justify-between relative z-10 mt-auto">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                  {project.language}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-white hover:text-[#93c5fd] transition-colors"
                >
                  Repository <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <a href="https://github.com/kapilmhr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#93c5fd] hover:text-[#bfdbfe] transition-colors font-mono text-xs">
            View GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
