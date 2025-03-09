// Create web server
// Create a web server that listens on port 3000. The server should respond to a GET request to the path /comments with a JSON response that represents an array of comments. Each comment should have an id, author, and message property. The id should be unique for each comment and should be a number. The author should be a string. The message should be a string. The server should respond with status code 200. If the client makes a request to any other path, the server should respond with status code 404.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/comments') {
    const comments = [
      { id: 1, author: 'Dale', message: 'Hello World!' },
      { id: 2, author: 'John', message: 'This is awesome!' },
      { id: 3, author: 'Alice', message: 'I love it!' },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
