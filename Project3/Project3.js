var http = require('http')
var fs = require('fs')


const ColorThief = require('colorthief');
const prompt = require("prompt-sync")({ sigint: true });

// uses prompt-sync package to allow user input for var img
var img = prompt("\nEnter a URL for a JPG or PNG (or leave blank for an example image): ");

//Sample photograph I took that can be used as image if user input is left blank
if (img == "")
{
    img = "https://raw.githubusercontent.com/pantchzk/it3038c-scripts/main/Project3/Forest.jpg"
}

// uses colorthief package to get RGB value of image based on img var source
ColorThief.getColor(img)
    .then(color => { console.log("\nThe RGB value for the primary color of this image is: " + color) })
    .catch(err => { console.log(err) })

//creates a local web-server on port 3000 that contains the image to view and URL to image
    http.createServer((req, res) => {
        if (req.url === "/") {
        fs.readFile("index.html", "UTF-8", (err, body) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
        });

        html =`
        <!DOCTYPE html>
        <HTML>
        <HEAD>
            <TITLE>UserSelectedImage</TITLE>
        </HEAD>
        <BODY>
            <img src = ${img} alt="Image from user input URL" width = "500" height = "500">
            <p>Image source: ${img}</p>
        </HTML>`
        res.end(html);
    }}).listen(3000)

console.log("\nYou can view the image at http://localhost:3000/")
