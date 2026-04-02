import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/bg-blue-600/g, 'bg-violet-600');
content = content.replace(/to-blue-600/g, 'to-violet-600');
content = content.replace(/from-blue-600/g, 'from-violet-600');
fs.writeFileSync('src/App.tsx', content);
