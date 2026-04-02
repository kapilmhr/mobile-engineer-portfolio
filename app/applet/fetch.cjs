const https = require('https');

https.get('https://www.ayushniroula.com.np/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const cssMatches = data.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (cssMatches) {
      console.log('STYLES:', cssMatches.join('\n'));
    }
    const colorMatches = data.match(/#[0-9a-fA-F]{3,6}|rgba?\([^)]+\)|hsl?\([^)]+\)/g);
    if (colorMatches) {
      const uniqueColors = [...new Set(colorMatches)];
      console.log('COLORS:', uniqueColors.join(', '));
    }
    const classMatches = data.match(/class="([^"]+)"/g);
    if (classMatches) {
        const classes = classMatches.map(c => c.replace('class="', '').replace('"', '')).join(' ');
        const uniqueClasses = [...new Set(classes.split(' '))];
        console.log('TAILWIND CLASSES:', uniqueClasses.filter(c => c.includes('bg-') || c.includes('text-') || c.includes('border-')).join(' '));
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
