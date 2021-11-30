//function

/* function myFunction(parameter1, parameter2, parameter3) {
    code to be executed
   }
*/

/*
   Function parameters are the names listed in the function definition.
   Function arguments are the real values passed to (and received by) the function 
   If a function is called with missing arguments (less than declared), the missing values are set to undefined.

   JavaScript function definitions do not specify data types for parameters.
   JavaScript functions do not perform type checking on the passed arguments.
   JavaScript functions do not check the number of arguments received.

*/



// console.log() only prints something in your browsers console. 
// While return give back an expected value from a function 
// which later can be used from another function or class to do more stuff. 

// function multiplyNum (a, b) {
//     return a*b; //The return statement stops the execution of a function and returns a value from that function.
// }

// var x = multiplyNum(2, 3);
// console.log(x); //console.log writes into the browser console.

//A JavaScript function can also be defined using an expression.

// const myNum = function (a, b) {
//     return a+b;
// }

// console.log(myNum(4, 9));
// let z = myNum(5, 5);
// console.log(z);

// functions are objects
// function newNum (a, b, c) {
//     return arguments.length;
// };

// console.log(newNum(2, 3, 4));

// Arrow function
// ES5
// var x = function(x, y) {
//     return x * y;
//   }
  
// ES6
// const x = (x, y) => x * y; // we don't need the function keyword, the return keyword, and the curly brackets
                           // Arrow function do not have their own this, so it is not suited for object methods.
           //OR            // we can only omit return key word and curly braces  if it is only onestatement it is
// const x = (x, y ) =>{x * y};// good habit to keep them

// function as a object method

// const person = {
//     firstName: "Patrik",
//     lastName: "Jones",
//     fullname: function() {
//         return this.firstName + " " + this.lastName;
//     }

// };

// console.log(person.fullname());

// The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
// The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

// Now using arrow function

const person1 = {
    firstName: "Jonas",
    lastName: "Smith",
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
    
};
//console.log(person1.fullName());// gives undefined 
                            //  Arrow functions always have this based on its closest non-arrow function 
                            //  irrespective of where it is called. If there is no non-arrow parent it always
                            //  refers to the global object.

//we can use object as  a parameter and return object as well
// const myFullname = function (person) {
//     return { FirstName: person.firstName, lastName: person.lastName };
// }

// console.log(myFullname(person1));

// const obj = {
//     title: "Abc",
//     price: 100000,
//     discount: 10
//  };
   
//  const calculateDiscount = function (obj_1) {
//        return {
//          title: obj_1.title, 
//          price: obj_1.price - obj.price *obj.discount/100
//        };

//  }

//   const result = calculateDiscount(obj);
//   console.log(result);


// Javascript callbacks
// A callback is a function passed as an argument to another function.

// function doSomething() {
//     console.log("Do something");
// }

// function anotherSomething(callback) {
//     callback();
// }

// anotherSomething(doSomething);//Prints Do Something  in the console



// function checkPassword() {
//       console.log("After 3 sec");
//  };
                  
//     setTimeout(checkPassword, 3000);//checkPassword is a callback and it must be a function or action

// function addNumber(a ,b) {
//      c = a + b;
//      console.log(c);
// };
//     setTimeout(function(){addNumber(2, 3)}, 2000);//To put parameter in callbacks we used anonymous function


// function addUser() {
    

//     *If parseInt is not used userInput will be treated as a string.
//     const a = parseInt(prompt("Plz enter your first number."));
//     const b = parseInt(prompt("plz enter your second number."));
//     b.parseInt;
//     c =  a + b;
//     document.write("Your total is " + c);
// }

// addUser();


