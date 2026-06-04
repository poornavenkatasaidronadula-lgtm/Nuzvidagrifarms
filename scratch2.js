fetch('https://www.nuzvidagrifarms.com')
  .then(r => r.text())
  .then(t => {
    const regex = /(https?:)?\/\/www\.nuzvidagrifarms\.com\/cdn\/shop\/[a-zA-Z0-9_\-\/\.]+\.(png|jpg|jpeg|webp)/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(t)) !== null) {
      matches.add(match[0]);
    }
    console.log(Array.from(matches).join('\n'));
  });
