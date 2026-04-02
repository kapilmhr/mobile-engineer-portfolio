import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-cyan-500/g, 'bg-violet-500');
content = content.replace(/bg-cyan-400/g, 'bg-violet-400');
content = content.replace(/text-zinc-950/g, 'text-white');
content = content.replace(/fill-zinc-950/g, 'fill-white');
content = content.replace(/rgba\(6,182,212,0\.3\)/g, 'rgba(139,92,246,0.3)'); // shadow color for cyan to violet
fs.writeFileSync('src/App.tsx', content);
