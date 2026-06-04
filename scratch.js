fetch('https://www.nuzvidagrifarms.com')
  .then(r => r.text())
  .then(t => {
    const regex = /src=["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(t)) !== null) {
      if (match[1].toLowerCase().includes('logo') || match[1].toLowerCase().includes('nuzvid')) {
        console.log(match[1]);
      }
    }
  });
