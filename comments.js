// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/comments') {
    fs.readFile('./comments.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});