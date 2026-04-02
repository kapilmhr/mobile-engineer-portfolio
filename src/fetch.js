import https from 'https';
https.get('https://kapil.info.np/main.dart.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const urls = data.match(/https:\/\/[a-zA-Z0-9./?=_-]+/g) || [];
    const filtered = urls.filter(u => u.includes('linkedin') || u.includes('github') || u.includes('twitter') || u.includes('mailto') || u.includes('png') || u.includes('jpg') || u.includes('jpeg'));
    console.log([...new Set(filtered)].join('\n'));
  });
});
