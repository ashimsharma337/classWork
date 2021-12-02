

// A callback is a function passed as an argument to another function

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

