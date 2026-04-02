import https from 'https';

https.get('https://www.ayushniroula.com.np/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(data.substring(0, 1000));
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
