import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-blue-500/g, 'bg-fuchsia-500');
fs.writeFileSync('src/App.tsx', content);
