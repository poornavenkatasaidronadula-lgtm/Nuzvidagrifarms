fetch('https://www.nuzvidagrifarms.com')
  .then(r => r.text())
  .then(t => {
    // simple regex to extract all image urls from the source
    const regex = /(https?:)?\/\/www\.nuzvidagrifarms\.com\/cdn\/shop\/files\/[^"'\s]+?\.(jpg|jpeg|webp|png)/gi;
    const matches = new Set();
    let match;
    while ((match = regex.exec(t)) !== null) {
      if (!match[0].includes('32x32') && !match[0].includes('logo')) {
         matches.add(match[0].replace(/&amp;/g, '&'));
      }
    }
    console.log(Array.from(matches).join('\n'));
  });
