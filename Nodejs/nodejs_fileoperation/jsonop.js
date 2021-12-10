import * as fileOp from "fs";


// Reading Data
function readJson(filename) {
    return new Promise((resolve, reject) => {
        fileOp.readFile("./files/"+filename, {encoding: "utf8"}, function(err, done) {
            if (!err) {
                resolve(done);
            } else {
                reject(err);
            }

        });
    });
}

// readJson("users.json")
// .then((data)=> {
//     var users =  JSON.parse(data);
//     users.forEach(element => {
//         console.log(element);
//     });
// });

// Adding new data to the file and then read
var user = {
    name: "Harris",                  //change the data to add new user
    age: "70",
    address: "France"
};

//var myData = JSON.stringify(user);
//console.log(myData);

// writing json file
 function writeJson(filename) {
     return new Promise((resolve, reject) => {
         fileOp.readFile("./files/"+filename, {encoding:"utf8"}, function (err, done){
             if(!err) {
                 const dataBase = JSON.parse(done);
                 dataBase.push(user);
                 fileOp.writeFile("./files/"+filename, JSON.stringify(dataBase), function(err, done) {///only err, done is null
                     if(!err) {
                         resolve(dataBase);
                     } else {
                         reject(console.log("Error::::", err));
                     }
                 });
             }
         });
     });
 }


writeJson("users.json")
.then((data) => {
    data.forEach(element => {
        console.log(element);
    });
})
