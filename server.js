const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5500;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? '/index.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
