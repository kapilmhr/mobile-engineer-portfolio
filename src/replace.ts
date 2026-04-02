import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace backgrounds
content = content.replace(/bg-zinc-950/g, 'bg-[#0b0218]');
content = content.replace(/bg-zinc-900\/50/g, 'bg-white/[0.03]');
content = content.replace(/bg-zinc-900\/80/g, 'bg-white/[0.05]');
content = content.replace(/bg-zinc-900/g, 'bg-white/[0.04]');
content = content.replace(/bg-zinc-800\/80/g, 'bg-white/[0.06]');
content = content.replace(/bg-zinc-800\/95/g, 'bg-[#0b0218]/95');
content = content.replace(/bg-zinc-800/g, 'bg-white/[0.08]');
content = content.replace(/bg-zinc-700\/50/g, 'bg-white/[0.12]');
content = content.replace(/bg-zinc-700\/30/g, 'bg-white/[0.08]');

// Replace text colors
content = content.replace(/text-zinc-400/g, 'text-violet-200/70');
content = content.replace(/text-zinc-500/g, 'text-violet-300/50');
content = content.replace(/text-zinc-300/g, 'text-violet-100/90');
content = content.replace(/text-zinc-600/g, 'text-violet-400/40');

// Replace borders
content = content.replace(/border-white\/10/g, 'border-violet-500/20');
content = content.replace(/border-white\/5/g, 'border-white/[0.06]');
content = content.replace(/border-zinc-800/g, 'border-violet-500/30');
content = content.replace(/border-zinc-700\/50/g, 'border-violet-400/20');

// Replace specific accents to match Ayush's theme
content = content.replace(/from-cyan-500/g, 'from-violet-500');
content = content.replace(/to-blue-500/g, 'to-fuchsia-500');
content = content.replace(/text-cyan-400/g, 'text-violet-400');
content = content.replace(/text-blue-400/g, 'text-fuchsia-400');
content = content.replace(/text-emerald-400/g, 'text-cyan-400');
content = content.replace(/text-purple-400/g, 'text-pink-400');
content = content.replace(/border-cyan-500\/30/g, 'border-violet-500/40');
content = content.replace(/border-blue-500\/30/g, 'border-fuchsia-500/40');
content = content.replace(/border-emerald-500\/30/g, 'border-cyan-500/40');
content = content.replace(/border-purple-500\/30/g, 'border-pink-500/40');

// Additional Ayush's specific gradients
content = content.replace(/bg-gradient-to-r from-zinc-900 to-zinc-950/g, 'bg-gradient-to-r from-[#0b0218] to-[#0b0218]');

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced colors in App.tsx');
