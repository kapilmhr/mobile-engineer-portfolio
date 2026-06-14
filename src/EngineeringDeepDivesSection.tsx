import { motion } from 'motion/react';
import { useState, useRef, useEffect, PointerEvent } from 'react';
import { Play, RefreshCw, Shield, WifiOff } from 'lucide-react';

export function EngineeringDeepDivesSection() {
  return (
    <section id="problems" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase text-[#60a5fa] tracking-[0.1em] mb-3">
            Engineering Deep Dives
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">
            Solving Hard Mobile Problems
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            Beyond high-level architecture, true engineering happens in the details. Explore interactive deep dives into offline sync, zero-trust auth, and startup performance.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          <OfflineSyncDiagram />
          <AuthSequenceDiagram />
          <StartupPerformanceDiagram />
        </div>
      </div>
    </section>
  );
}

function OfflineSyncDiagram() {
  const [isOnline, setIsOnline] = useState(true);
  const [pendingMutations, setPendingMutations] = useState(0);
  const [isFlushing, setIsFlushing] = useState(false);
  const [particles, setParticles] = useState<{ id: number; path: string; color: string; dur: string }[]>([]);
  const [uiFlash, setUiFlash] = useState(false);
  const [mqFlash, setMqFlash] = useState(false);

  const spawnParticle = (path: string, color: string, dur: string) => {
    const id = Date.now() + Math.random();
    setParticles(prev => [...prev, { id, path, color, dur }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, parseFloat(dur) * 1000 + 100);
  };

  const toggleNetwork = () => {
    if (!isOnline) {
      setIsOnline(true);
      if (pendingMutations > 0) {
        setIsFlushing(true);
        for (let i = 0; i < Math.min(pendingMutations, 10); i++) {
          setTimeout(() => {
            spawnParticle('M 410 200 L 480 200', '#15803d', '0.9s');
          }, i * 150);
        }
        setTimeout(() => {
          setPendingMutations(0);
          setIsFlushing(false);
        }, 2000);
      }
    } else {
      setIsOnline(false);
    }
  };

  const simulateMutation = () => {
    if (isOnline) {
      spawnParticle('M 410 200 L 480 200', '#15803d', '0.9s');
      setUiFlash(true);
      setTimeout(() => setUiFlash(false), 300);
    } else {
      spawnParticle('M 130 120 L 230 180', '#b45309', '0.7s');
      setPendingMutations(prev => prev + 1);
      setMqFlash(true);
      setTimeout(() => setMqFlash(false), 300);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full bg-[#0d0f14] p-6 md:p-10 rounded-3xl border border-white/10"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <style>{`
        .font-mono-jb { font-family: 'JetBrains Mono', monospace; }
        .flow-line { fill: none; stroke-width: 2; stroke-dasharray: 6 6; animation: dash 20s linear infinite; }
        .flow-line.solid { stroke-dasharray: none; animation: none; }
        .flow-line.slow { animation: dash 40s linear infinite; }
        .flow-line.reverse { animation: dash-reverse 20s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
        @keyframes dash-reverse { to { stroke-dashoffset: 1000; } }
        .pulse-shadow { animation: pulse-shadow 1.5s infinite; }
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 0 0 rgba(252, 165, 165, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(252, 165, 165, 0); }
          100% { box-shadow: 0 0 0 0 rgba(252, 165, 165, 0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1d4ed8]/15 text-[#93c5fd] border border-[#1d4ed8]/30">Architecture</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#15803d]/15 text-[#4ade80] border border-[#15803d]/30">Offline-First</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7c3aed]/15 text-[#c4b5fd] border border-[#7c3aed]/30">CRDT Resolution</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#b45309]/15 text-[#fbbf24] border border-[#b45309]/30">Optimistic UI</span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">Offline-First Sync & CRDT Resolution</h3>
      <div className="text-[#9ca3af] text-sm mb-8 font-mono-jb">// Optimistic UI updates with background mutation queueing</div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button onClick={toggleNetwork} className="bg-[#161b27] border border-gray-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-[#4ade80] shadow-[0_0_8px_#4ade80]' : 'bg-[#fca5a5] shadow-[0_0_8px_#fca5a5] pulse-shadow'}`} />
          Network: {isOnline ? 'Online' : 'Offline'}
        </button>
        <button onClick={simulateMutation} className="bg-[#161b27] border border-gray-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
          + Simulate mutation
        </button>
        {(!isOnline && pendingMutations > 0) && (
          <div className="px-4 py-1.5 rounded-full text-[13px] font-semibold font-mono-jb bg-[#fbbf24]/10 border border-[#fbbf24]/25 text-[#fbbf24] flex items-center">
            ⏳ {pendingMutations} mutations queued
          </div>
        )}
        {(isOnline && isFlushing) && (
          <div className="px-4 py-1.5 rounded-full text-[13px] font-semibold font-mono-jb bg-[#4ade80]/10 border border-[#4ade80]/25 text-[#4ade80] flex items-center">
            ✅ Flushing {pendingMutations} mutations...
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 bg-[#161b27] p-3 px-5 rounded-xl mb-6 border border-gray-800">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0.5 bg-[#15803d]"></div> Mutation flow (online)
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0 border-b-2 border-dashed border-[#1d4ed8]"></div> DB sync / schema replication
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0.5 bg-[#7c3aed]"></div> CRDT resolution pipeline
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0 border-b-2 border-dashed border-[#b91c1c]"></div> Blocked (offline)
        </div>
      </div>

      {/* Diagram Container */}
      <div className="bg-[#161b27] border border-gray-800 rounded-2xl p-6 mb-8 overflow-x-auto">
        <svg viewBox="0 0 900 400" className="min-w-[800px] w-full h-auto block">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1d4ed8" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#15803d" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
            </marker>
          </defs>

          {/* Regions */}
          <rect x="10" y="10" width="420" height="380" rx="12" stroke="#1e3a5f" strokeDasharray="8 4" fill="transparent" strokeWidth="2" />
          <text x="30" y="35" fill="#1e3a5f" fontSize="12" fontWeight="bold" letterSpacing="2" className="font-mono-jb">MOBILE CLIENT</text>

          <rect x="450" y="10" width="440" height="380" rx="12" stroke="#3d2e5e" strokeDasharray="8 4" fill="transparent" strokeWidth="2" />
          <text x="470" y="35" fill="#3d2e5e" fontSize="12" fontWeight="bold" letterSpacing="2" className="font-mono-jb">CLOUD INFRASTRUCTURE</text>

          {/* Cloud Overlay */}
          <rect x="450" y="10" width="440" height="380" rx="12" fill="#000" opacity={isOnline ? 0 : 0.55} style={{ transition: 'opacity 0.3s' }} />

          {/* Flow Lines */}
          <path d="M 130 120 L 230 180" className="flow-line" stroke="#b45309" markerEnd="url(#arrow-amber)" />
          <text x="190" y="140" fill="#fbbf24" fontSize="10" className="font-mono-jb" transform="rotate(28, 190, 140)">optimistic write</text>
          
          <path d="M 130 120 L 130 280" className="flow-line slow" stroke="#1d4ed8" markerEnd="url(#arrow-blue)" />
          <text x="140" y="200" fill="#93c5fd" fontSize="10" className="font-mono-jb">local cache</text>

          {/* Line 3: MQ -> API Gateway */}
          <g opacity={isOnline ? 1 : 0} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 410 200 L 480 200" className="flow-line solid" stroke="#15803d" markerEnd="url(#arrow-green)" />
            <text x="445" y="160" fill="#4ade80" fontSize="10" className="font-mono-jb" textAnchor="middle">flush mutations</text>
          </g>

          {/* Blocked Line */}
          <g opacity={isOnline ? 0 : 1} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 410 200 L 480 200" fill="none" stroke="#b91c1c" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="445" cy="200" r="8" fill="#0d0f14" stroke="#b91c1c" strokeWidth="2" />
            <path d="M 441 196 L 449 204 M 449 196 L 441 204" stroke="#b91c1c" strokeWidth="2" />
          </g>

          {/* Line 4, 5, 6, 7 */}
          <g opacity={isOnline ? 1 : 0} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 570 165 C 570 100, 690 100, 690 85" className="flow-line solid" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="630" y="110" fill="#c4b5fd" fontSize="10" className="font-mono-jb" textAnchor="middle">resolve conflicts</text>

            <path d="M 750 120 L 750 280" className="flow-line solid" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="680" y="220" fill="#c4b5fd" fontSize="10" className="font-mono-jb">write resolved state</text>

            <path d="M 220 315 L 690 315" className="flow-line slow" stroke="#1d4ed8" markerEnd="url(#arrow-blue)" />
            <text x="450" y="305" fill="#93c5fd" fontSize="10" className="font-mono-jb" textAnchor="middle">schema mirrors (via Sync Engine)</text>

            <path d="M 810 280 L 810 120" className="flow-line solid reverse" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="820" y="180" fill="#c4b5fd" fontSize="10" className="font-mono-jb">ack</text>
          </g>

          {/* Nodes */}
          <rect x="40" y="50" width="180" height="70" rx="10" fill="#0d0f14" stroke={uiFlash ? '#15803d' : '#1d4ed8'} strokeWidth="2" style={{ transition: 'stroke 0.3s' }} />
          <text x="130" y="80" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">React Native UI</text>
          <text x="130" y="100" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">Optimistic updates</text>

          <rect x="40" y="280" width="180" height="70" rx="10" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="2" />
          <text x="130" y="305" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">SQLite</text>
          <text x="130" y="320" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">Room (Android)</text>
          <text x="130" y="335" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">FMDB / CoreData (iOS)</text>

          <rect x="230" y="165" width="180" height="70" rx="10" fill="#0d0f14" stroke={mqFlash ? '#fff' : '#b45309'} strokeWidth="2" style={{ transition: 'stroke 0.3s' }} />
          <text x="320" y="195" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Mutation Queue</text>
          <text x="320" y="215" textAnchor="middle" fill="#fbbf24" fontSize="10" className="font-mono-jb">persisted to disk</text>
          <text x="320" y="155" textAnchor="middle" fill="#fbbf24" fontSize="12" className="font-mono-jb" opacity={isOnline ? 0 : 1} style={{ transition: 'opacity 0.3s' }}>Queueing...</text>

          <rect x="480" y="165" width="180" height="70" rx="10" fill="#0d0f14" stroke="#15803d" strokeWidth="2" />
          <text x="570" y="195" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">API Gateway</text>
          <text x="570" y="215" textAnchor="middle" fill="#4ade80" fontSize="10" className="font-mono-jb">Auth + rate limiting</text>

          <rect x="690" y="50" width="180" height="70" rx="10" fill="#0d0f14" stroke="#7c3aed" strokeWidth="2" />
          <text x="780" y="75" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Sync Engine</text>
          <text x="780" y="95" textAnchor="middle" fill="#c4b5fd" fontSize="10" className="font-mono-jb">CRDT merge logic</text>
          <text x="780" y="110" textAnchor="middle" fill="#c4b5fd" fontSize="10" className="font-mono-jb">vector clocks</text>
          <rect x="690" y="50" width="180" height="70" rx="10" fill="none" stroke="#7c3aed" strokeWidth="2">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </rect>

          <rect x="690" y="280" width="180" height="70" rx="10" fill="#0d0f14" stroke="#b91c1c" strokeWidth="2" />
          <text x="780" y="310" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">PostgreSQL</text>
          <text x="780" y="330" textAnchor="middle" fill="#fca5a5" fontSize="10" className="font-mono-jb">source of truth</text>
          <text x="780" y="345" textAnchor="middle" fill="#fca5a5" fontSize="10" className="font-mono-jb">CRDT state columns</text>

          {/* Step Number Badges */}
          <g transform="translate(145, 135)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#b45309" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#fbbf24" fontSize="10" textAnchor="middle" className="font-mono-jb">1</text>
          </g>
          <g transform="translate(130, 150)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#93c5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">2</text>
          </g>
          <g transform="translate(425, 200)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#15803d" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#4ade80" fontSize="10" textAnchor="middle" className="font-mono-jb">3</text>
          </g>
          <g transform="translate(585, 140)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#c4b5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">4</text>
          </g>
          <g transform="translate(750, 150)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#c4b5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">5</text>
          </g>
          <g transform="translate(250, 315)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#93c5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">6</text>
          </g>

          {/* Particles */}
          {particles.map(p => (
            <circle key={p.id} r="5" fill={p.color}>
              <animateMotion path={p.path} dur={p.dur} fill="freeze" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={p.dur} fill="freeze" />
            </circle>
          ))}
        </svg>
      </div>

      {/* Description Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#fbbf24] font-bold mb-3 text-base">① Optimistic UI Write</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>UI updates instantly without waiting for network response.</li>
            <li>Mutations are serialized with unique UUIDs.</li>
            <li>Written simultaneously to the local SQLite database.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#93c5fd] font-bold mb-3 text-base">② Local Cache (SQLite)</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Uses Room (Android) or CoreData/FMDB (iOS) for persistence.</li>
            <li>Schema mirrors the cloud database structure.</li>
            <li>Serves as the primary read cache post-sync.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#4ade80] font-bold mb-3 text-base">③ Mutation Flush → API Gateway</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Flushes queue immediately when online.</li>
            <li>Accumulates mutations safely to disk when offline.</li>
            <li>Gateway enforces auth, rate limits, and payload validation.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#c4b5fd] font-bold mb-3 text-base">④⑤ CRDT Resolution → PostgreSQL</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Sync Engine applies CRDT merge logic to resolve conflicts.</li>
            <li>Utilizes vector clocks to determine causality.</li>
            <li>Writes the final resolved state to PostgreSQL source of truth.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function AuthSequenceDiagram() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const particlesGroupRef = useRef<SVGGElement>(null);
  const timerRef = useRef<number | null>(null);

  const STEP_DURATION = 1600;
  const PAUSE_AFTER_LAST = 3200;
  const TOTAL_STEPS = 7;

  const steps = [
    {
      id: 0,
      title: "PRE: PKCE Setup",
      color: "#a78bfa",
      desc: "App generates a random code_verifier and derives the S256 code_challenge. Both stay on the device for now."
    },
    {
      id: 1,
      title: "1. Prompt Biometric",
      color: "#60a5fa",
      desc: "App requests biometric authentication. The Secure Enclave (SEP/StrongBox) is activated. The private key never leaves the hardware."
    },
    {
      id: 2,
      title: "2. Return Signed Challenge",
      color: "#c084fc",
      desc: "The Secure Enclave signs the challenge using the hardware-bound private key and returns the assertion to the App."
    },
    {
      id: 3,
      title: "3. PKCE + Signed Challenge",
      color: "#4ade80",
      desc: "App sends the PKCE challenge and the biometric signature directly to the Auth Server, bypassing the Enclave."
    },
    {
      id: 4,
      title: "4. Access JWT + Refresh Token",
      color: "#f472b6",
      desc: "Server validates the signature and PKCE, then returns a short-lived JWT (15 min TTL) and a rotating refresh token."
    },
    {
      id: 5,
      title: "5. Store in Keystore / Keychain",
      color: "#fbbf24",
      desc: "Tokens are securely stored in the hardware-backed Keystore (Android) or Keychain (iOS), encrypted at rest."
    },
    {
      id: 6,
      title: "Alt / Failure Paths",
      color: "#f87171",
      desc: "If biometrics fail, the attempt is aborted. If the JWT expires, a silent refresh rotates tokens. If the refresh token expires, full re-auth is required."
    }
  ];

  const spawnParticle = (pathD: string, color: string, duration: string) => {
    if (!particlesGroupRef.current) return;
    const svgNS = "http://www.w3.org/2000/svg";
    const particle = document.createElementNS(svgNS, "circle");
    particle.setAttribute("r", "4");
    particle.setAttribute("fill", color);

    const motion = document.createElementNS(svgNS, "animateMotion");
    motion.setAttribute("path", pathD);
    motion.setAttribute("dur", duration);
    motion.setAttribute("fill", "freeze");

    const fade = document.createElementNS(svgNS, "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("values", "1;1;0");
    fade.setAttribute("keyTimes", "0;0.8;1");
    fade.setAttribute("dur", duration);
    fade.setAttribute("fill", "freeze");

    particle.appendChild(motion);
    particle.appendChild(fade);
    particlesGroupRef.current.appendChild(particle);

    // @ts-ignore
    motion.beginElement();
    // @ts-ignore
    fade.beginElement();

    setTimeout(() => {
      if (particlesGroupRef.current && particlesGroupRef.current.contains(particle)) {
        particlesGroupRef.current.removeChild(particle);
      }
    }, parseFloat(duration) * 1000 + 100);
  };

  const executeStep = (step: number) => {
    if (!svgRef.current) return;
    const svg = svgRef.current;

    // Helper to toggle visibility
    const show = (selector: string, condition: boolean) => {
      svg.querySelectorAll(selector).forEach(el => {
        el.setAttribute('opacity', condition ? '1' : '0');
      });
    };

    // Step 0
    show('.step-0', step >= 0);
    
    // Step 1
    show('.step-1', step >= 1);
    if (step === 1) spawnParticle("M 141 158 L 420 158", "#60a5fa", "0.7s");

    // Step 2
    show('.step-2', step >= 2);
    if (step === 2) spawnParticle("M 420 218 L 141 218", "#c084fc", "0.7s");

    // Step 3
    show('.step-3', step >= 3);
    if (step === 3) spawnParticle("M 141 278 L 719 278", "#4ade80", "0.7s");

    // Step 4
    show('.step-4', step >= 4);
    if (step === 4) spawnParticle("M 719 340 L 141 340", "#f472b6", "0.7s");

    // Step 5
    show('.step-5', step >= 5);
    if (step === 5) spawnParticle("M 141 393 L 420 393", "#fbbf24", "0.7s");

    // Step 6
    show('.step-6', step >= 6);
  };

  useEffect(() => {
    if (isPlaying) {
      executeStep(currentStep);
      timerRef.current = window.setTimeout(() => {
        if (currentStep < TOTAL_STEPS - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          timerRef.current = window.setTimeout(() => {
            setCurrentStep(0);
          }, PAUSE_AFTER_LAST);
        }
      }, STEP_DURATION);
    } else {
      executeStep(currentStep);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentStep, isPlaying]);

  const handleRestart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleJump = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStep(index);
    setIsPlaying(false);
  };

  return (
    <motion.div 
      id="zero-trust-auth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative w-full bg-[#161b27] rounded-3xl border border-[#1e2a3a] p-6 md:p-10 overflow-hidden"
    >
      {/* Badge Row */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">OAuth2</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">PKCE</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Biometric</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Zero-Trust</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#f1f5f9]">Zero-Trust Auth Sequence (OAuth2 + PKCE)</h3>
        <p className="text-[#94a3b8] text-sm mt-2 font-mono">// Secure biometric login with hardware-backed keystore and token rotation</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-black/30 p-4 rounded-xl border border-[#1e2a3a]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e2a3a] hover:bg-[#2a3b52] text-white transition-colors"
          >
            {isPlaying ? <div className="w-3 h-3 border-l-2 border-r-2 border-white" /> : <Play size={16} className="ml-1" />}
          </button>
          <button 
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a3a] hover:bg-[#2a3b52] text-white text-sm font-medium transition-colors"
          >
            <RefreshCw size={14} /> Restart
          </button>
        </div>
        <div className="text-sm font-mono text-[#94a3b8]">
          Status: <span style={{ color: steps[currentStep].color }}>{steps[currentStep].title}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-1 bg-[#1e2a3a] rounded-full mb-12">
        <div 
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${(currentStep / (TOTAL_STEPS - 1)) * 100}%`,
            backgroundColor: steps[currentStep].color 
          }}
        />
        <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 px-1">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => handleJump(i)}
              className="w-4 h-4 rounded-full border-2 border-[#161b27] transition-colors z-10"
              style={{
                backgroundColor: i <= currentStep ? step.color : '#1e2a3a',
                transform: i === currentStep ? 'scale(1.2)' : 'scale(1)'
              }}
              title={step.title}
            />
          ))}
        </div>
      </div>

      {/* Diagram Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 overflow-x-auto">
          <svg ref={svgRef} viewBox="0 0 860 500" className="w-full min-w-[700px] h-auto font-mono">
            <defs>
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
              </marker>
              <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc" />
              </marker>
              <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
              </marker>
              <marker id="arrow-pink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f472b6" />
              </marker>
              <marker id="arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
              </marker>
              <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f87171" />
              </marker>
            </defs>

            {/* Highlight Band */}
            <rect 
              x="0" 
              y={currentStep === 0 ? 90 : currentStep === 1 ? 138 : currentStep === 2 ? 198 : currentStep === 3 ? 258 : currentStep === 4 ? 320 : currentStep === 5 ? 373 : 410} 
              width="860" 
              height={currentStep === 0 ? 40 : currentStep === 6 ? 80 : 40} 
              fill={steps[currentStep].color} 
              opacity="0.05" 
              className="transition-all duration-300"
              rx="8"
            />

            {/* Lifelines */}
            <line x1="135" y1="60" x2="135" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="426" y1="60" x2="426" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="727" y1="60" x2="727" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />

            {/* Actors */}
            <g transform="translate(55, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="2" />
              <text x="80" y="22" fill="#93c5fd" fontSize="14" fontWeight="bold" textAnchor="middle">Mobile App</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">iOS / Android</text>
            </g>

            <g transform="translate(346, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#7c3aed" strokeWidth="2" />
              <text x="80" y="22" fill="#c4b5fd" fontSize="14" fontWeight="bold" textAnchor="middle">Secure Enclave</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">SEP / StrongBox</text>
            </g>

            <g transform="translate(647, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#15803d" strokeWidth="2" />
              <text x="80" y="22" fill="#4ade80" fontSize="14" fontWeight="bold" textAnchor="middle">Auth Server</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">OAuth2 + PKCE</text>
            </g>

            {/* Step 0: PRE */}
            <g className="step-0 transition-opacity duration-300">
              <rect x="75" y="100" width="120" height="24" rx="4" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1" />
              <text x="135" y="116" fill="#a78bfa" fontSize="10" textAnchor="middle">PRE: generate code_verifier + S256</text>
            </g>

            {/* Step 1: Prompt Biometric */}
            <g className="step-1 transition-opacity duration-300">
              <path d="M 141 158 L 414 158" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow-blue)" />
              <text x="280" y="150" fill="#60a5fa" fontSize="12" textAnchor="middle">1. Prompt Biometric</text>
              <circle cx="280" cy="158" r="3" fill="#60a5fa" />
              <rect x="420" y="148" width="12" height="44" rx="2" fill="rgba(167,139,250,0.22)" stroke="#7c3aed" strokeWidth="1" />
            </g>

            {/* Step 2: Return Signed Challenge */}
            <g className="step-2 transition-opacity duration-300">
              <path d="M 420 218 L 147 218" fill="none" stroke="#c084fc" strokeWidth="2" markerEnd="url(#arrow-purple)" />
              <text x="280" y="210" fill="#c084fc" fontSize="12" textAnchor="middle">2. Return Signed Challenge</text>
              <rect x="129" y="208" width="12" height="38" rx="2" fill="rgba(96,165,250,0.2)" stroke="#1d4ed8" strokeWidth="1" />
            </g>

            {/* Step 3: PKCE + Signed Challenge */}
            <g className="step-3 transition-opacity duration-300">
              <path d="M 141 278 L 713 278" fill="none" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="280" y="270" fill="#4ade80" fontSize="12" textAnchor="middle">3. PKCE + Signed Challenge</text>
              
              {/* Bypass Indicator */}
              <circle cx="426" cy="278" r="5" fill="#0d0f14" stroke="#4ade80" strokeWidth="2" />
              <text x="426" y="292" fill="#4ade80" fontSize="9" textAnchor="middle">bypasses enclave</text>
              
              <rect x="721" y="262" width="12" height="46" rx="2" fill="rgba(74,222,128,0.2)" stroke="#15803d" strokeWidth="1" />
            </g>

            {/* Step 4: Access JWT + Refresh Token */}
            <g className="step-4 transition-opacity duration-300">
              <path d="M 721 340 L 147 340" fill="none" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrow-pink)" />
              <text x="580" y="332" fill="#f472b6" fontSize="12" textAnchor="middle">4. Access JWT + Refresh Token</text>
              
              {/* Bypass Indicator */}
              <circle cx="426" cy="340" r="5" fill="#0d0f14" stroke="#f472b6" strokeWidth="2" />
              <text x="426" y="354" fill="#f472b6" fontSize="9" textAnchor="middle">bypasses enclave</text>
              
              <rect x="129" y="324" width="12" height="38" rx="2" fill="rgba(96,165,250,0.2)" stroke="#1d4ed8" strokeWidth="1" />
            </g>

            {/* Step 5: Store in Keystore */}
            <g className="step-5 transition-opacity duration-300">
              <path d="M 141 393 L 414 393" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow-yellow)" />
              <text x="280" y="385" fill="#fbbf24" fontSize="12" textAnchor="middle">5. Store in Keystore / Keychain</text>
              <rect x="420" y="382" width="12" height="38" rx="2" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" strokeWidth="1" />
            </g>

            {/* Step 6: Alt / Failure Paths */}
            <g className="step-6 transition-opacity duration-300">
              <rect x="44" y="420" width="772" height="62" rx="8" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="6 4" />
              <text x="54" y="436" fill="#f87171" fontSize="10" fontWeight="bold">ALT / FAILURE PATHS</text>
              
              <path d="M 420 445 L 147 445" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-red)" />
              <text x="280" y="440" fill="#f87171" fontSize="10" textAnchor="middle">biometric fail → abort, clear attempt</text>

              <path d="M 721 465 L 147 465" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-red)" />
              <text x="430" y="460" fill="#f87171" fontSize="10" textAnchor="middle">JWT expiry → refresh_token rotation → re-issue</text>
            </g>

            {/* Particles Group */}
            <g ref={particlesGroupRef} id="particles"></g>
          </svg>
        </div>

        {/* Live Info Card */}
        <div className="flex flex-col">
          <div 
            className="flex-1 rounded-xl p-6 border-l-4 transition-all duration-300"
            style={{ 
              backgroundColor: `${steps[currentStep].color}10`,
              borderColor: steps[currentStep].color
            }}
          >
            <h4
              className="text-lg font-bold mb-4 transition-colors duration-300"
              style={{ color: steps[currentStep].color }}
            >
              {steps[currentStep].title}
            </h4>
            <p className="text-[#f1f5f9] leading-relaxed text-sm">
              {steps[currentStep].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Static Note Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0d0f14] border border-[#1e2a3a] rounded-xl p-6">
          <h4 className="text-[#c084fc] font-bold mb-4 flex items-center gap-2">
            <Shield size={18} /> PKCE (S256 Method)
          </h4>
          <ul className="space-y-3 text-sm text-[#94a3b8]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span><code className="text-[#c4b5fd] bg-[#c084fc]/10 px-1 rounded">code_verifier</code> = random 43–128 char secret, generated and kept on device.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span><code className="text-[#c4b5fd] bg-[#c084fc]/10 px-1 rounded">code_challenge</code> = BASE64URL(SHA256(verifier)) sent to server initially.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span>Intercepted auth codes are useless without the original verifier.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#0d0f14] border border-[#1e2a3a] rounded-xl p-6">
          <h4 className="text-[#f87171] font-bold mb-4 flex items-center gap-2">
            <WifiOff size={18} /> Failure Paths
          </h4>
          <ul className="space-y-3 text-sm text-[#94a3b8]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>Biometric fail:</strong> Enclave rejects signature request → abort, clear challenge.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>JWT expiry:</strong> Silent refresh → server rotates both access and refresh tokens.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>Refresh expiry:</strong> Full re-auth required, biometric re-prompt from step 1.</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function StartupPerformanceDiagram() {
  const [isOptimised, setIsOptimised] = useState(true);
  const [scrubberPos, setScrubberPos] = useState(290);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setScrubberPos(isOptimised ? 290 : 650);
  }, [isOptimised]);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateScrubber(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateScrubber(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updateScrubber = (clientX: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // SVG viewBox is 0 0 860 260, width is 100%
    const scale = 860 / rect.width;
    const svgX = x * scale;
    // timeline starts at 120px (0ms)
    const msPerPx = 1; // 1px = 1ms
    let ms = Math.round((svgX - 120) / msPerPx);
    // snap to 10ms
    ms = Math.round(ms / 10) * 10;
    const maxMs = isOptimised ? 550 : 700;
    ms = Math.max(0, Math.min(ms, maxMs));
    setScrubberPos(ms);
  };

  const tasks = [
    { id: 'os', name: 'OS Init', start: 0, end: 80, thread: 'Main Thread', color: '#ef4444', subtitle: 'cold start', critical: true, platform: 'dyld on iOS, ART on Android' },
    { id: 'di', name: 'DI Setup', start: 80, end: 160, thread: 'Main Thread', color: '#f59e0b', subtitle: 'Dagger/Hilt', critical: true, platform: 'Dagger/Hilt on Android' },
    { id: 'ui', name: 'UI Render', start: 160, end: isOptimised ? 260 : 300, thread: 'Main Thread', color: '#3b82f6', subtitle: 'inflate & draw', critical: true, platform: 'Compose / SwiftUI' },
    { id: 'db', name: 'Local DB Hydration', start: isOptimised ? 80 : 300, end: isOptimised ? 220 : 430, thread: isOptimised ? 'Background' : 'Main Thread', color: '#a855f7', subtitle: 'SQLite warm-up', badge: isOptimised ? 'non-blocking' : '', critical: !isOptimised, platform: 'Room / CoreData' },
    { id: 'api', name: 'Prefetch API Data', start: isOptimised ? 160 : 430, end: isOptimised ? 360 : 570, thread: isOptimised ? 'Network' : 'Main Thread', color: '#06b6d4', subtitle: 'URLSession/OkHttp', badge: isOptimised ? 'non-blocking' : '', critical: !isOptimised, platform: 'OkHttp / URLSession' },
    { id: 'analytics', name: 'Analytics Init', start: isOptimised ? 290 : 570, end: isOptimised ? 430 : 650, thread: isOptimised ? 'Background' : 'Main Thread', color: '#6b7280', subtitle: 'Firebase/Amplitude', badge: isOptimised ? 'deferred ✓' : '', critical: !isOptimised, platform: 'Firebase SDK' },
  ];

  const getThreadY = (thread: string) => {
    if (thread === 'Main Thread') return 50;
    if (thread === 'Background') return 110;
    if (thread === 'Network') return 170;
    return 50;
  };

  const activeTasks = tasks.filter(t => scrubberPos >= t.start && scrubberPos < t.end);

  const tti = isOptimised ? 290 : 650;
  const fmp = isOptimised ? 260 : 300;

  return (
    <div id="startup-critical-path" className="relative overflow-hidden bg-zinc-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-zinc-400 font-mono text-sm tracking-wider uppercase">Startup Critical Path</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            App Startup Critical Path
          </h3>
          <div className="text-zinc-400 text-sm mb-8 font-mono">
            // Optimizing Time-to-Interactive (TTI) by deferring non-critical tasks to background threads
          </div>
          
          {/* Badge row */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">Performance</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-500/15 text-green-400 border border-green-500/30">TTI Optimisation</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">Threading</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">Cold Start</span>
          </div>
        </div>

        {/* Diagram Card */}
        <div className="relative w-full bg-[#161b27] rounded-3xl border border-[#1e2a3a] p-6 md:p-10 shadow-2xl">
          
          {/* Controls & Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex bg-black/40 p-1 rounded-lg border border-white/10">
              <button 
                onClick={() => setIsOptimised(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!isOptimised ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Before
              </button>
              <button 
                onClick={() => setIsOptimised(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isOptimised ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                After
              </button>
            </div>

            <div className={`px-4 py-2 rounded-xl border flex items-center gap-3 transition-colors duration-500 ${isOptimised ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
              <div className="font-mono font-bold">TTI: ~{tti}ms</div>
              {isOptimised && <div className="text-xs font-bold bg-green-500/20 px-2 py-0.5 rounded-full">↓ 55%</div>}
            </div>
          </div>

          {/* Timeline SVG */}
          <div 
            className="overflow-x-auto select-none touch-none pb-4"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div className="min-w-[860px] relative pt-8">
              <svg ref={svgRef} viewBox="0 0 860 260" className="w-full h-auto">
                <defs>
                  <pattern id="grid" width="100" height="260" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#1e2a3a" strokeWidth="1" strokeDasharray="4 4" />
                  </pattern>
                </defs>

                {/* Grid */}
                <rect x="120" y="20" width="700" height="220" fill="url(#grid)" />
                
                {/* Time markers */}
                {[0, 100, 200, 300, 400, 500, 600, 700].map((ms) => (
                  <text key={ms} x={120 + ms} y="15" fill="#64748b" fontSize="10" textAnchor="middle" className="font-mono">{ms}ms</text>
                ))}

                {/* Thread Labels */}
                <text x="100" y="65" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Main Thread</text>
                {isOptimised && (
                  <>
                    <text x="100" y="125" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Background</text>
                    <text x="100" y="185" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Network</text>
                  </>
                )}

                {/* Critical Path Line */}
                {inView && (
                  <g className="transition-opacity duration-1000 delay-500" opacity="1">
                    <line x1="120" y1="40" x2={120 + fmp} y2="40" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                    <text x={120 + fmp / 2} y="35" fill="#f59e0b" fontSize="10" textAnchor="middle" className="font-mono">critical path</text>
                    <line x1="120" y1="35" x2="120" y2="45" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                    <line x1={120 + fmp} y1="35" x2={120 + fmp} y2="45" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                  </g>
                )}

                {/* Tasks */}
                {tasks.map(task => {
                  const y = getThreadY(task.thread);
                  const width = task.end - task.start;
                  const isActive = scrubberPos >= task.start && scrubberPos < task.end;
                  const opacity = isDragging ? (isActive ? 1 : 0.3) : 0.9;
                  
                  return (
                    <g 
                      key={task.id} 
                      className="transition-all duration-500 ease-out"
                      style={{ transform: `translate(${120 + task.start}px, ${y}px)` }}
                      onMouseEnter={() => setHoveredTask(task.id)}
                      onMouseLeave={() => setHoveredTask(null)}
                      opacity={opacity}
                    >
                      <rect 
                        x="0" y="0" 
                        width={inView ? width : 0} 
                        height="36" 
                        rx="6" 
                        fill={task.color} 
                        className="transition-all duration-700 ease-out"
                      />
                      {inView && width > 40 && (
                        <text x="10" y="15" fill="white" fontSize="11" fontWeight="600" className="pointer-events-none">{task.name}</text>
                      )}
                      {inView && width > 90 && task.subtitle && (
                        <text x="10" y="28" fill="white" fillOpacity="0.7" fontSize="9" className="font-mono pointer-events-none">{task.subtitle}</text>
                      )}
                    </g>
                  );
                })}

                {/* FMP Marker */}
                {inView && (
                  <g className="transition-all duration-500" style={{ transform: `translateX(${120 + fmp}px)` }}>
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5 4" />
                    <rect x="-20" y="20" width="40" height="16" rx="4" fill="#161b27" />
                    <text x="0" y="32" fill="#2dd4bf" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-mono">FMP</text>
                    <text x="5" y="235" fill="#2dd4bf" fontSize="10" className="font-mono">↑ UI Render complete</text>
                  </g>
                )}

                {/* TTI Marker */}
                {inView && (
                  <g className="transition-all duration-500" style={{ transform: `translateX(${120 + tti}px)` }}>
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#e2e8f0" strokeWidth="2" opacity="0.6" />
                    <rect x="-20" y="20" width="40" height="16" rx="4" fill="#161b27" />
                    <text x="0" y="32" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-mono">TTI</text>
                  </g>
                )}

                {/* Scrubber Line */}
                <g className="transition-transform duration-75" style={{ transform: `translateX(${120 + scrubberPos}px)` }}>
                  <line x1="0" y1="0" x2="0" y2="240" stroke="#38bdf8" strokeWidth="2" opacity={isDragging ? 0.8 : 0.4} />
                  <polygon points="-6,0 6,0 0,8" fill="#38bdf8" opacity={isDragging ? 0.8 : 0.4} />
                </g>
              </svg>

              {/* Scrubber Label & Active Tasks */}
              <div 
                className="absolute top-0 pointer-events-none transition-all duration-75 flex flex-col items-center"
                style={{ left: `${((120 + scrubberPos) / 860) * 100}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-[#0d0f14] border border-[#1e2a3a] text-[#38bdf8] font-mono text-xs px-2 py-1 rounded shadow-lg">
                  t = {scrubberPos}ms
                </div>
                {isDragging && activeTasks.length > 0 && (
                  <div className="mt-2 bg-[#0d0f14]/90 backdrop-blur border border-[#1e2a3a] rounded p-2 shadow-xl flex flex-col gap-1 w-max max-w-[150px]">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-1">Active Tasks</div>
                    {activeTasks.map(t => (
                      <div key={t.id} className="flex items-center gap-1.5 text-[10px] text-zinc-300 truncate">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                        <span className="truncate">{t.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tooltip */}
              {hoveredTask && !isDragging && (
                <div className="absolute top-4 right-4 bg-[#0d0f14] border border-[#1e2a3a] rounded-lg p-4 shadow-2xl w-64 pointer-events-none z-10 font-mono">
                  {tasks.filter(t => t.id === hoveredTask).map(t => (
                    <div key={t.id}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                        <div className="font-bold text-white text-sm">{t.name}</div>
                      </div>
                      <div className="text-zinc-400 text-xs mb-1">Duration: <span className="text-white">{t.end - t.start}ms</span></div>
                      <div className="text-zinc-400 text-xs mb-1">Thread: <span className="text-white">{t.thread}</span></div>
                      <div className="text-zinc-400 text-xs mb-1">Platform: <span className="text-white">{t.platform}</span></div>
                      <div className="text-zinc-400 text-xs mt-2 pt-2 border-t border-white/10">
                        Critical path: <span className={t.critical ? 'text-amber-400' : 'text-green-400'}>{t.critical ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-6 text-center text-[11px] text-zinc-500 font-mono">
            Measured on release builds · Pixel 6 (Android 13) · iPhone 13 (iOS 16) · No debugger attached
          </div>
        </div>

        {/* Annotation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Critical Path
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">OS Init → DI Setup → UI Render</strong> is the blocking sequence.</li>
              <li>Any task on this chain directly delays FMP and TTI.</li>
              <li>DI graph construction (Hilt/Dagger) is often the largest optimisation target — lazy injection can cut 30–60ms.</li>
            </ul>
          </div>
          
          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              What we deferred
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Local DB Hydration moved off main thread → <strong className="text-green-400">saves ~140ms</strong></li>
              <li>Analytics Init pushed post-TTI → <strong className="text-green-400">saves ~80ms</strong></li>
              <li>API Prefetch parallelised with UI Render → net cost on critical path = 0ms.</li>
            </ul>
          </div>

          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Threading model
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Main Thread:</strong> UI work only — inflate, measure, draw.</li>
              <li><strong className="text-zinc-300">Background:</strong> Kotlin Coroutines (Dispatchers.IO) / GCD global queue.</li>
              <li><strong className="text-zinc-300">Network:</strong> OkHttp dispatcher / URLSession background configuration.</li>
            </ul>
          </div>

          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Before vs After
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Before:</strong> all tasks sequential on Main Thread, TTI ~650ms.</li>
              <li><strong className="text-zinc-300">After:</strong> parallelised, TTI ~290ms.</li>
              <li><strong className="text-zinc-300">Improvement:</strong> ~55% reduction in cold start time to interactive.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


