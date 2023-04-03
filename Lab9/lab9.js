http = require("http");
const data = require("/root/it3038c-scripts/Lab9/Widgets.json")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/json"});
      res.end(JSON.stringify(data));
     listColor(res);
    }  else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Data not found");
    }
});

const listColor = (res) => {
  const colorItem = data.filter((item) => {
    return item.color === data.color;
  });

  res.end(JSON.stringify(colorItem));
}

server.listen(3000);
console.log("Server is listening on port 3000");

