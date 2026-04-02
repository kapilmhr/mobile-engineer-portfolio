import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IOS_STATS = [
  { label: 'Build', value: '12s' },
  { label: 'Cold start', value: '300ms' },
  { label: 'Perf', value: '120fps' },
  { label: 'Hot reload', value: 'N/A', dimmed: true },
  { label: 'Share', value: '0%' },
  { label: 'Size', value: '15MB' },
];

const ANDROID_STATS = [
  { label: 'Build', value: '25s' },
  { label: 'Cold start', value: '600ms' },
  { label: 'Perf', value: '120fps' },
  { label: 'Hot reload', value: '~1s', dimmed: false },
  { label: 'Share', value: '0%' },
  { label: 'Size', value: '25MB' },
];

const FLUTTER_STATS = [
  { label: 'Build', value: '30s', dimmed: false },
  { label: 'Cold start', value: '400ms', dimmed: false },
  { label: 'Perf', value: '120fps', dimmed: false },
  { label: 'Hot reload', value: '<1s', highlight: true, dimmed: false },
  { label: 'Share', value: '70%', dimmed: false },
  { label: 'Size', value: '20MB', dimmed: false },
];

const REACT_NATIVE_STATS = [
  { label: 'Build', value: '45s', dimmed: false },
  { label: 'Cold start', value: '800ms', dimmed: false },
  { label: 'Perf', value: '60fps', dimmed: false },
  { label: 'Fast refresh', value: '<1s', highlight: true, dimmed: false },
  { label: 'Share', value: '80%', dimmed: false },
  { label: 'Size', value: '35MB', dimmed: false },
];

const KMP_STATS = [
  { label: 'Build', value: '40s', dimmed: false },
  { label: 'Cold start', value: '500ms', dimmed: false },
  { label: 'Perf', value: '120fps', dimmed: false },
  { label: 'Code share', value: '~70%', highlight: true, dimmed: false },
  { label: 'Targets', value: 'iOS+And', dimmed: false },
  { label: 'Size', value: '22MB', dimmed: false },
];

