const https = require('https');

https.get('https://www.nuzvidagrifarms.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    const matches = data.match(/https:\/\/www\.nuzvidagrifarms\.com\/cdn\/shop\/files\/[^"\s]+?(?:jpg|png|webp)/g);
    if (matches) {
      console.log([...new Set(matches)].join('\n'));
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
