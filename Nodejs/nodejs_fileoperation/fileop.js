//import { writeInfile, readFromfile } from "./file.js";
//importing using es5
const fileOp = require("./file.js");
console.log(fileOp);

fileOp.a("def.txt", "string to write")
.then((succ) => console.log(succ));