fs = require('fs')
http = require("http");
data = fs.readFileSync('/var/log/yum.log', "utf8");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end(data);
    }  else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Data not found");
    }
});

server.listen(3000);
console.log("Server is listening on port 3000");

