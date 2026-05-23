import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Play, List } from 'lucide-react';

/* ─────────────────────────────────────────────
   WIDGETS — Animated content inside iPhone frames
   ───────────────────────────────────────────── */

function MapWidget() {
  return (
    <div className="w-full h-full bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(hsl(217 32% 12% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(217 32% 12% / 0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      {[{ cx: 40, cy: 35 }, { cx: 60, cy: 55 }, { cx: 25, cy: 65 }].map((p, i) => (
        <div key={i} className="absolute" style={{ left: `${p.cx}%`, top: `${p.cy}%`, transform: 'translate(-50%,-50%)' }}>
          <div className="absolute w-8 h-8 rounded-full border-2 border-amber-400 animate-ping opacity-60" style={{ animationDelay: `${i * 0.4}s` }} />
          <div className="absolute w-5 h-5 rounded-full border-2 border-amber-400 animate-ping opacity-40" style={{ animationDelay: `${i * 0.4 + 0.2}s`, animationDuration: '2s' }} />
          <div className="w-3 h-3 rounded-full bg-amber-400 relative z-10" />
        </div>
      ))}
    </div>
  );
}

function NotificationsWidget() {
  const msgs = [
    { icon: '💰', title: 'Payment Received', body: '$4,200.00 from Client' },
    { icon: '⚠️', title: 'System Alert', body: 'Server CPU at 80%' },
    { icon: '💬', title: 'New Message', body: 'Are we still on for 3PM?' },
    { icon: '🚀', title: 'Deployment', body: 'v2.0.4 successfully deployed' },
  ];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVisible(v => (v + 1) % msgs.length), 2200);
    return () => clearInterval(id);
  }, [msgs.length]);

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center p-3 space-y-2">
      {msgs.map((m, i) => (
        <motion.div key={i} initial={false}
          animate={{ opacity: i === visible ? 1 : 0.2, y: i === visible ? 0 : 4, scale: i === visible ? 1 : 0.96 }}
          transition={{ duration: 0.4 }}
          className="w-full rounded-xl p-2.5 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10">
          <span className="text-base">{m.icon}</span>
          <div>
            <div className="text-[10px] font-bold text-white">{m.title}</div>
            <div className="text-[9px] text-white/60">{m.body}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PathfindingWidget() {
  return (
    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
      <svg width="80%" height="80%" viewBox="0 0 200 200">
        <circle cx="20" cy="160" r="8" fill="#f59e0b" />
        <circle cx="180" cy="40" r="8" fill="#ef4444" />
        <path d="M 20 160 Q 60 80 120 100 Q 160 120 180 40" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset="200">
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <circle r="5" fill="#f59e0b">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 20 160 Q 60 80 120 100 Q 160 120 180 40" />
        </circle>
        {[[50, 120], [100, 90], [150, 70]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="hsl(38 95% 52% / 0.4)" />
        ))}
      </svg>
    </div>
  );
}

function DownloadWidget() {
  const files = [
    { name: 'core_engine.dll', color: '#3b82f6', speed: 0.008 },
    { name: 'assets_bundle.zip', color: '#a855f7', speed: 0.005 },
    { name: 'config_prod.json', color: '#f59e0b', speed: 0.012 },
  ];
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => p.map((v, i) => {
        const next = v + files[i].speed * 100 + Math.random() * 0.5;
        return next >= 100 ? 0 : next;
      }));
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col justify-center space-y-4 p-4">
      {files.map((f, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-[9px] font-mono">
            <span className="text-white/70 truncate">{f.name}</span>
            <span style={{ color: f.color }}>{Math.round(progress[i])}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: f.color, width: `${progress[i]}%` }} />
          </div>
          <div className="text-[8px] font-mono" style={{ color: f.color }}>{(files[i].speed * 300).toFixed(1)} MB/s</div>
        </div>
      ))}
    </div>
  );
}

