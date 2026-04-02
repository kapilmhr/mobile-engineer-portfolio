import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-emerald-500/g, 'bg-cyan-500');
fs.writeFileSync('src/App.tsx', content);
