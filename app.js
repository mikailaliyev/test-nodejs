const http = require("http");

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
      res.end(`<h1 style='text-align: center; color: red'>
          Ooops! No such page!
          </h1>`);
    }
  })
  .listen(5000);
