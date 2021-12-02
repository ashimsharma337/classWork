// function orderPizza(type, name, callback) {
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
//         callback(msg);
//     }, 3000);
// }

// orderPizza('Veg', 'Cheese Barbeque', function(message){
// 	console.log(message);
// });

// Callbacks work great when we have 1-2 async operations
// Callbacks have real disadvantages the moment we need to deal with more than two async operations chained

// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("Hey");
//         setTimeout(() => {
//             console.log("Namaste");
//             setTimeout(() => {
//                 console.log("Hi");
//                 setTimeout(() => {
//                     console.log("Bonjour");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// The cascading code above is called callback hell. 
// It is hard to debug and add error handling to.
// It also reduces code readability. 
// There are other names used for this callback hell like a pyramid of doom, 
// or the Christmas tree from hell (cause it looks like a Christmas tree from the side).

// Like the above examples, a callback function would be necessary 
// when you are dealing with any of the items on the following list:
// DOM event handling and User Input/Output.
// Databases (e.g. MySQL, PostgreSQL, MongoDB, Redis, CouchDB)
// APIs (e.g. Facebook, Twitter, Push Notifications)
// HTTP/WebSocket connections
// Files (image resizer, video editor, internet radio)

//Examples in the perspective of implimentation 
function dosomething(user, callback) {
   console.log("Lets start some coding: " + user);
   //while working with callback we work we mainly two things where first argument is error and second is success
   //callback(error, success); //in general programming concept of javascript

   callback(null, "Programming started");  //in case of success
   callback("Error in programming", null);   //in case of error
   //This is the major demerits of callback function because in one function call we passing error and success.
   //in programming there is either success or failure both can not be called at same time
}

// function afterCoding() {

// }
// dosomething("Test", afterCoding)

dosomething("Test", function (err, succs) {
console.log("Error: " + err);
console.log("Success: " + succs);
})

//So we use promises to avoid multiple callback function which results in callback hell it is hard to organize and read
//Promise
   // promise return object of function execution
   // A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
     //settled: after completly fullfilled promise will end and promise state will destroy
