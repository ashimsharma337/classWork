//import { writeInfile, readFromfile } from "./file.js";
//importing using es5
const fileOp = require("./file.js");
console.log(fileOp);

fileOp.a()
.then((succ) => console.log(succ));