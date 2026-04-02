import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/from-zinc-950/g, 'from-[#0b0218]');
content = content.replace(/to-zinc-950/g, 'to-[#0b0218]');
content = content.replace(/via-zinc-950/g, 'via-[#0b0218]');
content = content.replace(/border-zinc-900/g, 'border-[#0b0218]');
content = content.replace(/border-zinc-950/g, 'border-[#0b0218]');
content = content.replace(/text-zinc-900/g, 'text-black');
content = content.replace(/text-zinc-800/g, 'text-black/80');
content = content.replace(/border-zinc-300/g, 'border-black/10');
content = content.replace(/rgba\(6,182,212,0\.8\)/g, 'rgba(139,92,246,0.8)'); // shadow color
fs.writeFileSync('src/App.tsx', content);
