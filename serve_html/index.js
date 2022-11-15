const http = require("http")
const httpStatus = require("http-status-codes");
const fs = require('fs')
const port = 3000

const routeResponseMap = {
    "/": "views/index.html",
    "/image/index.jpg": "public/image/index.jpg",
    "/books.html": "views/books.html",
    "/image/1984.jpg": "public/image/1984.jpg",
    "/image/Alchemist.jpg": "public/image/Alchemist.jpg",
    "/image/The_Great_Gatsby.jpg":"public/image/The_Great_Gatsby.jpg",
    "/1984.html": "views/1984.html",
    "/image/1984_L.jpg": "public/image/1984_L.jpg",
    "/alchemist.html": "views/Alchemist.html",
    "/image/Alchemist_L.jpg": "public/image/Alchemist_L.jpg",
    "/The_Great_Gatsby.html": "views/The_Great_Gatsby.html",
    "/image/The_Great_Gatsby_L.jpg": "public/image/The_Great_Gatsby_L.jpg"
}

const d = new Date();
const app = http.createServer();
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);
  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });
  if (routeResponseMap[req.url]) {
    fs.readFile(routeResponseMap[req.url], (error, data) => {
      console.log(routeResponseMap[req.url])
      res.write(data);
      res.end();
    });
  } else {
    console.log('Error:',d)
    res.end(routeResponseMap["/error"]);
  }
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);