const http = require("http");
const { readFileSync, read } = require("fs");

const errorPage = readFileSync("index.html", "utf8");

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
      res.end(`<h1 style='text-align: center; color: green'>
          Hello NodeJS!
          </h1>`);
    } else if (url === "/about") {
      res.end(`<h1 style='text-align: center; color: blue'>
          About page
          </h1>`);
    } else {
      res.end(errorPage);
    }
  })
  .listen(5000);
