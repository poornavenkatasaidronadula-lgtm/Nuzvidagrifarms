const fs = require('fs');

try {
  let html = fs.readFileSync('nuzvid2.html', 'utf8');
  html = html.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
      return String.fromCharCode(parseInt(grp, 16));
  });
  html = html.replace(/\\\//g, '/');
  html = html.replace(/\\"/g, '"');

  const blogItems = html.split('<div class="ltn__blog-item ltn__blog-item-3">');
  blogItems.shift(); 

  const results = blogItems.map(item => {
    return item.substring(1500, 3000);
  });

  console.log(results[0]);
} catch (e) {
  console.error(e);
}
