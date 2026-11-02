const fs = require('fs');
const text = fs.readFileSync('data/hub_service.js', 'utf8');
['BLR', 'HYD', 'MAA'].forEach(h => {
  const re = new RegExp(`"${h}:kolhapur":\\[([^\\]]+)\\]`);
  const m = text.match(re);
  if (m) console.log(h, m[0]);
});

