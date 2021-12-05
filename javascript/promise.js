//***************************** Promise object ************************/

// The javascript promise object is represents eventual completetion of some operation

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
//  A Promise is a JavaScript object that links producing code and consuming code

// A JavaScript Promise object contains both the producing code and calls to the consuming code:

const myPromise = new Promise((resolve, reject) => {     // promise is object so we have to keep in variable
      console.log("Let me start a program.")             // and also call through a class using new key word
      //resolve("Success");                              // resolve and reject are callback(function/method) only one can be called 
                                                         // we can call it whatever we like no need to write resolve or reject
      reject("Error");                                   // Promise is used while quering data base we fetch data from database using promise
});                                                      // is success we send it to then, if fail then catch 

// Promise has 4 state and 3 method --state.. pending, fullfilled(resolve is returned), reject(reject is returned), settled
                             //     --method.. then(success), catch(error), and finally
myPromise
.then((data) => console.log("Program started succesfully. >>", data))
.catch((data) => console.log("Oops! there was an error. >>", data))
//.finally((data) => console.log(data))

// Example
const userInput = new Promise((resolve, reject) => {
    let input1 = Number(prompt("Plz enter first number."));
    let input2 = Number(prompt("Plz enter second number."));
    if(input2 == 0) {
        reject("Error");
    } else {
    let result = input1/input2;
    resolve(result);
    }
});

userInput
.then((data) => {
    alert("Success! Your result is " + data);
})
.catch((data) => {
    alert("Error! Second input should not be zero: >>" + data);
})
// .finally((data) => {
//     alert("Finally data: " + data);
// })

