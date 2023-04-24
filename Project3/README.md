# RGB Color identifier and HTML image displayer

##Uses

This finds the RGB input of an image from a user-input URL. That same image is then referred to in an HTML document on a locally hosted web server.
Knowing the primary RGB value of an image can be helpful for creating a collage, or by sorting images by their primary color.
The local webserver also allows the user to conveniently look at the image and get the URL to the original source

## Setup

use npm to install colorthief (for RGB identifying API) and prompt-sync (To allow user input in node.js)

```
npm install colorthief
npm install prompt-sync
```

##Running

1. run Project3.js with nodejs 
2. Enter a url, or leave blank to use a default placeholder (which defaults to https://raw.githubusercontent.com/pantchzk/it3038c-scripts/main/Project3/Forest.jpg)
3. After receiving the RGB value and getting a confirmation that the image can be viewed, open a web browser and navigate to http://localhost:3000


##Packages required and their documentation

Prompt-sync: https://www.npmjs.com/package/prompt-sync
Color-thief: https://www.npmjs.com/package/colorthief
