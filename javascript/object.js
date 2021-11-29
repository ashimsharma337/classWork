
//The name:values pairs in JavaScript objects are called properties
//A car has properties like brand and color which is also known as keys
//which has values like Toyota , Blue , and function as methods like start and stop:


let car = {
    brand: "Toyota",
    model: "Camry",
    color: "Blue",
    year: 2021,
    start: function() {
    return this.Brand + " " + "has started";
    }
};

// console.log(car.Brand);
// console.log(car.year);

//We can add additional property like this but spread operator is good
//car.seat = "Leather seat";//.operator

//using spread operator
//car = {...car,  seat:  "Leather Seat" , oilUsed: "Gasoline" }; 

//console.log(car);
//console.log(car.start());

//we can pass a object as  a function parameter

const myCar = function(yourCar) {
    return "Your car is a " + yourCar.brand + " ,and it is " + yourCar.color + "."; 
};

console.log(myCar(car));



