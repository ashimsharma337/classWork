import * as fileOp from "fs";
//const fileOp = require("fs");

//using promise

// function writeInfile(file_name, data) {
//     return new Promise((resolve, reject) => {
//         fileOp.writeFile("files/"+file_name, data, function(err) {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve("Success: File Write");
//             }
//        });
//     });
// }

// using callbacks

function writeInfile(file_name, data, cb) {
    return new Promise((resolve, reject) => {
                 fileOp.writeFile("files/"+file_name, data, function(err) {
                 if(err) {
                    cb(err);  //callback function has two param, err or succ
                 } else {
                    cb(null,"Success: File Write");
                 }
         });
    });
}

function readFromfile(file_name) {
    return new Promise((resolve, reject) => {
        fileOp.readFile("files/"+file_name, {encoding:'utf8'}, function(err, done) {
            if(done) {
                resolve(done);
            } else {
               reject(err);
            }
        });
    });
}

// using callback

writeInfile("abc.txt", "From callback", function(err, done) {
    if(err) {
        console.log("Error: ", err);
    } else {
        console.log("Done: ", done);
    }
})

// Exporting file
// In ES5
// module.exports = {           //in es5 we need to pass an object, we can also assign key like a
//   a: writeInfile,
//   readFromfile
// };

// Exporting file in es6
// export {writeInfile, readFromfile} // we can not write a so while calling call function