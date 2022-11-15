const http = require("http")
const httpStatus = require("http-status-codes");
const fs = require('fs')
const port = 3000


const routeResponseMap = {
    "/": "index.html",
    "/image/index.jpg": "image/index.jpg",
    "/books.html": "books.html",
    "/image/1984.jpg": "image/1984.jpg",
    "/image/Alchemist.jpg": "image/Alchemist.jpg",
    "/image/The_Great_Gatsby.jpg":"image/The_Great_Gatsby.jpg",
    "/1984.html": "1984.html",
    "/image/1984_L.jpg": "image/1984_L.jpg",
    "/alchemist.html": "Alchemist.html",
    "/image/Alchemist_L.jpg": "image/Alchemist_L.jpg",
    "/The_Great_Gatsby.html": "The_Great_Gatsby.html",
    "/image/The_Great_Gatsby_L.jpg": "image/The_Great_Gatsby_L.jpg"
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