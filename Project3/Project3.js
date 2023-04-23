import fs from 'fs';

const http = require("http");
const fs = require("fs");

    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            fs.readFile("./public/index.html", "UTF-8", (err, body) => {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(body);
                });
            }
          else {
          res.writeHead(404, {"Content-Type": "text/plain"});
          res.end("Data not found");
        }
    });

    server.listen(3000);
    console.log("Server is listening on port 3000");


