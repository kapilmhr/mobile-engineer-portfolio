import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-\[#161b27\]/g, 'bg-white/[0.04]');
content = content.replace(/border-\[#1e2a3a\]/g, 'border-violet-500/20');
fs.writeFileSync('src/App.tsx', content);
