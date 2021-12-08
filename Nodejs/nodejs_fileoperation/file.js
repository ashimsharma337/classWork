//import * as fileOp from "fs";
const fileOp = require("fs");


function writeInfile() {
    return new Promise((resolve, reject) => {
        fileOp.writeFile("files/xyz.txt", "Test string", function(err) {
            if(err) {
                reject(err);
            } else {
                resolve("Success: File Write");
            }
       });
    });
}



function readFromfile() {
    return Promise((resolve, reject) => {
        fileOp.readFile("files/xyz.txt", {encoding:'utf8'}, function(err, done) {
            if(done) {
                resolve("Done: ", done);
            } else {
               reject("Error: ", err);
            }
        });
    });
}

// Exporting file
// In ES5
module.exports = {           //in es5 we need to pass an object, we can also assign key like a
  a: writeInfile,
  readFromfile
};