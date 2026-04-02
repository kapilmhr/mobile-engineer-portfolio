import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-zinc-500/g, 'bg-violet-500/50');
content = content.replace(/bg-zinc-50/g, 'bg-white/5');
content = content.replace(/hover:bg-zinc-700/g, 'hover:bg-white/10');
content = content.replace(/text-zinc-400/g, 'text-violet-200/70');
fs.writeFileSync('src/App.tsx', content);
