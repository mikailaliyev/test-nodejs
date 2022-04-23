const http = require("http");
const { readFileSync, read } = require("fs");

const homePage = readFileSync("./public/index.html");
const errorPage = readFileSync("./public/error.html", "utf8");
const errorPageStyles = readFileSync("./public/styles.css");
const favicon = readFileSync("./public/favicon.png");

http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
    } else if (url === "/about") {
      res.end(`<h1 style='text-align: center; color: blue'>
          About page
          </h1>`);
    } else if (url === "/favicon.png") {
      res.writeHead(200, { "content-type": "image/x-icon" });
      res.write(favicon);
      res.end();
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(errorPageStyles);
      res.end();
    } else {
      res.end(errorPage);
    }
  })
  .listen(5000);
