const http = require("http");
const { readFileSync, read } = require("fs");

const errorPage = readFileSync("./index.html", "utf8");
const errorPageStyles = readFileSync("./styles.css");

http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/") {
      res.end(`<h1 style='text-align: center; color: green'>
          Hello NodeJS!
          </h1>`);
    } else if (url === "/about") {
      res.end(`<h1 style='text-align: center; color: blue'>
          About page
          </h1>`);
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(errorPageStyles);
      res.end();
    } else {
      res.end(errorPage);
    }
  })
  .listen(5000);
