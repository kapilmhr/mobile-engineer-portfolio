import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Clock, ArrowUpRight, Terminal, Copy, Check } from 'lucide-react';

/* ── Live Clock Hook ── */
function useClock(timezone: string = 'Australia/Sydney') {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-AU', {
        timeZone: timezone,
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

/* ── Copy Email Button ── */
function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="group flex items-center space-x-2 font-mono text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
      <span>{email}</span>
      {copied
        ? <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
        : <Copy className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </button>
  );
}

/* ── Main Footer ── */
export default function ContactFooter() {
  const time = useClock('Australia/Sydney');

  const name = 'Kapil Maharjan';
  const role = 'Staff Mobile Engineer';
  const location = 'Sydney, Australia · UTC+10';
  const email = 'kapilmhr016@gmail.com';
  const availability = 'Available · Q3 2026';
  const brandInitials = 'KM';
  const yearsExp = '10+ yrs';

  const links = [
    { label: 'GitHub', href: 'https://github.com/kapilmhr', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kapil-maharjan/', icon: Linkedin },
    { label: 'Email', href: `mailto:${email}`, icon: Mail },
  ];

  const stack = ['Swift · SwiftUI', 'Kotlin · Compose', 'Flutter · Dart', 'KMP · Ktor', 'React Native'];

  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-[var(--background)]">

      {/* ── CTA Band ── */}
      <div className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Headline */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-xs font-mono text-[var(--primary)] uppercase tracking-widest">{availability}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none text-[var(--foreground)] mb-4">
              Let's ship<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">something great.</span>
            </h2>
            <p className="text-[var(--muted-foreground)] text-base max-w-md leading-relaxed mt-5">
              Staff-level mobile engineering for teams building at scale. If you're migrating stacks, optimising performance, or architecting from scratch — let's talk.
            </p>
          </div>

          {/* Right — Terminal Card + CTA Button */}
          <div className="flex flex-col space-y-4">

            {/* Terminal Card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
              {/* Title bar with traffic lights */}
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--secondary)]/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <Terminal className="w-3 h-3 text-[var(--muted-foreground)] ml-2" />
                <span className="text-[10px] font-mono text-[var(--muted-foreground)]">contact.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3">
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">whoami</span>
                  <p className="text-[var(--foreground)] mt-1 ml-2">{name} — {role}</p>
                </div>
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">cat location.txt</span>
                  <p className="text-[var(--foreground)] mt-1 ml-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                    {location}
                    <span className="flex items-center gap-1 text-[var(--muted-foreground)] text-[10px]">
                      <Clock className="w-3 h-3" />{time}
                    </span>
                  </p>
                </div>
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">echo $EMAIL</span>
                  <div className="mt-1 ml-2">
                    <CopyEmail email={email} />
                  </div>
                </div>

                {/* Social link pills */}
                <div className="flex items-center space-x-3 pt-2 border-t border-[var(--border)]">
                  {links.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] text-[var(--muted-foreground)] text-xs font-mono transition-colors group">
                      <Icon className="w-3 h-3" />
                      <span>{label}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary CTA button */}
            <a href={`mailto:${email}`}
              className="w-full py-3.5 bg-[var(--primary)] text-[var(--primary-foreground)] font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-all text-sm text-center shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/30 hover:-translate-y-0.5 transform duration-200 flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col space-y-1">
            <div className="text-2xl font-bold font-mono tracking-tighter text-[var(--foreground)]">
              {brandInitials}<span className="text-[var(--primary)]">.</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">{role} · {yearsExp}</span>
          </div>

          {/* Stack strip (hidden on small screens) */}
          <div className="hidden lg:flex items-center space-x-2">
            {stack.map((s, i) => (
              <React.Fragment key={s}>
                <span className="text-[10px] font-mono text-[var(--muted-foreground)]">{s}</span>
                {i < stack.length - 1 && <span className="text-[var(--border)] text-[10px]">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright + links */}
          <div className="flex items-center space-x-4 text-[11px] font-mono text-[var(--muted-foreground)]">
            <span>© {new Date().getFullYear()} {name}</span>
            <span className="text-[var(--border)]">·</span>
            {links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)] transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
