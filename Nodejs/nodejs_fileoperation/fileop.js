import { writeInfile, readFromfile } from "./file.js";
//importing using es5
//const fileOp = require("./file.js");
//console.log(fileOp);

// to write using es6
writeInfile("def.txt", "string to write")
.then((succ) => console.log(succ));

// to read using es6
readFromfile("def.txt")
.then((data) => {
    console.log("Data: " + data);
})

// to write using es5
// fileOp.a("def.txt", "string to write")
// .then((succ) => console.log(succ));

// to read using es5
// fileOp.readFromfile("def.txt")
// .then((data) => {
//     console.log("Data: " + data);
// })