function ChatWidget() {
  const messages = [
    { text: 'Patient labs are ready.', from: 'left' },
    { text: "I'll review them now.", from: 'right' },
    { text: 'Dosage updated to 50mg.', from: 'left' },
  ];
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const run = () => {
      setRevealed([false, false, false]);
      messages.forEach((_, i) => {
        setTimeout(() => setRevealed(r => { const n = [...r]; n[i] = true; return n; }), 1500 * (i + 1));
      });
    };
    run();
    const id = setInterval(run, 6000);
    return () => clearInterval(id);
  }, []);

  const scramble = (len: number) => Array.from({ length: len }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');

  return (
    <div className="w-full h-full bg-[#0f1623] flex flex-col">
      <div className="p-2 border-b border-white/10 bg-zinc-900 flex items-center justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="text-[10px] font-bold text-white">Dr. Sarah Jenkins</span>
        <Shield className="w-2.5 h-2.5 text-amber-400" />
      </div>
      <div className="flex-1 p-3 flex flex-col justify-end space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'right' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-2 py-1.5 rounded-xl text-[9px] ${m.from === 'right' ? 'bg-blue-500/20 text-white' : 'bg-zinc-800 text-white'} font-mono transition-all duration-500`}>
              {revealed[i] ? m.text : <span className="opacity-60">{scramble(m.text.length)}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TradingWidget() {
  const [price, setPrice] = useState(64250);
  const [history, setHistory] = useState([64250]);

  useEffect(() => {
    const id = setInterval(() => {
      setPrice(p => {
        const next = p + (Math.random() - 0.5) * 200;
        setHistory(h => [...h.slice(-30), next]);
        return next;
      });
    }, 300);
    return () => clearInterval(id);
  }, []);

  const min = Math.min(...history), max = Math.max(...history);
  const pts = history.map((v, i) => `${(i / (history.length - 1)) * 200},${40 - ((v - min) / (max - min || 1)) * 36}`).join(' ');
  const isUp = history.length > 1 && history[history.length - 1] >= history[0];

  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col text-white overflow-hidden">
      <div className="p-2 border-b border-white/10 flex justify-between items-center">
        <span className="text-[10px] font-bold">BTC/USD</span>
        <span className={`text-sm font-mono font-bold ${isUp ? 'text-green-400' : 'text-red-400'}`}>${price.toLocaleString('en', { maximumFractionDigits: 0 })}</span>
      </div>
      <div className="px-2 py-1">
        <svg width="100%" height="44" viewBox="0 0 200 44">
          <defs>
            <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isUp ? '#22c55e' : '#ef4444'} stopOpacity="0.4" />
              <stop offset="100%" stopColor={isUp ? '#22c55e' : '#ef4444'} stopOpacity="0" />
            </linearGradient>
          </defs>
          {history.length > 1 && (
            <>
              <polygon points={`${pts} ${((history.length - 1) / (history.length - 1)) * 200},44 0,44`} fill="url(#chart-grad)" />
              <polyline points={pts} fill="none" stroke={isUp ? '#22c55e' : '#ef4444'} strokeWidth="1.5" />
            </>
          )}
        </svg>
      </div>
      <div className="flex-1 px-2 grid grid-cols-2 gap-1 text-[8px] font-mono overflow-hidden">
        <div className="space-y-0.5">
          {[['63,900', '1.2'], ['63,850', '2.8'], ['63,800', '0.9']].map(([p, v], i) => <div key={i} className="flex justify-between text-green-400"><span>{p}</span><span>{v}</span></div>)}
        </div>
        <div className="space-y-0.5">
          {[['64,300', '0.7'], ['64,350', '1.5'], ['64,400', '3.1']].map(([p, v], i) => <div key={i} className="flex justify-between text-red-400"><span>{p}</span><span>{v}</span></div>)}
        </div>
      </div>
    </div>
  );
}

function BookingWidget() {
  const [step, setStep] = useState(0);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setStep(0); setPaying(false);
      setTimeout(() => setStep(1), 2500);
      setTimeout(() => { setPaying(true); }, 4000);
      setTimeout(() => { setStep(2); setPaying(false); }, 5500);
      setTimeout(cycle, 9000);
    };
    cycle();
  }, []);

  return (
    <div className="w-full h-full bg-[#0f1623] flex flex-col">
      <div className="p-2 border-b border-white/10 bg-zinc-900">
        <div className="flex justify-between text-[8px] font-mono text-zinc-400">
          {['Select', 'Checkout', 'Boarding'].map((s, i) => (
            <span key={s} className={step === i ? 'text-blue-400 font-bold' : ''}>{s}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col justify-center">
        {step === 0 && (
          <div className="space-y-2">
            <div className="text-[9px] font-bold text-zinc-400">SFO → JFK</div>
            {[{ time: '08:00–16:30', stops: 'Non-stop', price: '$450', sel: true }, { time: '11:15–20:45', stops: '1 stop', price: '$380', sel: false }].map((f, i) => (
              <motion.div key={i} animate={{ borderColor: f.sel ? 'rgba(96,165,250,0.6)' : 'rgba(255,255,255,0.1)', scale: f.sel ? 1.02 : 1 }}
                className="p-2 rounded-lg border text-[9px] flex justify-between items-center bg-white/5">
                <div><div className="font-bold text-white">{f.time}</div><div className="text-zinc-400">{f.stops}</div></div>
                <div className="font-bold text-blue-400">{f.price}</div>
              </motion.div>
            ))}
          </div>
        )}
        {step === 1 && (
          <div className="space-y-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-800 to-purple-800 text-white">
              <div className="text-[8px] opacity-70">Alex Developer</div>
              <div className="text-[10px] font-mono font-bold mt-1">**** **** **** 4242</div>
              <div className="flex justify-between text-[7px] opacity-70 mt-1"><span>VISA</span><span>12/28</span></div>
            </div>
            <div className="flex justify-between text-[9px]"><span className="text-zinc-400">Total</span><span className="font-bold text-white">$450.00</span></div>
            <button className="w-full py-2 bg-blue-500 text-white text-[10px] font-bold rounded flex items-center justify-center space-x-2">
              {paying ? <><div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Processing...</span></> : <span>Pay Now</span>}
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="p-3 rounded-lg bg-white text-black space-y-1">
            <div className="text-[10px] font-bold text-blue-700 text-center border-b border-gray-200 pb-1">Boarding Pass</div>
            <div className="text-center text-[11px] font-bold">SFO → JFK</div>
            <div className="grid grid-cols-2 gap-1 text-[8px]">
              {[['Flight', 'DL 402'], ['Gate', 'B12'], ['Seat', '14A']].map(([k, v]) => (
                <div key={k}><div className="text-gray-500">{k}</div><div className="font-bold">{v}</div></div>
              ))}
            </div>
            <div className="flex justify-center pt-1">
              <svg width="44" height="44" viewBox="0 0 21 21" shapeRendering="crispEdges">
                <rect width="21" height="21" fill="white" />
                {/* Top-left finder */}
                <rect x="0" y="0" width="7" height="1" fill="black"/><rect x="0" y="6" width="7" height="1" fill="black"/><rect x="0" y="0" width="1" height="7" fill="black"/><rect x="6" y="0" width="1" height="7" fill="black"/><rect x="2" y="2" width="3" height="3" fill="black"/>
                {/* Top-right finder */}
                <rect x="14" y="0" width="7" height="1" fill="black"/><rect x="14" y="6" width="7" height="1" fill="black"/><rect x="14" y="0" width="1" height="7" fill="black"/><rect x="20" y="0" width="1" height="7" fill="black"/><rect x="16" y="2" width="3" height="3" fill="black"/>
                {/* Bottom-left finder */}
                <rect x="0" y="14" width="7" height="1" fill="black"/><rect x="0" y="20" width="7" height="1" fill="black"/><rect x="0" y="14" width="1" height="7" fill="black"/><rect x="6" y="14" width="1" height="7" fill="black"/><rect x="2" y="16" width="3" height="3" fill="black"/>
                {/* Timing patterns */}
                <rect x="8" y="6" width="1" height="1" fill="black"/><rect x="10" y="6" width="1" height="1" fill="black"/><rect x="12" y="6" width="1" height="1" fill="black"/><rect x="6" y="8" width="1" height="1" fill="black"/><rect x="6" y="10" width="1" height="1" fill="black"/><rect x="6" y="12" width="1" height="1" fill="black"/>
                {/* Data modules */}
                <rect x="8" y="0" width="1" height="1" fill="black"/><rect x="10" y="0" width="1" height="1" fill="black"/><rect x="8" y="2" width="1" height="1" fill="black"/><rect x="9" y="3" width="1" height="1" fill="black"/><rect x="11" y="2" width="1" height="1" fill="black"/><rect x="12" y="4" width="1" height="1" fill="black"/><rect x="9" y="5" width="1" height="1" fill="black"/><rect x="11" y="5" width="1" height="1" fill="black"/>
                <rect x="8" y="8" width="1" height="1" fill="black"/><rect x="10" y="8" width="1" height="1" fill="black"/><rect x="12" y="8" width="1" height="1" fill="black"/><rect x="9" y="9" width="1" height="1" fill="black"/><rect x="11" y="9" width="1" height="1" fill="black"/><rect x="8" y="10" width="1" height="1" fill="black"/><rect x="10" y="10" width="1" height="1" fill="black"/><rect x="12" y="10" width="1" height="1" fill="black"/>
                <rect x="9" y="11" width="1" height="1" fill="black"/><rect x="11" y="11" width="1" height="1" fill="black"/><rect x="8" y="12" width="1" height="1" fill="black"/><rect x="10" y="12" width="1" height="1" fill="black"/><rect x="12" y="12" width="1" height="1" fill="black"/>
                <rect x="14" y="8" width="1" height="1" fill="black"/><rect x="16" y="8" width="1" height="1" fill="black"/><rect x="18" y="8" width="1" height="1" fill="black"/><rect x="20" y="9" width="1" height="1" fill="black"/><rect x="15" y="9" width="1" height="1" fill="black"/><rect x="17" y="10" width="1" height="1" fill="black"/><rect x="19" y="10" width="1" height="1" fill="black"/>
                <rect x="8" y="14" width="1" height="1" fill="black"/><rect x="10" y="14" width="1" height="1" fill="black"/><rect x="12" y="15" width="1" height="1" fill="black"/><rect x="14" y="14" width="1" height="1" fill="black"/><rect x="16" y="15" width="1" height="1" fill="black"/><rect x="18" y="14" width="1" height="1" fill="black"/><rect x="15" y="16" width="1" height="1" fill="black"/><rect x="17" y="17" width="1" height="1" fill="black"/><rect x="19" y="16" width="1" height="1" fill="black"/><rect x="20" y="18" width="1" height="1" fill="black"/><rect x="14" y="19" width="1" height="1" fill="black"/><rect x="16" y="20" width="1" height="1" fill="black"/><rect x="18" y="19" width="1" height="1" fill="black"/><rect x="20" y="20" width="1" height="1" fill="black"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MatchingWidget() {
  const profiles = ['Alex', 'Sam', 'Jordan', 'Riley', 'Morgan'];
  const [phase, setPhase] = useState<'scroll' | 'match' | 'matched'>('scroll');
  const matchedIdx = [1, 3];

  useEffect(() => {
    const cycle = () => {
      setPhase('scroll');
      setTimeout(() => setPhase('match'), 2000);
      setTimeout(() => setPhase('matched'), 3500);
      setTimeout(cycle, 6500);
    };
    cycle();
  }, []);

  return (
    <div className="w-full h-full bg-[#0f1623] flex flex-col items-center justify-center p-3 space-y-1.5 relative">
      {profiles.map((p, i) => {
        const isMatch = matchedIdx.includes(i);
        return (
          <motion.div key={i}
            animate={{
              opacity: phase === 'matched' && !isMatch ? 0.25 : 1,
              scale: phase === 'matched' && isMatch ? 1.04 : 1,
              borderColor: phase !== 'scroll' && isMatch ? 'hsl(340 75% 55%)' : 'rgba(255,255,255,0.1)',
            }}
            className="w-full flex items-center space-x-2 p-1.5 rounded-lg border bg-white/5 text-[10px]">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-[8px] font-bold shrink-0">{p[0]}</div>
            <div className="font-medium text-white">{p}</div>
            {phase !== 'scroll' && isMatch && <div className="ml-auto w-2 h-2 rounded-full bg-pink-400 animate-pulse" />}
          </motion.div>
        );
      })}
      <AnimatePresence>
        {phase === 'matched' && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-[#0f1623]/80 backdrop-blur-sm rounded-xl">
            <div className="text-center">
              <div className="text-3xl mb-1">💗</div>
              <div className="text-sm font-bold text-pink-400">MATCHED</div>
              <div className="text-[9px] text-zinc-400 mt-1">{profiles[matchedIdx[0]]} & {profiles[matchedIdx[1]]}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StreamingWidget() {
  const thumbnails = [
    { title: 'DARK', color: 'from-yellow-900 to-zinc-900', accent: '#f59e0b' },
    { title: 'SIGNAL', color: 'from-blue-900 to-zinc-900', accent: '#3b82f6' },
    { title: 'OZARK', color: 'from-cyan-900 to-zinc-900', accent: '#06b6d4' },
    { title: 'ARCANE', color: 'from-purple-900 to-zinc-900', accent: '#a855f7' },
  ];

  return (
    <div className="w-full h-full bg-[#141414] flex flex-col overflow-hidden">
      {/* Hero Banner */}
      <div className="relative flex-1 min-h-0">
        <div className="w-full h-full bg-gradient-to-br from-red-950 via-zinc-900 to-black flex items-end p-3 relative">
          {/* Faux cinematic image overlay */}
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 20%, rgba(220,50,50,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(200,120,50,0.2) 0%, transparent 50%)' }} />
          <div className="absolute top-2 left-2 text-[8px] font-bold text-red-500 tracking-wider">N</div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />
          <div className="relative z-10">
            <div className="text-[9px] font-bold text-green-400">98% Match<span className="text-white/50"> · 2024 · HD</span></div>
            <div className="text-sm font-bold text-white tracking-wide">STRANGER SIGNAL</div>
            <div className="text-[8px] text-white/50 mt-0.5 line-clamp-1">Sci-Fi · Thriller · Mystery</div>
            <div className="flex space-x-1 mt-1.5">
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-white text-black rounded text-[8px] font-bold"><Play className="w-2.5 h-2.5 fill-black" /><span>Play</span></div>
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-zinc-700/80 text-white rounded text-[8px] font-bold"><List className="w-2.5 h-2.5" /><span>My List</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Row */}
      <div className="p-2 bg-[#141414]">
        <div className="text-[8px] font-bold text-white/60 mb-1.5">Trending Now</div>
        <div className="flex space-x-1.5">
          {thumbnails.map((t, i) => (
            <div key={i} className={`flex-1 aspect-[2/3] rounded overflow-hidden relative bg-gradient-to-b ${t.color}`}>
              <div className="absolute inset-0 flex items-end p-1">
                <span className="text-[6px] font-bold text-white/80 leading-none">{t.title}</span>
              </div>
              <div className="absolute top-0.5 left-0.5 text-[5px] font-bold px-0.5 rounded-sm" style={{ backgroundColor: t.accent, color: 'white' }}>{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PremiumEngineWidget() {
  const [age, setAge] = useState(35);
  const [coverage, setCoverage] = useState(250);
  const [premium, setPremium] = useState(119);
  const [calculating, setCalculating] = useState(false);
  const ageRef = useRef(35);
  const covRef = useRef(250);

  useEffect(() => {
    const calcPremium = (a: number, c: number) => Math.round(a * 2.1 + c * 0.18 + 15);

    const cycle = () => {
      setCalculating(true);
      const ageTarget = 25 + Math.floor(Math.random() * 40);
      const covTarget = [100, 250, 500, 750, 1000][Math.floor(Math.random() * 5)];
      let step = 0;
      const steps = 20;
      const startAge = ageRef.current;
      const startCov = covRef.current;

      const interval = setInterval(() => {
        step++;
        const t = step / steps;
        const newAge = Math.round(startAge + (ageTarget - startAge) * t);
        const newCov = Math.round(startCov + (covTarget - startCov) * t);
        ageRef.current = newAge;
        covRef.current = newCov;
        setAge(newAge);
        setCoverage(newCov);
        setPremium(calcPremium(newAge, newCov));

        if (step >= steps) {
          clearInterval(interval);
          setCalculating(false);
        }
      }, 60);
    };

    cycle();
    const id = setInterval(cycle, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-[#0f1623] flex flex-col p-3 space-y-2">
      <div className="text-[10px] font-bold text-white border-b border-white/10 pb-1.5 flex items-center justify-between">
        <span>Premium Calculator</span>
        <span className="text-[8px] text-zinc-500 font-mono">DAG v2.1</span>
      </div>
      <div className="space-y-2.5 flex-1">
        <div>
          <div className="flex justify-between text-[8px] mb-1">
            <span className="text-zinc-400">Age</span>
            <span className="text-white font-mono font-bold">{age}</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-blue-500" animate={{ width: `${((age - 18) / 62) * 100}%` }} transition={{ duration: 0.15 }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[8px] mb-1">
            <span className="text-zinc-400">Coverage</span>
            <span className="text-white font-mono font-bold">${coverage}K</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-purple-500" animate={{ width: `${(coverage / 1000) * 100}%` }} transition={{ duration: 0.15 }} />
          </div>
        </div>
        <div className="pt-2 border-t border-white/10">
          <div className="text-[8px] text-zinc-400 mb-1">Monthly Premium</div>
          <motion.div
            className="text-lg font-bold font-mono text-green-400"
            animate={{ opacity: calculating ? 0.5 : 1 }}
          >
            ${premium}<span className="text-[9px] text-zinc-500">/mo</span>
          </motion.div>
        </div>
        <div className="space-y-1 pt-1">
          {[['Base rate', `$${Math.round(age * 2.1)}`], ['Coverage adj.', `$${Math.round(coverage * 0.18)}`], ['Risk factor', '×1.02']].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[8px]">
              <span className="text-zinc-500">{k}</span>
              <span className="text-zinc-300 font-mono">{v}</span>
            </div>
          ))}
        </div>
      </div>
      {calculating && (
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 border border-blue-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-[8px] text-blue-400">Recalculating...</span>
        </div>
      )}
    </div>
  );
}

/* ── Project Data ── */
const PROJECTS = [
  { id: '01', category: 'Performance', title: 'High-Performance Mapping', challenge: 'Rendering 10,000+ custom markers on a map caused severe frame drops, UI freezing, and excessive battery drain on older mobile devices.', solution: 'Implemented a custom QuadTree clustering algorithm in C++ and offloaded marker rendering directly to the GPU using Metal and OpenGL.', Widget: MapWidget },
  { id: '02', category: 'Networking', title: 'Real-Time Sync & Notifications', challenge: 'Push notifications were arriving out of order or getting lost entirely during poor cellular network conditions.', solution: 'Built a robust local SQLite queuing system with optimistic UI updates and a background sync engine with conflict resolution.', Widget: NotificationsWidget },
  { id: '03', category: 'Algorithms', title: 'Dynamic Pathfinding Engine', challenge: 'Calculating complex, multi-stop delivery routes entirely on the client side was too slow and consumed excessive memory.', solution: 'Developed a hybrid routing architecture. The server pre-calculates primary nodes, while the mobile client uses a lightweight A* algorithm.', Widget: PathfindingWidget },
  { id: '04', category: 'Networking', title: 'Resumable Download Manager', challenge: 'Downloading large 500MB+ asset bundles frequently failed on unstable 3G/4G connections, forcing users to restart.', solution: 'Engineered a chunked, resumable download manager with dynamic bandwidth allocation and MD5 hash integrity verification.', Widget: DownloadWidget },
  { id: '05', category: 'Security & UX', title: 'E2E Encrypted Chat', challenge: "Healthcare professionals needed to discuss patient data via chat, but standard messaging protocols didn't meet HIPAA compliance.", solution: 'Implemented the Signal Protocol for true End-to-End Encryption (E2EE) using Curve25519 and AES-256. Messages are decrypted entirely on-device.', Widget: ChatWidget },
  { id: '06', category: 'Algorithms', title: 'Dynamic Premium Engine', challenge: 'The legacy insurance quoting engine required a full page reload and a 5-second server roundtrip for every parameter change.', solution: 'Architected a local reactive rules engine using a directed acyclic graph (DAG) to instantly calculate premiums on-device.', Widget: PremiumEngineWidget },
  { id: '07', category: 'Performance', title: 'Real-Time Trading Engine', challenge: 'Rendering high-frequency financial data (candlestick charts, live order books) caused severe UI thread blocking and battery drain on mobile.', solution: 'Implemented a custom WebGL/Canvas rendering pipeline for charts and utilized WebSockets with binary payloads (Protobuf) to minimize parsing overhead.', Widget: TradingWidget },
  { id: '08', category: 'Security & UX', title: 'Seamless Booking Flow', challenge: 'The flight booking process was disjointed, requiring multiple full-page loads which led to a 40% drop-off rate during checkout.', solution: 'Architected a single-page animated transition flow using shared element transitions and optimistic pre-fetching for instant perceived load times.', Widget: BookingWidget },
  { id: '09', category: 'Algorithms', title: 'High-Speed Profile Matching', challenge: 'Matching users in real-time based on complex multi-dimensional vectors was slow and resulted in stale recommendations.', solution: 'Engineered an in-memory graph database and a WebSocket-driven matching engine that processes millions of vectors to instantly pair users.', Widget: MatchingWidget },
  { id: '10', category: 'Networking', title: 'Adaptive Video Streaming', challenge: 'Users on fluctuating 3G/4G networks experienced constant buffering and poor video quality during playback.', solution: 'Implemented a custom HLS player with dynamic bitrate switching and edge-caching to ensure zero-buffering playback.', Widget: StreamingWidget },
];

const FILTERS = ['All', 'Performance', 'Networking', 'Algorithms', 'Security & UX'];

/* ── Main Section Component ── */
export function EngineeringSolutionsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = PROJECTS.filter(p => activeFilter === 'All' || p.category === activeFilter);

  return (
    <section id="solutions" className="py-24 border-t border-white/[0.06] bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-bold tracking-tighter text-white">Engineering Solutions</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${activeFilter === f ? 'bg-blue-500 text-white border-blue-500' : 'bg-[#080a0f] border-white/10 text-zinc-400 hover:text-white'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#080a0f] border border-white/[0.06] hover:border-white/[0.12] transition-colors">

                {/* iPhone Mockup Frame */}
                <div className="shrink-0 mx-auto sm:mx-0" style={{ width: 160, height: 330 }}>
                  <div className="w-full h-full bg-black rounded-[32px] border-[6px] border-zinc-800 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 overflow-hidden rounded-[26px]">
                      <project.Widget />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center space-y-4 min-w-0">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-zinc-500">PROJ_{project.id}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="relative pl-3.5">
                      <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
                      <h4 className="text-[10px] font-bold text-white mb-1 uppercase tracking-wider">The Challenge</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="relative pl-3.5">
                      <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <h4 className="text-[10px] font-bold text-white mb-1 uppercase tracking-wider">The Solution</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
