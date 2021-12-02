// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.
// Demerits of closure is function chaining so promise is used



// let a = "Ashim";
// function printName (){      //variable a is outside function but it is still
                            //accessible this is example of closure
//     console.log(a);
// }

// printName();

// function outerFunction(outerVariable) {
//     const outer2 = "hello";// outside the scope of inner function.
                           // In javascript anything in the inside has the access to the outside of the scope 
                           // or inner function has  access to the variable and scope of the outer function
                           // even if outer function finishes exicuting and variable is not accescible outside the function
                           // common uses is when using axios and fetch api. 
//     return function innFunction(innerVariable) {
//         console.log('Outer Variable : ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//         console.log(outer2);
//     }
// }

// const newFunction = outerFunction("outside");
// newFunction("inner");




function doSomething() {
    console.log("I am writing some code...");

    function pushTheCode() {
        console.log("coding is done lets push the code.");
        //let a; to access a outside publishTheapp function
        let a = 20;
        //if var is used instead of let then

        function publishTheapp() {
             let a = "something";
             //return a; to access a outside this function
            console.log("App is ready lets push the app to the server");
            console.log(a);
            //here a is something
            //if var a is something
        }
        console.log(a);
        //here a is 20
        //if var a is something
        publishTheapp();
        return publishTheapp;
    }

    pushTheCode(); 
   return pushTheCode;
}

 doSomething();

const closure1 = doSomething();
console.log(closure1());
const nextClosure = closure1();
nextClosure();