function AndroidWidget() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full min-h-[400px] font-sans">
          <defs>
            <marker id="arrow-android" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-zinc-500" />
            </marker>
          </defs>

          {/* Columns Backgrounds */}
          <rect x="10" y="10" width="240" height="380" rx="8" className="fill-green-500/5 stroke-green-500/20" strokeDasharray="4 4" />
          <text x="20" y="30" className="fill-green-500/50 font-mono text-xs font-bold uppercase">Build Time</text>

          <rect x="270" y="10" width="240" height="380" rx="8" className="fill-teal-500/5 stroke-teal-500/20" strokeDasharray="4 4" />
          <text x="280" y="30" className="fill-teal-500/50 font-mono text-xs font-bold uppercase">Launch</text>

          <rect x="530" y="10" width="260" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="540" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Runtime</text>

          {/* Build Time Nodes (Green) */}
          <g transform="translate(50, 60)">
            <rect width="160" height="40" rx="6" className="fill-green-500/10 stroke-green-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Kotlin source</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.kt files</text>
          </g>
          <motion.path 
            d="M 130 100 L 130 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />
          
          <g transform="translate(50, 140)">
            <rect width="160" height="40" rx="6" className="fill-green-500/10 stroke-green-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">kotlinc + D8/R8</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">compiles to DEX bytecode</text>
          </g>
          <motion.path 
            d="M 130 180 L 130 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          <g transform="translate(50, 220)">
            <rect width="160" height="40" rx="6" className="fill-green-500/10 stroke-green-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Gradle packages</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">produces APK / AAB</text>
          </g>

          {/* Arrow to Launch */}
          <motion.path 
            d="M 210 240 C 260 240, 260 80, 310 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          {/* Launch Nodes (Teal) */}
          <g transform="translate(310, 60)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Zygote fork</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">OS spawns app process</text>
          </g>
          <motion.path 
            d="M 390 100 L 390 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 140)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Application.onCreate</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">global init, DI setup</text>
          </g>
          <motion.path 
            d="M 390 180 L 390 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 220)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Activity.setContent</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">root composable set</text>
          </g>

          {/* Arrow to Runtime */}
          <motion.path 
            d="M 470 240 C 520 240, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          {/* Runtime Nodes */}
          {/* Choreographer (Gray) */}
          <g transform="translate(570, 60)">
            <rect width="180" height="40" rx="6" className="fill-zinc-500/10 stroke-zinc-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Choreographer</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">frame scheduler / event loop</text>
          </g>
          <motion.path 
            d="M 660 100 L 660 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          {/* Event nodes (Amber) */}
          <g transform="translate(550, 140)">
            <rect width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="35" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Tap</text>
            <text x="35" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">remember</text>
            
            <rect x="75" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="110" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Flow</text>
            <text x="110" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">collectAsState</text>
            
            <rect x="150" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="185" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Lifecycle</text>
            <text x="185" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">onResume</text>
          </g>
          <motion.path 
            d="M 660 180 L 660 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          {/* Composition (Blue) */}
          <g transform="translate(570, 220)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Composition</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">composables evaluated</text>
          </g>
          <motion.path 
            d="M 660 260 L 660 290" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />

          {/* Layout -> Draw (Blue) */}
          <g transform="translate(570, 300)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Layout → Draw</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Canvas → RenderThread → GPU</text>
          </g>

          {/* Recompose feedback loop on the right side */}
          <motion.path 
            d="M 770 160 C 810 160, 810 240, 750 240" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />
          <text x="790" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(90 790 200)">Recompose</text>

          {/* Return arrow from draw back up to Choreographer on the left */}
          <motion.path 
            d="M 570 320 C 520 320, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-android)" 
            className="text-zinc-500" 
          />
          <text x="540" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(-90 540 200)">Next frame</text>

        </svg>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {ANDROID_STATS.map((stat, i) => (
          <div 
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.dimmed ? 'text-zinc-600' : 'text-white'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
        * Scores are relative, not absolute. Based on typical production app benchmarks.
      </div>
    </div>
  );
}

function IOSWidget() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full min-h-[400px] font-sans">
          <defs>
            <marker id="arrow-ios" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-zinc-500" />
            </marker>
          </defs>

          {/* Columns Backgrounds */}
          <rect x="10" y="10" width="240" height="380" rx="8" className="fill-purple-500/5 stroke-purple-500/20" strokeDasharray="4 4" />
          <text x="20" y="30" className="fill-purple-500/50 font-mono text-xs font-bold uppercase">Build Time</text>

          <rect x="270" y="10" width="240" height="380" rx="8" className="fill-teal-500/5 stroke-teal-500/20" strokeDasharray="4 4" />
          <text x="280" y="30" className="fill-teal-500/50 font-mono text-xs font-bold uppercase">Launch</text>

          <rect x="530" y="10" width="260" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="540" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Runtime</text>

          {/* Build Time Nodes (Purple) */}
          <g transform="translate(50, 60)">
            <rect width="160" height="40" rx="6" className="fill-purple-500/10 stroke-purple-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Swift source</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.swift files</text>
          </g>
          <motion.path 
            d="M 130 100 L 130 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />
          
          <g transform="translate(50, 140)">
            <rect width="160" height="40" rx="6" className="fill-purple-500/10 stroke-purple-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">swiftc + LLVM</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">compiles to LLVM IR</text>
          </g>
          <motion.path 
            d="M 130 180 L 130 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          <g transform="translate(50, 220)">
            <rect width="160" height="40" rx="6" className="fill-purple-500/10 stroke-purple-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Linker (ld)</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">produces Mach-O binary</text>
          </g>

          {/* Arrow to Launch */}
          <motion.path 
            d="M 210 240 C 260 240, 260 80, 310 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          {/* Launch Nodes (Teal) */}
          <g transform="translate(310, 60)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">dyld</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">loads binary + frameworks</text>
          </g>
          <motion.path 
            d="M 390 100 L 390 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 140)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">@main App struct</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">entry point</text>
          </g>
          <motion.path 
            d="M 390 180 L 390 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 220)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">WindowGroup</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">root view instantiated</text>
          </g>

          {/* Arrow to Runtime */}
          <motion.path 
            d="M 470 240 C 520 240, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          {/* Runtime Nodes */}
          {/* Run loop (Gray) */}
          <g transform="translate(570, 60)">
            <rect width="180" height="40" rx="6" className="fill-zinc-500/10 stroke-zinc-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Run loop</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">waits for events</text>
          </g>
          <motion.path 
            d="M 660 100 L 660 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          {/* Event nodes (Amber) */}
          <g transform="translate(550, 140)">
            <rect width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="35" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Tap</text>
            <text x="35" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">@State</text>
            
            <rect x="75" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="110" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Async</text>
            <text x="110" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.task</text>
            
            <rect x="150" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="185" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Sys</text>
            <text x="185" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">scene</text>
          </g>
          <motion.path 
            d="M 660 180 L 660 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          {/* View tree built (Blue) */}
          <g transform="translate(570, 220)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">View tree built</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">structs, body evaluated</text>
          </g>
          <motion.path 
            d="M 660 260 L 660 290" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />

          {/* SwiftUI diffs + renders (Blue) */}
          <g transform="translate(570, 300)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">SwiftUI diffs + renders</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Core Animation → Metal → GPU</text>
          </g>

          {/* Re-render feedback loop on the right side */}
          <motion.path 
            d="M 770 160 C 810 160, 810 240, 750 240" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />
          <text x="790" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(90 790 200)">Re-render</text>

          {/* Return arrow from render back up to run loop on the left */}
          <motion.path 
            d="M 570 320 C 520 320, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-ios)" 
            className="text-zinc-500" 
          />
          <text x="540" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(-90 540 200)">Next tick</text>

        </svg>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {IOS_STATS.map((stat, i) => (
          <div 
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.dimmed ? 'text-zinc-600' : 'text-white'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
        * Scores are relative, not absolute. Based on typical production app benchmarks.
      </div>
    </div>
  );
}

function FlutterWidget() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full min-h-[400px] font-sans">
          <defs>
            <marker id="arrow-flutter" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-zinc-500" />
            </marker>
          </defs>

          {/* Columns Backgrounds */}
          <rect x="10" y="10" width="240" height="380" rx="8" className="fill-rose-500/5 stroke-rose-500/20" strokeDasharray="4 4" />
          <text x="20" y="30" className="fill-rose-500/50 font-mono text-xs font-bold uppercase">Build Time</text>

          <rect x="270" y="10" width="240" height="380" rx="8" className="fill-teal-500/5 stroke-teal-500/20" strokeDasharray="4 4" />
          <text x="280" y="30" className="fill-teal-500/50 font-mono text-xs font-bold uppercase">Launch</text>

          <rect x="530" y="10" width="260" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="540" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Runtime</text>

          {/* Build Time Nodes (Coral/Rose) */}
          <g transform="translate(50, 60)">
            <rect width="160" height="40" rx="6" className="fill-rose-500/10 stroke-rose-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Dart source</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.dart files</text>
          </g>
          <motion.path 
            d="M 130 100 L 130 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />
          
          <g transform="translate(50, 140)">
            <rect width="160" height="40" rx="6" className="fill-rose-500/10 stroke-rose-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">dart compile AOT</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">native arm64 binary</text>
          </g>
          <motion.path 
            d="M 130 180 L 130 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          <g transform="translate(50, 220)">
            <rect width="160" height="40" rx="6" className="fill-rose-500/10 stroke-rose-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">flutter build</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">APK / IPA bundle</text>
          </g>

          {/* Arrow to Launch */}
          <motion.path 
            d="M 210 240 C 260 240, 260 80, 310 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          {/* Launch Nodes (Teal) */}
          <g transform="translate(310, 60)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Flutter engine</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">C++ embedder starts</text>
          </g>
          <motion.path 
            d="M 390 100 L 390 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 140)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Dart VM init</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">isolate spawned</text>
          </g>
          <motion.path 
            d="M 390 180 L 390 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 220)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">runApp()</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">root widget attached</text>
          </g>

          {/* Arrow to Runtime */}
          <motion.path 
            d="M 470 240 C 520 240, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          {/* Runtime Nodes */}
          {/* Event loop (Gray) */}
          <g transform="translate(570, 60)">
            <rect width="180" height="40" rx="6" className="fill-zinc-500/10 stroke-zinc-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Event loop</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">microtask + event queue</text>
          </g>
          <motion.path 
            d="M 660 100 L 660 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          {/* Event nodes (Amber) */}
          <g transform="translate(550, 140)">
            <rect width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="35" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Gesture</text>
            <text x="35" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">setState</text>
            
            <rect x="75" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="110" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Stream</text>
            <text x="110" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">StreamBldr</text>
            
            <rect x="150" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="185" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Notifier</text>
            <text x="185" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Provider</text>
          </g>
          <motion.path 
            d="M 660 180 L 660 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          {/* 3 trees rebuilt (Blue) */}
          <g transform="translate(570, 220)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">3 trees rebuilt</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Widget → Element → Render</text>
          </g>
          <motion.path 
            d="M 660 260 L 660 290" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

          {/* Impeller / Skia (Blue) */}
          <g transform="translate(570, 300)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Impeller / Skia</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">paints directly to GPU</text>
          </g>

          {/* Rebuild feedback loop on the right side */}
          <motion.path 
            d="M 770 160 C 810 160, 810 240, 750 240" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />
          <text x="790" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(90 790 200)">rebuild</text>

          {/* Return arrow from draw back up to Event loop on the left */}
          <motion.path 
            d="M 570 320 C 520 320, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-flutter)" 
            className="text-zinc-500" 
          />

        </svg>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {FLUTTER_STATS.map((stat, i) => (
          <div 
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.dimmed ? 'text-zinc-600' : stat.highlight ? 'text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]' : 'text-white'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
        * Scores are relative, not absolute. Based on typical production app benchmarks.
      </div>
    </div>
  );
}

function ReactNativeWidget() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full min-h-[400px] font-sans">
          <defs>
            <marker id="arrow-rn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-zinc-500" />
            </marker>
          </defs>

          {/* Columns Backgrounds */}
          <rect x="10" y="10" width="240" height="380" rx="8" className="fill-pink-500/5 stroke-pink-500/20" strokeDasharray="4 4" />
          <text x="20" y="30" className="fill-pink-500/50 font-mono text-xs font-bold uppercase">Build Time</text>

          <rect x="270" y="10" width="240" height="380" rx="8" className="fill-teal-500/5 stroke-teal-500/20" strokeDasharray="4 4" />
          <text x="280" y="30" className="fill-teal-500/50 font-mono text-xs font-bold uppercase">Launch</text>

          <rect x="530" y="10" width="260" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="540" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Runtime</text>

          {/* Build Time Nodes (Pink) */}
          <g transform="translate(50, 60)">
            <rect width="160" height="40" rx="6" className="fill-pink-500/10 stroke-pink-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">JS / TSX source</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.tsx / .ts files</text>
          </g>
          <motion.path 
            d="M 130 100 L 130 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />
          
          <g transform="translate(50, 140)">
            <rect width="160" height="40" rx="6" className="fill-pink-500/10 stroke-pink-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Metro bundler</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">bundles JS + assets</text>
          </g>
          <motion.path 
            d="M 130 180 L 130 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          <g transform="translate(50, 220)">
            <rect width="160" height="40" rx="6" className="fill-pink-500/10 stroke-pink-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Expo prebuild</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">generates APK / IPA</text>
          </g>

          {/* Arrow to Launch */}
          <motion.path 
            d="M 210 240 C 260 240, 260 80, 310 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          {/* Launch Nodes (Teal) */}
          <g transform="translate(310, 60)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Native shell starts</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">iOS / Android host app</text>
          </g>
          <motion.path 
            d="M 390 100 L 390 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 140)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Hermes JS engine</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">executes JS bundle</text>
          </g>
          <motion.path 
            d="M 390 180 L 390 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 220)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">JSI bridge</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">JS ↔ native modules</text>
          </g>

          {/* Arrow to Runtime */}
          <motion.path 
            d="M 470 240 C 520 240, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          {/* Runtime Nodes */}
          {/* Event loop (Gray) */}
          <g transform="translate(570, 60)">
            <rect width="180" height="40" rx="6" className="fill-zinc-500/10 stroke-zinc-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">JS event loop</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">single-threaded runtime</text>
          </g>
          <motion.path 
            d="M 660 100 L 660 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          {/* Event nodes (Amber) */}
          <g transform="translate(550, 140)">
            <rect width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="35" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Touch</text>
            <text x="35" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">useState</text>
            
            <rect x="75" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="110" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Async</text>
            <text x="110" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">useEffect</text>
            
            <rect x="150" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="185" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Store</text>
            <text x="185" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Redux/Zustand</text>
          </g>
          <motion.path 
            d="M 660 180 L 660 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          {/* React reconciler (Blue) */}
          <g transform="translate(570, 220)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">React reconciler</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">virtual DOM diffed</text>
          </g>
          <motion.path 
            d="M 660 260 L 660 290" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

          {/* Native views (Blue) */}
          <g transform="translate(570, 300)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Native views</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">UIView / Android View</text>
          </g>

          {/* Re-render feedback loop on the right side */}
          <motion.path 
            d="M 770 160 C 810 160, 810 240, 750 240" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />
          <text x="790" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(90 790 200)">re-render</text>

          {/* Return arrow from draw back up to Event loop on the left */}
          <motion.path 
            d="M 570 320 C 520 320, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-rn)" 
            className="text-zinc-500" 
          />

        </svg>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {REACT_NATIVE_STATS.map((stat, i) => (
          <div 
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.dimmed ? 'text-zinc-600' : stat.highlight ? 'text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]' : 'text-white'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
        * Scores are relative, not absolute. Based on typical production app benchmarks.
      </div>
    </div>
  );
}

function KMPWidget() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full min-h-[400px] font-sans">
          <defs>
            <marker id="arrow-kmp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-zinc-500" />
            </marker>
          </defs>

          {/* Columns Backgrounds */}
          <rect x="10" y="10" width="240" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="20" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Build Time</text>

          <rect x="270" y="10" width="240" height="380" rx="8" className="fill-teal-500/5 stroke-teal-500/20" strokeDasharray="4 4" />
          <text x="280" y="30" className="fill-teal-500/50 font-mono text-xs font-bold uppercase">Launch</text>

          <rect x="530" y="10" width="260" height="380" rx="8" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" />
          <text x="540" y="30" className="fill-blue-500/50 font-mono text-xs font-bold uppercase">Runtime</text>

          {/* Build Time Nodes (Blue) */}
          <g transform="translate(50, 60)">
            <rect width="160" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Kotlin source</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">.kt + commonMain</text>
          </g>
          <motion.path 
            d="M 130 100 L 130 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />
          
          <g transform="translate(50, 140)">
            <rect width="160" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">kotlinc multiplatform</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">compiles per target</text>
          </g>
          <motion.path 
            d="M 130 180 L 130 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          <g transform="translate(50, 220)">
            <rect width="160" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Dual output</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">JVM bytecode + LLVM binary</text>
          </g>

          {/* Arrow to Launch */}
          <motion.path 
            d="M 210 240 C 260 240, 260 80, 310 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          {/* Launch Nodes (Teal) */}
          <g transform="translate(310, 60)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Platform entry point</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Android / iOS native</text>
          </g>
          <motion.path 
            d="M 390 100 L 390 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 140)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Shared module init</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">commonMain loaded</text>
          </g>
          <motion.path 
            d="M 390 180 L 390 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          <g transform="translate(310, 220)">
            <rect width="160" height="40" rx="6" className="fill-teal-500/10 stroke-teal-500/50" />
            <text x="80" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Platform UI starts</text>
            <text x="80" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">Compose MP / SwiftUI</text>
          </g>

          {/* Arrow to Runtime */}
          <motion.path 
            d="M 470 240 C 520 240, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          {/* Runtime Nodes */}
          {/* Coroutine dispatcher (Gray) */}
          <g transform="translate(570, 60)">
            <rect width="180" height="40" rx="6" className="fill-zinc-500/10 stroke-zinc-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Coroutine dispatcher</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">main + IO + default</text>
          </g>
          <motion.path 
            d="M 660 100 L 660 130" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          {/* Event nodes (Amber) */}
          <g transform="translate(550, 140)">
            <rect width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="35" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Flow</text>
            <text x="35" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">StateFlow</text>
            
            <rect x="75" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="110" y="18" className="fill-slate-200 text-xs" textAnchor="middle">ViewModel</text>
            <text x="110" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">shared logic</text>
            
            <rect x="150" width="70" height="40" rx="6" className="fill-amber-500/10 stroke-amber-500/50" />
            <text x="185" y="18" className="fill-slate-200 text-xs" textAnchor="middle">Expect</text>
            <text x="185" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">/ Actual</text>
          </g>
          <motion.path 
            d="M 660 180 L 660 210" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          {/* Shared business logic (Blue) */}
          <g transform="translate(570, 220)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Shared business logic</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">repos, usecases, models</text>
          </g>
          <motion.path 
            d="M 660 260 L 660 290" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

          {/* Native UI renders (Blue) */}
          <g transform="translate(570, 300)">
            <rect width="180" height="40" rx="6" className="fill-blue-500/10 stroke-blue-500/50" />
            <text x="90" y="18" className="fill-slate-200 text-sm" textAnchor="middle">Native UI renders</text>
            <text x="90" y="32" className="fill-slate-400 text-[10px]" textAnchor="middle">100% native components</text>
          </g>

          {/* Recompose feedback loop on the right side */}
          <motion.path 
            d="M 770 160 C 810 160, 810 240, 750 240" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />
          <text x="790" y="200" className="fill-white/50 text-[10px]" textAnchor="middle" transform="rotate(90 790 200)">recompose</text>

          {/* Return arrow from draw back up to Coroutine dispatcher on the left */}
          <motion.path 
            d="M 570 320 C 520 320, 520 80, 570 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            markerEnd="url(#arrow-kmp)" 
            className="text-zinc-500" 
          />

        </svg>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {KMP_STATS.map((stat, i) => (
          <div 
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.dimmed ? 'text-zinc-600' : stat.highlight ? 'text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]' : 'text-white'}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
        * Scores are relative, not absolute. Based on typical production app benchmarks.
      </div>
    </div>
  );
}

type TabId = 'iOS' | 'Android' | 'Flutter' | 'React Native' | 'KMP';

interface DiagramNode {
  id: string;
  label: string;
  type: 'COMPILER' | 'RUNTIME' | 'TOOLING' | 'RENDERER';
  layer: 'developer' | 'toolchain' | 'runtime';
  x: number;
  y: number;
  w: number;
  h: number;
  details: {
    input: string;
    output: string;
    internals: string;
    gotcha: string;
  };
}

interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

interface DiagramData {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const diagramData: Record<TabId, DiagramData> = {
  iOS: {
    nodes: [
      { id: 'swift', label: 'Swift Code', type: 'TOOLING', layer: 'developer', x: 50, y: 40, w: 140, h: 40, details: { input: 'Developer Brain', output: '.swift files', internals: 'High-level Swift syntax, protocols, and structs.', gotcha: 'Value types are copied, not referenced.' } },
      { id: 'swiftc', label: 'swiftc Compiler', type: 'COMPILER', layer: 'toolchain', x: 50, y: 150, w: 140, h: 40, details: { input: '.swift files', output: 'SIL (Swift Intermediate Language)', internals: 'Performs type checking, semantic analysis, and generates SIL.', gotcha: 'Type inference can be slow for complex expressions.' } },
      { id: 'llvm', label: 'LLVM Backend', type: 'COMPILER', layer: 'toolchain', x: 50, y: 240, w: 140, h: 40, details: { input: 'LLVM IR', output: 'Machine Code (ARM64)', internals: 'Optimizes IR and generates target-specific machine code.', gotcha: 'Optimization levels (-O) drastically change output.' } },
      { id: 'linker', label: 'Linker (ld)', type: 'TOOLING', layer: 'toolchain', x: 260, y: 240, w: 140, h: 40, details: { input: 'Object files (.o), static/dynamic libs', output: 'Mach-O Executable', internals: 'Resolves symbols and combines object files into a single executable.', gotcha: 'Duplicate symbol errors are common with complex dependencies.' } },
      { id: 'runtime', label: 'Obj-C/Swift Runtime', type: 'RUNTIME', layer: 'runtime', x: 260, y: 340, w: 160, h: 40, details: { input: 'Mach-O Executable', output: 'Running Process', internals: 'Handles dynamic dispatch, memory management (ARC), and metadata.', gotcha: 'Method swizzling (Obj-C) can cause unpredictable behavior.' } },
      { id: 'coreanimation', label: 'Core Animation', type: 'RENDERER', layer: 'runtime', x: 480, y: 340, w: 140, h: 40, details: { input: 'Layer Trees', output: 'GPU Commands', internals: 'Composites layers and animates properties off the main thread.', gotcha: 'Offscreen rendering can severely impact performance.' } },
    ],
    edges: [
      { from: 'swift', to: 'swiftc' },
      { from: 'swiftc', to: 'llvm', label: 'LLVM IR' },
      { from: 'llvm', to: 'linker', label: 'Object Files (.o)' },
      { from: 'linker', to: 'runtime', label: 'Mach-O Binary' },
      { from: 'runtime', to: 'coreanimation', label: 'UI Updates' },
    ]
  },
  Android: {
    nodes: [
      { id: 'kotlin', label: 'Kotlin Code', type: 'TOOLING', layer: 'developer', x: 50, y: 40, w: 140, h: 40, details: { input: 'Developer Brain', output: '.kt files', internals: 'Kotlin syntax, coroutines, and inline functions.', gotcha: 'Inline functions increase bytecode size.' } },
      { id: 'kotlinc', label: 'kotlinc Compiler', type: 'COMPILER', layer: 'toolchain', x: 50, y: 150, w: 140, h: 40, details: { input: '.kt files', output: '.class files (Java Bytecode)', internals: 'Compiles Kotlin to standard Java bytecode.', gotcha: 'Interoperability with Java requires careful nullability handling.' } },
      { id: 'd8', label: 'D8/R8 Compiler', type: 'COMPILER', layer: 'toolchain', x: 50, y: 240, w: 140, h: 40, details: { input: '.class files', output: '.dex files (Dalvik Executable)', internals: 'Desugars Java 8+ features, shrinks, obfuscates, and converts to DEX.', gotcha: 'R8 can aggressively strip code if ProGuard rules are missing.' } },
      { id: 'apk', label: 'APK Packager', type: 'TOOLING', layer: 'toolchain', x: 260, y: 240, w: 140, h: 40, details: { input: '.dex, resources, manifest', output: '.apk or .aab', internals: 'Zips compiled code and resources, signs the package.', gotcha: 'Resource shrinking can remove dynamically referenced assets.' } },
      { id: 'art', label: 'Android Runtime', type: 'RUNTIME', layer: 'runtime', x: 260, y: 340, w: 160, h: 40, details: { input: '.dex files', output: 'Running Process', internals: 'AOT (Ahead-of-Time) and JIT (Just-in-Time) compilation, garbage collection.', gotcha: 'JIT warm-up time can cause initial jank.' } },
      { id: 'skia', label: 'Skia / HWUI', type: 'RENDERER', layer: 'runtime', x: 480, y: 340, w: 140, h: 40, details: { input: 'Canvas commands', output: 'GPU Commands', internals: '2D graphics library used for rendering Android UI.', gotcha: 'Overdraw (drawing pixels multiple times) kills performance.' } },
    ],
    edges: [
      { from: 'kotlin', to: 'kotlinc' },
      { from: 'kotlinc', to: 'd8', label: 'Java Bytecode' },
      { from: 'd8', to: 'apk', label: 'DEX Files' },
      { from: 'apk', to: 'art', label: 'APK Install' },
      { from: 'art', to: 'skia', label: 'Draw Commands' },
    ]
  },
  Flutter: {
    nodes: [
      { id: 'dart', label: 'Dart Code', type: 'TOOLING', layer: 'developer', x: 50, y: 40, w: 140, h: 40, details: { input: 'Developer Brain', output: '.dart files', internals: 'Dart syntax, widgets, and state management.', gotcha: 'Deep widget trees can be hard to read.' } },
      { id: 'dartc', label: 'Dart Compiler', type: 'COMPILER', layer: 'toolchain', x: 50, y: 150, w: 140, h: 40, details: { input: '.dart files', output: 'Kernel AST / Machine Code', internals: 'JIT for debug (hot reload), AOT for release.', gotcha: 'AOT compilation takes longer but provides native performance.' } },
      { id: 'engine', label: 'Flutter Engine', type: 'RUNTIME', layer: 'runtime', x: 260, y: 240, w: 140, h: 40, details: { input: 'Compiled Dart code', output: 'Running Process', internals: 'C++ core, handles threading, platform channels, and rendering.', gotcha: 'Platform channels introduce serialization overhead.' } },
      { id: 'impeller', label: 'Impeller / Skia', type: 'RENDERER', layer: 'runtime', x: 480, y: 240, w: 140, h: 40, details: { input: 'Display List', output: 'GPU Commands (Metal/Vulkan)', internals: 'Impeller precompiles shaders to avoid jank. Skia is the legacy renderer.', gotcha: 'Shader compilation jank on Skia (mostly fixed by Impeller).' } },
    ],
    edges: [
      { from: 'dart', to: 'dartc' },
      { from: 'dartc', to: 'engine', label: 'AOT Binary (Release)' },
      { from: 'engine', to: 'impeller', label: 'Render Tree' },
    ]
  },
  'React Native': {
    nodes: [
      { id: 'js', label: 'JS/TS Code', type: 'TOOLING', layer: 'developer', x: 50, y: 40, w: 140, h: 40, details: { input: 'Developer Brain', output: '.js/.ts files', internals: 'React components, hooks, and business logic.', gotcha: 'Excessive re-renders can easily occur.' } },
      { id: 'metro', label: 'Metro Bundler', type: 'COMPILER', layer: 'toolchain', x: 50, y: 150, w: 140, h: 40, details: { input: '.js/.ts files', output: 'JS Bundle', internals: 'Transforms and bundles JavaScript code.', gotcha: 'Large bundles increase TTI (Time to Interactive).' } },
      { id: 'hermes', label: 'Hermes Engine', type: 'RUNTIME', layer: 'runtime', x: 50, y: 240, w: 140, h: 40, details: { input: 'JS Bundle / Bytecode', output: 'Execution', internals: 'Optimized JS engine for React Native, supports AOT bytecode.', gotcha: 'Not all modern JS features are supported natively.' } },
      { id: 'bridge', label: 'JSI / Bridge', type: 'RUNTIME', layer: 'runtime', x: 260, y: 240, w: 140, h: 40, details: { input: 'JS Calls', output: 'Native Calls', internals: 'JSI allows direct synchronous calls between JS and C++. Legacy bridge uses async JSON serialization.', gotcha: 'Legacy bridge serialization is a major performance bottleneck.' } },
      { id: 'fabric', label: 'Fabric Renderer', type: 'RENDERER', layer: 'runtime', x: 480, y: 240, w: 140, h: 40, details: { input: 'React Tree', output: 'Native UI Views', internals: 'New concurrent renderer in C++, creates native views synchronously.', gotcha: 'Requires migrating legacy native components.' } },
    ],
    edges: [
      { from: 'js', to: 'metro' },
      { from: 'metro', to: 'hermes', label: 'JS Bundle' },
      { from: 'hermes', to: 'bridge', label: 'JSI Calls' },
      { from: 'bridge', to: 'fabric', label: 'Shadow Tree' },
    ]
  },
  KMP: {
    nodes: [
      { id: 'common', label: 'Common Kotlin', type: 'TOOLING', layer: 'developer', x: 260, y: 40, w: 140, h: 40, details: { input: 'Developer Brain', output: '.kt files (common)', internals: 'Business logic, networking, models shared across platforms.', gotcha: 'Cannot use platform-specific APIs (e.g., java.io) directly.' } },
      { id: 'jvm', label: 'Kotlin/JVM', type: 'COMPILER', layer: 'toolchain', x: 100, y: 150, w: 140, h: 40, details: { input: 'Common + Android .kt', output: '.class files', internals: 'Compiles to JVM bytecode for Android.', gotcha: 'Standard Android build process applies from here.' } },
      { id: 'native', label: 'Kotlin/Native', type: 'COMPILER', layer: 'toolchain', x: 420, y: 150, w: 140, h: 40, details: { input: 'Common + iOS .kt', output: 'LLVM IR -> Framework', internals: 'Uses LLVM to compile Kotlin directly to native binaries (iOS).', gotcha: 'Memory management (historically strict, now better with new MM) and concurrency differences.' } },
      { id: 'android_app', label: 'Android App', type: 'RUNTIME', layer: 'runtime', x: 100, y: 260, w: 140, h: 40, details: { input: '.class files', output: 'Running Process', internals: 'Runs on Android ART.', gotcha: 'Seamless interop with existing Android code.' } },
      { id: 'ios_app', label: 'iOS App', type: 'RUNTIME', layer: 'runtime', x: 420, y: 260, w: 140, h: 40, details: { input: '.framework / .xcframework', output: 'Running Process', internals: 'Runs natively on iOS, called from Swift/Obj-C.', gotcha: 'Kotlin types are mapped to Obj-C types, which can be clunky in Swift.' } },
    ],
    edges: [
      { from: 'common', to: 'jvm', label: 'Android Target' },
      { from: 'common', to: 'native', label: 'iOS Target' },
      { from: 'jvm', to: 'android_app', label: 'APK/AAB' },
      { from: 'native', to: 'ios_app', label: 'Framework' },
    ]
  }
};

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<TabId>('iOS');
  const [activeBox, setActiveBox] = useState<string | null>(null);
  const [activeNodeData, setActiveNodeData] = useState<DiagramNode | null>(null);

  const tabs: { id: TabId; label: string; lang: string }[] = [
    { id: 'iOS', label: 'iOS', lang: 'Swift' },
    { id: 'Android', label: 'Android', lang: 'Kotlin' },
    { id: 'Flutter', label: 'Flutter', lang: 'Dart' },
    { id: 'React Native', label: 'React Native', lang: 'TypeScript' },
    { id: 'KMP', label: 'KMP', lang: 'Kotlin' }
  ];

  const metricsData: Record<string, any> = {
    'iOS': { build: '12s', cold: '300ms', perf: '120fps', hot: 'N/A', share: '0%', size: '15MB' },
    'Android': { build: '18s', cold: '450ms', perf: '120fps', hot: 'N/A', share: '0%', size: '12MB' },
    'Flutter': { build: '8s', cold: '600ms', perf: '60/120fps', hot: 'Yes', share: '95%', size: '22MB' },
    'React Native': { build: '15s', cold: '800ms', perf: '60fps', hot: 'Yes', share: '85%', size: '25MB' },
    'KMP': { build: '25s', cold: 'Native', perf: 'Native', hot: 'N/A', share: '60%', size: '+4MB' }
  };

  const handleBoxClick = (node: DiagramNode) => {
    if (activeBox === node.id) {
      setActiveBox(null);
      setActiveNodeData(null);
    } else {
      setActiveBox(node.id);
      setActiveNodeData(node);
    }
  };

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-cyan-400 mb-4 tracking-wider uppercase">
            // platform internals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Code Becomes a Running App
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base">
            A deep dive into compilation pipelines, runtime internals, and what actually happens between writing a line of code and it executing on a real device.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setActiveBox(null); setActiveNodeData(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 border ${
                activeTab === tab.id 
                  ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                  : 'bg-transparent border-white/5 text-zinc-500 hover:text-zinc-300 hover:border-white/10'
              }`}
            >
              <span className="font-semibold text-sm">{tab.label}</span>
              <span className="font-mono text-[10px] opacity-60 px-1.5 py-0.5 rounded bg-black/20">
                {tab.lang}
              </span>
            </button>
          ))}
        </div>

        {/* Diagram Area */}
        {activeTab === 'iOS' ? (
          <IOSWidget />
        ) : activeTab === 'Android' ? (
          <AndroidWidget />
        ) : activeTab === 'Flutter' ? (
          <FlutterWidget />
        ) : activeTab === 'React Native' ? (
          <ReactNativeWidget />
        ) : activeTab === 'KMP' ? (
          <KMPWidget />
        ) : (
          <>
            <div className="relative bg-[#111827] border border-[#1e2a3a] rounded-xl p-6 md:p-12 min-h-[500px] mb-8 overflow-hidden">
              <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-500 animate-pulse">
                // tap to explore
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full relative"
                >
                  <svg className="w-full h-full min-h-[400px]" viewBox="0 0 650 450" preserveAspectRatio="xMidYMid meet">
                {/* Layer Backgrounds */}
                <rect x="10" y="10" width="630" height="100" className="fill-blue-500/5 stroke-blue-500/20" strokeDasharray="4 4" rx="8" />
                <text x="20" y="30" className="fill-blue-500/50 font-mono text-[10px] font-bold">DEVELOPER LAYER</text>

                <rect x="10" y="120" width="630" height="180" className="fill-amber-500/5 stroke-amber-500/20" strokeDasharray="4 4" rx="8" />
                <text x="20" y="140" className="fill-amber-500/50 font-mono text-[10px] font-bold">TOOLCHAIN LAYER</text>

                <rect x="10" y="310" width="630" height="130" className="fill-emerald-500/5 stroke-emerald-500/20" strokeDasharray="4 4" rx="8" />
                <text x="20" y="330" className="fill-emerald-500/50 font-mono text-[10px] font-bold">DEVICE RUNTIME</text>

                {/* Edges */}
                {diagramData[activeTab].edges.map((edge, i) => {
                  const fromNode = diagramData[activeTab].nodes.find(n => n.id === edge.from);
                  const toNode = diagramData[activeTab].nodes.find(n => n.id === edge.to);
                  if (!fromNode || !toNode) return null;

                  const startX = fromNode.x + fromNode.w / 2;
                  const startY = fromNode.y + fromNode.h;
                  const endX = toNode.x + toNode.w / 2;
                  const endY = toNode.y;

                  // Simple routing
                  let pathD = `M ${startX} ${startY} L ${endX} ${endY}`;
                  let labelX = (startX + endX) / 2;
                  let labelY = (startY + endY) / 2 - 8;

                  if (Math.abs(startX - endX) > 20 && Math.abs(startY - endY) > 20) {
                     // Add a curve if not straight down
                     pathD = `M ${startX} ${startY} C ${startX} ${startY + 40}, ${endX} ${endY - 40}, ${endX} ${endY}`;
                     // Adjust label position for curved paths
                     labelX = (startX + endX) / 2;
                     labelY = (startY + endY) / 2 - 12;
                  } else if (Math.abs(startY - endY) <= 20) {
                     // Horizontal line
                     labelY = startY - 8;
                  } else if (Math.abs(startX - endX) <= 20) {
                     // Vertical line
                     labelX = startX + 8;
                     labelY = (startY + endY) / 2;
                  }

                  return (
                    <g key={`${edge.from}-${edge.to}`}>
                      {/* Base path (faint) */}
                      <path 
                        d={pathD} 
                        fill="none" 
                        strokeWidth="2" 
                        className="stroke-white/10"
                      />
                      {/* Animated dashed path */}
                      <motion.path 
                        d={pathD} 
                        fill="none" 
                        strokeWidth="2" 
                        strokeDasharray="6 6"
                        initial={{ strokeDashoffset: 24 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        markerEnd="url(#arrowhead)"
                        className="stroke-cyan-500/60"
                      />
                      {edge.label && (
                        <text 
                          x={labelX} 
                          y={labelY} 
                          textAnchor={Math.abs(startX - endX) <= 20 ? "start" : "middle"}
                          className="fill-white/70 font-mono text-[10px] bg-gray-900"
                        >
                          {edge.label}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Nodes */}
                {diagramData[activeTab].nodes.map((node) => {
                  const isActive = activeBox === node.id;
                  
                  return (
                    <g 
                      key={node.id} 
                      transform={`translate(${node.x}, ${node.y})`}
                      onClick={() => handleBoxClick(node)}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <rect 
                        width={node.w} 
                        height={node.h} 
                        rx="6" 
                        strokeWidth={isActive ? "2" : "1"}
                        className={`transition-colors ${isActive ? 'fill-cyan-500/10 stroke-cyan-500' : 'fill-slate-800 stroke-slate-700 hover:stroke-cyan-500/50'}`}
                      />
                      <text 
                        x={node.w / 2} 
                        y={node.h / 2 + 4} 
                        textAnchor="middle"
                        className={`font-mono text-xs ${isActive ? 'fill-cyan-400 font-bold' : 'fill-slate-200'}`}
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}

                {/* Arrowhead definition */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.2)" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detail Panel */}
        <div className="bg-[#0d0f14] border border-[#1e2a3a] rounded-xl p-6 min-h-[200px] mb-8 font-mono">
          <AnimatePresence mode="wait">
            {activeNodeData ? (
              <motion.div
                key={activeNodeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl text-cyan-400 font-bold">{activeNodeData.label}</h3>
                  <span className="text-[10px] px-2 py-1 rounded bg-zinc-800 text-zinc-400">{activeNodeData.type}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-zinc-600 mb-1 text-xs">INPUT</div>
                    <div className="text-zinc-300">{activeNodeData.details.input}</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1 text-xs">OUTPUT</div>
                    <div className="text-zinc-300">{activeNodeData.details.output}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-zinc-600 mb-1 text-xs">INTERNALS</div>
                    <div className="text-zinc-300 leading-relaxed">{activeNodeData.details.internals}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-zinc-600 mb-1 text-xs">GOTCHA</div>
                    <div className="text-amber-400/80 leading-relaxed">{activeNodeData.details.gotcha}</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center text-zinc-600 text-sm"
              >
                ← Click any component above to explore it
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(metricsData[activeTab]).map(([key, value], i) => (
            <motion.div 
              key={`${activeTab}-${key}`}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="bg-[#111827] border border-[#1e2a3a] rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">{key}</div>
              <div className={`text-xl font-bold ${value === 'N/A' ? 'text-zinc-600' : 'text-white'}`}>
                {value as React.ReactNode}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4 text-zinc-600 text-xs font-mono">
          * Scores are relative, not absolute. Based on typical production app benchmarks.
        </div>
          </>
        )}

      </div>
    </section>
  );
}
