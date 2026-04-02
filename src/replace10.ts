import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/stroke="#334155"/g, 'stroke="rgba(139,92,246,0.5)"');
content = content.replace(/text-\[#475569\]/g, 'text-violet-400/40');
fs.writeFileSync('src/App.tsx', content);
