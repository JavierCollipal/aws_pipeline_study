const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end('Este gato paso el pipeline (^._.^)\n');
}); 

server.listen(port,() => {
  console.log(`El server esta corriendo`);
});