const mongoose = require("mongoose");
const dburl = "mongodb://localhost:27017/newproducts";
// connection to data base
mongoose.connect(dburl, function(err, success) {
    if(err) {
        console.log("Error: ", err);
    } else {
        console.log("Database connection succesfull");
    }
});