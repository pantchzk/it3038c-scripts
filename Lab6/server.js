const fs = require("fs");
const os = require("os");
const ip = require("ip");
const http = require("http");

http.createServer((req, res) => {
	if (req.url === "/") {
	fs.readFile("./public/index.html", "UTF-8", (err, body) => {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(body);
	});

} else if(req.url.match("/sysinfo")) {
  myHostName=os.hostname();
  uptime = parseInt(os.uptime()); 
  days = parseInt(uptime / 86400)
  uptime = parseInt(uptime % 86400)
  hours = parseInt(uptime / 3600)
  uptime = parseInt(uptime % 3600)
  minutes = parseInt(uptime / 60)
  uptime = parseInt(uptime % 60)
  processors = (os.cpus()).length;
  totalMemory = parseInt(os.totalmem() / 1000000);
  freeMemory = parseInt(os.freemem() / 1000000);
  
  html =`
	<!DOCTYPE html>
	<HTML>
	<HEAD>
		<TITLE>Node JS Response </TITLE>
	</HEAD>
	<BODY>
		<p>Hostname: ${myHostName}</p>
		<p>IP: ${ip.address()}</p>
		<p>Server Uptime: Days: ${days}  Hours: ${hours}  Minutes: ${minutes}  Seconds: ${uptime} </p>
		<p>Total Memory: ${totalMemory} MB</p>
		<p>Free Memory: ${freeMemory} MB</p>
		<p>Number of CPUs: ${processors}</p>
	</BODY>
	</HTML>`

res.writeHead(200, {"Content-Type": "text/html"});
res.end(html);
} else {
res.writeHead(404, {"Content-Type": "text/plain"});
res.end(`404 File Not Found at ${req.url}`);
}
}).listen(3000)

console.log("Server listening on port 3000")
