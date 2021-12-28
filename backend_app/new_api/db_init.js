const mongoose = require("mongoose");
const database = "mongodb://localhost:27017/newapi";

mongoose.connect(database)
.then(success => console.log("Data base connection success"))
.catch(err => console.log("Database connection error: ", err))