// we can import packages which we want to work in two differnt ways ES5 and ES6
// ES5
// const fs = require("file-system");
// fs.writeFile("files/abc.txt", "test doc");
// ES6
import * as fs from "file-system"; // * to import everything, fs to use in code
fs.writeFile("files/xyz.txt", "some text"); // to execute put "type": "module" in package.json then npm update