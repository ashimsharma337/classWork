

// A callback function is a function passed to another function as an argument.
// The callback function can then be invoked inside the called function to do some action.

// function displayResults(value) {
//     console.log(value);
// }

// function calculateTotal(num1, num2, myCallback) {    // Using a callback, you could call the calculator function (calculateTotal) 
                                                       // with a callback, and let the calculator function run the callback after 
                                                      // the calculation is finished:
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// calculateTotal(5, 3, displayResults);   // When we pass a function as an argument, remember not to use parenthesis.
                                        //Right: myCalculator(5, 5, myDisplayer); Wrong: myCalculator(5, 5, myDisplayer());


// function checkPassword() {
//     console.log("After 3 sec.........");
// }

// setTimeout(checkPassword, 3000);

// function doSomething() {
//     console.log("Do something....");
// }

// function anotherSomething(callback) {    //dosomething is a parameter in this function
//     callback();
// }

// anotherSomething(doSomething); 

function displayResults (total) {
    console.log("Your total is " +total);
    document.write("Your total is " +total);
}

function inputCalculation (callback) {
let input1 = Number(prompt("Plz Enter First Number."));
let input2 = Number(prompt("Plz Enter First Number."));
let total = input1 + input2;
callback(total);
}

inputCalculation(displayResults);
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.
// The above example is a synchronous callback, as it is executed immediately.
// * Note, however, that callbacks are often used to 
// continue code execution after an asynchronous operation has completed
//  — these are called asynchronous callbacks. 
//  A good example is the callback functions executed inside a .then() 
//  block chained onto the end of a promise after that promise fulfills or rejects. 
//  This structure is used in many modern web APIs, such as fetch()

